"use client";

import { useState } from "react";
import mt from "@/public/assets/images/mohamed-tarek3.png";
import uc from "@/public/assets/images/under-construction.png";

const Page = () => {
  const [skills, setSkills] = useState<Record<string, any>[]>([
    { name: 'HTML', rate: 5 },
    { name: 'CSS', rate: 5 },
    { name: 'JavaScript', rate: 5 },
    { name: 'React', rate: 5 },
    { name: 'Node.js', rate: 5 },
    { name: 'Express', rate: 1 },
  ])
  return (
    <>
      <section className="flex flex-nowrap bg-orange-300">
        <div className="flex-1 my-auto text-center leading-relaxed">
          <span style={{ fontSize: '60px' }}>
            Mohamed Tarek Azab
          </span>
          <br /> 
          <span style={{ fontSize: '30px' }}>
            Full Stack Developer
          </span>
        </div>
        <div>
          <img src={mt.src} alt="bg img" className="w-50 h-[500px] scale-x-[-1]" />
        </div>
      </section>
      <section id='about'>
        <img src={uc.src} alt="placeholder" className="w-full" />
      </section>
      <section id='services'>
        <img src={uc.src} alt="placeholder" className="w-full" />
      </section>
      <section id='works'>
        <img src={uc.src} alt="placeholder" className="w-full" />
      </section>
      <section id='contact'>
        <img src={uc.src} alt="placeholder" className="w-full" />
      </section>
    </>
    // <>
    //   <h1 className="text-3xl font-bold mb-4">Mohamed Tarek Azab</h1>
    //   <p className="text-xl leading-loose">
    //     I am a full-stack developer with a passion for creating web applications. I have experience in both front-end and back-end development, and I am always eager to learn new technologies.
    //   </p>
    //   <ul className="list-disc space-y-2">
    //   {skills.map((skill) => (
    //     <li key={skill.name} className="text-lg">
    //       {skill.name} { skill.rate }
    //     </li>
    //   ))}
    // </ul>
    // </>
  );
}
export default Page;
