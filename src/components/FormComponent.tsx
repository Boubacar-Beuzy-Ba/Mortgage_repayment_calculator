import { BiCalculator } from "react-icons/bi";
import { InputElement } from "./ui-elements/InputElement";
import { RadioElement } from "./ui-elements/RadioElement";

export const FormComponent = () => {
  return (
    <div className="w-full my-12">
      <form onSubmit={(e) => e.preventDefault()}>
        <InputElement
          name="Mortgage Amount"
          placeholder="Enter your mortgage amount"
          value={0}
          prefix="$ "
        />
        <div className="flex gap-2 w-full my-4 flex-col sm:flex-row">
          <InputElement name="Mortage Term" value={0} suffix=" years" />
          <InputElement name="Interest Rate" value={0} suffix=" %" />
        </div>
        <div>
          <p className="mx-2 text-gray-500">Mortgage Type</p>
          <RadioElement name="Morgage Type" value="Repayment" type="radio" />
          <RadioElement
            name="Morgage Type"
            value="Interest Only"
            type="radio"
          />
        </div>
        <div className="flex items-center mx-2 my-6 sm:my-10">
          <button className="capitalize w-full sm:w-2/3 text-gray-800 p-4 bg-lime-400 rounded-full flex gap-2 items-center justify-center">
            <BiCalculator className="text-dark" />
            Calculate Repayment
          </button>
        </div>
      </form>
    </div>
  );
};
