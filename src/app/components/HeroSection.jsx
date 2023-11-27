"use client";

import Image from "next/image";
import Link from "next/link";

function HeroSection() {
  const test = process.env.NEXT_PUBLIC_KEY;
  console.log(test);
  return (
    <section id="/">
      <div className="grid grid-cols-1 md:gap-0 md:grid-cols-12">
        <div className="col-span-7 text-center md:text-left">
          <h1 className=" text-4xl sm:text-5xl lg:text-6xl text-zinc-900 font-extrabold">
            Kevin Jarvis
          </h1>
          <h2 className="text-xl lg:text-3xl mb-4 ">Front-End Developer</h2>
          <p className="text-base lg:text-lg mb-6">
            I am a self-taught developer from the Philadelphia area with a
            passion for design and the arts.
          </p>
          <div>
            <Link
              href="#contact"
              className="inline-block px-6 py-3 sm:w-fit w-full rounded-full mr-4 bg-white hover:bg-zinc-200 border border-zinc-900"
            >
              Hire Me
            </Link>
            <button className="px-6 py-3 sm:w-fit w-full rounded-full bg-zinc-900 hover:text-black hover:bg-zinc-200 text-zinc-100 mt-3">
              Download CV
            </button>
          </div>
        </div>
        <div className="border-4 border-zinc-900 rounded-full col-span-5 place-self-center relative w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] mt-4 lg:mt-0">
          <Image
            src="/images/spidey.png"
            alt="hero image"
            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 p-2"
            width={300}
            height={300}
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
