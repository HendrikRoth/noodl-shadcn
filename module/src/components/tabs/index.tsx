import type { ReactNode } from "react";

import Noodl from "@noodl/noodl-sdk";
import * as Tabs from "./tabs";

export interface TabsProps {
  defaultValue?: string;
  children: ReactNode[];
}

export interface TabsListProps {
  defaultValue?: string;
  children: ReactNode[];
}

export interface TabsTriggerProps {
  value: string;
  label: string;
  children: ReactNode[];
}

export interface TabsContentProps {
  value: string;
  children: ReactNode[];
}

export const TabsNode = Noodl.defineReactNode({
  name: "shadcn.tabs",
  displayName: "SH_Tabs",
  category: "shadcn Tabs",
  initialize() {},
  getReactComponent() {
    return (props: TabsProps) => <Tabs.Tabs>{props.children}</Tabs.Tabs>;
  },
  inputs: {},
  inputProps: {
    defaultValue: {
      type: "string",
    },
  },
  outputProps: {},
});

export const TabsListNode = Noodl.defineReactNode({
  name: "shadcn.tabsList",
  displayName: "SH_TabsList",
  category: "shadcn Tabs",
  initialize() {},
  getReactComponent() {
    return (props: TabsListProps) => (
      <Tabs.TabsList>{props.children}</Tabs.TabsList>
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

export const TabsTriggerNode = Noodl.defineReactNode({
  name: "shadcn.tabsTrigger",
  displayName: "SH_TabsTrigger",
  category: "shadcn Tabs",
  initialize() {},
  getReactComponent() {
    return (props: TabsTriggerProps) => (
      <Tabs.TabsTrigger {...props}>{props.label}</Tabs.TabsTrigger>
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

export const TabsContentNode = Noodl.defineReactNode({
  name: "shadcn.tabsContent",
  displayName: "SH_TabsContent",
  category: "shadcn Tabs",
  initialize() {},
  getReactComponent() {
    return (props: TabsContentProps) => (
      <Tabs.TabsContent {...props}>{props.children}</Tabs.TabsContent>
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
  reactNodes: [TabsNode, TabsListNode, TabsTriggerNode, TabsContentNode],
  nodes: [],
  setup() {},
});
