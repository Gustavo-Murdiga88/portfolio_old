"use client";

import { useEffect } from "react";
import Atropos from "atropos";
import Img from "next/image";

import { Header } from "@/app/components/header";

import memoji from "../assets/memoji.png";

function Home() {
  useEffect(() => {
    const myAtropos = Atropos({
      el: ".my-atropos",
      shadow: false,
      highlight: false,
      rotateTouch: false,
      stretchZ: 0,
    });

    return () => {
      myAtropos?.destroy();
    };
  }, []);

  return (
    <div className="h-screen w-full overflow-auto overflow-x-hidden bg-page-main bg-cover bg-left-top">
      <Header />
      <div className="atropos my-atropos mx-auto max-w-[100rem]">
        <div className="atropos-scale">
          <div className="atropos-rotate">
            <div className="atropos-inner">
              <div className="mx-8 mb-24 mt-6 flex animate-greeting flex-col items-center justify-center gap-10 sm:mx-0 sm:px-8 md:mt-40 lg:flex-row lg:gap-24">
                <aside className="flex flex-col gap-4">
                  <span className="flex gap-2 text-3xl font-bold tracking-tight">
                    Olá,
                    <span className="origin-bottom-center rotate-custom animate-hello items-center justify-center leading-none">
                      👋
                    </span>
                  </span>
                  <h1
                    data-atropos-offset="5"
                    className="flex-1 text-3xl font-bold leading-none tracking-tight lg:mt-8 lg:text-[3.75rem] xl:mt-14 xl:text-[3.75rem] 2xl:text-title"
                  >
                    Eu sou o Gustavo
                  </h1>
                  <div>
                    <p className="w-full text-xl font-medium leading-5 tracking-normal lg:w-134">
                      Desenvolvedor front-end há dois anos. Apaixonado em
                      transformar minhas ideias junto ao meu conhecimento e
                      criatividade em sites responsivos repletos de boas
                      experiências.
                    </p>
                    <p className="mt-4 w-full text-xl font-medium leading-5 tracking-normal lg:w-134">
                      Vivo em constante busca para aprimorar o que já conheço e
                      sempre aberto a novos aprendizados, a fim de entregar o
                      melhor aos meus parceiros, além da realização pessoal e
                      profissional.
                    </p>
                  </div>
                </aside>

                <div
                  className="
                      my-memoji
                      relative
                      flex
                      items-center justify-center rounded-full
                      bg-sky-950  before:absolute 
                      before:bottom-0 before:left-0 
                      before:right-0 before:top-0 
                      before:rounded-full before:border-8
                      before:border-white"
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
