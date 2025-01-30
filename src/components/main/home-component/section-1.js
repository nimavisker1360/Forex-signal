import React from "react";
import Link from "next/link";
const SectionOne = () => {
  return (
    <>
      {/* Advert Section */}

      <Link
        href="https://originalwebsite.com"
        target="_blank"
        rel="noopener noreferrer"
        className="max-w-2xl mx-auto my-3"
      >
        <img
          src="https://tpc.googlesyndication.com/simgad/11512448238074037570"
          alt="Banner"
          className="max-w-2xl mx-auto my-3"
        />
      </Link>
    </>
  );
};

export default SectionOne;