import type { ReactNode } from "react";

import Noodl from "@noodl/noodl-sdk";
import * as HoverCard from "./hover-card";

export interface HoverCardElementProps {
  children: ReactNode[];
}

export const HoverCardNode = Noodl.defineReactNode({
  name: "shadcn.hovercard",
  displayName: "SH_HoverCard",
  category: "shadcn HoverCard",
  initialize() {},
  getReactComponent() {
    return (props: HoverCardElementProps) => (
      <HoverCard.HoverCard>{props.children}</HoverCard.HoverCard>
    );
  },
  inputs: {},
  inputProps: {},
  outputProps: {},
});

export const HoverCardContentNode = Noodl.defineReactNode({
  name: "shadcn.hovercard.content",
  displayName: "SH_HoverCardContent",
  category: "shadcn HoverCard",
  initialize() {},
  getReactComponent() {
    return (props: HoverCardElementProps) => (
      <HoverCard.HoverCardContent>{props.children}</HoverCard.HoverCardContent>
    );
  },
  inputs: {},
  inputProps: {},
  outputProps: {},
});

export const HoverCardTriggerNode = Noodl.defineReactNode({
  name: "shadcn.hovercard.trigger",
  displayName: "SH_HoverCardTrigger",
  category: "shadcn HoverCard",
  initialize() {},
  getReactComponent() {
    return (props: HoverCardElementProps) => (
      <HoverCard.HoverCardTrigger>{props.children}</HoverCard.HoverCardTrigger>
    );
  },
  inputs: {},
  inputProps: {},
  outputProps: {},
});

Noodl.defineModule({
  reactNodes: [HoverCardNode, HoverCardContentNode, HoverCardTriggerNode],
  nodes: [],
  setup() {},
});
