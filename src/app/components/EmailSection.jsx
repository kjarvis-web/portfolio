"use client";

import Image from "next/image";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import GithubIcon from "../../../public/images/github-icon.svg";
import Linkedin from "../../../public/images/linkedin.svg";

function EmailSection() {
  const form = useRef();
  const service = process.env.NEXT_PUBLIC_SERVICE;
  const template = process.env.NEXT_PUBLIC_TEMPLATE;
  const key = process.env.NEXT_PUBLIC_KEY;
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(service, template, form.current, key).then(
      (result) => {
        console.log(result.text);
        console.log("success");
        e.target.reset();
      },
      (error) => {
        console.log(error.text);
      }
    );
  };
  return (
    <section id="contact" className="grid md:grid-cols-2 my-12 py-24 gap-4">
      <div>
        <h5 className="text-3xl font-bold my-2">Contact Me</h5>
        <p className="mb-4 max-w-md">
          If you liked any of my work here (or if you didn&apos;t), please
          contact me. I look forward to hearing from you!
        </p>
        <div className="socials flex flex-row gap-6">
          <a
            href="https://github.com/norristown"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={GithubIcon} alt="github icon" height={35} />
          </a>

          <Image src={Linkedin} alt="linkedin icon" height={35} />
        </div>
      </div>
      <div>
        <form className="flex flex-col" onSubmit={sendEmail} ref={form}>
          <label htmlFor="email">Your Email</label>
          <input
            className="border border-zinc-900 text-sm rounded lg block w-full p-2 mb-4"
            name="email"
            type="email"
            id="email"
            required
            placeholder="youremail@email.com"
          ></input>
          <label htmlFor="subject">Subject</label>
          <input
            className="border border-zinc-900 text-sm rounded lg block w-full p-2 mb-4"
            type="text"
            name="subject"
            id="subject"
            required
            placeholder="Hello"
          ></input>
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            className="border border-zinc-900 text-sm rounded lg block w-full p-2 mb-4"
            placeholder="Message here..."
          ></textarea>
          <button
            type="submit"
            className="text-white bg-violet-800 hover:bg-violet-900 font-medium w-full rounded p-3"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default EmailSection;
