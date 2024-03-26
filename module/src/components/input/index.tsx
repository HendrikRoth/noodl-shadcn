import Noodl from "@noodl/noodl-sdk";
import { Input } from "./input";

export interface InputProps {
  type: string;
  placeholder?: string;
  disabled?: boolean;
}

export const InputNode = Noodl.defineReactNode({
  name: "shadcn.input",
  displayName: "SH_Input",
  category: "shadcn",
  initialize() {},
  getReactComponent() {
    return (props: InputProps) => <Input {...props} />;
  },
  inputs: {},
  inputProps: {
    placeholder: {
      type: "string",
      default: "Placeholder",
    },
    type: {
      default: "text",
      type: {
        name: "enum",
        enums: ["text", "number", "email", "file"].map((e) => ({
          label: e,
          value: e,
        })),
      },
    },
    disabled: {
      type: "boolean",
      default: false,
    },
  },
  outputProps: {},
});

Noodl.defineModule({
  reactNodes: [InputNode],
  nodes: [],
  setup() {},
});
