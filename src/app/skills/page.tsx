import Img from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";

import vite from "../../../public/vite.png";
import docker from "../../../public/docker.png";
import fastify from "../../../public/fastify.png";
import react from "../../../public/react.png";
import remix from "../../../public/remix.png";
import node from "../../../public/node.png";
import TS from "../../../public/TS.png";
import next from "../../../public/next.png";

export default function Skills() {
  return (
    <div className="aspect-video h-screen w-full overflow-hidden bg-page-skills bg-cover bg-left-top bg-no-repeat">
      <Header />
      <div className="ml-auto mr-20 w-custom px-8">
        <section className="ml-auto mr-24 mt-16 flex w-custom gap-32 px-8">
          <aside className="flex-shrink pt-6">
            <h2 className="mb-10 text-lg font-semibold">
              {" "}
              Essas são as minhas habilidades como
            </h2>
            <h1 className="text-title font-extrabold leading-none">
              DESENVOLVEDOR
              <span className="block">FULL STACK</span>
            </h1>
            <p className="mt-8 w-180 text-lg font-bold leading-7 tracking-normal">
              Além destas, tenho visado durante minha jornada a especialização
              em tecnologias que englobam todo o ecossistema Node.JS, tanto no
              front-end como também no back-end, e também em DevOps, almejando
              alcançar o STAGE FULL CYCLE.
            </p>
          </aside>
          <div className="flex flex-grow-0 basis-96 flex-row flex-wrap justify-end gap-x-10 gap-y-5">
            <Link
              target="_blank"
              prefetch
              title="Next"
              href="https://nextjs.org/"
            >
              <Img src={next} width={170} height={176} alt="next" />
            </Link>
            <Link
              target="_blank"
              prefetch
              title="Fastify"
              href="https://www.fastify.io/"
            >
              <Img
                src={fastify}
                width={170}
                height={179}
                quality={100}
                alt="fastify"
              />
            </Link>
            <Link
              target="_blank"
              prefetch
              title="NodeJS"
              href="https://nodejs.org/en"
            >
              <Img src={node} width={170} height={150} alt="node" />
            </Link>
            <Link
              target="_blank"
              prefetch
              title="Docker"
              href="https://docker.com"
            >
              <Img
                src={docker}
                width={170}
                height={179}
                quality={100}
                alt="docker"
              />
            </Link>
            <Link
              target="_blank"
              prefetch
              title="ReactJS"
              href="https://react.dev"
            >
              <Img src={react} width={170} height={150} alt="react" />
            </Link>
            <Link
              target="_blank"
              prefetch
              title="TypeScript"
              href="https://www.typescriptlang.org"
            >
              <Img src={TS} width={170} height={150} alt="TS" />
            </Link>
            <Link
              target="_blank"
              prefetch
              title="Vite JS"
              href="https://vitejs.dev/"
            >
              <Img src={vite} width={170} height={150} alt="vite" />
            </Link>
            <Link
              target="_blank"
              title="Radix UI"
              href="https://www.radix-ui.com/"
              prefetch
            >
              <Img src={remix} width={170} height={150} alt="remix" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
