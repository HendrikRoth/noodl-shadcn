import type { ReactNode } from "react";

import Noodl from "@noodl/noodl-sdk";
import { RadioGroup, RadioGroupItem } from "./radio-group";

export interface RadioGroupProps {
  defaultValue: string;
  children: ReactNode[];
}

export const RadioGroupNode = Noodl.defineReactNode({
  name: "shadcn.radiogroup",
  displayName: "SH_RadioGroup",
  category: "shadcn RadioGroup",
  initialize() {},
  getReactComponent() {
    return (props: RadioGroupProps) => (
      <RadioGroup defaultValue={props.defaultValue}>
        {props.children}
      </RadioGroup>
    );
  },
  inputs: {},
  inputProps: {
    defaultValue: {
      type: "string",
    },
  },
  outputProps: {},
});

export interface RadioGroupItemProps {
  value: string;
  children: ReactNode[];
}

export const RadioGroupItemNode = Noodl.defineReactNode({
  name: "shadcn.radiogroup.item",
  displayName: "SH_RadioGroupItem",
  category: "shadcn RadioGroup",
  initialize() {},
  getReactComponent() {
    return (props: RadioGroupItemProps) => (
      <RadioGroupItem value={props.value}>{props.children}</RadioGroupItem>
    );
  },
  inputs: {},
  inputProps: {
    value: {
      type: "string",
    },
  },
  outputProps: {},
});

Noodl.defineModule({
  reactNodes: [RadioGroupNode, RadioGroupItemNode],
  nodes: [],
  setup() {},
});
