"use client";

import { GitBranch, GitCommit } from "@phosphor-icons/react";
import { useState } from "react";
import { Pagination } from "./pagination";
import { fetchManyRepositories } from "../page";
import { Loading } from "@/app/components/loader";
import Img from "next/image";

import react from "../../assets/wallpaperReact.png";
import node from "../../assets/wallpaperNodeJs.png";
import reactNative from "../../assets/wallpaperReactNative.png";
import eslint from "../../assets/eslint.png";
import expo from "../../assets/expo.jpg";
import reactSecondary from "../../assets/reactsecondary.jpg";
import php from "../../assets/php.png";
import csharp from "../../assets/CSHARP.png";

interface RepositoriesProps {
  repositories: {
    id: string;
    name: string;
    full_name: string;
    html_url: string;
    description: string | null;
  }[];
}

interface FetchRepositoriesProps {
  per_page?: number;
  page?: number;
  resetLastPage?: boolean;
}

export function Repositories({ repositories }: RepositoriesProps) {
  const [list, setRepositories] =
    useState<RepositoriesProps["repositories"]>(repositories);

  const [isLoading, setIsLoading] = useState(false);

  const [lastPage, setLastPage] = useState(0);

  async function fetchRepositories({ page, per_page }: FetchRepositoriesProps) {
    setIsLoading(true);
    const repos = await fetchManyRepositories({ page, per_page });

    setTimeout(() => {
      setIsLoading(false);
    }, 0);

    if (repos.length < 12 && page && page > 0) {
      setLastPage(page);
    }

    setRepositories(repos);
  }

  return (
    <div className="flex flex-col gap-10">
      {isLoading && <Loading />}
      <main className="mx-auto mt-10 grid max-w-[96.875rem] grid-cols-1 gap-4 px-8 md:grid-cols-2 lg:md:grid-cols-3">
        {list.map((item, index) => {
          const image = (() => {
            const img = item.name.toLowerCase();

            const reactDefault = {
              primary: react,
              secondary: reactSecondary,
            };

            if (img.includes("eslint")) {
              return eslint;
            }

            if (img.includes("api")) {
              return node;
            }

            if (img.includes("native") || img.includes("rentx")) {
              return reactNative;
            }

            if (img.includes("go") || img.includes("expo")) {
              return expo;
            }

            if (img.includes("tcc") || img.includes("program-fotovoltaica")) {
              return csharp;
            }

            if (img.includes("cadastro_de_produtos")) {
              return php;
            }

            if (index % 2 === 0) {
              return reactDefault.primary;
            }

            return reactDefault.secondary;
          })();

          return (
            <div
              key={item.id}
              className="rounded-md bg-black bg-opacity-75 p-4"
            >
              <Img
                src={image}
                alt={item.name}
                height={1200}
                width={1080}
                quality={100}
                className="left-0 top-0 h-[9.375rem] w-full rounded-md object-cover"
              />

              <header className="mt-3 flex items-center justify-between">
                <span className="overflow-hidden text-ellipsis whitespace-nowrap text-2xl font-bold capitalize text-zinc-50">
                  {item.name}
                </span>
                <span className="leading-8">
                  <GitCommit size={32} />
                </span>
              </header>
              <div className="mt-4 flex items-center justify-between gap-4">
                <span className="block overflow-hidden text-ellipsis whitespace-nowrap text-lg font-semibold text-zinc-50">
                  <span className="block">Full name:</span>
                  {item.full_name}
                </span>
                <span>
                  <GitBranch size={24} />
                </span>
              </div>
              <div className="mt-4 flex flex-col">
                <span className="block overflow-hidden text-ellipsis whitespace-nowrap text-lg font-semibold text-zinc-50">
                  Descrição
                </span>
                <span>{item.description || "Não há"}</span>
              </div>
              <div className="mt-6">
                <span className="block">Acesse aqui:</span>
                <a
                  href={item.html_url}
                  target="_blank"
                  className="text-md text-ellipsis break-all font-semibold text-zinc-100 hover:underline hover:underline-offset-4"
                >
                  {item.html_url}
                </a>
              </div>
            </div>
          );
        })}
      </main>
      <Pagination
        fetchNewRepositories={fetchRepositories}
        lastPage={lastPage}
      />
    </div>
  );
}
