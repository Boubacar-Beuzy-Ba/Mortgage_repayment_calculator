import "./App.css";
import { CalculatorResultComponent } from "./components/CalculatorResultComponent";
import { FormComponent } from "./components/FormComponent";
import { ResultInformationComponent } from "./components/ResultInformationComponent";


export type formInputs = {
  amount: number;
  terms: number;
  rate: number;
  mortgageType: string;
};

function App() {
  return (
    <div className="min-h-[60vh] mx-auto md:mx-96 md:my-28 flex md:flex-row flex-col md:max-w-1/2 bg-white rounded-tl-lg rounded-bl-lg">
      <main className=" rounded-lg md:w-1/2 bg-white gap-2 p-8">
        <div className="flex flex-col w-full">
          <div className="flex flex-col sm:flex-row justify-start sm:justify-between items-start sm:items-center w-full">
            <h1 className="text-2xl font-semibold"> Mortgage Calculator </h1>
            <button className="capitalize text-gray-400 underline mr-4">
              clear all
            </button>
          </div>
          <FormComponent />
        </div>
      </main>
      <div className="md:w-1/2 h-[60vh] md:h-auto max-w-1/2 bg-indigo-950 md:rounded-tl-md md:rounded-tr-lg md:rounded-br-lg md:rounded-bl-[10%] flex flex-col items-center justify-center">
        {/* <ResultInformationComponent /> */}
        <CalculatorResultComponent />
      </div>
    </div>
  );
}

export default App;
