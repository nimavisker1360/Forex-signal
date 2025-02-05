"use client";

import { useEffect, useRef, useState, useCallback } from "react";

import Cointable from "./Cointable";
import Logoadvisor from "./Logoadvisor";

const Hero = () => {
  const [isBuying, setIsBuyingOpen] = useState(false);
  const [isSelling, setIsSellingOpen] = useState(false);
  const BuyRef = useRef<HTMLDivElement>(null);
  const SellRef = useRef<HTMLDivElement>(null);

  

  return (
    <section
      
      id="main-banner"
    >
      <div className="container text-sm sm:text-base  mx-auto lg:max-w-screen-xl px-4 ">
        <hr className="container mx-auto lg:max-w-screen-xl  " />
        <div className="my-auto hidden md:flex flex-row lg:max-w-screen-xl mx-auto p-2 ">
          <Logoadvisor />
        </div>
        <hr className="container mx-auto lg:max-w-screen-xl hidden  py-5" />
        <div>
          <gecko-coin-price-marquee-widget
            locale="en"
            dark-mode="true"
            coin-ids="bitcoin,ethereum,sui,ripple,cardano,chainlink,dogecoin"
            initial-currency="usd"
          ></gecko-coin-price-marquee-widget>
        </div>

        <Cointable />
      </div>

      {/* Modals for Buy and Sell */}
    </section>
  );
};

export default Hero;
