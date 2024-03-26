import type { ReactNode } from "react";

import Noodl from "@noodl/noodl-sdk";
import * as Select from "./select";

export interface SelectProps {
  props?: HTMLDivElement;
  children: ReactNode[];
}

export interface SelectItemProps {
  value: string;
  label: string;
  props?: HTMLDivElement;
  children: ReactNode[];
}

export interface SelectValueProps {
  placeholder?: string;
  props?: HTMLDivElement;
  children: ReactNode[];
}

export const SelectNode = Noodl.defineReactNode({
  name: "shadcn.select",
  displayName: "SH_Select",
  category: "shadcn Select",
  initialize() {},
  getReactComponent() {
    return (props: SelectProps) => (
      <Select.Select {...props}>{props.children}</Select.Select>
    );
  },
  inputs: {},
  inputProps: {},
  outputProps: {},
});

export const SelectGroupNode = Noodl.defineReactNode({
  name: "shadcn.selectGroup",
  displayName: "SH_SelectGroup",
  category: "shadcn Select",
  initialize() {},
  getReactComponent() {
    return (props: SelectProps) => (
      <Select.SelectGroup {...props}>{props.children}</Select.SelectGroup>
    );
  },
  inputs: {},
  inputProps: {},
  outputProps: {},
});

export const SelectValueNode = Noodl.defineReactNode({
  name: "shadcn.selectValue",
  displayName: "SH_SelectValue",
  category: "shadcn Select",
  initialize() {},
  getReactComponent() {
    return (props: SelectProps) => (
      <Select.SelectValue {...props}>{props.children}</Select.SelectValue>
    );
  },
  inputs: {},
  inputProps: {
    placeholder: {
      type: "string",
    },
  },
  outputProps: {},
});

export const SelectTriggerNode = Noodl.defineReactNode({
  name: "shadcn.selectTrigger",
  displayName: "SH_SelectTrigger",
  category: "shadcn Select",
  initialize() {},
  getReactComponent() {
    return (props: SelectProps) => (
      <Select.SelectTrigger {...props}>{props.children}</Select.SelectTrigger>
    );
  },
  inputs: {},
  inputProps: {},
  outputProps: {},
});

export const SelectItemNode = Noodl.defineReactNode({
  name: "shadcn.selectItem",
  displayName: "SH_SelectItem",
  category: "shadcn Select",
  initialize() {},
  getReactComponent() {
    return (props: SelectItemProps) => (
      <Select.SelectItem {...props}>{props.label}</Select.SelectItem>
    );
  },
  inputs: {},
  inputProps: {
    value: {
      type: "string",
    },
    label: {
      type: "string",
    },
  },
  outputProps: {},
});

export const SelectContentNode = Noodl.defineReactNode({
  name: "shadcn.selectContent",
  displayName: "SH_SelectContent",
  category: "shadcn Select",
  initialize() {},
  getReactComponent() {
    return (props: SelectProps) => (
      <Select.SelectContent {...props}>{props.children}</Select.SelectContent>
    );
  },
  inputs: {},
  inputProps: {},
  outputProps: {},
});

Noodl.defineModule({
  reactNodes: [
    SelectNode,
    SelectGroupNode,
    SelectValueNode,
    SelectTriggerNode,
    SelectItemNode,
    SelectContentNode,
  ],
  nodes: [],
  setup() {},
});
