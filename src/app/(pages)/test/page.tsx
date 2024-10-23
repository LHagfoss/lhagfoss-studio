"use client"

import React, { useState, useEffect} from "react";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FadeIn from "@/components/fadein";

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/test');
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="w-[100vw] h-[100vh] flex justify-center items-center">
        <div className="text-secondary">
          <h1>Data from API</h1>
          {data ? (
            <pre>{JSON.stringify(data, null, 2)}</pre>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
      <FadeIn delay={0}>
        <Footer />
      </FadeIn>
    </>
  );
}