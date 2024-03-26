import type { ReactNode } from "react";

import Noodl from "@noodl/noodl-sdk";
import { Toggle } from "./toggle";

export interface ToggleProps {
  ariaLabel: string;
  children: ReactNode[];
}

export const ToggleNode = Noodl.defineReactNode({
  name: "shadcn.toggle",
  displayName: "SH_Toggle",
  category: "shadcn",
  initialize() {},
  getReactComponent() {
    return (props: ToggleProps) => (
      <Toggle aria-label={props.ariaLabel}>{props.children}</Toggle>
    );
  },
  inputs: {},
  inputProps: {
    label: {
      displayName: "Aria label",
      type: "string",
      default: "Label",
    },
  },
  outputProps: {},
});

Noodl.defineModule({
  reactNodes: [ToggleNode],
  nodes: [],
  setup() {},
});
