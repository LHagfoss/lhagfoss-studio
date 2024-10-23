import { useState } from 'react';
import Project from './project';
import FadeIn from './fadein';

import projectImage1 from "@/assets/googleblablalba.jpg"

export default function Slider() {
    const projects = [
        { imageSrc: projectImage1, title: 'Website / Project #1', content: 'This is my Github account, filled with all my codes from when I started til today!', month: 'April', year: '2024' },
        { imageSrc: projectImage1, title: 'Website / Project #2', content: 'more random words', month: 'April', year: '2024' },
        { imageSrc: projectImage1, title: 'Website / Project #3', content: 'even more text', month: 'April', year: '2024' },
        { imageSrc: projectImage1, title: 'Website / Project #4', content: 'This is my Github account, filled with all my codes from when I started til today!', month: 'April', year: '2024' },
        { imageSrc: projectImage1, title: 'Website / Project #5', content: 'more random words', month: 'April', year: '2024' },
        { imageSrc: projectImage1, title: 'Website / Project #6', content: 'even more text', month: 'April', year: '2024' }
    ];

    const [index, setIndex] = useState(0);
    const totalProjects = projects.length;

    const next = () => {
        if (index < totalProjects - 1) {
            setIndex((prevIndex) => prevIndex + 1);
        }
    };

    const prev = () => {
        if (index > 0) {
            setIndex((prevIndex) => prevIndex - 1);
        }
    };

    return (
        <FadeIn delay={0}>
            <div className="w-full p-5 md:p-10">
                <div className="grid grid-cols-3 grid-rows-1 overflow-hidden gap-5 md:gap-10">
                    {projects.slice(index, index + 3).map((project, i) => (
                        <div key={project.title}>
                            <Project
                                imageSrc={project.imageSrc}
                                title={project.title}
                                content={project.content}
                                month={project.month}
                                year={project.year}
                            />
                        </div>
                    ))}
                </div>
                <div className="w-full flex justify-between items-center">
                    <button onClick={prev} className='bg-secondary aspect-square rounded-full p-5' disabled={index === 0}>Prev</button>
                    <div className="flex gap-3">
                        {Array.from({ length: Math.ceil(totalProjects) }).map((_, i) => (
                            <div key={i} className={`aspect-square w-5 h-5 rounded-full ${i === Math.floor(index) ? 'bg-secondary' : 'bg-primary'}`}></div>
                        ))}
                    </div>
                    <button onClick={next} className='bg-secondary aspect-square rounded-full p-5' disabled={index >= totalProjects}>Next</button>
                </div>
            </div>
        </FadeIn>
    );
};
