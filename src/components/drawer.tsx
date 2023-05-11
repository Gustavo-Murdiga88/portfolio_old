"use client";

import * as Drawer from "@radix-ui/react-alert-dialog";
import { ReactNode, useState } from "react";
import { List, X } from "@phosphor-icons/react";

interface DrawerProps {
  children?: ReactNode;
}

export function DrawerComponent({ children }: DrawerProps) {
  const [isOpen, setIsOpen] = useState(false);

  function handleClose() {
    const drawer = document.getElementById("content-drawer");

    if (!drawer) {
      return null;
    }
    drawer.classList.remove("animate-greeting-drawer");
    drawer.classList.add("animate-good-by-drawer");

    setTimeout(() => {
      setIsOpen(!isOpen);
    }, 700);
  }

  function handleOpen(open: boolean) {
    if (!isOpen) {
      setIsOpen(open);
      return;
    }

    handleClose();
  }

  return (
    <Drawer.Root open={isOpen} defaultOpen={false} onOpenChange={handleOpen}>
      <Drawer.Trigger asChild>
        <button className="rounded-sm leading-none">
          <List size={32} />
        </button>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay
          forceMount
          onClick={() => {
            handleClose();
          }}
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        />
        <Drawer.Content className="fixed bottom-0 top-0 w-3/4">
          <div
            id="content-drawer"
            className="absolute bottom-0 left-0 top-0 h-full w-full animate-greeting-drawer rounded-br-lg rounded-tr-lg bg-gray-900 p-4"
          >
            <Drawer.Cancel asChild>
              <button
                autoFocus
                onClick={handleClose}
                className="absolute right-4 top-4 rounded-md border-0 leading-none focus:outline-indigo-500"
              >
                <X size={24} />
              </button>
            </Drawer.Cancel>
            <span className="mb-4 mt-10 block px-4 text-xl font-bold">
              Olá, Seja bem-vindo
            </span>
            {children}
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
