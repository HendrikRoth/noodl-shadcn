import type { ReactNode } from "react";

import Noodl from "@noodl/noodl-sdk";
import { Separator } from "./separator";

export const SeparatorNode = Noodl.defineReactNode({
  name: "shadcn.separator",
  displayName: "SH_Separator",
  initialize() {},
  getReactComponent() {
    return () => <Separator />;
  },
  inputs: {},
  inputProps: {},
  outputProps: {},
});

Noodl.defineModule({
  reactNodes: [SeparatorNode],
  nodes: [],
  setup() {},
});
