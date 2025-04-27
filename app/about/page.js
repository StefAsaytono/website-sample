"use client";
import React, { useEffect } from "react";
import { CircleStackIcon } from "@heroicons/react/24/solid";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiGraphql,
  SiDocker,
  SiGithub,
  SiCocos,
  SiBootstrap,
  SiMui,
  SiAntdesign,
} from "react-icons/si";
import { FaCheckCircle } from "react-icons/fa";
import Appbar from "../components/Appbar";
import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import Playlist from "../components/Playlist";
import FluidEffect from "../components/FluidEffect";
import Services from "../components/Services";

const workExperience = [
  {
    year: "2022",
    startMonth: "",
    endMonth: "",
    title: "Creative Nation Academy",
    responsibilities: [
      "Recommend and produce creative requirements for marketing and branding campaigns.",
      "Create quality posters using Adobe Express/Adobe Photoshop.",
      "Conduct research on trends, competitors, and target audiences.",
      "Organize project materials, files, and resources.",
    ],
  },
  {
    year: "2023 - Present",
    startMonth: "",
    endMonth: "",
    title: "DFNN",
    responsibilities: [
      "Develop functional and appealing web- and mobile-based applications based on usability.",
      "Provide website maintenance and enhancements.",
      "Use a combination of markup languages to write web pages.",
      "Write functional requirement documents and specifications.",
      "Create quality mockups and prototypes on tight timelines.",
      "Assist back-end developers with coding and troubleshooting.",
      "Create cascading style sheets (CSS) that are consistent across all browsers and platforms.",
      "Maintain graphic standards and branding throughout the product’s interface.",
      "Stay up-to-date on emerging technologies.",
      "Promote usability best practices.",
      "Ability to integrate APIs such as SOAP web services (XML).",
    ],
  },
];

const techStack = [
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "React", icon: <SiReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Cocos", icon: <SiCocos /> },
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Bootstrap", icon: <SiBootstrap /> },
  { name: "Material UI", icon: <SiMui /> },
  { name: "AntDesign", icon: <SiAntdesign /> },
  { name: "Git & GitHub", icon: <SiGithub /> },
];

const favLibraries = [
  { code: "npm i" },
  { code: ">> @mui/material @emotion/react @emotion/styled //Material UI" },
  { code: ">> tailwindcss daisyui //Alternative CSS" },
  { code: ">> sweetalert2 //Sweet Alert 2 (Alert Dialogs)" },
  { code: ">> react-router //Former React Router Dom" },
  { code: ">> axios //Fetching Data" },
  { code: ">> @reduxjs/toolkit //Store Management" },
  { code: ">> next-auth //Auth (Next JS)" },
  { code: ">> moment //Date" },
  { code: ">> aos //Animate On Scroll" },
  { code: ">> classnames //Dynamic Conditional Class" },
];

