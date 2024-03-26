import type { ReactNode } from "react";

import Noodl from "@noodl/noodl-sdk";
import * as DropdownMenu from "./dropdown-menu";

export interface DropdownMenuElementProps {
  children: ReactNode[];
}

export const DropdownMenuNode = Noodl.defineReactNode({
  name: "shadcn.dropdownMenu",
  displayName: "SH_DropdownMenu",
  category: "shadcn DropdownMenu",
  initialize() {},
  getReactComponent() {
    return (props: DropdownMenuElementProps) => (
      <DropdownMenu.DropdownMenu>{props.children}</DropdownMenu.DropdownMenu>
    );
  },
  inputs: {},
  inputProps: {},
  outputProps: {},
});

export const DropdownMenuGroupNode = Noodl.defineReactNode({
  name: "shadcn.dropdownMenuGroup",
  displayName: "SH_DropdownMenuGroup",
  category: "shadcn DropdownMenu",
  initialize() {},
  getReactComponent() {
    return (props: DropdownMenuElementProps) => (
      <DropdownMenu.DropdownMenuGroup>
        {props.children}
      </DropdownMenu.DropdownMenuGroup>
    );
  },
  inputs: {},
  inputProps: {},
  outputProps: {},
});

export const DropdownMenuTriggerNode = Noodl.defineReactNode({
  name: "shadcn.dropdownMenuTrigger",
  displayName: "SH_DropdownMenuTrigger",
  category: "shadcn DropdownMenu",
  initialize() {},
  getReactComponent() {
    return (props: DropdownMenuElementProps) => (
      <DropdownMenu.DropdownMenuTrigger>
        {props.children}
      </DropdownMenu.DropdownMenuTrigger>
    );
  },
  inputs: {},
  inputProps: {},
  outputProps: {},
});

export const DropdownMenuContentNode = Noodl.defineReactNode({
  name: "shadcn.dropdownMenuContent",
  displayName: "SH_DropdownMenuContent",
  category: "shadcn DropdownMenu",
  initialize() {},
  getReactComponent() {
    return (props: DropdownMenuElementProps) => (
      <DropdownMenu.DropdownMenuContent>
        {props.children}
      </DropdownMenu.DropdownMenuContent>
    );
  },
  inputs: {},
  inputProps: {},
  outputProps: {},
});

export const DropdownMenuPortalNode = Noodl.defineReactNode({
  name: "shadcn.dropdownMenuPortal",
  displayName: "SH_DropdownMenuPortal",
  category: "shadcn DropdownMenu",
  initialize() {},
  getReactComponent() {
    return (props: DropdownMenuElementProps) => (
      <DropdownMenu.DropdownMenuPortal>
        {props.children}
      </DropdownMenu.DropdownMenuPortal>
    );
  },
  inputs: {},
  inputProps: {},
  outputProps: {},
});

export const DropdownMenuSubContentNode = Noodl.defineReactNode({
  name: "shadcn.dropdownMenuSubContent",
  displayName: "SH_DropdownMenuSubContent",
  category: "shadcn DropdownMenu",
  initialize() {},
  getReactComponent() {
    return (props: DropdownMenuElementProps) => (
      <DropdownMenu.DropdownMenuSubContent>
        {props.children}
      </DropdownMenu.DropdownMenuSubContent>
    );
  },
  inputs: {},
  inputProps: {},
  outputProps: {},
});

export interface DropdownMenuLabelProps {
  text: string;
}

export const DropdownMenuLabelNode = Noodl.defineReactNode({
  name: "shadcn.dropdownMenuLabel",
  displayName: "SH_DropdownMenuLabel",
  category: "shadcn DropdownMenu",
  initialize() {},
  getReactComponent() {
    return (props: DropdownMenuLabelProps) => (
      <DropdownMenu.DropdownMenuLabel>
        {props.text}
      </DropdownMenu.DropdownMenuLabel>
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

export const DropdownMenuSeparatorNode = Noodl.defineReactNode({
  name: "shadcn.dropdownMenuSeparator",
  displayName: "SH_DropdownMenuSeparator",
  category: "shadcn DropdownMenu",
  initialize() {},
  getReactComponent() {
    return () => <DropdownMenu.DropdownMenuSeparator />;
  },
  inputs: {},
  inputProps: {},
  outputProps: {},
});

export interface DropdownMenuItemProps {
  text: string;
}

export const DropdownMenuItemNode = Noodl.defineReactNode({
  name: "shadcn.dropdownMenuItem",
  displayName: "SH_DropdownMenuItem",
  category: "shadcn DropdownMenu",
  initialize() {},
  getReactComponent() {
    return (props: DropdownMenuItemProps) => (
      <DropdownMenu.DropdownMenuItem>
        {props.text}
      </DropdownMenu.DropdownMenuItem>
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

Noodl.defineModule({
  reactNodes: [
    DropdownMenuNode,
    DropdownMenuGroupNode,
    DropdownMenuTriggerNode,
    DropdownMenuContentNode,
    DropdownMenuLabelNode,
    DropdownMenuSeparatorNode,
    DropdownMenuItemNode,
    DropdownMenuPortalNode,
    DropdownMenuSubContentNode,
  ],
  nodes: [],
  setup() {},
});
