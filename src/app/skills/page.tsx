import Img from "next/image";
import Link from "next/link";
import { Header } from "@/app/components/header";

import vite from "../assets/vite.png";
import docker from "../assets/docker.png";
import fastify from "../assets/fastify.png";
import react from "../assets/react.png";
import remix from "../assets/remix.png";
import node from "../assets/node.png";
import TS from "../assets/TS.png";
import next from "../assets/next.png";
import { ButtonReturn } from "../components/buttonReturn";

export default function Skills() {
  return (
    <div className="not-scoller h-screen w-full overflow-auto bg-page-skills bg-cover bg-left-top bg-no-repeat">
      <Header />
      <div className="w-full max-w-[95rem] animate-greeting sm:mx-auto">
        <section className="flex flex-col gap-10 px-8 md:mt-10 md:gap-24 2xl:flex-row">
          <aside className="md:pt-6">
            <h2 className="mb-5 mt-5 text-lg font-semibold md:mb-10">
              Essas são as minhas habilidades como
            </h2>
            <h1 className="text-[2.5rem] font-extrabold leading-none lg:text-[5rem] xl:text-title">
              DESENVOLVEDOR
              <span className="block">FULL STACK</span>
            </h1>
            <p className="mt-5 w-full text-sm font-bold tracking-normal lg:mt-8 lg:w-180 lg:text-lg lg:leading-7">
              Além destas, tenho visado durante minha jornada a especialização
              em tecnologias que englobam todo o ecossistema Node.JS, tanto no
              front-end como também no back-end, e também em DevOps, almejando
              alcançar o{" "}
              <strong className="font-extrabold">STAGE FULL CYCLE.</strong>
            </p>
          </aside>
          <div className="skills mb-8 flex flex-1 flex-row flex-wrap items-center justify-center gap-6">
            <Link
              className="grayscale-1 w-[140px] object-cover md:w-auto"
              target="_blank"
              prefetch
              title="Next"
              href="https://nextjs.org/"
            >
              <Img src={next} width={176} height={176} alt="next" />
            </Link>
            <Link
              className="w-[140px] object-cover  md:w-auto"
              target="_blank"
              prefetch
              title="Fastify"
              href="https://www.fastify.io/"
            >
              <Img
                src={fastify}
                width={176}
                height={176}
                quality={100}
                alt="fastify"
              />
            </Link>
            <Link
              className="w-[140px] object-cover md:w-auto"
              target="_blank"
              prefetch
              title="NodeJS"
              href="https://nodejs.org/en"
            >
              <Img src={node} width={176} height={176} alt="node" />
            </Link>
            <Link
              className="w-[140px] object-cover md:w-auto"
              target="_blank"
              prefetch
              title="Docker"
              href="https://docker.com"
            >
              <Img
                src={docker}
                width={176}
                height={176}
                quality={100}
                alt="docker"
              />
            </Link>
            <Link
              className="w-[140px] object-cover md:w-auto"
              target="_blank"
              prefetch
              title="ReactJS"
              href="https://react.dev"
            >
              <Img src={react} width={176} height={176} alt="react" />
            </Link>
            <Link
              className="w-[140px] object-cover md:w-auto"
              target="_blank"
              prefetch
              title="TypeScript"
              href="https://www.typescriptlang.org"
            >
              <Img src={TS} width={176} height={176} alt="TS" />
            </Link>
            <Link
              className="w-[140px] object-cover md:w-auto"
              target="_blank"
              prefetch
              title="Vite JS"
              href="https://vitejs.dev/"
            >
              <Img src={vite} width={176} height={176} alt="vite" />
            </Link>
            <Link
              className="w-[140px] object-cover md:w-auto"
              target="_blank"
              title="Radix UI"
              href="https://www.radix-ui.com/"
              prefetch
            >
              <Img src={remix} width={176} height={176} alt="remix" />
            </Link>
          </div>
        </section>
      </div>
      <ButtonReturn />
    </div>
  );
}
