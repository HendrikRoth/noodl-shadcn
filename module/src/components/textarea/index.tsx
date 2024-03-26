import Noodl from "@noodl/noodl-sdk";
import { Textarea } from "./textarea";

export interface TextareaProps {
  placeholder?: string;
  disabled?: boolean;
}

export const TextareaNode = Noodl.defineReactNode({
  name: "shadcn.textarea",
  displayName: "SH_Textarea",
  category: "shadcn",
  initialize() {},
  getReactComponent() {
    return (props: TextareaProps) => <Textarea {...props} />;
  },
  inputs: {},
  inputProps: {
    placeholder: {
      type: "string",
      default: "",
    },
    disabled: {
      type: "boolean",
      default: false,
    },
  },
  outputProps: {},
});

Noodl.defineModule({
  reactNodes: [TextareaNode],
  nodes: [],
  setup() {},
});
