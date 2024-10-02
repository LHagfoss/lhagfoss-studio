import Image from "next/image"
import { motion } from "framer-motion"

import chosenImage from "@/assets/image97-transformed.jpeg"

export default function ImageSection() {
    return (
        <>
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 4 }} 
                className=""
            >
                <div className="w-[100vw] h-[50vh] p-5 md:p-10 relative">
                    <div className="w-full h-full rounded-[2vw] overflow-hidden relative shadow-2xl">
                        <Image src={chosenImage} alt="" className="absolute inset-0 w-full h-full object-cover rounded-[2vw] overflow-hidden" />
                        <div className="w-full h-full flex md:justify-end justify-center items-end relative text-secondary font-clashDisM text-[5vw] p-2 md:text-[2vw] md:px-8 md:py-3">
                            a cool image
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}