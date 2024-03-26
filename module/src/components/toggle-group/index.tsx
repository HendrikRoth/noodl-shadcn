import type { ReactNode } from "react";

import Noodl from "@noodl/noodl-sdk";
import * as ToggleGroup from "./toggle-group";

export interface ToggleGroupProps {
  type: "single" | "multiple";
  children: ReactNode[];
}

export const ToggleGroupNode = Noodl.defineReactNode({
  name: "shadcn.toggleGroup",
  displayName: "SH_ToggleGroup",
  category: "shadcn Toggle",
  initialize() {},
  getReactComponent() {
    return (props: ToggleGroupProps) => (
      <ToggleGroup.ToggleGroup type={props.type}>
        {props.children}
      </ToggleGroup.ToggleGroup>
    );
  },
  inputs: {},
  inputProps: {
    type: {
      displayName: "Type",
      default: "single",
      type: {
        name: "enum",
        enums: ["single", "double"].map((e) => ({ label: e, value: e })),
      },
    },
  },
  outputProps: {},
});

export interface ToggleGroupItemProps {
  value: string;
  ariaLabel: string;
  children: ReactNode[];
}

export const ToggleGroupItemNode = Noodl.defineReactNode({
  name: "shadcn.toggleGroupItem",
  displayName: "SH_ToggleGroupItem",
  category: "shadcn Toggle",
  initialize() {},
  getReactComponent() {
    return (props: ToggleGroupItemProps) => (
      <ToggleGroup.ToggleGroupItem
        value={props.value}
        aria-label={props.ariaLabel}
      >
        {props.children}
      </ToggleGroup.ToggleGroupItem>
    );
  },
  inputs: {},
  inputProps: {
    value: {
      type: "string",
    },
    ariaLabel: {
      type: "string",
    },
  },
  outputProps: {},
});

Noodl.defineModule({
  reactNodes: [ToggleGroupNode, ToggleGroupItemNode],
  nodes: [],
  setup() {},
});
