"use client";
import Image from "next/image";
import { timelineData } from "@/app/api/data";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import properties from "@/utils/properties.json";
import PropertyCard from "@/components/propertycard";

const TimeLine = () => {
  console.log(properties);
  const ref = useRef(null);

  return (
    <section className="px-4 py-6" id="development">
      <div className="container-xl lg:container m-auto px-4 py-6">
        <div className="text-center">
          <p className="text-muted sm:text-28 text-35 mb-9">
            Free Crypto <span className="text-primary">Signals</span>
          </p>
          <div>
            {properties.length === 0 ? (
              <p>No Signal Found</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {properties.map((property, index) => (
                  <PropertyCard
                    key={index}
                    property={property}
                    imgSrc={property.images}
                    imgSymbol={property.arrow}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimeLine;
