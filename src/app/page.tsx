import Img from "next/image";
import memoji from "../../public/memoji.png";
import { Header } from "@/components/header";

export default function Home() {
  return (
    <div className="aspect-video h-screen w-full overflow-hidden bg-page-main bg-cover bg-left-top">
      <Header />
      <div className="ml-auto mr-24 mt-48 flex w-custom items-center gap-x-24 px-8">
        <aside className="flex flex-col gap-4">
          <span className="flex gap-2 text-3xl font-bold tracking-tight">
            Olá,
            <span
              id="hello"
              className="translate-x-custom inline-flex origin-bottom-center rotate-custom animate-hello items-center justify-center leading-none"
            >
              👋
            </span>
          </span>
          <h1 className="mt-14 flex-1 text-title font-bold leading-none tracking-tight">
            Eu sou o Gustavo
          </h1>
          <div>
            <p className="w-134 text-xl font-medium leading-5 tracking-normal">
              Desenvolvedor front-end há dois anos. Apaixonado em transformar
              minhas ideias junto ao meu conhecimento e criatividade em sites
              responsivos repletos de boas experiências.
            </p>
            <p className="mt-4 w-134 text-xl font-medium leading-5 tracking-normal">
              Vivo em constante busca para aprimorar o que já conheço e sempre
              aberto a novos aprendizados, a fim de entregar o melhor aos meus
              parceiros, além da realização pessoal e profissional.
            </p>
          </div>
        </aside>

        <div
          className="
            relative flex
            items-center justify-center rounded-full
            bg-sky-950  before:absolute 
            before:bottom-0 before:left-0 
            before:right-0 before:top-0 
            before:rounded-full before:border-8
            before:border-white
          "
        >
          <Img
            className="translate-x-4 translate-y-4"
            src={memoji}
            width={400}
            height={400}
            quality={100}
            alt="memoji do gustavo murdiga"
          />
        </div>
      </div>
    </div>
  );
}
