import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  const [allCurrency, setAllCurrency] = useState({});

  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((res) => setData(res[currency]));

    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2025.8.19/v1/currencies.json`
    )
      .then((res2) => res2.json())
      .then((res2) => setAllCurrency(res2));
  }, [currency]);

  return [data, allCurrency];
}

export default useCurrencyInfo;
