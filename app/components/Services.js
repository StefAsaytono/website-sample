"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Appbar from "./Appbar";
import Footer from "./Footer";

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true }); // Initialize AOS
  }, []);

  return (
    <>
      <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
        <section data-aos="fade-up" className="relative pt-16 bg-blueGray-50">
          <div className="container mx-auto">
            <h2 className="text-gray-900 font-manrope text-4xl font-semibold leading-10 lg:ml-20 mb-9 lg:text-left text-center">
              What I Can Do
            </h2>
            <div className="flex flex-wrap items-center flex justify-center">
              <div className="w-full lg:w-1/2 xl:w-1/2 dark:bg-gray-100">
                <div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
                  <img
                    src="/images/website development-min.webp"
                    alt=""
                    className="rounded-lg shadow-lg dark:bg-gray-500 aspect-video sm:min-h-96"
                  />
                </div>
              </div>
              <div className="w-full lg:w-1/2 xl:w-1/2 px-4">
                <div className="flex flex-wrap">
                  {[
                    {
                      title: "UI Design with Figma",
                      description:
                        "Modern, user-friendly designs with wireframes and prototypes.",
                      icon: (
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-plain.svg" />
                      ),
                    },
                    {
                      title: "Frontend Development",
                      description:
                        "Next.js & React expertise for fast, responsive UI.",
                      icon: (
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" />
                      ),
                    },
                    {
                      title: "Backend Development",
                      description:
                        "Robust APIs with Node.js & Express, secure authentication.",
                      icon: (
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" />
                      ),
                    },
                    {
                      title: "Asset Creation",
                      description:
                        "Custom graphics, logos, and illustrations using Photoshop & Clip Studio.",
                      icon: (
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg" />
                      ),
                    },
                  ].map((service, index) => (
                    <div key={index} className="w-full lg:w-1/2 xl:w-1/2 px-4">
                      <div className="relative flex flex-col mt-4">
                        <div className="px-4 py-5 flex-auto">
                          <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                            {service.icon}
                          </div>
                          <h6 className="text-xl mb-1 font-semibold">
                            {service.title}
                          </h6>
                          <p className="mb-4 text-blueGray-500">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;
