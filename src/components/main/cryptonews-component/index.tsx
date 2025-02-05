"use client";
import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import axios from "axios";
import Moment from "react-moment";
import RestoreIcon from "@mui/icons-material/Restore";
import Image from "next/image";

const CryptoNewsComponent = () => {
  const [page, setPage] = useState(10);

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

  if (loading)
    return (
      <div className="max-w-7xl mx-auto py-20 text-center">
        <div className="hidden lg:flex  lg:flex-row lg:gap-3 my-5">
          {news.map((items, index) => (
            <div key={index.id} className="w-full">
              <img
                src={items.imageurl}
                alt={items.title}
                className="rounded-md h-40 md:w-full"
              />
              <div className="skeleton h-48 w-full"></div>
              <div className="skeleton h-4 mt-2"></div>
            </div>
          ))}
        </div>

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
      </div>
    );

  if (!news || news.length == 0) {
    return (
      <main className="max-w-7xl mx-auto py-40 text-center">
        <h1 className="text-3xl">404 - Page Not Found</h1>
        <p>Sorry, the page you are looking for could not be found.</p>

        <Link href="/">Return to home Page</Link>
      </main>
    );
  }

  return (
    <>
      <div>
        <Marquee
          direction="left"
          className="border border-base-200 rounded-3xl py-1"
          pauseOnHover
        >
          {news?.map((news, index) => (
            <a
              href={news.imageurl}
              target="_blank"
              key={index}
              className="text-xs mr-5 hover:underline"
            >
              {" "}
              <RestoreIcon className="text-green-300 text-xs" />
              {news.title}
            </a>
          ))}
        </Marquee>

        <div className="hidden lg:flex lg:flex-row lg:gap-3 my-5">
          {news?.slice(0, 4).map((news, index) => (
            <a
              href={news.url}
              target="_blank"
              key={index}
              className="flex-1 hover:underline hover:cursor-pointer"
            >
              <img
                src={news.imageurl}
                className="h-48 w-full hover:opacity-50 duration-500"
                alt={news.title}
                height={150}
                width={150}
              />
              <h1 className="line-clamp-1 text-xs">{news.title}</h1>
            </a>
          ))}
        </div>

        <div className="">
          {news.slice(0, page).map((news, index) => (
            <>
              <div className="divider"></div>
              <div key={index} className="flex flex-row py-3 gap-10">
                <span>
                  <img src={news.imageurl} className="max-w-40 max-h-40" />
                </span>

                <span className="flex-1 text-sm md:text-lg space-y-3">
                  <a
                    href={news.url}
                    target="_blank"
                    className="line-clamp-1 hover:cursor-pointer hover:underline"
                  >
                    {news.title}
                  </a>

                  <p className="text-xs">
                    <b>{news.location} </b> (
                    <Moment fromNow>{news.date_added}</Moment>)
                  </p>

                  <p className="line-clamp-1 text-xs">{news.body}</p>
                </span>
              </div>
            </>
          ))}
        </div>

        <div className="divider">
          {news.length > page && (
            <span
              className="badge badge-accent hover:cursor-pointer"
              onClick={() => setPage(page + 10)}
            >
              see more
            </span>
          )}
        </div>
      </div>
    </>
  );
};

export default CryptoNewsComponent;
