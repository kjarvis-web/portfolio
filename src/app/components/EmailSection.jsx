import Image from "next/image";
import Link from "next/link";
import GithubIcon from "../../../public/images/github-icon.svg";
import Linkedin from "../../../public/images/linkedin.svg";

function EmailSection() {
  return (
    <section id="contact" className="grid md:grid-cols-2 my-12 py-24 gap-4">
      <div>
        <h5 className="text-3xl font-bold my-2">Contact Me</h5>
        <p className="mb-4 max-w-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          accusantium ad rerum. Ab eveniet voluptatem aperiam sit? Delectus
          cumque earum error incidunt consequatur vitae! Iusto at alias sit
          dicta libero.
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
        <form className="flex flex-col">
          <label htmlFor="email">Your Email</label>
          <input
            className="border border-zinc-900 text-sm rounded lg block w-full p-2 mb-4"
            type="email"
            id="email"
            required
            placeholder="youremail@email.com"
          ></input>
          <label htmlFor="subject">Subject</label>
          <input
            className="border border-zinc-900 text-sm rounded lg block w-full p-2 mb-4"
            type="text"
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