const page = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true }); // Initialize AOS
  }, []);

  return (
    <>
      <Appbar />
      <FluidEffect />
      <div className="pt-30  lg:max-w-none ">
        <div className="flex flex-col items-center justify-center mx-auto max-w-2xl py-25 sm:pt-40 lg:pt-40">
          <h1
            data-aos="fade-up"
            className="text-5xl relative font-semibold tracking-tight text-balance text-white sm:text-7xl mb-5"
          >
            About Me
          </h1>
          <p
            data-aos="fade-up"
            className="typewriter-name relative mt-2 text-2xl font-semibold tracking-tight text-pretty text-white sm:text-2xl lg:text-balance"
          >
            Name: Stefanie Asaytono
          </p>

          <p
            data-aos="fade-up"
            className="mt-8 text-center px-5 relative text-lg font-medium text-pretty text-gray-500 sm:text-xl/8"
          >
            I am a passionate Front-End Developer based in Philippines, with a
            knack for turning creative designs into functional and intuitive web
            applications. I specialize in building responsive, user-centric
            websites that provide a seamless user experience across devices.
          </p>

          <h1
            data-aos="fade-up"
            className="mt-10 flex gap-5 relative mt-2 text-md font-semibold tracking-tight text-pretty text-white sm:text-lg lg:text-balance"
          >
            Checkout my favorite songs
          </h1>

          <svg
            data-aos="fade-up"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-10 relative text-white mt-5"
          >
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-.53 14.03a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V8.25a.75.75 0 0 0-1.5 0v5.69l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="flex justify-center h-180 mb-20 p-5">
          <Playlist />
        </div>
      </div>

      <Services/>

      <div className="px-6 py-24 sm:py-32 lg:px-8 text-white">
        <div className="flex flex-wrap items-center justify-center">
          <div className="lg:w-1/2 md:2/3 sm:2/3">
            <div>
              <h1 data-aos="fade-up" className="relative mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl lg:text-balance">
                Work Experience
              </h1>
              <div className="mt-10 text-left">
                {workExperience.map((job, index) => (
                  <div key={index} className="flex items-start relative mb-10">
                    <div className="hidden md:block w-20">
                      <div data-aos="fade-up" className="font-bold italic text-base/7 text-indigo-600">
                        {job.year}
                      </div>
                    </div>
                    <div data-aos="fade-up" className="border-r-2 border-white absolute h-full left-1 md:left-20 top-2 z-10">
                      <CircleStackIcon className="h-4 w-4 text-gray-200 absolute -top-1 -ml-2" />
                      {index === workExperience.length - 1 ? (
                        <CircleStackIcon className="h-4 w-4 text-gray-200 absolute bottom-0 -ml-2" />
                      ) : null}
                    </div>
                    <div className="ml-10">
                      <div data-aos="fade-up" className="relative text-xl/8 font-semibold text-gray-200 sm:text-2xl/9">
                        {job.title}
                      </div>
                      <ul className="relative list-disc pl-5 mt-2">
                        {job.responsibilities.map((task, i) => (
                          <li data-aos="fade-up" key={i} className="relative mt-1 text-lg/8 text-gray-200">
                            {task}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8 w-full">
        <div className="lg:w-1/2 md:2/3 sm:w-full mx-auto">
          <h1
            data-aos="fade-up"
            className="relative pt-10 text-4xl font-semibold tracking-tight text-pretty text-gray-800 sm:text-5xl lg:text-balance text-center"
          >
            Me as a Dev
          </h1>
          <p
            data-aos="zoom-in-up"
            className="w-full mt-8 text-lg font-medium text-pretty text-left text-gray-500 sm:text-xl/8"
          >
            I'm all about clean and thoughtful coding. I like separating
            sections with <kbd className="kbd">-----------</kbd> comments to
            keep everything easy to navigate, and I leave little notes on nested
            functions so I always know what’s happening where.
          </p>{" "}
          <div data-aos="zoom-in-up" className="mockup-code w-full my-10">
            <pre data-prefix=">>">
              <code>Example</code>
            </pre>
            <pre data-prefix="1">
              <code>function handleFormSubmit(event) {"{"}</code>
            </pre>
            <pre data-prefix="2">
              <code> event.preventDefault();</code>
            </pre>
            <pre data-prefix="3">
              <code></code>
            </pre>
            <pre data-prefix="4">
              <code> function validateForm() {"{"}</code>
            </pre>
            <pre data-prefix="5">
              <code> console.log("Validating...");</code>
            </pre>
            <pre data-prefix="6">
              <code> return true;</code>
            </pre>
            <pre data-prefix="7">
              <code> {"}"}</code>
            </pre>
            <pre data-prefix="8">
              <code></code>
            </pre>
            <pre data-prefix="9">
              <code> async function saveData() {"{"}</code>
            </pre>
            <pre data-prefix="10">
              <code> console.log("Saving data...");</code>
            </pre>
            <pre data-prefix="11">
              <code>
                {" "}
                await new Promise((resolve) =&gt; setTimeout(resolve, 1000));
              </code>
            </pre>
            <pre data-prefix="12">
              <code> {"}"}</code>
            </pre>
            <pre data-prefix="13">
              <code></code>
            </pre>
            <pre data-prefix="14">
              <code> if (validateForm()) {"{"}</code>
            </pre>
            <pre data-prefix="15">
              <code> saveData();</code>
            </pre>
            <pre data-prefix="16">
              <code> {"}"}</code>
            </pre>
            <pre data-prefix="17">
              <code>{"}"}</code>
            </pre>
          </div>
          <p
            data-aos="zoom-in-up"
            className="mt-8 text-lg font-medium text-pretty text-left text-gray-500 sm:text-xl/8"
          >
            Good coding etiquette matters a lot to me — I want my code to be
            readable not just for myself, but for anyone who might work with it.
          </p>{" "}
          <div data-aos="zoom-in-up" className="list-rules bg-blue-100 rounded-sm shadow-md my-10">
            <ol>
              <li style={{ "--accent-color": "#187389" }}>
                <div className="icon"><FaCheckCircle color="green"/></div>
                <div className="title">1</div>
                <div className="descr">
                  Always start handler function names with{" "}
                  <kbd className="kbd">handle</kbd>.
                </div>
              </li>
              <li style={{ "--accent-color": "#187389" }}>
                <div className="icon"><FaCheckCircle color="green"/></div>
                <div className="title">2</div>
                <div className="descr">
                  Use <strong>PascalCase</strong> after{" "}
                  <kbd className="kbd">handle</kbd> (e.g.,{" "}
                  handleInputChange).
                </div>
              </li>
              <li style={{ "--accent-color": "#187389" }}>
                <div className="icon"><FaCheckCircle color="green"/></div>
                <div className="title">3</div>
                <div className="descr">
                  Be specific about what the function handles (not just{" "}
                  <kbd className="kbd">handleClick</kbd> unless obvious).
                </div>
              </li>
              <li style={{ "--accent-color": "#187389" }}>
                <div className="icon"><FaCheckCircle color="green"/></div>
                <div className="title">4</div>
                <div className="descr">
                  For async handlers, include action verbs like{" "}
                  <kbd className="kbd">Fetch</kbd>,
                  <kbd className="kbd">Save</kbd>,{" "}
                  <kbd className="kbd">Delete</kbd>, etc.
                </div>
              </li>
              <li style={{ "--accent-color": "#187389" }}>
                <div className="icon"><FaCheckCircle color="green"/></div>
                <div className="title">5</div>
                <div className="descr">
                  Optionally add "Async" at the end of
                  async function names for clarity 
                </div>
              </li>
              <li style={{ "--accent-color": "#187389" }}>
                <div className="icon"><FaCheckCircle color="green"/></div>
                <div className="title">6</div>
                <div className="descr">
                  Use <kbd className="kbd">try/catch</kbd> inside async handler
                  functions to manage errors safely.
                </div>
              </li>
              <li style={{ "--accent-color": "#187389" }}>
                <div className="icon"><FaCheckCircle color="green"/></div>
                <div className="title">7</div>
                <div className="descr">
                  Stay consistent with naming across your entire project.
                </div>
              </li>
            </ol>
          </div>
          <p
            data-aos="zoom-in-up"
            className="mt-8 text-lg font-medium text-pretty text-left text-gray-500 sm:text-xl/8"
          >
            When building, I focus on making things functional first, then move
            on to polishing the UI (unless the backend’s still catching up and
            the design’s ready — then I get flexible).
          </p>{" "}
          <div data-aos="zoom-in-up" className="mockup-code w-full my-10">
            <pre data-prefix=">>">
              <code>Checkout my favorite libraries</code>
            </pre>
            {favLibraries.map((fav, index) => (
              <pre key={index} data-prefix={index + 1}>
                <code>{fav.code}</code>
              </pre>
            ))}
          </div>
          <p
            data-aos="zoom-in-up"
            className="mt-8 text-lg font-medium text-pretty text-left text-gray-500 sm:text-xl/8"
          >
            I also keep a running log of my projects, both ongoing and finished,
            in a Google Sheet to stay organized and keep track of ideas and
            progress.
          </p>

          <p
            data-aos="zoom-in-up"
            className="mt-8 text-lg font-medium text-pretty text-left text-gray-500 sm:text-xl/8"
          >
            I also have some experience in making desktop application or mobile app using Cocos Creator 3. 
            I use it mostly if design's suggests many animation for app engagement
          </p>
        </div>
      </div>

      <div className="px-6 py-24 sm:py-32 lg:px-8">
        <h1
          data-aos="fade-up"
          className="relative pt-10 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl lg:text-balance text-center"
        >
          Tech Stack
        </h1>
        <div className="mx-auto pt-10 mt-10 grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className=" max-h-12 m-3 w-full flex flex-col items-center justify-center text-center"
            >
              <div data-aos="fade-up" className="text-4xl mb-2 text-white">
                {tech.icon}
              </div>
              <span data-aos="fade-up" className="mt-1 text-lg/8 text-white">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default page;
