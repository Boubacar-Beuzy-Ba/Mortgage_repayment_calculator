import "./App.css";
import { CalculatorResultComponent } from "./components/CalculatorResultComponent";
import { FormComponent } from "./components/FormComponent";
import { ResultInformationComponent } from "./components/ResultInformationComponent";
import { z } from 'zod';
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export const schema = z.object({
  amount: z
    .number({ invalid_type_error: "Amount is required" })
    .min(1, { message: "Amount must be greater than 0" }),
  terms: z
    .number({ invalid_type_error: "Terms is required" })
    .min(1, { message: "Terms must be greater than 0" }),
  rate: z
    .number({ invalid_type_error: "Rate is required" })
    .min(1, { message: "Rate must be greater than 0" }),
  mortgageType: z
    .string({ invalid_type_error: "Mortgage type is required" })
    .min(1, { message: "Mortgage type is required" }),
});


export type FormInputs = z.infer<typeof schema>;

function App() {
  const data: Partial<FormInputs> = {};
  const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    try {
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="min-h-[60vh] flex justify-center my-32 flex-col md:flex-row mx-16 md:mx-4">
      <main className="rounded-lg md:w-1/2 bg-white gap-2 p-8">
        <div className="flex flex-col w-full">
          <div className="flex flex-col sm:flex-row justify-start sm:justify-between items-start sm:items-center w-full">
            <h1 className="text-2xl font-semibold"> Mortgage Calculator </h1>
            <button className="capitalize text-gray-400 underline mr-4">
              clear all
            </button>
          </div>
          <FormComponent register={register} handleSubmit={handleSubmit} onSubmit={onSubmit} errors={errors}/>
        </div>
      </main>
      <div className="md:w-1/2 h-[60vh] md:h-auto max-w-1/2 bg-indigo-950 md:rounded-tl-md md:rounded-tr-lg md:rounded-br-lg md:rounded-bl-[10%] flex flex-col items-center justify-center">
        {data ? <ResultInformationComponent /> : <CalculatorResultComponent />}
      </div>
    </div>
  );
}

export default App;
