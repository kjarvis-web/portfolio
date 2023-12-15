"use client";

import { startTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import ReactIcon from "../../../public/images/react.svg";
import JavascriptIcon from "../../../public/images/javascript.svg";
import HtmlIcon from "../../../public/images/html-5.svg";
import CssIcon from "../../../public/images/css-3.svg";
import GitIcon from "../../../public/images/git-icon.svg";
import NextjsIcon from "../../../public/images/nextjs.svg";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="flex gap-8 md:gap-10 text-sm font-semibold justify-center">
        <li className="md:flex md:flex-wrap md:gap-4 md:justify-between grid grid-cols-3 gap-4">
          <div className="flex flex-col items-center justify-between gap-2">
            <Image src={NextjsIcon} alt="nextjs icon" height={50} />
            <span>Next.js</span>
          </div>
          <div className="flex flex-col items-center justify-between gap-2">
            <Image src={ReactIcon} alt="react icon" height={50} />{" "}
            <span>React</span>
          </div>
          <div className="flex flex-col items-center justify-between gap-2">
            <Image src={JavascriptIcon} alt="javascript icon" height={50} />
            <span>JavaScript</span>
          </div>
          <div className="flex flex-col items-center justify-between gap-2">
            <Image src={HtmlIcon} alt="html icon" height={50} />
            <span>HTML</span>
          </div>
          <div className="flex flex-col items-center justify-between gap-2">
            <Image src={CssIcon} alt="css icon" height={50} /> <span>CSS</span>
          </div>
          <div className="flex flex-col items-center justify-between gap-2">
            <Image src={GitIcon} alt="git icon" height={50} />
            <span>Git</span>
          </div>
        </li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul>
        <li>None</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul>
        <li>Experience 1</li>
        <li>Experience 2</li>
      </ul>
    ),
  },
];
function AboutSection() {
  const [tab, setTab] = useState("skills");

  // function handleTabChange(id) {
  //   startTransition(() => setTab(id));
  // }
  return (
    <section id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          className="rounded md:my-4"
          src="/images/computer.jpg"
          width={500}
          height={500}
          alt="about image"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-base md:text-lg">
            I am a front-end web developer with experince in Javascript, React,
            Node.js, HTML, CSS, and Git. I am a fast learner looking to expand
            my knowledge and skill set. I am excited at the prospect of working
            with others to create amazing applications.
          </p>
          <br />
          <p className="text-base md:text-lg">
            Working as a dance instructor for the past ten years has given me
            the opportunity to work with many clients of all different
            backgrounds and goals which has helped me improve my communication
            and interpersonal skills.
          </p>
          <div className="flex flex-row mt-8 justify-center">
            <TabButton
              // selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((x) => x.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
