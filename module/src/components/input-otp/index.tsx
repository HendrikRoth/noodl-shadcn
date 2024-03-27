import type { ReactNode } from "react";

import Noodl from "@noodl/noodl-sdk";
import * as InputOTP from "./input-otp";

export interface InputOTPProps {
  maxLength: number;
  children: ReactNode[];
}

export const InputOTPNode = Noodl.defineReactNode({
  name: "shadcn.inputotp",
  displayName: "SH_InputOTP",
  category: "shadcn InputOTP",
  initialize() {},
  getReactComponent() {
    return (props: InputOTPProps) => (
      <InputOTP.InputOTP maxLength={props.maxLength}>
        {props.children}
      </InputOTP.InputOTP>
    );
  },
  inputs: {},
  inputProps: {
    maxLength: {
      type: "number",
    },
  },
  outputProps: {},
});

export interface InputOTPGroupProps {
  children: ReactNode[];
}

export const InputOTPGroupNode = Noodl.defineReactNode({
  name: "shadcn.inputotp.group",
  displayName: "SH_InputOTPGroup",
  category: "shadcn InputOTP",
  initialize() {},
  getReactComponent() {
    return (props: InputOTPGroupProps) => (
      <InputOTP.InputOTPGroup>{props.children}</InputOTP.InputOTPGroup>
    );
  },
  inputs: {},
  inputProps: {},
  outputProps: {},
});

export interface InputOTPSlotProps {
  index: number;
}

export const InputOTPSlotNode = Noodl.defineReactNode({
  name: "shadcn.inputotp.slot",
  displayName: "SH_InputOTPSlot",
  category: "shadcn InputOTP",
  initialize() {},
  getReactComponent() {
    return (props: InputOTPSlotProps) => (
      <InputOTP.InputOTPSlot index={props.index} />
    );
  },
  inputs: {},
  inputProps: {
    index: {
      type: "number",
    },
  },
  outputProps: {},
});

export const InputOTPSeparatorNode = Noodl.defineReactNode({
  name: "shadcn.inputotp.separator",
  displayName: "SH_InputOTPSeparator",
  category: "shadcn InputOTP",
  initialize() {},
  getReactComponent() {
    return () => <InputOTP.InputOTPSeparator />;
  },
  inputs: {},
  inputProps: {},
  outputProps: {},
});

Noodl.defineModule({
  reactNodes: [
    InputOTPNode,
    InputOTPGroupNode,
    InputOTPSlotNode,
    InputOTPSeparatorNode,
  ],
  nodes: [],
  setup() {},
});
