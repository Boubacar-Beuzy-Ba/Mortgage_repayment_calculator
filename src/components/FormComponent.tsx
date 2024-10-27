import { BiCalculator } from "react-icons/bi";
import { InputElement } from "./ui-elements/InputElement";
import { FieldErrors, UseFormHandleSubmit, UseFormRegister } from "react-hook-form";
import { FormInputs } from "../App";
import { Radio } from "antd";

export type FormProps = {
  register: UseFormRegister<FormInputs>;
  handleSubmit: UseFormHandleSubmit<FormInputs>;
  onSubmit: (data: FormInputs) => void;
  errors: FieldErrors<FormInputs>;
};

 const options = [
   { label: "Repayment", value: "Repayment" },
   { label: "Interest Only", value: "Interest Only" },
 ];

export const FormComponent = ({register, handleSubmit, onSubmit, errors}: FormProps) => {


  return (
    <div className="w-full my-12">
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputElement
          register={register}
          name="amount"
          placeholder="Enter your mortgage amount"
          prefix="$ "
          errors={errors.amount}
        />
        <div className="flex gap-2 w-full my-4 flex-col sm:flex-row">
          <InputElement
            register={register}
            name="terms"
            suffix=" years"
            errors={errors.terms}
          />
          <InputElement
            register={register}
            name="rate"
            suffix=" %"
            errors={errors.rate}
          />
        </div>
        <div>
          <p className="mx-2 text-gray-500">Mortgage Type</p>
          <Radio.Group
            block
            options={options}
            optionType="button"
            className="w-full my-4"
            {...register("mortgageType")}
          />
        </div>
        <div className="flex items-center mx-2 my-6 sm:my-10">
          <button className="capitalize w-full sm:w-2/3 text-gray-800 p-4 bg-[#D8DB2F] rounded-full flex gap-2 items-center justify-center">
            <BiCalculator className="text-dark" />
            Calculate Repayment
          </button>
        </div>
      </form>
    </div>
  );
};
