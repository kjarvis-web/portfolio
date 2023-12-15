"use client";

import Image from "next/image";
import Link from "next/link";

function HeroSection() {
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
            passion for design and the arts. Currently teaching ballroom and
            latin dancing in Abington, PA at Socialsport Dance Club.
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
        <div className="col-span-5 place-self-center relative w-[350px] h-[350px] lg:w-[300px] lg:h-[300px] mt-4 lg:mt-0">
          <Image
            src="/images/me_rectangle.jpg"
            alt="hero image"
            className="border-black border-2 absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 animate-wiggle"
            width={250}
            height={250}
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
