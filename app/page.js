"use client"
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import Appbar from "./components/Appbar";
import Footer from "./components/Footer";

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Contact Us', href: '/contactus' },
]

const stats = [
  { name: 'Successful Projects', value: '10+' },
  { name: 'Weeks of Development', value: '2-3' },
  { name: 'Hours per week', value: '30' },
  { name: 'Contact Guarantee', value: '99.9%' },
]

const features = [
  {
    name: 'Seamless Deployment',
    description:
      'Launch your website effortlessly with our streamlined deployment process, ensuring speed and efficiency.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Built-in Security',
    description:
      'Your website is protected with top-tier security measures, including regular updates.',
    icon: LockClosedIcon,
  },
  {
    name: 'Optimized Performance',
    description:
      'Fast-loading, SEO-friendly websites designed to enhance user experience and maximize conversions.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Custom & Scalable Design',
    description:
      'Tailored to your brand, our websites are built to scale with your business, ensuring long-term success.',
    icon: FingerPrintIcon,
  },
];

export default function Home() {

  useEffect(() => {
    AOS.init({ duration: 800, once: true }); // Initialize AOS
  }, []);

  return (
    <div className="bg-white">

      {/* ------------------- */}
      <Appbar />

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#1e3a8a] to-[#10b981] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-2xl py-25 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 data-aos="zoom-in-up" className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
              Elevate Your Business with a Stunning Website.
            </h1>
            <p data-aos="zoom-in-up" className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
              Your website is more than just a digital space—it’s your brand’s first impression. We craft modern, high-performing websites that captivate your audience, drive engagement, and turn visitors into loyal customers. Let’s build something extraordinary together.
            </p>

          </div>
        </div>
      </div>

      {/* ------------------- */}

      <div data-aos="zoom-in-up" className="relative isolate overflow-hidden bg-gray-900 py-18 sm:py-32">
        <img
          alt=""
          src="/images/Steps-to-Enhance-Enterprise-SOC--1536x813.jpeg"
          className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center opacity-30 "
        />
        <div
          aria-hidden="true"
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="aspect-1097/845 w-[68.5625rem] bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="aspect-1097/845 w-[68.5625rem] bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">Why Choose Us?</h2>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8">
              We create websites that are not only visually stunning but also optimized for performance, engagement, and growth. Here’s why businesses trust us:
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">

            <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.name} className="flex flex-col-reverse gap-1">
                  <dt className="text-base/7 text-gray-300">{stat.name}</dt>
                  <dd className="text-4xl font-semibold tracking-tight text-white">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* ------------------- */}

      <div data-aos="zoom-in-up" className="bg-white py-10 sm:py-25 bg-opacity-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base/7 font-semibold text-blue-700 mb-5">Approach with Confidence</h2>
            <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-800 sm:text-5xl lg:text-balance">
              Everything You Need for a Powerful Website
            </p>
            <p className="mt-6 text-lg/8 text-gray-800">
              From seamless design to high-performance hosting, we provide the tools and expertise to bring your vision to life.
              Secure, scalable, and built to impress.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base/7 font-semibold text-gray-800">
                    <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-blue-700">
                      <feature.icon aria-hidden="true" className="size-6 text-white" />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base/7 text-gray-800">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* ------------------- */}

      <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--color-blue-50),white)] opacity-20" />
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white ring-1 shadow-xl shadow-blue-700/10 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
        <div className="mx-auto max-w-2xl lg:max-w-4xl" data-aos="zoom-in">
          <img width="48" className="mx-auto h-12" height="48" src="https://img.icons8.com/pulsar-gradient/48/quote.png" alt="quote" />
          <figure className="mt-10">
            <blockquote className="text-center text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
              <p>
                "A great website isn’t just something people see—it’s an experience that engages, inspires, and drives action."
              </p>
            </blockquote>
            <figcaption className="mt-10">
              <img
                alt=""
                src="/images/photo_2025-03-09_12-48-39.jpg"
                className="mx-auto size-10 rounded-full"
              />
              <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                <div className="font-semibold text-gray-900">Stefanie Asaytono</div>
                <svg width={3} height={3} viewBox="0 0 2 2" aria-hidden="true" className="fill-gray-900">
                  <circle r={1} cx={1} cy={1} />
                </svg>
                <div className="text-gray-600">Front-end Developer</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ------------------- */}

      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
          <div data-aos="fade-up" className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0 ">
            <svg
              viewBox="0 0 1024 1024"
              aria-hidden="true"
              className="absolute top-1/2 left-1/2 -z-10 size-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            >
              <circle r={512} cx={512} cy={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
              <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                  <stop stopColor="#438ccf" />
                  <stop offset={1} stopColor="#77b5ec" />
                </radialGradient>
              </defs>
            </svg>
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <h2 className="text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl">
                Discover the Perfect Theme for Your Brand.
              </h2>
              <p className="mt-6 text-lg/8 text-pretty text-gray-300">
                Choose from a variety of stunning, customizable themes designed to match your style and enhance your online presence.
              </p>
            </div>

            <div className="relative mt-16 h-80 lg:mt-8">
              <img
                alt="App screenshot"
                src="https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png"
                width={1824}
                height={1080}
                className="absolute top-0 left-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ------------------- */}

      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-lg/8 font-semibold text-gray-900">
            This website is made with:
          </h2>
          <div data-aos="zoom-in" className="mx-auto grid max-w-lg grid-cols-3 items-center gap-x-8 gap-y-5 sm:max-w-xl sm:grid-cols-3 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">

            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg" />

            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-plain-wordmark.svg" />

            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original-wordmark.svg" />
          </div>
        </div>
      </div>
      <Footer/>
    </div>

  );
}
