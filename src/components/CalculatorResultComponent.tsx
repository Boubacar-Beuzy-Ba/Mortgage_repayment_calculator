export const CalculatorResultComponent = () => {
  return (
    <>
      <div className="flex justify-start items-start flex-col mx-4">
        <h1 className="text-2xl text-white font-semibold mx-4">Your results</h1>
        <p className="text-gray-400 text-lg mx-4 text-start text-pretty mt-4">
          Your results are shown below based on the information you provided. To
          adjust the results, edit the form and click “calculate repayments”
          again.
        </p>
      </div>
      <div className="flex px-4 shadow-green-800 shadow-md items-start w-[90%] rounded-lg flex-col mt-10">
        <div className="flex gap-4 flex-col">
          <p className="text-md text-gray-400">Monthly Repayment</p>
          <p className="text-6xl text-[#D8DB2F] font-semibold font-plus-jakarta-sans">
            $ 1400.00
          </p>
        </div>
        <hr className="w-full my-10" />
        <div className="flex gap-4 flex-col">
          <p className="text-md text-gray-400">Total Interest</p>
          <p className="text-3xl text-white font-semibold mb-10">$ 200.00</p>
        </div>
      </div>
    </>
  );
};
