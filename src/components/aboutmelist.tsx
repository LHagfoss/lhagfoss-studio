import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
  
export function AboutMeList() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Who am I?</AccordionTrigger>
        <AccordionContent>
          I&apos;m Lucas, a UI & UX designer from Norway. I focus on creating intuitive and visually appealing digital experiences that enhance user satisfaction and engagement.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>What&apos;s my design philosophy?</AccordionTrigger>
        <AccordionContent>
          I believe in user-centered design, where functionality meets aesthetics. My goal is to create designs that are not only beautiful but also highly usable and accessible to all users.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>What tools do I use?</AccordionTrigger>
        <AccordionContent>
          I&apos;m proficient in industry-standard design tools such as Figma, Adobe XD, and Sketch. For prototyping, I use InVision and Adobe After Effects for more advanced animations.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>What coding languages do I know?</AccordionTrigger>
        <AccordionContent>
          While my focus is on design, I have a good understanding of <a href="https://react.dev/" className="underline">React.js</a>, <a href="https://nextjs.org/" className="underline">Next.js</a> & <a href="https://tailwindcss.com/" className="underline">Tailwind CSS</a>. This knowledge helps me collaborate effectively with developers and create more feasible designs.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>What types of projects do I work on?</AccordionTrigger>
        <AccordionContent>
          I&apos;ve worked on a wide range of projects, including mobile apps, websites, dashboards, and e-commerce platforms. I enjoy tackling complex UX challenges and creating cohesive design systems.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6">
        <AccordionTrigger>How do I approach new projects?</AccordionTrigger>
        <AccordionContent>
          I start with thorough research and user analysis, followed by wireframing and prototyping. I believe in iterative design and continuous user testing to refine and improve the final product.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
