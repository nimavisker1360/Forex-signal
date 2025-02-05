"use client";

import { news_data } from "@/data/newsdata";

import { createContext, useState, useLayoutEffect } from "react";
export const CryptoDataContext = createContext();

export default function CryptoDataProvider({ children }) {  
  const [losers, setLosers] = useState([]);
  const [gainers, setGainers] = useState([]);

  const [news, setNews] = useState(news_data);

  const [loading, setLoading] = useState(false);

  const sortBy24hPercent = async () => {
    if (!cryptoData) return;

    const percentChange = cryptoData.sort(
      (a, b) =>
        Number(b.price_change_percentage_24h) -
        Number(a.price_change_percentage_24h)
    );

    setCryptoData(percentChange);
  };

  const addToFavourite = async (symbol) => {
    let favourite = localStorage.getItem("_favourite");
    let fav = [];
    if (favourite) {
      fav = [favourite];
    }
    fav.push(symbol);
    localStorage.setItem("_favourite", fav);
  };

  useLayoutEffect(() => {
    // setTimeout(() => {
    //  fetchCryptoData();
    // }, 4000);

  }, []);

  return (
    <CryptoDataContext.Provider
      value={{
       
        losers,
        gainers,

        news,
        loading,
        addToFavourite,
    
      }}
    >
      {children}
    </CryptoDataContext.Provider>
  );
}
