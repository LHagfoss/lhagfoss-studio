import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function MotionLink({ href, children, delay }: { href: string, delay: number, children: ReactNode }) {
    return (
        <motion.div initial={{ y: -250 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1.5, delay, ease: "easeInOut" }}>
            <Link href={href} className="p-2 px-4 hover:bg-[#1a1a1a] hover:text-[#ebebeb] transition-all duration-200 rounded-full">
                {children}
            </Link>
        </motion.div>
    );
};
