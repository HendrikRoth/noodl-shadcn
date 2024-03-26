import type { ReactNode } from "react";

import Noodl from "@noodl/noodl-sdk";
import * as Table from "./table";

const textAlignment = {
  displayName: "Text anlignment",
  default: "text-left",
  type: {
    name: "enum",
    enums: [
      {
        label: "Left",
        value: "text-left",
      },
      {
        label: "Center",
        value: "text-center",
      },
      {
        label: "Right",
        value: "text-right",
      },
    ],
  },
};

export interface TableProps {
  caption?: string;
  children: ReactNode[];
}

export const TableNode = Noodl.defineReactNode({
  name: "shadcn.table",
  displayName: "SH_Table",
  category: "shadcn Table",
  initialize() {},
  getReactComponent() {
    return (props: TableProps) => (
      <Table.Table>
        {props.caption && (
          <Table.TableCaption>{props.caption}</Table.TableCaption>
        )}
        {props.children}
      </Table.Table>
    );
  },
  inputs: {},
  inputProps: {
    caption: {
      type: "string",
    },
  },
  outputProps: {},
});

export interface TableElementProps {
  children: ReactNode[];
}

export const TableHeaderNode = Noodl.defineReactNode({
  name: "shadcn.table.header",
  displayName: "SH_TableHeader",
  category: "shadcn Table",
  initialize() {},
  getReactComponent() {
    return (props: TableElementProps) => (
      <Table.TableHeader>{props.children}</Table.TableHeader>
    );
  },
  inputs: {},
  inputProps: {},
  outputProps: {},
});

export interface TableHeadProps {
  text?: string;
  textAlignment: string;
  children: ReactNode[];
}

export const TableHeadNode = Noodl.defineReactNode({
  name: "shadcn.table.head",
  displayName: "SH_TableHead",
  category: "shadcn Table",
  initialize() {},
  getReactComponent() {
    return (props: TableHeadProps) => (
      <Table.TableHead className={props.textAlignment}>
        {props.text}
        {props.children}
      </Table.TableHead>
    );
  },
  inputs: {},
  inputProps: {
    text: {
      type: "string",
    },
    textAlignment,
  },
  outputProps: {},
});

export interface TableCellProps {
  text?: string;
  textAlignment: string;
  children: ReactNode[];
}

export const TableCellNode = Noodl.defineReactNode({
  name: "shadcn.table.cell",
  displayName: "SH_TableCell",
  category: "shadcn Table",
  initialize() {},
  getReactComponent() {
    return (props: TableCellProps) => (
      <Table.TableCell className={props.textAlignment}>
        {props.text}
        {props.children}
      </Table.TableCell>
    );
  },
  inputs: {},
  inputProps: {
    text: {
      type: "string",
    },
    textAlignment,
  },
  outputProps: {},
});

export const TableRowNode = Noodl.defineReactNode({
  name: "shadcn.table.row",
  displayName: "SH_TableRow",
  category: "shadcn Table",
  initialize() {},
  getReactComponent() {
    return (props: TableElementProps) => (
      <Table.TableRow>{props.children}</Table.TableRow>
    );
  },
  inputs: {},
  inputProps: {},
  outputProps: {},
});

export const TableBodyNode = Noodl.defineReactNode({
  name: "shadcn.table.body",
  displayName: "SH_TableBody",
  category: "shadcn Table",
  initialize() {},
  getReactComponent() {
    return (props: TableElementProps) => (
      <Table.TableBody>{props.children}</Table.TableBody>
    );
  },
  inputs: {},
  inputProps: {},
  outputProps: {},
});

Noodl.defineModule({
  reactNodes: [
    TableNode,
    TableHeaderNode,
    TableHeadNode,
    TableBodyNode,
    TableCellNode,
    TableRowNode,
  ],
  nodes: [],
  setup() {},
});
