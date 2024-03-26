import type { ReactNode } from "react";

import Noodl from "@noodl/noodl-sdk";
import * as Popover from "./popover";

export interface PopoverProps {
  children: ReactNode[];
}

export const PopoverNode = Noodl.defineReactNode({
  name: "shadcn.popover",
  displayName: "SH_Popover",
  category: "shadcn Popover",
  initialize() {},
  getReactComponent() {
    return (props: PopoverProps) => (
      <Popover.Popover>{props.children}</Popover.Popover>
    );
  },
  inputs: {},
  inputProps: {},
  outputProps: {},
});

export const PopoverTriggerNode = Noodl.defineReactNode({
  name: "shadcn.popoverTrigger",
  displayName: "SH_PopoverTrigger",
  category: "shadcn Popover",
  initialize() {},
  getReactComponent() {
    return (props: PopoverProps) => (
      <Popover.PopoverTrigger>{props.children}</Popover.PopoverTrigger>
    );
  },
  inputs: {},
  inputProps: {},
  outputProps: {},
});

export const PopoverContentNode = Noodl.defineReactNode({
  name: "shadcn.popoverContent",
  displayName: "SH_PopoverContent",
  category: "shadcn Popover",
  initialize() {},
  getReactComponent() {
    return (props: PopoverProps) => (
      <Popover.PopoverContent>{props.children}</Popover.PopoverContent>
    );
  },
  inputs: {},
  inputProps: {},
  outputProps: {},
});

Noodl.defineModule({
  reactNodes: [PopoverNode, PopoverTriggerNode, PopoverContentNode],
  nodes: [],
  setup() {},
});
