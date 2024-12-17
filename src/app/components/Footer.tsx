"use client";

import Link from "next/link";
const Footer = () => {
  return (
    <div className="relative flex flex-col justify-center top-2 xl:top-4 gap-2 xl:gap-4 text-gray-600 dark:text-gray-400 text-[16px] xl:text-xl transition-colors duration-300">
      <div className="relative flex justify-center gap-3 xl:gap-6">
        <p className="hover:cursor-pointer hover:text-blue-500 hover:underline dark:hover:text-blue-400">
          <Link
            className="hover:text-blue-500 dark:hover:text-blue-400"
            href="https://github.com/pankajkoree"
            target="_blank"
          >
            Github ↗
          </Link>
        </p>

        <p className="hover:cursor-pointer hover:text-blue-500 hover:underline dark:hover:text-blue-400">
          <Link
            className="hover:text-blue-500 dark:hover:text-blue-400"
            href="https://www.linkedin.com/in/pankaj-koree/"
            target="_blank"
          >
            Linkedin ↗
          </Link>
        </p>

        <p className="hover:cursor-pointer hover:text-blue-500 hover:underline dark:hover:text-blue-400">
          <Link
            className="hover:text-blue-500 dark:hover:text-blue-400"
            href="https://www.youtube.com/@pankajkori"
            target="_blank"
          >
            Youtube ↗
          </Link>
        </p>

        <p className="hover:cursor-pointer hover:text-blue-500 hover:underline dark:hover:text-blue-400">
          <Link
            className="hover:text-blue-500 dark:hover:text-blue-400"
            href="https://www.sololearn.com/en/profile/13478902"
            target="_blank"
          >
            SoloLearn ↗
          </Link>
        </p>
      </div>

      <div className="relative flex justify-center">
        <p>
          © 2024{" "}
          <Link
            className="underline hover:text-blue-500 dark:hover:text-blue-400"
            href="https://pankajkoree.netlify.app/"
            target="_blank"
          >
            Pankaj Kori
          </Link>{" "}
          . All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
