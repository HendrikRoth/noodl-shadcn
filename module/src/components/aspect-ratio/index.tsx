import type { ReactNode } from "react";

import Noodl from "@noodl/noodl-sdk";
import { AspectRatio } from "./aspect-ratio";

export interface AspectRatioProps {
  ratio: number;
  children: ReactNode[];
}

export const AspectRatioNode = Noodl.defineReactNode({
  name: "shadcn.aspectRatio",
  displayName: "SH_AspectRatio",
  category: "shadcn",
  initialize() {},
  getReactComponent() {
    return (props: AspectRatioProps) => (
      <AspectRatio ratio={props.ratio}>{props.children}</AspectRatio>
    );
  },
  inputs: {},
  inputProps: {
    ratio: {
      type: "number",
      default: "16 / 9",
    },
  },
  outputProps: {},
});

Noodl.defineModule({
  reactNodes: [AspectRatioNode],
  nodes: [],
  setup() {},
});
