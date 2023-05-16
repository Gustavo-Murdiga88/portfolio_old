"use client";

import { ArrowCircleUp } from "@phosphor-icons/react";
import {
  ForwardRefRenderFunction,
  forwardRef,
  useImperativeHandle,
  useState,
  useEffect,
  useCallback,
} from "react";

interface ButtonProps {
  shouldBeAppear?: boolean;
}

export interface ButtonReturnRefProps {
  handleToUpPage: () => void;
}

export const Component: ForwardRefRenderFunction<
  ButtonReturnRefProps,
  ButtonProps
> = ({ shouldBeAppear }: ButtonProps, ref) => {
  const [display, setDisplay] = useState(false);

  function handleToUpPage() {
    const scroll = document.querySelector(".not-scoller");
    if (scroll) {
      scroll.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }

  const onScroll = useCallback(
    (event: Event) => {
      const top = (event?.target as any).scrollTop as number;

      if (top > 100 && !display) {
        setDisplay(true);
      } else if (top === 0 && display) {
        setDisplay(false);
      }
    },
    [display]
  );

  useEffect(() => {
    const main = document.querySelector(".not-scoller");

    main?.addEventListener("scroll", onScroll);

    return () => {
      main?.removeEventListener("scroll", onScroll);
    };
  }, [onScroll]);

  useImperativeHandle(
    ref,
    () => {
      return {
        handleToUpPage,
      };
    },
    []
  );

  return (
    <button
      className={`fixed bottom-4 right-0 mr-5 flex items-center justify-center gap-2 rounded-full bg-sky-800 p-4 text-lg font-semibold focus:rounded-full sm:bottom-5 xl:right-custom ${
        display ? "visible" : "hidden"
      }`}
      onClick={handleToUpPage}
    >
      <ArrowCircleUp size={32} />
    </button>
  );
};

export const ButtonReturn = forwardRef(Component);
