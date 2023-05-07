import Img from "next/image";
import memoji from "../../public/memoji.png";

export default function Home() {
  return (
    <div className="bg-page-main bg-no-repeat bg-cover h-screen w-full">
      <header>
        <nav>
          <ul className="flex flex-row justify-center items-center gap-5 py-5 font-medium tracking-tight list-none">
            <li>
              <a className="cursor-pointer hover:underline underline-offset-4">
                Home
              </a>
            </li>
            <li>
              <a className="cursor-pointer hover:underline underline-offset-4">
                About me
              </a>
            </li>
            <li>
              <a className="cursor-pointer hover:underline underline-offset-4">
                Career
              </a>
            </li>
            <li>
              <a className="cursor-pointer hover:underline underline-offset-4">
                Project
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <div className="flex justify-between items-center mt-48 mx-40 gap-36">
        <aside className="flex flex-col gap-4">
          <span className="font-bold text-2xl tracking-tight">
            Hey There 👋
          </span>
          <h1 className="text-title  font-bold tracking-tight leading-none">
            I am Gustavo
          </h1>
          <p className="w-134 font-bold tracking-tighter leading-5">
            I ve been a front-end developer for two years. I transform my
            creativity and knowledge on responsive websites full of
            user-friendly experiences. I live in constant search of improving
            what I already know and open to new learnings, in order to deliver
            the best to my partners.
          </p>
        </aside>

        <div className="relative rounded-full before:rounded-full  before:border-8 before:border-white before:absolute before:top-0 before:bottom-2 before:left-0 before:right-0">
          <Img
            src={memoji}
            width={475}
            height={449}
            alt="memoji do gustavo murdiga"
          />
        </div>
      </div>
    </div>
  );
}
