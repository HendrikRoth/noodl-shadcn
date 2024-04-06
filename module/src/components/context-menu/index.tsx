import type { ReactNode } from "react";

import Noodl from "@noodl/noodl-sdk";
import * as ContextMenu from "./context-menu";

export interface ContextMenuElementProps {
  children: ReactNode[];
}

export const ContextMenuNode = Noodl.createReactNode({
  name: "shadcn.contextmenu",
  displayName: "SH_ContextMenu",
  category: "shadcn ContextMenu",
  initialize() {},
  getReactComponent() {
    return (props: ContextMenuElementProps) => (
      <ContextMenu.ContextMenu>{props.children}</ContextMenu.ContextMenu>
    );
  },
  inputs: {},
  inputProps: {},
  outputProps: {},
});

// export const ContextMenuTriggerNode = Noodl.createReactNode({
//   name: "shadcn.contextmenu.trigger",
//   displayName: "SH_ContextMenuTrigger",
//   category: "shadcn ContextMenu",
//   initialize() {},
//   getReactComponent() {
//     return (props: ContextMenuElementProps) => (
//       <ContextMenu.ContextMenuTrigger>
//         {props.children}
//       </ContextMenu.ContextMenuTrigger>
//     );
//   },
//   inputs: {},
//   inputProps: {},
//   outputProps: {},
// });

// export const ContextMenuContentNode = Noodl.createReactNode({
//   name: "shadcn.contextmenu.content",
//   displayName: "SH_ContextMenuContent",
//   category: "shadcn ContextMenu",
//   initialize() {},
//   getReactComponent() {
//     return (props: ContextMenuElementProps) => (
//       <ContextMenu.ContextMenuContent>
//         {props.children}
//       </ContextMenu.ContextMenuContent>
//     );
//   },
//   inputs: {},
//   inputProps: {},
//   outputProps: {},
// });

// export interface ContextMenuItemProps {
//   inset: boolean;
//   disabled: boolean;
//   text?: string;
//   children: ReactNode[];
// }
//
// export const ContextMenuItemNode = Noodl.createReactNode({
//   name: "shadcn.contextmenu.item",
//   displayName: "SH_ContextMenuItem",
//   category: "shadcn ContextMenu",
//   initialize() {},
//   getReactComponent() {
//     return (props: ContextMenuItemProps) => (
//       <ContextMenu.ContextMenuItem
//         inset={props.inset}
//         disabled={props.disabled}
//       >
//         {props.text}
//         {props.children}
//       </ContextMenu.ContextMenuItem>
//     );
//   },
//   inputs: {},
//   inputProps: {
//     inset: {
//       type: "boolean",
//     },
//     disabled: {
//       type: "boolean",
//     },
//     text: {
//       type: "string",
//     },
//   },
//   outputProps: {},
// });

// export interface ContextMenuCheckboxItemProps {
//   checked: boolean;
//   children: ReactNode[];
// }
//
// export const ContextMenuCheckboxItemNode = Noodl.createReactNode({
//   name: "shadcn.contextmenu.checkboxitem",
//   displayName: "SH_ContextMenuCheckboxItem",
//   category: "shadcn ContextMenu",
//   initialize() {},
//   getReactComponent() {
//     return (props: ContextMenuCheckboxItemProps) => (
//       <ContextMenu.ContextMenuCheckboxItem checked={props.checked}>
//         {props.children}
//       </ContextMenu.ContextMenuCheckboxItem>
//     );
//   },
//   inputs: {},
//   inputProps: {
//     checked: {
//       type: "boolean",
//     },
//   },
//   outputProps: {},
// });

// export interface ContextMenuRadioItemProps {
//   value: string;
//   text: string;
// }
//
// export const ContextMenuRadioItemNode = Noodl.createReactNode({
//   name: "shadcn.contextmenu.radioitem",
//   displayName: "SH_ContextMenuRadioItem",
//   category: "shadcn ContextMenu",
//   initialize() {},
//   getReactComponent() {
//     return (props: ContextMenuRadioItemProps) => (
//       <ContextMenu.ContextMenuRadioItem value={props.value}>
//         {props.text}
//       </ContextMenu.ContextMenuRadioItem>
//     );
//   },
//   inputs: {},
//   inputProps: {
//     value: {
//       type: "string",
//     },
//     text: {
//       type: "string",
//     },
//   },
//   outputProps: {},
// });

// export const ContextMenuLabelNode = Noodl.createReactNode({
//   name: "shadcn.contextmenu.label",
//   displayName: "SH_ContextMenuLabel",
//   category: "shadcn ContextMenu",
//   initialize() {},
//   getReactComponent() {
//     return (props: ContextMenuElementProps) => (
//       <ContextMenu.ContextMenuLabel>
//         {props.children}
//       </ContextMenu.ContextMenuLabel>
//     );
//   },
//   inputs: {},
//   inputProps: {},
//   outputProps: {},
// });

// export const ContextMenuSeparatorNode = Noodl.createReactNode({
//   name: "shadcn.contextmenu.separator",
//   displayName: "SH_ContextMenuSeparator",
//   category: "shadcn ContextMenu",
//   initialize() {},
//   getReactComponent() {
//     return () => <ContextMenu.ContextMenuSeparator />;
//   },
//   inputs: {},
//   inputProps: {},
//   outputProps: {},
// });

