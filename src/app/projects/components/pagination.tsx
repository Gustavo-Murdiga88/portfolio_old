"use client";

import {
  ButtonReturn,
  ButtonReturnRefProps,
} from "@/app/components/buttonReturn";
import { CaretDoubleLeft, CaretDoubleRight } from "@phosphor-icons/react";
import { useRef, useState } from "react";

interface FetchProps {
  per_page?: number;
  page?: number;
}
type PaginationProps = {
  fetchNewRepositories: (data: FetchProps) => void;
  lastPage: number;
};

export function Pagination({
  fetchNewRepositories,
  lastPage,
}: PaginationProps) {
  const [paginationProps, setPaginationProps] = useState({
    page: 1,
  });

  const buttonReturnRefProps = useRef<ButtonReturnRefProps | null>(null);

  async function handlePagination(type: "add" | "subtract") {
    const page =
      type === "add"
        ? paginationProps.page + 1
        : paginationProps.page - 1 === 0
        ? 1
        : paginationProps.page - 1;

    await fetchNewRepositories({
      page,
    });

    buttonReturnRefProps.current?.handleToUpPage();

    setPaginationProps(() => ({
      page,
    }));
  }

  return (
    <>
      <div className="flex flex-row items-center justify-center gap-4 px-8 py-4">
        <div
          className="flex items-center justify-center gap-2 sm:gap-4"
          title="Página"
        >
          <button
            onClick={() => handlePagination("subtract")}
            disabled={paginationProps.page === 1}
            className="rounded-md bg-sky-700 px-2 py-2 disabled:cursor-not-allowed disabled:bg-sky-900"
          >
            <CaretDoubleLeft size={24} />
          </button>
          <span className="rounded-md bg-zinc-100 px-4 py-2 text-center font-semibold text-zinc-900">
            {paginationProps.page}
          </span>
          <button
            onClick={() => handlePagination("add")}
            className="rounded-md bg-sky-700 px-2 py-2 disabled:cursor-not-allowed disabled:bg-sky-900"
            disabled={paginationProps.page === lastPage}
          >
            <CaretDoubleRight size={24} />
          </button>
        </div>
      </div>
      <div className="mx-auto mb-28 w-full max-w-[96.875rem] pr-3">
        <ButtonReturn ref={buttonReturnRefProps} />
      </div>
    </>
  );
}
