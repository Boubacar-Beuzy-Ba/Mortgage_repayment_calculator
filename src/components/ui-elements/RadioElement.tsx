import { UseFormRegisterReturn } from "react-hook-form";

export type RadioElementProps = {
  register: UseFormRegisterReturn;
  value: string;
  label: string;
};

export const RadioElement = ({ register, value, label }: RadioElementProps) => (
  <label className="flex items-center space-x-2">
    <input type="radio" {...register} value={value} />
    <span>{label}</span>
  </label>
);
