import type { ReactNode } from "react";

import Noodl from "@noodl/noodl-sdk";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./pagination";

export interface PaginationElementProps {
  children: ReactNode[];
}

export interface PaginationLinkProps {
  href: string;
  children: ReactNode[];
}

export const PaginationNode = Noodl.defineReactNode({
  name: "shadcn.pagination",
  displayName: "SH_Pagination",
  category: "shadcn Pagination",
  initialize() {},
  getReactComponent() {
    return (props: PaginationElementProps) => (
      <Pagination>{props.children}</Pagination>
    );
  },
  inputs: {},
  inputProps: {},
  outputProps: {},
});

export const PaginationContentNode = Noodl.defineReactNode({
  name: "shadcn.pagination.content",
  displayName: "SH_PaginationContent",
  category: "shadcn Pagination",
  initialize() {},
  getReactComponent() {
    return (props: PaginationElementProps) => (
      <PaginationContent>{props.children}</PaginationContent>
    );
  },
  inputs: {},
  inputProps: {},
  outputProps: {},
});

export const PaginationEllipsisNode = Noodl.defineReactNode({
  name: "shadcn.pagination.ellipsis",
  displayName: "SH_PaginationEllipsis",
  category: "shadcn Pagination",
  initialize() {},
  getReactComponent() {
    return (props: PaginationElementProps) => (
      <PaginationEllipsis>{props.children}</PaginationEllipsis>
    );
  },
  inputs: {},
  inputProps: {},
  outputProps: {},
});

export const PaginationItemNode = Noodl.defineReactNode({
  name: "shadcn.pagination.item",
  displayName: "SH_PaginationItem",
  category: "shadcn Pagination",
  initialize() {},
  getReactComponent() {
    return (props: PaginationElementProps) => (
      <PaginationItem>{props.children}</PaginationItem>
    );
  },
  inputs: {},
  inputProps: {},
  outputProps: {},
});

export const PaginationLinkNode = Noodl.defineReactNode({
  name: "shadcn.pagination.link",
  displayName: "SH_PaginationLink",
  category: "shadcn Pagination",
  initialize() {},
  getReactComponent() {
    return (props: PaginationLinkProps) => (
      <PaginationLink href={props.href}>{props.children}</PaginationLink>
    );
  },
  inputs: {},
  inputProps: {
    href: {
      type: "string",
    },
  },
  outputProps: {},
});

export const PaginationNextNode = Noodl.defineReactNode({
  name: "shadcn.pagination.next",
  displayName: "SH_PaginationNext",
  category: "shadcn Pagination",
  initialize() {},
  getReactComponent() {
    return (props: PaginationLinkProps) => (
      <PaginationNext href={props.href}>{props.children}</PaginationNext>
    );
  },
  inputs: {},
  inputProps: {
    href: {
      type: "string",
    },
  },
  outputProps: {},
});

export const PaginationPreviousNode = Noodl.defineReactNode({
  name: "shadcn.pagination.previous",
  displayName: "SH_PaginationPrevious",
  category: "shadcn Pagination",
  initialize() {},
  getReactComponent() {
    return (props: PaginationLinkProps) => (
      <PaginationPrevious href={props.href}>
        {props.children}
      </PaginationPrevious>
    );
  },
  inputs: {},
  inputProps: {
    href: {
      type: "string",
    },
  },
  outputProps: {},
});

Noodl.defineModule({
  reactNodes: [
    PaginationNode,
    PaginationContentNode,
    PaginationItemNode,
    PaginationLinkNode,
    PaginationNextNode,
    PaginationPreviousNode,
  ],
  nodes: [],
  setup() {},
});
