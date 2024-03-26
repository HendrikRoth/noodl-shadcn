import type { ReactNode } from "react";

import Noodl from "@noodl/noodl-sdk";
import * as Dialog from "./dialog";

export interface DialogProps {
  props?: HTMLDivElement;
  children: ReactNode[];
}

export interface DialogHeaderProps {
  label?: string;
  props?: HTMLDivElement;
  children: ReactNode[];
}

export interface DialogTitleProps {
  label?: string;
  props?: HTMLDivElement;
  children: ReactNode[];
}

export interface DialogDescriptionProps {
  label?: string;
  props?: HTMLDivElement;
  children: ReactNode[];
}

export const DialogNode = Noodl.defineReactNode({
  name: "shadcn.dialog",
  displayName: "SH_Dialog",
  category: "shadcn Dialog",
  initialize() {},
  getReactComponent() {
    return (props: DialogProps) => (
      <Dialog.Dialog {...props}>{props.children}</Dialog.Dialog>
    );
  },
  inputs: {},
  inputProps: {},
  outputProps: {},
});

export const DialogTrigger = Noodl.defineReactNode({
  name: "shadcn.dialogTrigger",
  displayName: "SH_DialogTrigger",
  category: "shadcn Dialog",
  initialize() {},
  getReactComponent() {
    return (props: DialogProps) => (
      <Dialog.DialogTrigger {...props}>{props.children}</Dialog.DialogTrigger>
    );
  },
  inputs: {},
  inputProps: {},
  outputProps: {},
});

export const DialogContent = Noodl.defineReactNode({
  name: "shadcn.dialogContent",
  displayName: "SH_DialogContent",
  category: "shadcn Dialog",
  initialize() {},
  getReactComponent() {
    return (props: DialogProps) => (
      <Dialog.DialogContent {...props}>{props.children}</Dialog.DialogContent>
    );
  },
  inputs: {},
  inputProps: {},
  outputProps: {},
});

export const DialogHeader = Noodl.defineReactNode({
  name: "shadcn.dialogHeader",
  displayName: "SH_DialogHeader",
  category: "shadcn Dialog",
  initialize() {},
  getReactComponent() {
    return (props: DialogHeaderProps) => (
      <Dialog.DialogHeader {...props}>
        {props.label}
        {props.children}
      </Dialog.DialogHeader>
    );
  },
  inputs: {},
  inputProps: {},
  outputProps: {},
});

export const DialogFooter = Noodl.defineReactNode({
  name: "shadcn.dialogFooter",
  displayName: "SH_DialogFooter",
  category: "shadcn Dialog",
  initialize() {},
  getReactComponent() {
    return (props: DialogProps) => (
      <Dialog.DialogFooter {...props}>{props.children}</Dialog.DialogFooter>
    );
  },
  inputs: {},
  inputProps: {},
  outputProps: {},
});

export const DialogClose = Noodl.defineReactNode({
  name: "shadcn.dialogClose",
  displayName: "SH_DialogClose",
  category: "shadcn Dialog",
  initialize() {},
  getReactComponent() {
    return (props: DialogProps) => (
      <Dialog.DialogClose {...props}>{props.children}</Dialog.DialogClose>
    );
  },
  inputs: {},
  inputProps: {},
  outputProps: {},
});

export const DialogTitle = Noodl.defineReactNode({
  name: "shadcn.dialogTitle",
  displayName: "SH_DialogTitle",
  category: "shadcn Dialog",
  initialize() {},
  getReactComponent() {
    return (props: DialogTitleProps) => (
      <Dialog.DialogTitle {...props}>
        {props.label}
        {props.children}
      </Dialog.DialogTitle>
    );
  },
  inputs: {},
  inputProps: {
    label: {
      type: "string",
    },
  },
  outputProps: {},
});

export const DialogDescription = Noodl.defineReactNode({
  name: "shadcn.dialogDescription",
  displayName: "SH_DialogDescription",
  category: "shadcn Dialog",
  initialize() {},
  getReactComponent() {
    return (props: DialogDescriptionProps) => (
      <Dialog.DialogDescription {...props}>
        {props.label}
        {props.children}
      </Dialog.DialogDescription>
    );
  },
  inputs: {},
  inputProps: {
    label: {
      type: "string",
    },
  },
  outputProps: {},
});

Noodl.defineModule({
  reactNodes: [
    DialogNode,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogFooter,
    DialogClose,
    DialogTitle,
    DialogDescription,
  ],
  nodes: [],
  setup() {},
});
