import Link from "next/link";
import { FaBitcoin, FaEthereum } from "react-icons/fa";
import Image from "next/image";

const PropertyCard = ({ property, imgSrc, imgSymbol, }) => {
  return (
    <section className=" container mx-auto rounded-b-lg shadow-md relative lg:max-w-screen-xl bg-darkmode  border-2 border-white ">
      <div className="bg-deepSlate flex flex-row items-center justify-between">
        <Image src={imgSrc} alt="" width={200} height={200} />
        <Image src={imgSymbol[1]} alt="" width={100} height={100} />
      </div>
      <div className="border border-gray-500 mb-5 "></div>
      <div className="flex flex-wrap items-center justify-between">
        <p className="text-white ml-3">BTC/USDT signal</p>
        <p className="text-gray-400 mr-3">5 hours ago</p>
      </div>
      <div className="border border-dashed mb-2 mt-2 "></div>
      <div className="flex flex-wrap items-center justify-between">
        <p className="text-white ml-3">From</p>
        <p className="text-gray-400 mr-3">{property.createdAt}</p>
      </div>
      <div className="border border-dashed mb-2 mt-2 "></div>
      <div className="flex flex-wrap items-center justify-between">
        <p className="text-white ml-3">Till</p>
        <p className="text-gray-400 mr-3">{property.createdAt}</p>
      </div>
      <div className="border border-dashed mb-2 mt-2 "></div>
      <div className="justify-center mt-5 font-medium lg:text-40 md:text-30 text-5 items-center text-white text-wrap">
        Filled
      </div>
      <div className="border border-solid-1 mb-5 mt-5"></div>
      <div className="flex flex-wrap items-center justify-between">
        <p className="text-white ml-3">Bought at</p>
        <p className="text-white mr-3">{property.Buy_at}</p>
      </div>
      <div className="border border-dashed mb-2 mt-2 "></div>
      <div className="flex flex-wrap items-center justify-between">
        <p className="text-white ml-3">stop_loss</p>
        <p className="text-white mr-3">{property.Sold_at}</p>
      </div>
      <div className="border border-dashed mb-2 mt-2 "></div>
      <div className="flex flex-wrap items-center justify-between">
        <p className="text-white ml-3">Profit, pips</p>
        <p className="text-success mr-3">{`${property.Profit}`}</p>
      </div>
    </section>
  );
};

export default PropertyCard;
