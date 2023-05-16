"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Img from "next/image";

import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
import { Loading } from "@/app/components/loader";
import { Header } from "@/app/components/header";
import { Link } from "@/app/components/link";

import { ButtonReturn } from "../components/buttonReturn";

import react from "../assets/timelime.jpg";

interface HandleScrollProps {
  scrollTop: number;
}

export default function About() {
  const [isLoading, setIsLoading] = useState(true);
  const cards = useRef<Array<number>>([]);
  const isMobile = useRef<boolean>(false);

  const mainDiv = useRef<HTMLDivElement | null>(null);

  function setClassCards(className: string) {
    const card = document.querySelector(className);
    card?.classList.remove("invisible");
    card?.classList.add("animate-greeting-vertical");
  }

  const handleScroll = useCallback(({ scrollTop }: HandleScrollProps) => {
    let card: number = 0;
    cards.current.forEach((item, index) => {
      if (scrollTop >= item) {
        setClassCards(`.card-${index + 1}`);
        card = item;
      }
    });

    if (card !== null && card >= 0) {
      cards.current = cards.current.filter((item) => item);
    }
  }, []);

  const onScroll = useCallback(
    (e: Event) => {
      const scrollTop =
        ((e.target as any).scrollTop as number) + (isMobile.current ? 0 : 200);
      if (cards.current.some((item) => Boolean(item))) {
        handleScroll({ scrollTop });
      } else {
        document
          .querySelector("#main")
          ?.removeEventListener("scroll", onScroll);
      }
    },
    [handleScroll]
  );

  useEffect(() => {
    const display = document.getElementById("display");

    new Promise<boolean>((resolve) => {
      mainDiv.current?.classList.remove("overflow-hidden");
      mainDiv.current?.classList.add("overflow-auto");
      resolve(false);
    }).then((value) => {
      setIsLoading(value);
      display?.classList.remove("hidden");
      display?.classList.add("block");
      const { width } = display!.getBoundingClientRect();

      if (width < 640) {
        isMobile.current = true;
      }

      const cardsBody = document.querySelectorAll(".paragraph");

      cardsBody.forEach((node) => {
        const { top } = node.getBoundingClientRect();
        cards.current.push(top - 500);
      });
    });

    document.querySelector("#main")!.addEventListener("scroll", onScroll);

    return () => {
      document.querySelector("#main")?.removeEventListener("scroll", onScroll);
    };
  }, [onScroll]);

  return (
    <div
      id="main"
      ref={mainDiv}
      className="not-scoller h-screen bg-page-about bg-cover bg-fixed bg-left-top bg-no-repeat sm:overflow-auto"
    >
      {isLoading && <Loading />}
      <Header />
      <section
        id="display"
        className="mx-auto hidden max-w-max-page px-4 sm:pb-24 lg:px-[96px]"
      >
        <div
          className="
          mb-28
          mt-4
          rounded-md
          bg-blue-950
          p-5
          sm:mx-auto
          sm:mb-0
          sm:max-w-[79.375rem]
          sm:p-8
          "
        >
          <div className="relative">
            <Img
              className=" h-[15.625rem] rounded-md object-cover"
              src={react}
              alt="react"
              height={1080}
              width={1920}
              quality={100}
            />

            <Img
              className="absolute bottom-0 left-1/2 h-[12.5rem] w-[12.5rem] -translate-x-1/2 translate-y-1/2 rounded-full border-8 border-blue-950 object-cover"
              src="https://avatars.githubusercontent.com/u/74632138?v=4"
              alt="react"
              height={1080}
              width={1920}
              quality={100}
            />
          </div>

          <div className="mx-auto -mt-1 max-w-[75rem] rounded-b-md  bg-blue-950 pb-10 sm:pb-20">
            <div className="mx-auto max-w-[46.875rem] pt-28 text-sm font-semibold tracking-wide sm:text-justify sm:text-lg">
              <div className="mb-4 flex flex-col items-center justify-center gap-2">
                <span className="text-2xl font-bold">Gustavo Murdiga</span>
                <span className="text-lg font-semibold text-zinc-100">
                  Full-Stack developer
                </span>
              </div>
              <div className="mb-8 flex items-center justify-center gap-4 text-zinc-100 sm:mb-10">
                <Link
                  target="_blank"
                  href="https://github.com/Gustavo-Murdiga88"
                >
                  <GithubLogo size={32} />
                </Link>
                <Link
                  target="_blank"
                  href="https://www.linkedin.com/in/gustavo-murdiga-055470178/"
                >
                  <LinkedinLogo size={32} />
                </Link>
              </div>

              <span className="mb-4 mt-2 block text-xl font-bold text-zinc-100 sm:text-2xl">
                Bio
              </span>
              <p className="mt-4">
                Olá, meu nome é Gustavo, moro em Jaú, interior de São Paulo. Aos
                meus 24 anos sou um grande explorador da tecnologia e de todas
                as coisas que ela pode oferecer. Mas, devo lhe dizer que nem
                sempre foi desta forma. Em minha jornada profissional, pude
                conhecer e me desafiar em diversas áreas, sendo o meu primeiro
                contato com o mundo do trabalho como eletricista na empresa de
                meu pai. Lá, pude entender melhor sobre a importância do
                trabalho em equipe, da boa comunicação e da entrega de um
                trabalho bem feito. Depois, exerci a função de analista técnico
                de suporte, mantenedor de sistemas eletrônicos, almoxarifado e
                até agente logístico.
              </p>

              <span className="mb-4 mt-8 block text-xl font-bold text-zinc-100 sm:text-2xl">
                Mas de onde surgiu minha paixão pela tecnologia?
              </span>
              <p className="card-1 paragraph invisible mt-4">
                Tudo começou quando tive a iniciativa de exercer alguns
                trabalhos secundários de redes de computadores – e acredite, eu
                gosto muito desse assunto -, e após criar minhas primeiras redes
                e dar os meus primeiros passos em interfaces de linha de comando
                (CLI), senti uma grande necessidade de me aprofundar nesse
                assunto. Então, comecei uma jornada incrível para aprender
                lógica de programação e várias linguagens, incluindo C#, Java,
                Python e alguns frameworks, como o Django do Python. Por fim,
                optei em me especializar em JavaScript - afinal, quem não
                escolheria, não é mesmo?
              </p>
              <p className="card-2 paragraph invisible mt-4">
                Inserido nesse insano mundo de estudo e programação, recebi a
                proposta de uma empresa local para exercer a função de suporte
                técnico TI. Embora não fosse o meu principal foco, abracei cada
                ensinamento e experiência, ciente e confiante de que meu maior
                sonho estava (literalmente) a uns passos de mim. Foi então que
                em janeiro do ano de 2022 recebi o voto de confiança dos
                diretores da empresa para ingressar no mundo dos códigos. E a
                partir daí, fui exercendo com excelência (modéstia parte) o meu
                cargo de programador front-end, trabalhando em projetos de alta
                relevância, entregando sempre o meu melhor e ganhando o meu
                merecido espaço.
              </p>
              <p className="card-3 paragraph invisible mt-4">
                E como todo esforço é recompensado, em outubro de 2023 recebi a
                inesperada proposta da atual empresa onde trabalho, Guarani
                Sistema. Hoje trabalho de forma remota, exercendo a função de
                desenvolvedor front-end há cerca de 10 meses, e posso garantir
                que tem sido uma experiência surreal de boa. Tenho a
                oportunidade de criar novas coisas, arquitetar projetos e testar
                novas features em um sistema que está em desenvolvimento. É um
                ambiente desafiador e estimulante, onde posso colocar em prática
                tudo o que aprendi e continuar aprendendo sempre mais. E quem
                sabe, num futuro próximo, eu tenha novas oportunidades e
                desafios pela frente. O importante é continuar aprendendo e
                buscando sempre o melhor para minha carreira e para o mundo da
                tecnologia.
              </p>
              <span className="card-4 paragraph invisible mb-4 mt-8 block text-2xl font-bold text-zinc-100">
                Sobre os próximos passos?
              </span>
              <p className="card-5 paragraph invisible mt-4">
                Espero aplicar minhas habilidades em novos projetos. Tenho
                constantemente me dedicado a aprimorar minhas habilidades em
                DevOps e arquiteturas modernas no front e back-end. Com essa
                nova especialização, espero ser capaz de trabalhar em projetos
                mais complexos e contribuir para a entrega de soluções de alta
                qualidade. Caso tenha interesse em saber mais sobre minhas
                habilidades e experiências, sinta-se à vontade para{" "}
                <Link
                  target="_blank"
                  href="/files/curr.pdf"
                  download="currículo.pdf"
                >
                  <span className="px-1 text-blue-500 hover:underline hover:underline-offset-2 sm:px-1">
                    {" "}
                    clicar aqui{" "}
                  </span>
                </Link>
                para acessar meu documento completo.
              </p>
            </div>
          </div>
        </div>
      </section>
      <ButtonReturn />
    </div>
  );
}
