"use client";

import { createContext, useEffect, useState } from "react";

export const CoinContext = createContext();

const CoinContextNav = ({ children }) => {
  const [allCoins, setAllCoins] = useState([]);
  const [currency, setCurrency] = useState({ name: "usd", symbol: "$" });

  const fetchAllCoins = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-2mF5wvcx8BqQyv1vUFnL9NXq",
      },
    };

    try {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin",
        options
      );
      const data = await response.json();
      setAllCoins(data);
    } catch (error) {
      console.log("Error fetching coins", error);
    }
  };
  useEffect(() => {
    fetchAllCoins();
  }, [currency]);
  return (
    <CoinContext.Provider value={{ allCoins, currency, setCurrency }}>
      {children}
    </CoinContext.Provider>
  );
};

export default CoinContextNav;