// export interface ContextMenuShortcutProps {
//   text: string;
// }
//
// export const ContextMenuShortcutNode = Noodl.createReactNode({
//   name: "shadcn.contextmenu.shortcut",
//   displayName: "SH_ContextMenuShortcut",
//   category: "shadcn ContextMenu",
//   initialize() {},
//   getReactComponent() {
//     return (props: ContextMenuShortcutProps) => (
//       <ContextMenu.ContextMenuShortcut>
//         {props.text}
//       </ContextMenu.ContextMenuShortcut>
//     );
//   },
//   inputs: {},
//   inputProps: {
//     text: {
//       type: "string",
//     },
//   },
//   outputProps: {},
// });

// export const ContextMenuGroupNode = Noodl.createReactNode({
//   name: "shadcn.contextmenu.group",
//   displayName: "SH_ContextMenuGroup",
//   category: "shadcn ContextMenu",
//   initialize() {},
//   getReactComponent() {
//     return (props: ContextMenuElementProps) => (
//       <ContextMenu.ContextMenuGroup>
//         {props.children}
//       </ContextMenu.ContextMenuGroup>
//     );
//   },
//   inputs: {},
//   inputProps: {},
//   outputProps: {},
// });

// export const ContextMenuPortalNode = Noodl.createReactNode({
//   name: "shadcn.contextmenu.portal",
//   displayName: "SH_ContextMenuPortal",
//   category: "shadcn ContextMenu",
//   initialize() {},
//   getReactComponent() {
//     return (props: ContextMenuElementProps) => (
//       <ContextMenu.ContextMenuPortal>
//         {props.children}
//       </ContextMenu.ContextMenuPortal>
//     );
//   },
//   inputs: {},
//   inputProps: {},
//   outputProps: {},
// });

// export const ContextMenuSubNode = Noodl.createReactNode({
//   name: "shadcn.contextmenu.sub",
//   displayName: "SH_ContextMenuSub",
//   category: "shadcn ContextMenu",
//   initialize() {},
//   getReactComponent() {
//     return (props: ContextMenuElementProps) => (
//       <ContextMenu.ContextMenuSub>{props.children}</ContextMenu.ContextMenuSub>
//     );
//   },
//   inputs: {},
//   inputProps: {},
//   outputProps: {},
// });

// export const ContextMenuSubContentNode = Noodl.createReactNode({
//   name: "shadcn.contextmenu.subcontent",
//   displayName: "SH_ContextMenuSubContent",
//   category: "shadcn ContextMenu",
//   initialize() {},
//   getReactComponent() {
//     return (props: ContextMenuElementProps) => (
//       <ContextMenu.ContextMenuSubContent>
//         {props.children}
//       </ContextMenu.ContextMenuSubContent>
//     );
//   },
//   inputs: {},
//   inputProps: {},
//   outputProps: {},
// });

// export interface ContextMenuSubTriggerProps {
//   inset: boolean;
//   text: string;
// }
//
// export const ContextMenuSubTriggerNode = Noodl.createReactNode({
//   name: "shadcn.contextmenu.subtrigger",
//   displayName: "SH_ContextMenuSubTrigger",
//   category: "shadcn ContextMenu",
//   initialize() {},
//   getReactComponent() {
//     return (props: ContextMenuSubTriggerProps) => (
//       <ContextMenu.ContextMenuSubTrigger inset={props.inset}>
//         {props.text}
//       </ContextMenu.ContextMenuSubTrigger>
//     );
//   },
//   inputs: {},
//   inputProps: {
//     inset: {
//       type: "boolean",
//     },
//     text: {
//       type: "string",
//     },
//   },
//   outputProps: {},
// });

// export interface ContextMenuRadioGroupProps {
//   value: string;
//   children: ReactNode[];
// }
//
// export const ContextMenuRadioGroupNode = Noodl.createReactNode({
//   name: "shadcn.contextmenu.radiogroup",
//   displayName: "SH_ContextMenuRadioGroup",
//   category: "shadcn ContextMenu",
//   initialize() {},
//   getReactComponent() {
//     return (props: ContextMenuRadioGroupProps) => (
//       <ContextMenu.ContextMenuRadioGroup value={props.value}>
//         {props.children}
//       </ContextMenu.ContextMenuRadioGroup>
//     );
//   },
//   inputs: {},
//   inputProps: {
//     value: {
//       type: "string",
//     },
//   },
//   outputProps: {},
// });

Noodl.defineModule({
  reactNodes: [
    ContextMenuNode,
    // ContextMenuTriggerNode,
    // ContextMenuContentNode,
    // ContextMenuItemNode,
    // ContextMenuCheckboxItemNode,
    // ContextMenuRadioItemNode,
    // ContextMenuLabelNode,
    // ContextMenuSeparatorNode,
    // ContextMenuShortcutNode,
    // ContextMenuGroupNode,
    // ContextMenuPortalNode,
    // ContextMenuSubNode,
    // ContextMenuSubContentNode,
    // ContextMenuSubTriggerNode,
    // ContextMenuRadioGroupNode,
  ],
  nodes: [],
  setup() {},
});
