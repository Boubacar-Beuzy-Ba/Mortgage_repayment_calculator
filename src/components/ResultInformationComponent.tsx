import logoResult from "../assets/Layer_1.svg";

export const ResultInformationComponent = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <img src={logoResult} className="w-48" />
      <h1 className="text-2xl text-white font-semibold">Results shown here</h1>
      <p className="text-gray-400 text-lg mx-4 text-center text-pretty mt-4">
        Complete the form and click “calculate repayments” to see what your
        monthly repayments would be.
      </p>
    </div>
  );
};
