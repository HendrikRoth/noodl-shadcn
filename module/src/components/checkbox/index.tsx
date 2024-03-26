import Noodl from "@noodl/noodl-sdk";
import { Checkbox } from "./checkbox";

export interface CheckboxProps {
  id?: string;
  disabled?: boolean;
  required?: boolean;
}

export const CheckboxNode = Noodl.defineReactNode({
  name: "shadcn.checkbox",
  displayName: "SH_Checkbox",
  category: "shadcn",
  initialize() {},
  getReactComponent() {
    return (props: CheckboxProps) => <Checkbox {...props} />;
  },
  inputs: {},
  inputProps: {
    id: {
      type: "string",
    },
    disabled: {
      type: "boolean",
    },
    required: {
      type: "boolean",
    },
  },
  outputProps: {},
});

Noodl.defineModule({
  reactNodes: [CheckboxNode],
  nodes: [],
  setup() {},
});
