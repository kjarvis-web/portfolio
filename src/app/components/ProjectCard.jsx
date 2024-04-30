import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

function ProjectCard({ imgUrl, title, description, gitUrl, previewUrl }) {
  return (
    <div key={title}>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{
          background: `url(${imgUrl})`,
          backgroundSize: 'cover',
        }}
      >
        <div className="overlay flex justify-center items-center gap-8 absolute top-0 left-0 w-full h-full bg-zinc-900 bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 rounded-t-xl">
          <div className="mr-2 flex flex-col items-center group/link">
            <Link
              href={gitUrl}
              className="border-2 flex justify-center items-center rounded-full border-zinc-400 group-hover/link:border-white"
            >
              <CodeBracketIcon className="text-zinc-400 h-10 w-10 m-2 cursor-pointer group-hover/link:text-white" />
            </Link>
            <p className="text-zinc-400 mt-1 group-hover/link:text-white">Code</p>
          </div>
          <div className="flex flex-col items-center group/link">
            <Link
              href={previewUrl}
              className="border-2 flex justify-center items-center rounded-full border-zinc-400 group-hover/link:border-white"
            >
              <EyeIcon className="text-zinc-400 h-10 w-10 m-2 cursor-pointer group-hover/link:text-white" />
            </Link>
            <p className="text-zinc-400 mt-1 group-hover/link:text-white">Preview</p>
          </div>
        </div>
      </div>
      <div className="rounded-b-xl bg-zinc-900 text-zinc-100 py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="">{description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
