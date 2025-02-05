import React, { useEffect, useContext, useState, ReactNode } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Link from "next/link";

import { CoinContext } from "@/components/Home/Hero/CoinContext";

const CoinTableNav = () => {
  const { allCoins, currency } = useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState<
    {
      high_24h: ReactNode;
      price_change_percentage_24h: any;
      market_cap: ReactNode;
      id: ReactNode;
      usd_24h_vol: ReactNode;
      usd_market_cap: ReactNode;
      name: ReactNode;

      image: string | undefined;
      market_cap_rank: number;
    }[]
  >([]);
  const [input, setInput] = useState("");
  //fxn to search the coin
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    if (e.target.value === "") {
      setDisplayCoin(allCoins);
    }
  };
  //fxn to handle submit
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const filteredCoins = await allCoins.filter((item: { name: string }) => {
      return item.name.toLowerCase().includes(input.toLowerCase());
    });
    setDisplayCoin(filteredCoins);
  };

  // useEffect hook to add allCoins data and disPaly it
  useEffect(() => {
    setDisplayCoin(allCoins);
  }, [allCoins]);

  return (
    <>
      {displayCoin.slice(0, 1).map((item, index) => (
        <div
          className="flex flex-row items-center justify-between text-xs gap-3 flex-1 text-white lg:block hidden"
          key={index}
        >
          <img className="w-[35px] " src={item.image} alt="" />
          <b>{item.id}</b>
          <span className="my-auto pl-5">
            MarketCap :<b>{item.market_cap}</b>
            <b
              className={
                typeof item.price_change_percentage_24h === "number" &&
                item.price_change_percentage_24h > 0
                  ? "text-[#00d515] text-center"
                  : "text-[#ff4646] text-center"
              }
            >
              {item.price_change_percentage_24h > 0 ? (
                <ArrowUpwardIcon />
              ) : (
                <ArrowDropDownIcon />
              )}
              {item.price_change_percentage_24h}%
            </b>
          </span>{" "}
          <b className="text-right ">
            high 24: {currency.symbol}
            <b className="text-[#fff] text-center">{item.high_24h}</b>
          </b>
        </div>
      ))}
    </>
  );
};

export default CoinTableNav;
