"use client";

import { startTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import ReactIcon from "../../../public/images/react.svg";
import JavascriptIcon from "../../../public/images/javascript.svg";
import HtmlIcon from "../../../public/images/html-5.svg";
import CssIcon from "../../../public/images/css-3.svg";
import GitIcon from "../../../public/images/git-icon.svg";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="flex gap-8">
        <li className="flex">
          <Image src={ReactIcon} alt="react icon" height={50} />
          <Image src={JavascriptIcon} alt="javascript icon" height={50} />
        </li>
        <li className="flex">
          <Image src={HtmlIcon} alt="html icon" height={50} />
          <Image src={CssIcon} alt="css icon" height={50} />
        </li>
        <li className="flex">
          <Image src={GitIcon} alt="git icon" height={50} />
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

  function handleTabChange(id) {
    startTransition(() => setTab(id));
  }
  return (
    <section id="about" className="py-10">
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
            Redux, Node.js, HTML, CSS, and Git. I am a fast learner looking to
            expand my knowledge and skill set. I am excited at the prospect of
            working with others to create amazing applications.
          </p>
          <div className="flex flex-row mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              Experience
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
