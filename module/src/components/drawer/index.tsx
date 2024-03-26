import type { ReactNode } from "react";

import Noodl from "@noodl/noodl-sdk";
import * as Drawer from "./drawer";

export interface DrawerElementProps {
  children: ReactNode[];
}

export const DrawerNode = Noodl.defineReactNode({
  name: "shadcn.drawer",
  displayName: "SH_Drawer",
  category: "shadcn Drawer",
  initialize() {},
  getReactComponent() {
    return (props: DrawerElementProps) => (
      <Drawer.Drawer>{props.children}</Drawer.Drawer>
    );
  },
  inputs: {},
  inputProps: {},
  outputProps: {},
});

export const DrawerTriggerNode = Noodl.defineReactNode({
  name: "shadcn.drawerTrigger",
  displayName: "SH_DrawerTrigger",
  category: "shadcn Drawer",
  initialize() {},
  getReactComponent() {
    return (props: DrawerElementProps) => (
      <Drawer.DrawerTrigger>{props.children}</Drawer.DrawerTrigger>
    );
  },
  inputs: {},
  inputProps: {},
  outputProps: {},
});

export const DrawerContentNode = Noodl.defineReactNode({
  name: "shadcn.drawerContent",
  displayName: "SH_DrawerContent",
  category: "shadcn Drawer",
  initialize() {},
  getReactComponent() {
    return (props: DrawerElementProps) => (
      <Drawer.DrawerContent>{props.children}</Drawer.DrawerContent>
    );
  },
  inputs: {},
  inputProps: {},
  outputProps: {},
});

export const DrawerHeaderNode = Noodl.defineReactNode({
  name: "shadcn.drawerHeader",
  displayName: "SH_DrawerHeader",
  category: "shadcn Drawer",
  initialize() {},
  getReactComponent() {
    return (props: DrawerElementProps) => (
      <Drawer.DrawerHeader>{props.children}</Drawer.DrawerHeader>
    );
  },
  inputs: {},
  inputProps: {},
  outputProps: {},
});

export const DrawerFooterNode = Noodl.defineReactNode({
  name: "shadcn.drawerFooter",
  displayName: "SH_DrawerFooter",
  category: "shadcn Drawer",
  initialize() {},
  getReactComponent() {
    return (props: DrawerElementProps) => (
      <Drawer.DrawerFooter>{props.children}</Drawer.DrawerFooter>
    );
  },
  inputs: {},
  inputProps: {},
  outputProps: {},
});

export const DrawerCloseNode = Noodl.defineReactNode({
  name: "shadcn.drawerClose",
  displayName: "SH_DrawerClose",
  category: "shadcn Drawer",
  initialize() {},
  getReactComponent() {
    return (props: DrawerElementProps) => (
      <Drawer.DrawerClose>{props.children}</Drawer.DrawerClose>
    );
  },
  inputs: {},
  inputProps: {},
  outputProps: {},
});

export interface DrawerTitleProps {
  text: string;
}

export const DrawerTitleNode = Noodl.defineReactNode({
  name: "shadcn.drawerTitle",
  displayName: "SH_DrawerTitle",
  category: "shadcn Drawer",
  initialize() {},
  getReactComponent() {
    return (props: DrawerTitleProps) => (
      <Drawer.DrawerTitle>{props.text}</Drawer.DrawerTitle>
    );
  },
  inputs: {},
  inputProps: {
    title: {
      type: "string",
    },
  },
  outputProps: {},
});

export interface DrawerDescriptionProps {
  text: string;
}

export const DrawerDescriptionNode = Noodl.defineReactNode({
  name: "shadcn.drawerDescription",
  displayName: "SH_DrawerDescription",
  category: "shadcn Drawer",
  initialize() {},
  getReactComponent() {
    return (props: DrawerDescriptionProps) => (
      <Drawer.DrawerDescription>{props.text}</Drawer.DrawerDescription>
    );
  },
  inputs: {},
  inputProps: {
    title: {
      type: "string",
    },
  },
  outputProps: {},
});

Noodl.defineModule({
  reactNodes: [
    DrawerNode,
    DrawerTriggerNode,
    DrawerContentNode,
    DrawerHeaderNode,
    DrawerFooterNode,
    DrawerCloseNode,
    DrawerTitleNode,
    DrawerDescriptionNode,
  ],
  nodes: [],
  setup() {},
});
