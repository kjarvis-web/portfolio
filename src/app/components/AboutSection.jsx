'use client';

import Image from 'next/image';

import ReactIcon from '../../../public/images/react.svg';
import JavascriptIcon from '../../../public/images/javascript.svg';
import GitIcon from '../../../public/images/git-icon.svg';
import NodejsIcon from '../../../public/images/nodejs.svg';
import PythonIcon from '../../../public/images/python.svg';
import JavaIcon from '../../../public/images/java.svg';

const TAB_DATA = [
  {
    content: (
      <ul className="flex gap-8 md:gap-10 text-sm font-semibold justify-center">
        <li className="md:flex md:flex-wrap md:gap-4 md:justify-between grid grid-cols-3 gap-4">
          <div className="flex flex-col items-center justify-between gap-2">
            <Image src={JavascriptIcon} alt="javascript icon" height={50} />
            <span>JavaScript</span>
          </div>
          <div className="flex flex-col items-center justify-between gap-2">
            <Image src={ReactIcon} alt="react icon" height={50} /> <span>React</span>
          </div>
          <div className="flex flex-col items-center justify-between gap-2">
            <Image src={NodejsIcon} alt="git icon" height={50} />
            <span>Node.js</span>
          </div>
          <div className="flex flex-col items-center justify-between gap-2">
            <Image src={JavaIcon} alt="java icon" height={50} /> <span>Java</span>
          </div>
          <div className="flex flex-col items-center justify-between gap-2">
            <Image src={PythonIcon} alt="python icon" height={50} /> <span>Python</span>
          </div>
          <div className="flex flex-col items-center justify-between gap-2">
            <Image src={GitIcon} alt="git icon" height={50} />
            <span>Git</span>
          </div>
        </li>
      </ul>
    ),
  },
];
function AboutSection() {
  return (
    <section id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div>{TAB_DATA.map((x) => x.content)}</div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full gap-y-4">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-base md:text-lg">
            I am a full stack web developer with experience in JavaScript, Java, Python, React,
            Node.js, HTML, CSS, and Git. I am a fast learner looking to expand my knowledge and
            skill set.
          </p>

          <p className="text-base md:text-lg">
            Working as a sales executive for the past ten years has given me the opportunity to work
            with many clients of all different backgrounds and goals, which has helped develop my
            communication and interpersonal skills.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
