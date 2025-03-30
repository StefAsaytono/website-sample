"use client"
import React, { useEffect } from 'react'
import { CircleStackIcon } from "@heroicons/react/24/solid";
import { SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiNodedotjs, SiExpress, SiTailwindcss, SiMongodb, SiPostgresql, SiGraphql, SiDocker, SiGithub } from "react-icons/si";
import Appbar from '../components/Appbar'
import Footer from '../components/Footer'
import AOS from "aos";
import "aos/dist/aos.css";

const workExperience = [
  {
    year: '2022',
    startMonth: '',
    endMonth: '',
    title: 'Creative Nation Academy',
    responsibilities: [
      'Recommend and produce creative requirements for marketing and branding campaigns.',
      'Create quality posters using Adobe Express/Adobe Photoshop.',
      'Conduct research on trends, competitors, and target audiences.',
      'Organize project materials, files, and resources.'
    ]
  },
  {
    year: '2023 - Present',
    startMonth: '',
    endMonth: '',
    title: 'DFNN',
    responsibilities: [
      'Develop functional and appealing web- and mobile-based applications based on usability.',
      'Provide website maintenance and enhancements.',
      'Use a combination of markup languages to write web pages.',
      'Write functional requirement documents and specifications.',
      'Create quality mockups and prototypes on tight timelines.',
      'Assist back-end developers with coding and troubleshooting.',
      'Create cascading style sheets (CSS) that are consistent across all browsers and platforms.',
      'Maintain graphic standards and branding throughout the product’s interface.',
      'Stay up-to-date on emerging technologies.',
      'Promote usability best practices.',
      'Ability to integrate APIs such as SOAP web services (XML).'
    ]
  }
];

const techStack = [
  { name: 'JavaScript', icon: <SiJavascript /> },
  { name: 'TypeScript', icon: <SiTypescript /> },
  { name: 'React', icon: <SiReact /> },
  { name: 'Next.js', icon: <SiNextdotjs /> },
  { name: 'Node.js', icon: <SiNodedotjs /> },
  { name: 'Express.js', icon: <SiExpress /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
  { name: 'MongoDB', icon: <SiMongodb /> },
  { name: 'PostgreSQL', icon: <SiPostgresql /> },
  { name: 'GraphQL', icon: <SiGraphql /> },
  { name: 'Docker', icon: <SiDocker /> },
  { name: 'Git & GitHub', icon: <SiGithub /> }
];

const page = () => {

  useEffect(() => {
    AOS.init({ duration: 800, once: true }); // Initialize AOS
  }, []);

  return (
    <>
      <Appbar />
      <div className="lg:h-screen md:h-screen sm:h-screen lg:pb-30 bg-blue-50 dark:bg-gray-800   flex flex-wrap items-center  justify-center  ">
        <div data-aos="fade-up" className="container lg:w-2/6 xl:w-2/7 sm:w-full md:w-2/3    bg-white      transform   duration-200 easy-in-out">
          <div className=" h-32 overflow-hidden" >
            <img className="w-full" src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" alt="" />
          </div>
          <div className="flex justify-center px-5  -mt-12">
            <img className="h-32 w-32 bg-white p-2 rounded-full   " src="/images/photo_2025-03-09_12-48-39.jpg" alt="" />

          </div>
          <div className=" ">
            <div className="text-center px-14">
              <h2 className="text-gray-800 text-3xl font-bold">Stefanie Asaytono</h2>
              <a className="font-bold italic text-base/7 text-indigo-600" href="https://github.com/Stef1202/" target="BLANK()">@Stef1202</a>
              <p className="mt-2 text-gray-500 text-md/5">Front-end developer in DFNN inc. , focus on creating functional and responsive systems. Designs web applications with Adobe Photoshop and Figma. Use React JS/Next JS for coding UI. Knowledgeable in Tailwind and Material UI for the css. </p>
            </div>
            <hr className="mt-6" />
          </div>
        </div>
      </div>
      <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="flex flex-wrap items-center justify-center">
          <div className="lg:w-1/2 md:2/3 sm:2/3">
            <div data-aos="fade-up">
              <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-800 sm:text-5xl lg:text-balance">Work Experience</h1>
              <div className="relative mt-10 text-left">
                {workExperience.map((job, index) => (
                  <div key={index} className="flex items-start relative mb-10">
                    <div className="hidden md:block w-20">
                      <div className="font-bold italic text-base/7 text-indigo-600">{job.year}</div>
                    </div>
                    <div className="border-r-2 border-black absolute h-full left-1 md:left-20 top-2 z-10">
                      <CircleStackIcon className="h-4 w-4 text-black absolute -top-1 -ml-2" />
                      {index === workExperience.length - 1 ? (
                        <CircleStackIcon className="h-4 w-4 text-black absolute bottom-0 -ml-2" />
                      ) : null}
                    </div>
                    <div className="ml-10">
                      <div className=" text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">{job.title}</div>
                      <ul className="list-disc pl-5 mt-2">
                        {job.responsibilities.map((task, i) => (
                          <li key={i} className='mt-1 text-lg/8 text-gray-800'>{task}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div data-aos="fade-up">
              <h1 className="pt-10 text-4xl font-semibold tracking-tight text-pretty text-gray-800 sm:text-5xl lg:text-balance text-center">Tech Stack</h1>
              <div data-aos="fade-up" className="mx-auto pt-10 mt-10 grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                {techStack.map((tech, index) => (
                  <div key={index} className=" max-h-12 m-3 w-full flex flex-col items-center justify-center text-center">
                    <div className="text-4xl mb-2">{tech.icon}</div>
                    <span className="mt-1 text-lg/8 text-gray-800">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default page