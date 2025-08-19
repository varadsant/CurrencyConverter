import { useCallback, useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import "./App.css";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("eur");
  const [to, setTo] = useState("inr");
  const [secondTo, setSecondTo] = useState("usd");
  const [secondConvertedAmt, setSecondConvertedAmt] = useState(0);
  const [convertedAmt, setConvertedAmt] = useState(0);

  const [currencyInfo, currencyLabel] = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  // console.log(options);

  const convert = useCallback(() => {
    setConvertedAmt(amount * currencyInfo[to]);
    setSecondConvertedAmt(amount * currencyInfo[secondTo]);
  }, [amount, currencyInfo, to, secondTo]);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmt(amount);
    setAmount(convertedAmt);
  };

  // const convert = () => {
  //   setConvertedAmt(amount * currencyInfo[to]);
  // };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/33341985/pexels-photo-33341985.jpeg')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                currencyLabels={currencyLabel}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                onClick={swap}
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmt}
                currencyOptions={options}
                currencyLabels={currencyLabel}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable
              />
            </div>

            <div className="w-full mt-1 mb-4">
              <InputBox
                label={`Conversion from ${from.toUpperCase()}`}
                amount={secondConvertedAmt}
                currencyOptions={options}
                currencyLabels={currencyLabel}
                onCurrencyChange={(currency) => setSecondTo(currency)}
                selectCurrency={secondTo}
                amountDisable
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg cursor-pointer"
            >
              Convert {from.toUpperCase()} to ({to.toUpperCase()} and{" "}
              {secondTo.toUpperCase()})
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
