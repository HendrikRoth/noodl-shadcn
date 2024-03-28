import type { ReactNode } from "react";

import Noodl from "@noodl/noodl-sdk";
import { ScrollArea } from "./scroll-area";

export interface ScrollAreaProps {
  children: ReactNode[];
}

export const ScrollAreaNode = Noodl.defineReactNode({
  name: "shadcn.scrollArea",
  displayName: "SH_ScrollArea",
  initialize() {},
  getReactComponent() {
    return (props: ScrollAreaProps) => (
      <ScrollArea>{props.children}</ScrollArea>
    );
  },
  inputs: {},
  inputProps: {},
  outputProps: {},
});

Noodl.defineModule({
  reactNodes: [ScrollAreaNode],
  nodes: [],
  setup() {},
});
