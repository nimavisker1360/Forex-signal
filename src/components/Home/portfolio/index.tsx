"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import React, { useContext } from "react";
import Marquee from "react-fast-marquee";
import Moment from "react-moment";
import RestoreIcon from "@mui/icons-material/Restore";

const Portfolio = () => {
  const [news, setNews] = useState<
    { id: string; imageurl: string; title: string; body: string; url: string }[]
  >([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          `https://min-api.cryptocompare.com/data/v2/news/?lang=EN`,
          {
            headers: {
              Authorization: `NEXT_PUBLIC_CRYPTOCOMPARE_API_KEY`,
            },
          }
        );
        setNews(response.data.Data);
      } catch (err) {
        setError("Failed to fetch news. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      <section
        className="container-xl lg:container m-auto px-4 py-6"
        id="portfolio"
      >
        <h1 className="py-5 text-xl font-extrabold bg-darkmode text-white text-center ">
          Latest Crypto News
        </h1>

        <Marquee
          direction="left"
          className=" container-xl lg:container border m-auto border-base-200 rounded-1xl lg:max-w-screen-xl  bg-darkmode text-white"
          pauseOnHover
        >
          {news?.map((news, index) => (
            <a
              href={news.url}
              target="_blank"
              key={index.id}
              className="text-xs mr-5 hover:underline"
            >
              {" "}
              <RestoreIcon className="text-accent text-xs" /> {news.title}
            </a>
          ))}
        </Marquee>

        <div className="footer p-10  max-w-7xl mx-auto text-white">
          {news?.slice(0, 4).map((news, index) => (
            <div className="flex flex-col gap-2 flex-1" key={index}>
              <div className=" w-full">
                <img
                  src={news.imageurl}
                  alt={news.title}
                  className="rounded-md h-40 md:w-full"
                />
              </div>
              <a
                href={news.url}
                target="_blank"
                className=" w-full text-lg font-bold line-clamp-2 hover:underline hover:cursor-pointer text-blue-500"
              >
                {news.title}
              </a>
              <h2 className=" w-full text-sm  line-clamp-2">{news.title}</h2>
              <div className=" w-full justify-center items-center line-clamp-1 text-xs ">
                <p className="text-gray-400 text-sm mb-2">
                  {news.body.length > 100
                    ? `${news.body.substring(0, 100)}...`
                    : news.body}
                </p>
              </div>
            </div>
          ))}
        </div>
        <br />
        <div className="divider ">
          <Link href="/cryptonews" className="badge badge-accent">
            Read More...
          </Link>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
