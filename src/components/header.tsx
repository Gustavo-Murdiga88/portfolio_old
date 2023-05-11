"use client";

import Link from "next/link";
import { DrawerComponent } from "./drawer";
import { GithubLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";

export function Header() {
  return (
    <header className={`p-6 px-8`}>
      <div className="flex items-center sm:hidden">
        <DrawerComponent>
          <nav>
            <ul className="flex list-none flex-col items-start justify-center gap-5 font-medium tracking-tight">
              <li className="inline">
                <Link
                  href="/"
                  className={`relative
                          cursor-pointer
                          px-4
                          py-2
                          text-center
                          text-lg
                          before:absolute 
                          before:bottom-0
                          before:left-0
                          before:h-px
                          before:w-full
                          before:origin-bottom-left
                          before:scale-x-0
                          before:bg-white
                          before:transition
                          before:duration-300
                          hover:before:scale-x-100`}
                >
                  Home
                </Link>
              </li>
              <li className="inline">
                <Link
                  href="/skills"
                  className={`
            relative
            cursor-pointer
            px-4
            py-2
            text-center
            text-lg
            before:absolute
            before:bottom-0
            before:left-0
            before:h-px
            before:w-full
            before:origin-bottom-left
            before:scale-x-0
            before:bg-white
            before:transition
            before:duration-300
            hover:before:scale-x-100`}
                >
                  Habilidades
                </Link>
              </li>
              <li className="inline">
                <Link
                  href="/about"
                  className={`
             relative
             cursor-pointer
             px-4
             py-2
             text-center
             text-lg
             before:absolute 
             before:bottom-0
             before:left-0
             before:h-px
             before:w-full
             before:origin-bottom-left
             before:scale-x-0
             before:bg-white
             before:transition
             before:duration-300
             hover:before:scale-x-100`}
                >
                  Sobre mim
                </Link>
              </li>
            </ul>
          </nav>
        </DrawerComponent>
        <div className="flex flex-1 justify-end gap-2">
          <Link target="_blank" href="https://github.com/Gustavo-Murdiga88">
            <GithubLogo size={24} />
          </Link>
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/gustavo-murdiga-055470178/"
          >
            <LinkedinLogo size={24} />
          </Link>
          <Link target="_blank" href="https://www.instagram.com/gustaavo88/">
            <InstagramLogo size={24} />
          </Link>
        </div>
      </div>
      <nav className="relative hidden w-full sm:block">
        <ul className="list-none sm:flex sm:flex-row sm:items-center sm:justify-center sm:gap-5 sm:font-medium sm:tracking-tight">
          <li className="inline">
            <Link
              href="/"
              className={`relative
              cursor-pointer
              px-4
              py-2
              text-center
              text-lg
              before:absolute 
              before:bottom-0
              before:left-0
              before:h-px
              before:w-full
              before:origin-bottom-left
              before:scale-x-0
              before:bg-white
              before:transition
              before:duration-300
              hover:before:scale-x-100`}
            >
              Home
            </Link>
          </li>
          <li className="inline">
            <Link
              href="/skills"
              className={`
              relative
              cursor-pointer
              px-4
              py-2
              text-center
              text-lg
              before:absolute
              before:bottom-0
              before:left-0
              before:h-px
              before:w-full
              before:origin-bottom-left
              before:scale-x-0
              before:bg-white
              before:transition
              before:duration-300
              hover:before:scale-x-100`}
            >
              Habilidades
            </Link>
          </li>
          <li className="inline">
            <Link
              href="/about"
              className={`
               relative
               cursor-pointer
               px-4
               py-2
               text-center
               text-lg
               before:absolute 
               before:bottom-0
               before:left-0
               before:h-px
               before:w-full
               before:origin-bottom-left
               before:scale-x-0
               before:bg-white
               before:transition
               before:duration-300
               hover:before:scale-x-100`}
            >
              Sobre mim
            </Link>
          </li>
          <li className="absolute right-4 top-0">
            <div className=" flex gap-4">
              <Link target="_blank" href="https://github.com/Gustavo-Murdiga88">
                <GithubLogo size={24} />
              </Link>
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/gustavo-murdiga-055470178/"
              >
                <LinkedinLogo size={24} />
              </Link>
              <Link
                target="_blank"
                href="https://www.instagram.com/gustaavo88/"
              >
                <InstagramLogo size={24} />
              </Link>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}
