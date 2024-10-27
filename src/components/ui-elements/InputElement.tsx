import {   FieldError, UseFormRegister } from "react-hook-form";
import { FormInputs } from "../../App";
import { Input } from "antd";

export type InputElementProps = {
  name: keyof FormInputs;
  type?: string;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  prefix?: string;
  suffix?: string;
  register: UseFormRegister<FormInputs>;
  errors?: FieldError;
};

export const InputElement = ({name, register , errors, ...props }: InputElementProps) => {
  return (
    <>
      <div className="flex flex-col w-full">
        <label htmlFor={name} className="my-2 mx-2 capitalize">
          {name}
        </label>
        <Input
          {...register(name)}
          placeholder={props.placeholder}
          prefix={props.prefix}
          suffix={props.suffix}
          className="w-full p-2 rounded-md shadow-md border-2 border-gray-200"
        />
        {errors?.message ? (
          <p className="text-red-500">{errors.message}</p>
        ) : null}
      </div>
    </>
  );
};
