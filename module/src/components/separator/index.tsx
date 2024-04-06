import type { ReactNode } from "react";

import Noodl from "@noodl/noodl-sdk";
import { Separator } from "./separator";

export interface SeparatorProps {
  orientation: "vertical" | "horizontal";
}

export const SeparatorNode = Noodl.defineReactNode({
  name: "shadcn.separator",
  displayName: "SH_Separator",
  initialize() {},
  getReactComponent() {
    return (props: SeparatorProps) => <Separator {...props} />;
  },
  inputs: {},
  inputProps: {
    orientation: {
      type: {
        name: "enum",
        enums: ["horizontal", "vertical"].map((e) => ({
          label: e,
          value: e,
        })),
      },
    },
  },
  outputProps: {},
});

Noodl.defineModule({
  reactNodes: [SeparatorNode],
  nodes: [],
  setup() {},
});
