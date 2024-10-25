import { useState } from 'react';
import Project from './project';
import FadeIn from './fadein';

import projectImage1 from "@/assets/googleblablalba.jpg"
import projectImage2 from "@/assets/image97-transformed.jpeg"

export default function Slider() {
    const projects = [
        { imageSrc: projectImage1, title: 'Website / Project #1', content: 'This is my Github account, filled with all my codes from when I started til today!', month: 'April', year: '2024' },
        { imageSrc: projectImage2, title: 'Website / Project #2', content: 'more random words', month: 'April', year: '2024' },
        { imageSrc: projectImage1, title: 'Website / Project #3', content: 'even more text', month: 'April', year: '2024' },
        { imageSrc: projectImage2, title: 'Website / Project #4', content: 'This is my Github account, filled with all my codes from when I started til today!', month: 'April', year: '2024' },
        { imageSrc: projectImage2, title: 'Website / Project #5', content: 'more random words', month: 'April', year: '2024' },
        { imageSrc: projectImage1, title: 'Website / Project #6', content: 'even more text', month: 'April', year: '2024' },
        { imageSrc: projectImage1, title: 'Website / Project #7', content: 'even more text', month: 'April', year: '2024' }
    ];

    const[index, setIndex] = useState(0);
    const totalImages = projects.length

    const next = () => {
        if(index < totalImages - 1){
            setIndex((prevIndex) => prevIndex + 1)  
        }
        if (index >= totalImages -1){
            setIndex((prevIndex) => 0)  
        }
    }
    const prev = () => {
        if (index > 0) {
            setIndex((prevIndex) => prevIndex - 1);
        }
        if (index <= 0){
            setIndex((prevIndex) => 6)  
        }
    };

    return (
        <FadeIn delay={1}>
            <div className="w-full border h-[100vh] flex flex-col justify-center items-center mb-[100px] ">
                <div className="flex flex-col justify-center items-center border">
                    {projects.slice(index, index + 1).map((project) => (
                        <div key={project.title}>
                            <Project 
                                imageSrc={project.imageSrc}
                                title={project.title}
                                content={project.content}
                            />
                        </div>
                    ))}
                    <div className="w-full flex justify-between items-center">
                        <button onClick={prev} className='bg-white text-black aspect-square rounded-full p-5'>Prev</button>
                        <div className="flex gap-3">
                            {Array.from({ length: Math.ceil(totalImages) }).map((_, i) => (
                                <div key={i} className={`aspect-square w-5 h-5 rounded-full ${i === Math.floor(index) ? 'bg-secondary scale-125' : 'bg-primary scale-100'}`}></div>
                            ))}
                        </div>
                        <button onClick={next} className='bg-white aspect-square text-black rounded-full p-5' disabled={index >= totalImages}>Next</button>
                    </div>
                </div>
                
            </div>
        </FadeIn>
    );
};
