import CryptoNewsComponent from "@/components/main/cryptonews-component";
import Image from "next/image";
import React from "react";

export default function CryptoNewsPage() {
  return (
    <div className="bg-darkmode text-white">
    <div className=" md:flex flex-col lg:max-w-screen-xl mx-auto p-2 bg-darkmode text-white">
      <h1 className="text-4xl text-center pt-5 ">Latest Crypto News</h1>

      <h2 className=" my-auto hidden md:flex flex-row lg:max-w-screen-xl mx-auto p-2">
        aggregated by BullishMarketCap
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/bmc-database-f73bd.appspot.com/o/services%2F400.400.png?alt=media&token=de719752-55ed-4d56-86c3-a6ca8eae14d3"
          width={100}
          height={100}
          className="w-4 h-4 my-auto mx-2 rounded-full"
          alt="BullishMarketCap"
        />
      </h2>
    
      <CryptoNewsComponent />
      </div>
    </div>
  );
}
