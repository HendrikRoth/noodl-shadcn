import type { ReactNode } from "react";

import Noodl from "@noodl/noodl-sdk";
import { AspectRatio } from "./aspect-ratio";

export interface AspectRatioProps {
  ratio: number;
  ratioWidth: number;
  ratioHeight: number;
  children: ReactNode[];
}

export const AspectRatioNode = Noodl.defineReactNode({
  name: "shadcn.aspectRatio",
  displayName: "SH_AspectRatio",
  category: "shadcn",
  initialize() {},
  getReactComponent() {
    return (props: AspectRatioProps) => {
      props.ratio = props.ratioWidth / props.ratioHeight;
      return <AspectRatio ratio={props.ratio}>{props.children}</AspectRatio>;
    };
  },
  inputs: {},
  inputProps: {
    ratioWidth: {
      type: "number",
      default: 16,
      group: "Ratio",
      displayName: "Width",
    },
    ratioHeight: {
      type: "number",
      default: 9,
      group: "Ratio",
      displayName: "Height",
    },
  },
  outputProps: {},
});

Noodl.defineModule({
  reactNodes: [AspectRatioNode],
  nodes: [],
  setup() {},
});
