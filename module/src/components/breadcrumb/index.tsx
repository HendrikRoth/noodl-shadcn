import type { ReactNode } from "react";

import Noodl from "@noodl/noodl-sdk";
import * as Breadcrumb from "./breadcrumb";

export interface BreadcrumbElementProps {
  children: ReactNode[];
}

export const BreadcrumbNode = Noodl.defineReactNode({
  name: "shadcn.breadcrumb",
  displayName: "SH_Breadcrumb",
  category: "shadcn Breadcrumb",
  initialize() {},
  getReactComponent() {
    return (props: BreadcrumbElementProps) => (
      <Breadcrumb.Breadcrumb>{props.children}</Breadcrumb.Breadcrumb>
    );
  },
  inputs: {},
  inputProps: {},
  outputProps: {},
});

export const BreadcrumbListNode = Noodl.defineReactNode({
  name: "shadcn.breadcrumbList",
  displayName: "SH_BreadcrumbList",
  category: "shadcn Breadcrumb",
  initialize() {},
  getReactComponent() {
    return (props: BreadcrumbElementProps) => (
      <Breadcrumb.BreadcrumbList>{props.children}</Breadcrumb.BreadcrumbList>
    );
  },
  inputs: {},
  inputProps: {},
  outputProps: {},
});

export const BreadcrumbItemNode = Noodl.defineReactNode({
  name: "shadcn.breadcrumbItem",
  displayName: "SH_BreadcrumbItem",
  category: "shadcn Breadcrumb",
  initialize() {},
  getReactComponent() {
    return (props: BreadcrumbElementProps) => (
      <Breadcrumb.BreadcrumbItem>{props.children}</Breadcrumb.BreadcrumbItem>
    );
  },
  inputs: {},
  inputProps: {},
  outputProps: {},
});

export interface BreadcrumbLinkProps {
  href: string;
  text: string;
}

export const BreadcrumbLinkNode = Noodl.defineReactNode({
  name: "shadcn.breadcrumbLink",
  displayName: "SH_BreadcrumbLink",
  category: "shadcn Breadcrumb",
  initialize() {},
  getReactComponent() {
    return (props: BreadcrumbLinkProps) => (
      <Breadcrumb.BreadcrumbLink href={props.href}>
        {props.text}
      </Breadcrumb.BreadcrumbLink>
    );
  },
  inputs: {},
  inputProps: {
    href: {
      type: "string",
    },
    text: {
      type: "string",
    },
  },
  outputProps: {},
});

export const BreadcrumbPageNode = Noodl.defineReactNode({
  name: "shadcn.breadcrumbPage",
  displayName: "SH_BreadcrumbPage",
  category: "shadcn Breadcrumb",
  initialize() {},
  getReactComponent() {
    return (props: BreadcrumbElementProps) => (
      <Breadcrumb.BreadcrumbPage>{props.children}</Breadcrumb.BreadcrumbPage>
    );
  },
  inputs: {},
  inputProps: {},
  outputProps: {},
});

export const BreadcrumbSeparatorNode = Noodl.defineReactNode({
  name: "shadcn.breadcrumbSeparator",
  displayName: "SH_BreadcrumbSeparator",
  category: "shadcn Breadcrumb",
  initialize() {},
  getReactComponent() {
    return () => <Breadcrumb.BreadcrumbSeparator />;
  },
  inputs: {},
  inputProps: {},
  outputProps: {},
});

Noodl.defineModule({
  reactNodes: [
    BreadcrumbNode,
    BreadcrumbListNode,
    BreadcrumbItemNode,
    BreadcrumbLinkNode,
    BreadcrumbPageNode,
    BreadcrumbSeparatorNode,
  ],
  nodes: [],
  setup() {},
});
