import type { ReactNode } from "react";

import Noodl from "@noodl/noodl-sdk";
import * as Tooltip from "./tooltip";

export interface TooltipProps {
  props?: HTMLDivElement;
  children: ReactNode[];
}

export const TooltipNode = Noodl.defineReactNode({
  name: "shadcn.tooltip",
  displayName: "SH_Tooltip",
  category: "shadcn Tooltip",
  initialize() {},
  getReactComponent() {
    return (props: TooltipProps) => (
      <Tooltip.TooltipProvider>
        <Tooltip.Tooltip {...props}>{props.children}</Tooltip.Tooltip>
      </Tooltip.TooltipProvider>
    );
  },
  inputs: {},
  inputProps: {},
  outputProps: {},
});

export const TooltipTriggerNode = Noodl.defineReactNode({
  name: "shadcn.tooltipTrigger",
  displayName: "SH_TooltipTrigger",
  category: "shadcn Tooltip",
  initialize() {},
  getReactComponent() {
    return (props: TooltipProps) => (
      <Tooltip.TooltipTrigger {...props}>
        {props.children}
      </Tooltip.TooltipTrigger>
    );
  },
  inputs: {},
  inputProps: {},
  outputProps: {},
});

export const TooltipContentNode = Noodl.defineReactNode({
  name: "shadcn.tooltipContent",
  displayName: "SH_TooltipContent",
  category: "shadcn Tooltip",
  initialize() {},
  getReactComponent() {
    return (props: TooltipProps) => (
      <Tooltip.TooltipContent {...props}>
        {props.children}
      </Tooltip.TooltipContent>
    );
  },
  inputs: {},
  inputProps: {},
  outputProps: {},
});

Noodl.defineModule({
  reactNodes: [TooltipNode, TooltipTriggerNode, TooltipContentNode],
  nodes: [],
  setup() {},
});
