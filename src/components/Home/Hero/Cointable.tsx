import React, { useEffect, useContext, useState, ReactNode } from "react";

import { CoinContext } from "./CoinContext";

const CoinTable = () => {
  const { allCoins, currency } = useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState<
    {
      name: ReactNode;
      market_cap: ReactNode;
      price_change_percentage_24h: ReactNode;
      current_price: ReactNode;
      symbol: ReactNode;
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
      <section className="w-full flex flex-col-reverse sm:flex-row pt-5 gap-4 sm:items-center justify-between">
        <h1 className="text-lg sm:text-xl font-semibold text-center   text-grey">
          Your Gateway to a latest
        </h1>
        <div className="flex flex-col gap-4">
          <form
            className="flex items-center max-w-sm mx-auto"
            onSubmit={handleSubmit}
          >
            <label form="simple-search" className="sr-only">
              Search
            </label>
            <div className="relative w-full">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"
                  />
                </svg>
              </div>
              <input
                onChange={handleInput}
                value={input}
                type="text"
                id="simple-search"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search ..."
                required
              />
            </div>
            <button
              type="submit"
              className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>
          </form>
        </div>
      </section>
      <div className="max-w-[1000px] m-auto  mt-6 text-white  bg-darkmode rounded-lg table-auto w-full text-center border-collapse">
        <div className="grid grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1.5fr] p-[15px_20px] items-center border-b   border-gray-700">
          <p className="p-2 sm:p-2">Rank</p>
          <p className="p-1 sm:p-2">Coins</p>
          <p className="p-2 sm:p-3">Symbol</p>
          <p className="p-2 sm:p-2">Current Price</p>
          <p className="p-2 sm:p-2">Price Change</p>
          <p className="text-right">Market Cap</p>
        </div>
        {displayCoin.slice(0, 10).map((item, index) => (
          <div
            className="grid grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1.5fr] p-4 gap-5 items-center justify-between border-b border-gray-700"
            key={index}
          >
            <p className="p-2 sm:p-2">{item.market_cap_rank}</p>
            <div>
              <img className="w-[35px]" src={item.image} alt="" />
              <p>{item.name}</p>
            </div>
            <p className="uppercase p-2 sm:p-2 ">{item.symbol}</p>
            <p>
              {currency.symbol}
              {item.current_price}
            </p>
            <p
              className={
                typeof item.price_change_percentage_24h === "number" &&
                item.price_change_percentage_24h > 0
                  ? "text-[#00d515] text-center"
                  : "text-[#ff4646] text-center"
              }
            >
              {item.price_change_percentage_24h}%
            </p>
            <p className="text-right">
              {currency.symbol}
              {item.market_cap}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default CoinTable;
