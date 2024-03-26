import type { ReactNode } from "react";

import Noodl from "@noodl/noodl-sdk";
import * as Avatar from "./avatar";

export interface AvatarProps {
  children: ReactNode[];
}

export const AvatarNode = Noodl.defineReactNode({
  name: "shadcn.avatar",
  displayName: "SH_Avatar",
  initialize() {},
  getReactComponent() {
    return (props: AvatarProps) => (
      <Avatar.Avatar>{props.children}</Avatar.Avatar>
    );
  },
  inputs: {},
  inputProps: {},
  outputProps: {},
});

export interface AvatarFallbackProps {
  text: string;
}

export const AvatarFallbackNode = Noodl.defineReactNode({
  name: "shadcn.avatarFallback",
  displayName: "SH_AvatarFallback",
  initialize() {},
  getReactComponent() {
    return (props: AvatarFallbackProps) => (
      <Avatar.AvatarFallback>{props.text}</Avatar.AvatarFallback>
    );
  },
  inputs: {},
  inputProps: {
    text: {
      type: "string",
    },
  },
  outputProps: {},
});

export interface AvatarImageProps {
  src: string;
  alt: string;
}

export const AvatarImageNode = Noodl.defineReactNode({
  name: "shadcn.avatarImage",
  displayName: "SH_AvatarImage",
  initialize() {},
  getReactComponent() {
    return (props: AvatarImageProps) => <Avatar.AvatarImage {...props} />;
  },
  inputs: {},
  inputProps: {
    src: {
      type: "image",
    },
    alt: {
      type: "string",
    },
  },
  outputProps: {},
});

Noodl.defineModule({
  reactNodes: [AvatarNode, AvatarFallbackNode, AvatarImageNode],
  nodes: [],
  setup() {},
});
