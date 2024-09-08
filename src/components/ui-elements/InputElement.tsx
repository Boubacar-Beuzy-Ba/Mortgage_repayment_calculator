import CurrencyInput from "react-currency-input-field";
import { UseFormRegister } from "react-hook-form";
import { formInputs } from "../../App";

export type InputElementProps = {
  name?: string;
  type?: string;
  placeholder?: string;
  value?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  prefix?: string;
  suffix?: string;
  register?: UseFormRegister<formInputs>;
};

export const InputElement = ({ ...props }: InputElementProps) => {
  return (
    <>
      <div className="flex flex-col w-full">
        <label
          htmlFor={Number(props.value).toString()}
          className="my-2 mx-2 capitalize"
        >
          {props.name}
        </label>
        <CurrencyInput
          {...props.register?.(props.name as keyof formInputs, {
            required: true,
          })}
          placeholder={props.placeholder}
          decimalsLimit={2}
          decimalSeparator="."
          groupSeparator=","
          className="w-full p-2 rounded-md shadow-md border-2 border-gray-200"
          prefix={props.prefix}
          suffix={props.suffix}
        />
      </div>
    </>
  );
};
