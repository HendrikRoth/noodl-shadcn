import type { ReactNode } from "react";

import Noodl from "@noodl/noodl-sdk";
import * as Sheet from "./sheet";

export interface SheetElementProps {
  children: ReactNode[];
}

export const SheetNode = Noodl.defineReactNode({
  name: "shadcn.sheet",
  displayName: "SH_Sheet",
  category: "shadcn",
  initialize() {},
  getReactComponent() {
    return (props: SheetElementProps) => (
      <Sheet.Sheet>{props.children}</Sheet.Sheet>
    );
  },
  inputs: {},
  inputProps: {},
  outputProps: {},
});

export interface SheetContentProps {
  side: "left" | "right" | "top" | "bottom";
  children: ReactNode[];
}

export const SheetContentNode = Noodl.defineReactNode({
  name: "shadcn.sheet.content",
  displayName: "SH_SheetContent",
  category: "shadcn",
  initialize() {},
  getReactComponent() {
    return (props: SheetContentProps) => (
      <Sheet.SheetContent side={props.side}>
        {props.children}
      </Sheet.SheetContent>
    );
  },
  inputs: {},
  inputProps: {
    side: {
      displayName: "Side",
      default: "right",
      type: {
        name: "enum",
        enums: ["left", "top", "bottom", "right"].map((e) => ({
          label: e,
          value: e,
        })),
      },
    },
  },
  outputProps: {},
});

export const SheetHeaderNode = Noodl.defineReactNode({
  name: "shadcn.sheet.header",
  displayName: "SH_SheetHeader",
  category: "shadcn",
  initialize() {},
  getReactComponent() {
    return (props: SheetElementProps) => (
      <Sheet.SheetHeader>{props.children}</Sheet.SheetHeader>
    );
  },
  inputs: {},
  inputProps: {},
  outputProps: {},
});

export const SheetTriggerNode = Noodl.defineReactNode({
  name: "shadcn.sheet.trigger",
  displayName: "SH_SheetTrigger",
  category: "shadcn",
  initialize() {},
  getReactComponent() {
    return (props: SheetElementProps) => (
      <Sheet.SheetTrigger>{props.children}</Sheet.SheetTrigger>
    );
  },
  inputs: {},
  inputProps: {
    text: {
      type: "string",
    },
  },
  outputProps: {},
});

export interface SheetTitleProps {
  text: string;
}

export const SheetTitleNode = Noodl.defineReactNode({
  name: "shadcn.sheet.title",
  displayName: "SH_SheetTitle",
  category: "shadcn",
  initialize() {},
  getReactComponent() {
    return (props: SheetTitleProps) => (
      <Sheet.SheetTitle>{props.text}</Sheet.SheetTitle>
    );
  },
  inputs: {},
  inputProps: {
    text: {
      type: "string",
    },
  },
  outputProps: {},
});

export interface SheetDescriptionProps {
  text: string;
}

export const SheetDescriptionNode = Noodl.defineReactNode({
  name: "shadcn.sheet.description",
  displayName: "SH_SheetDescription",
  category: "shadcn",
  initialize() {},
  getReactComponent() {
    return (props: SheetDescriptionProps) => (
      <Sheet.SheetDescription>{props.text}</Sheet.SheetDescription>
    );
  },
  inputs: {},
  inputProps: {
    text: {
      type: "string",
    },
  },
  outputProps: {},
});

export const SheetFooterNode = Noodl.defineReactNode({
  name: "shadcn.sheet.footer",
  displayName: "SH_SheetFooter",
  category: "shadcn",
  initialize() {},
  getReactComponent() {
    return (props: SheetElementProps) => (
      <Sheet.SheetFooter>{props.children}</Sheet.SheetFooter>
    );
  },
  inputs: {},
  inputProps: {},
  outputProps: {},
});

export const SheetCloseNode = Noodl.defineReactNode({
  name: "shadcn.sheet.close",
  displayName: "SH_SheetClose",
  category: "shadcn",
  initialize() {},
  getReactComponent() {
    return (props: SheetElementProps) => (
      <Sheet.SheetClose>{props.children}</Sheet.SheetClose>
    );
  },
  inputs: {},
  inputProps: {},
  outputProps: {},
});

Noodl.defineModule({
  reactNodes: [
    SheetNode,
    SheetContentNode,
    SheetHeaderNode,
    SheetFooterNode,
    SheetCloseNode,
    SheetTriggerNode,
    SheetTitleNode,
    SheetDescriptionNode,
  ],
  nodes: [],
  setup() {},
});
