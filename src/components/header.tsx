"use client";

import Link from "next/link";
import { DrawerComponent } from "./drawer";
import { useEffect, useState, useCallback } from "react";
import { GithubLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";

export function Header() {
  const [isMobile, setIsMobile] = useState(false);

  const setMobile = useCallback(() => {
    if (isMobile) {
      setIsMobile(false);
      return;
    }
    setIsMobile(true);
  }, [isMobile]);

  const { matches } = window?.matchMedia("(max-width: 639px)");
  if (matches && !isMobile) {
    setMobile();
  }

  const onResize = useCallback(() => {
    const width = window.innerWidth;

    const MAX_WIDTH_MOBILE = 770;

    if (width < MAX_WIDTH_MOBILE && !isMobile) {
      setMobile();
      return;
    }

    if (isMobile && width > MAX_WIDTH_MOBILE) {
      setMobile();
    }
  }, [isMobile, setMobile]);

  useEffect(() => {
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [onResize]);

  return (
    <header
      className={`top-0 p-6 px-8 ${
        isMobile ? "sticky bg-black bg-opacity-10 " : ""
      }`}
    >
      {isMobile ? (
        <div className="flex items-center">
          <DrawerComponent>
            <nav>
              <ul className="flex list-none flex-col items-start justify-center gap-5 font-medium tracking-tight">
                <li>
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
                <li>
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
                <li>
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
      ) : (
        <nav>
          <ul className="relative list-none md:flex md:flex-row md:items-center md:justify-center md:gap-5 md:font-medium md:tracking-tight">
            <li>
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
            <li>
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
            <li>
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
            <li>
              <Link
                href="#"
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
                Carreira
              </Link>
            </li>
            <li className="absolute right-4">
              <div className=" flex gap-4">
                <Link
                  target="_blank"
                  href="https://github.com/Gustavo-Murdiga88"
                >
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
      )}
    </header>
  );
}
