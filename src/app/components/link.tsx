import { ComponentProps, ReactNode } from "react";
import LinkNext, { LinkProps as NextLinkProps } from "next/link";

interface LinkProps extends NextLinkProps, ComponentProps<typeof LinkNext> {
  children: ReactNode;
}

export function Link({ children, ...props }: LinkProps) {
  return (
    <LinkNext
      {...props}
      className="font-extrabold text-white hover:underline hover:underline-offset-2"
    >
      {children}
    </LinkNext>
  );
}
