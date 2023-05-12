"use client";

import { useEffect, useRef, useState } from "react";

import { Header } from "@/app/components/header";
import { Link } from "@/app/components/link";
import { Loading } from "@/app/components/loader";

interface HandleScrollProps {
  card: {
    top: number;
    card: number;
  };
  scrollTop: number;
}

const cards: number[] = [];

export default function About() {
  const [isLoading, setIsLoading] = useState(true);

  const mainDiv = useRef<HTMLDivElement | null>(null);

  function setClassCards(id: string) {
    const card = document.getElementById(id);
    card?.classList.remove("invisible");
    card?.classList.add("animate-greeting-vertical");
  }

  function handleScroll({ card, scrollTop }: HandleScrollProps) {
    if (scrollTop > cards[card.card - 1] && card.card === 2) {
      setClassCards("card-2");
    }

    if (scrollTop > cards[card.card - 1] && card.card === 3) {
      setClassCards("card-3");
    }

    if (scrollTop > cards[card.card - 1] && card.card === 4) {
      setClassCards("card-4");
    }

    if (scrollTop > cards[card.card - 1] && card.card === 5) {
      setClassCards("card-5");
    }

    if (scrollTop > cards[card.card - 1] && card.card === 6) {
      setClassCards("card-6");
    }
  }

  function handleGetCards() {
    const cards = document.querySelectorAll(".card");

    const AreCardInvisible = Array.from({
      length: cards.length,
    }).map((_, index) => {
      if (cards[index].classList.contains("invisible")) {
        const { top } = cards[index].getBoundingClientRect();

        return {
          top,
          isTrue: true,
        };
      }
      return {
        isTrue: false,
        top: 0,
      };
    });

    const hasExecutedNextLine = AreCardInvisible.some((card) => card.isTrue);

    const card =
      AreCardInvisible.findIndex((item, index) => item.isTrue && index) + 1;

    return {
      card: {
        card,
        top: AreCardInvisible[card - 1]?.top ?? 0,
      },
      hasExecutedNextLine,
    };
  }

  function onScroll(e: Event) {
    const scrollTop = (e.target as any).scrollTop as number;
    const { hasExecutedNextLine, card } = handleGetCards();

    if (hasExecutedNextLine) {
      handleScroll({ scrollTop, card });
    }
  }

  useEffect(() => {
    const { matches } = window.matchMedia("(max-width:639px)");
    const cardsBody = document.querySelectorAll(".card");
    const display = document.getElementById("display");

    if (matches) {
      cardsBody.forEach((item, index) => {
        if (!index) {
          item.classList.remove("invisible");
        }
        const { y } = item.getBoundingClientRect();

        cards.push(y - 430);
      });

      new Promise<boolean>((resolve) => {
        mainDiv.current?.classList.remove("overflow-hidden");
        mainDiv.current?.classList.add("overflow-auto");
        resolve(false);
      }).then((value) => {
        setIsLoading(value);
      });

      document.querySelector("#main")!.addEventListener("scroll", onScroll);

      return () => {
        document
          .querySelector("#main")
          ?.removeEventListener("scroll", onScroll);
      };
    } else {
      setIsLoading(false);
      display?.classList.remove("sm:hidden");
      display?.classList.add("block");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      id="main"
      ref={mainDiv}
      className="scroll not-scoller h-screen overflow-hidden bg-page-about bg-cover bg-scroll bg-left-top bg-no-repeat sm:overflow-auto"
    >
      {isLoading && <Loading />}
      <Header />
      <section
        id="display"
        className="mx-auto max-w-max-page px-4 pb-24 sm:hidden lg:px-[96px]"
      >
        <span className="mb-4 mt-2 block text-center text-2xl font-bold md:mb-8 md:text-3xl lg:text-5xl">
          Um pouco sobre mim
        </span>

        <div
          className="
            mx-auto grid min-w-full 
            max-w-max-page 
            grid-cols-1 
            gap-6
            md:grid-cols-1
            lg:grid-cols-2
            xl:grid-cols-2
            2xl:grid-cols-3"
        >
          <section
            id="card-1"
            className="card lg:min-h-auto invisible h-auto animate-[1s_greeting-vertical_backwards] rounded-lg bg-black bg-opacity-60 p-6 text-white sm:visible md:animate-[1s_greeting_backwards] lg:min-h-[459px] 2xl:max-w-[34.25rem]"
          >
            <p className="text-left text-[1.125rem] font-medium leading-6">
              Olá, meu nome é Gustavo, e aos meus 24 anos sou um grande
              entusiasta da tecnologia e de tudo o que ela pode oferecer em
              nossas vidas. Minha paixão pela tecnologia começou em 2017, quando
              tive meu primeiro contato com redes de computadores - acredite ou
              não, eu gosto muito desse assunto! Depois de criar minhas
              primeiras redes e dar meus primeiros passos em algumas interfaces
              de linha de comando (CLI), senti uma grande vontade de me
              aprofundar mais no assunto. Foi então que comecei uma jornada
              incrível para aprender lógica de programação e várias linguagens,
              incluindo C#, Java, Python e alguns frameworks, como o Django do
              Python. No final, acabei escolhendo me especializar em JavaScript
              - afinal, quem não escolheria, não é mesmo? Hahaha.
            </p>
            <p className="mt-2 text-left text-[1.125rem] font-medium leading-6">
              No final, acabei escolhendo me especializar em JavaScript -
              afinal, quem não escolheria, não é mesmo? Hahaha.
            </p>
          </section>
          <section
            id="card-2"
            className="card invisible 
            h-auto
            rounded-lg
            bg-black bg-opacity-60 p-6 text-white sm:visible md:animate-[1s_greeting_500ms_backwards] lg:min-h-[459px] 2xl:max-w-[34.25rem]"
          >
            <p className="text-left text-[1.125rem] font-medium leading-6">
              No início de 2021, tive minha primeira oportunidade na área de TI
              como suporte técnico em uma empresa local. Apesar de não ser
              exatamente o que eu sonhava, a experiência acabou sendo incrível:
              a cada telefone atendido e cliente recepcionado, aprendia algo
              novo e descobria mais sobre o mundo da tecnologia. Mas meu
              objetivo final sempre foi me tornar um desenvolvedor.
            </p>
            <p className="mt-2 text-left text-[1.125rem] font-medium leading-6">
              Em janeiro de 2022, tive a sorte de conhecer duas pessoas
              incríveis: Cristan, o dono da empresa, e Leison, o gerente de
              desenvolvimento. Embora eu fosse um jovem tímido, eles notaram meu
              desejo de aprender e criar coisas novas. Foi assim que me deram a
              oportunidade de entrar no mundo dos códigos.
            </p>
          </section>
          <section
            id="card-3"
            className="card invisible 
            h-auto 
            rounded-lg
            bg-black bg-opacity-60 p-6 text-white sm:visible md:animate-[1s_greeting_1000ms_backwards] lg:min-h-[459px] 2xl:max-w-[548px]"
          >
            <p className="text-left text-[1.125rem] font-medium leading-6">
              Aposto que você está curioso para saber qual empresa me deu a
              oportunidade de crescer na área de tecnologia, não é mesmo? Pois
              bem, essa empresa foi a{" "}
              <Link target="_blank" href="https://www.sti3.com.br">
                STi3
              </Link>
              . Foi lá que comecei minha jornada como programador front-end,
              aprendendo muito e trabalhando em projetos que impactam a vida das
              pessoas no setor varejista e atacadista em todo o Brasil. A{" "}
              <Link target="_blank" href="https://www.sti3.com.br/">
                STi3
              </Link>{" "}
              é uma empresa especial e sempre serei grato por tudo o que aprendi
              e pelas pessoas incríveis que conheci lá. No entanto, recentemente
              decidi buscar novos desafios em outra empresa, onde posso
              continuar crescendo como profissional e contribuindo para projetos
              inovadores. Mesmo assim, nunca esquecerei a experiência
              maravilhosa que tive na STI3 e sempre guardarei com carinho tudo o
              que aprendi lá. Agradeço a todos da equipe por terem me dado a
              chance de iniciar minha carreira na área de tecnologia e espero
              continuar crescendo e aprendendo em meu novo desafio profissional.
            </p>
          </section>
          <section
            id="card-4"
            className="card invisible 
            h-auto 
            rounded-lg
            bg-black bg-opacity-60 p-6 text-white sm:visible md:animate-[1s_greeting_1500ms_backwards] lg:min-h-[459px] 2xl:max-w-[34.25rem]"
          >
            <p className="text-left text-[1.125rem] font-medium leading-6">
              Agora você deve estar se perguntando: onde estou hoje? Pois bem,
              atualmente trabalho em casa, de forma remota, para uma empresa
              chamada{" "}
              <Link href="https://www.guaranisistemas.com.br" target="_blank">
                Guarani{" "}
              </Link>
              Sistemas. Lá exerço minhas funções como desenvolvedor front-end há
              cerca de 10 meses, e posso dizer que tem sido uma experiência
              incrível. Na Guarani, tenho a oportunidade de criar coisas novas,
              arquitetar projetos e testar novas features em um sistema que está
              em desenvolvimento. É um ambiente desafiador e estimulante, onde
              posso colocar em prática tudo o que aprendi e continuar aprendendo
              sempre mais.
            </p>
            <p className="mt-2 text-left text-[1.125rem] font-medium leading-6">
              E quem sabe, talvez no futuro eu tenha novas oportunidades e
              desafios pela frente. O importante é continuar aprendendo e
              buscando sempre o melhor para minha carreira e para o mundo da
              tecnologia.
            </p>
          </section>
          <section
            id="card-5"
            className="card invisible 
            h-auto 
            rounded-lg
            bg-black bg-opacity-60 p-6 text-white sm:visible md:animate-[1s_greeting_2000ms_backwards] lg:min-h-[459px] 2xl:max-w-[34.25rem]"
          >
            <p className="text-left text-[1.125rem] font-medium leading-6">
              Comecei minha carreira como eletricista na empresa do meu pai,
              aprendendo sobre segurança e precisão no trabalho, além do
              trabalho em equipe. Depois trabalhei como almoxarifado em uma
              empresa de distribuição de energia local, aprendendo sobre
              logística e controle de estoque, organização e comunicação eficaz.
              Em seguida, fui instalador de alarmes, aprendendo sobre atenção
              aos detalhes e resolução de problemas em tempo real. Como montador
              de painéis, aprendi sobre automação e controle de processos em
              projetos maiores. Agora, como desenvolvedor front-end, todas essas
              experiências me ajudaram a chegar onde estou, ensinando-me
              habilidades úteis em qualquer área profissional.
            </p>
          </section>
          <section
            id="card-6"
            className="card invisible 
            h-auto 
            rounded-lg
            bg-black bg-opacity-60 p-6 text-white sm:visible md:animate-[1s_greeting_2500ms_backwards] lg:min-h-[459px] 2xl:max-w-[34.25rem]"
          >
            <p className="text-left text-[1.125rem] font-medium leading-6">
              Quanto ao meu próximo passo, estou animado para aplicar minhas
              habilidades em novos projetos e desafios. Recentemente, tenho me
              dedicado a aprimorar minhas habilidades em devops e aprofundar meu
              conhecimento em arquiteturas modernas no front e back-end. Com
              essa nova especialização, espero ser capaz de trabalhar em
              projetos mais complexos e desafiadores, e contribuir para a
              entrega de soluções de alta qualidade. Se você estiver interessado
              em saber mais sobre minhas habilidades e experiências, sinta-se à
              vontade para clicar aqui para acessar meu documento completo.
            </p>
            <p className="mt-8 text-left text-[1.125rem] font-medium leading-6">
              <Link
                href="files/curr.pdf"
                target="_blank"
                download="Currículo Gustavo Murdiga"
              >
                Saiba mais
              </Link>
            </p>
          </section>
        </div>
      </section>
    </div>
  );
}
