import type { ReactNode } from "react";

import { useState } from "react";
import Noodl from "@noodl/noodl-sdk";
import * as Command from "./command";

export interface CommandElementProps {
  children: ReactNode[];
}

export const CommandNode = Noodl.defineReactNode({
  name: "shadcn.command",
  displayName: "SH_Command",
  category: "shadcn Command",
  initialize() {},
  getReactComponent() {
    return (props: CommandElementProps) => (
      <Command.Command>{props.children}</Command.Command>
    );
  },
  inputs: {},
  inputProps: {},
  outputProps: {},
});

const CommandDialogNode = Noodl.defineReactNode({
  name: "shadcn.commandDialog",
  displayName: "SH_CommandDialog",
  category: "shadcn Command",
  initialize() {},
  getReactComponent() {
    return (props: CommandElementProps) => {
      const [open, setOpen] = useState(false);

      return (
        <Command.CommandDialog open={open} onOpenChange={setOpen}>
          {props.children}
        </Command.CommandDialog>
      );
    };
  },
  inputs: {},
  inputProps: {},
  outputProps: {},
});

export interface CommandEmptyProps {
  text: string;
}

const CommandEmptyNode = Noodl.defineReactNode({
  name: "shadcn.commandEmpty",
  displayName: "SH_CommandEmpty",
  category: "shadcn Command",
  initialize() {},
  getReactComponent() {
    return (props: CommandEmptyProps) => (
      <Command.CommandEmpty>{props.text}</Command.CommandEmpty>
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

export interface CommandGroupProps {
  heading: string;
  children: ReactNode[];
}

const CommandGroupNode = Noodl.defineReactNode({
  name: "shadcn.commandGroup",
  displayName: "SH_CommandGroup",
  category: "shadcn Command",
  initialize() {},
  getReactComponent() {
    return (props: CommandGroupProps) => {
      return (
        <Command.CommandGroup heading={props.heading}>
          {props.children}
        </Command.CommandGroup>
      );
    };
  },
  inputs: {},
  inputProps: {},
  outputProps: {},
});

export interface CommandInputProps {
  placeholder: string;
}

const CommandInputNode = Noodl.defineReactNode({
  name: "shadcn.commandInput",
  displayName: "SH_CommandInput",
  category: "shadcn Command",
  initialize() {},
  getReactComponent() {
    return (props: CommandInputProps) => (
      <Command.CommandInput placeholder={props.placeholder} />
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

export interface CommandItemProps {
  text: string;
}

const CommandItemNode = Noodl.defineReactNode({
  name: "shadcn.commandItem",
  displayName: "SH_CommandItem",
  category: "shadcn Command",
  initialize() {},
  getReactComponent() {
    return (props: CommandItemProps) => (
      <Command.CommandItem>{props.text}</Command.CommandItem>
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

const CommandListNode = Noodl.defineReactNode({
  name: "shadcn.commandList",
  displayName: "SH_CommandList",
  category: "shadcn Command",
  initialize() {},
  getReactComponent() {
    return (props: CommandElementProps) => (
      <Command.CommandList>{props.children}</Command.CommandList>
    );
  },
  inputs: {},
  inputProps: {},
  outputProps: {},
});

const CommandSeparatorNode = Noodl.defineReactNode({
  name: "shadcn.commandSeparator",
  displayName: "SH_CommandSeparator",
  category: "shadcn Command",
  initialize() {},
  getReactComponent() {
    return () => <Command.CommandSeparator />;
  },
  inputs: {},
  inputProps: {},
  outputProps: {},
});

const CommandShortcutNode = Noodl.defineReactNode({
  name: "shadcn.commandShortcut",
  displayName: "SH_CommandShortcut",
  category: "shadcn Command",
  initialize() {},
  getReactComponent() {
    return (props: CommandElementProps) => (
      <Command.CommandShortcut>{props.children}</Command.CommandShortcut>
    );
  },
  inputs: {},
  inputProps: {},
  outputProps: {},
});

Noodl.defineModule({
  reactNodes: [
    CommandNode,
    CommandDialogNode,
    CommandEmptyNode,
    CommandGroupNode,
    CommandInputNode,
    CommandItemNode,
    CommandListNode,
    CommandSeparatorNode,
    CommandShortcutNode,
  ],
  nodes: [],
  setup() {},
});
