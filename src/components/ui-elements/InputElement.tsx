import CurrencyInput from "react-currency-input-field";

export type InputElementProps = {
  name?: string;
  type?: string;
  placeholder?: string;
  value?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  prefix?: string;
  suffix?: string;
};

export const InputElement = ({ ...props }: InputElementProps) => {
  return (
    <>
      <div className="flex flex-col w-full">
        <label htmlFor={Number(props.value).toString()} className="my-2 mx-2">
          {props.name}
        </label>
        <CurrencyInput
          id={Number(props.value).toString()}
          name={props.name}
          placeholder={props.placeholder}
          decimalsLimit={2}
          decimalSeparator="."
          groupSeparator=","
          className="w-full p-2 rounded-md shadow-md border-2 border-gray-200"
          defaultValue={Number(props.value)}
          prefix={props.prefix}
          suffix={props.suffix}
        />
      </div>
    </>
  );
};
