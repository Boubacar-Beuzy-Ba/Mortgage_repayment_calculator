import { BiCalculator } from "react-icons/bi";
import { InputElement } from "./ui-elements/InputElement";
import { RadioElement } from "./ui-elements/RadioElement";
import { formInputs } from "../App";
import { SubmitHandler, useForm } from "react-hook-form";

export const FormComponent = () => {
  const { register, handleSubmit } = useForm<formInputs>();

  const onSubmit: SubmitHandler<formInputs> = (data) => {
    console.log(data);
  };

  return (
    <div className="w-full my-12">
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputElement
          register={register}
          name="amount"
          placeholder="Enter your mortgage amount"
          prefix="$ "
        />
        <div className="flex gap-2 w-full my-4 flex-col sm:flex-row">
          <InputElement
            register={register}
            name="years"
            value={0}
            suffix=" years"
          />
          <InputElement
            register={register}
            name="interest"
            value={0}
            suffix=" %"
          />
        </div>
        <div>
          <p className="mx-2 text-gray-500">Mortgage Type</p>
          <RadioElement
            name="mortgageType"
            register={register}
            value="Repayment"
            type="radio"
          />
          <RadioElement
            register={register}
            name="mortgageType"
            value="Interest Only"
            type="radio"
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
