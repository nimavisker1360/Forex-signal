import React from "react";

const SectionTwo = () => {
  return (
    <>
      <script src="https://widgets.coingecko.com/gecko-coin-price-marquee-widget.js"></script>
      <gecko-coin-price-marquee-widget
        locale="en"
        dark-mode="true"
        transparent-background="true"
        outlined="true"
        coin-ids="ethereum,bitcoin,binancecoin,ripple,solana,cardano,dogecoin,matic-network,chainlink"
        initial-currency="usd"
      ></gecko-coin-price-marquee-widget>
    </>
  );
};

export default SectionTwo;
