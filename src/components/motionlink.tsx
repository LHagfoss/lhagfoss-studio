import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function MotionLink({ href, children, delay }: { href: string, delay: number, children: ReactNode }) {
    return (
        <motion.div initial={{ color: "#0a0a0a", }} animate={{ opacity: 1, color: "#ebebeb", }} transition={{ duration: 1, delay, ease: "easeInOut" }}>
            <Link href={href} className={`p-2 hoverMe relative transition-all duration-1000 rounded-full drop-shadow-lg`}>
                {children}
            </Link>
        </motion.div>
    );
};
