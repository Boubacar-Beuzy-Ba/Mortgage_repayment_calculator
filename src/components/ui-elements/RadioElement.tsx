import { UseFormRegister } from "react-hook-form";
import { formInputs } from "../../App";

export type RadioElementProps = {
  name?: string;
  type?: string;
  placeholder?: string;
  value?: string | number;
  register?: UseFormRegister<formInputs>;
};

export const RadioElement = ({ ...props }: RadioElementProps) => {
  return (
    <div className="flex items-center gap-2 rounded-sm shadow-md mb-4 mt-1 h-12 p-4 border">
      <input
        type={props.type}
        value={props.value}
        {...props.register?.(props.name as keyof formInputs)}
        id={props.value as string}
      />
      <label htmlFor={props.value as string}>{props.value}</label>
    </div>
  );
};
