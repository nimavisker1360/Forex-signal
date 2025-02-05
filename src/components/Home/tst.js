"use client";
import Link from "next/link";

import {
  Api,
  AssessmentOutlined,
  Brush,
  CurrencyBitcoin,
  Favorite,
  GitHub,
  MenuBook,
  NewspaperOutlined,
  PictureAsPdf,
  Search,
  Settings,
  SmartToy,
  Star,
  Telegram,
  TipsAndUpdates,
  Twitter,
} from "@mui/icons-material";

import { useEffect, useRef, useState } from "react";

import { headerData } from "../Header/Navigation/menuData";
import Logo from "./Logo";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MobileHeaderLink from "../Header/Navigation/MobileHeaderLink";
import BarChartIcon from "@mui/icons-material/BarChart";
import CategoryIcon from "@mui/icons-material/Category";
import LinkIcon from "@mui/icons-material/Link";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import Signin from "@/components/Auth/SignIn";
import SignUp from "@/components/Auth/SignUp";

import { Icon } from "@iconify/react/dist/iconify.js";

import CoinTableNav from "./Navigation/CointableNav";

const Header: React.FC = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  const signInRef = useRef<HTMLDivElement>(null);
  const signUpRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    setSticky(window.scrollY >= 80);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      signInRef.current &&
      !signInRef.current.contains(event.target as Node)
    ) {
      setIsSignInOpen(false);
    }
    if (
      signUpRef.current &&
      !signUpRef.current.contains(event.target as Node)
    ) {
      setIsSignUpOpen(false);
    }
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target as Node) &&
      navbarOpen
    ) {
      setNavbarOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navbarOpen, isSignInOpen, isSignUpOpen]);

  useEffect(() => {
    if (isSignInOpen || isSignUpOpen || navbarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isSignInOpen, isSignUpOpen, navbarOpen]);

  return (
    <header className=" bg-darkmode pt-5 shadow-none md:pt-10  ">
      <div className=" my-auto  md:flex flex-row lg:max-w-screen-xl mx-auto items-center justify-between  ">
        <CoinTableNav />
        <Link
          href="/submityourtoken"
          className="lg:block bg-transparent text-primary border hover:bg-primary border-primary hover:text-darkmode px-2 py-2 mb-5 rounded-lg hidden "
        >
          Telegram Bot
        </Link>
        <div className="my-auto space-x-1">
          <div className="dropdown dropdown-hover dropdown-end"></div>
        </div>
      </div>
      <hr className=" mx-auto lg:max-w-screen-xl mt-2 lg:block hidden " />
      <div className="lg:py-1 py-2">
        <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md flex items-center justify-between mt-2 px-4">
          <Logo />

          <div className="navbar-start hidden lg:flex text-white">
            <ul className="menu menu-horizontal px-1 gap-5">
              <li className="dropdown dropdown-hover dropdown-start dropdown-bottom font-bold my-auto hover:cursor-pointer">
                Cryptocurrencies
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu shadow bg-base-100 rounded-box w-52 font-light text-xs"
                >
                  <li className="rounded-lg flex flex-row">
                    <span className="my-auto flex-1 flex">
                      <BarChartIcon className="text-sm" />
                      <span className="flex-1"> By Marketcap</span>
                    </span>
                  </li>
                  <li className="rounded-lg flex flex-row">
                    <span className="my-auto flex-1 flex">
                      <CategoryIcon className="text-sm" />
                      <span className="flex-1"> Categories</span>
                    </span>
                  </li>

                  <hr />
                  <li className="rounded-lg flex flex-row">
                    <span className="my-auto flex-1 flex">
                      <AutoAwesomeIcon className="text-sm" />
                      <Link href="/ " className="flex-1">
                        New Cryptocurrencies
                      </Link>
                    </span>
                  </li>
                  <li className="rounded-lg flex flex-row">
                    <span className="my-auto flex-1 flex">
                      <EmojiEventsIcon className="text-sm" />
                      <Link href="/gainers-losers" className="flex-1">
                        Gainers & Losers
                      </Link>
                    </span>
                  </li>
                </ul>
              </li>

              <li className="dropdown dropdown-hover dropdown-start dropdown-bottom font-bold my-auto hover:cursor-pointer">
                <Link href="/services">Services</Link>

                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu shadow bg-base-100 rounded-box w-52 font-light text-xs"
                >
                  <li className="rounded-lg flex flex-row">
                    <Link href="/services" className="my-auto flex-1 flex">
                      <SmartToy className="text-sm" />
                      <span className="flex-1">Bot Services</span>
                    </Link>
                  </li>
                  <li className="rounded-lg flex flex-row">
                    <Link href="/services" className="my-auto flex-1 flex">
                      <GitHub className="text-sm" />
                      <span className="flex-1">Fullstack Developer</span>
                    </Link>
                  </li>
                  <li className="rounded-lg flex flex-row">
                    <Link href="/services" className="my-auto flex-1 flex">
                      <CurrencyBitcoin className="text-sm" />
                      <span className="flex-1">Blockchain Developer</span>
                    </Link>
                  </li>

                  <li className="rounded-lg flex flex-row">
                    <Link href="/services" className="my-auto flex-1 flex">
                      <Brush className="text-sm" />
                      <span className="flex-1">Crypto Designer</span>
                    </Link>
                  </li>
                  <li className="rounded-lg flex flex-row">
                    <Link href="/services" className="my-auto flex-1 flex">
                      <Telegram className="text-sm" />
                      <span className="flex-1">Telegram Shilling</span>
                    </Link>
                  </li>
                  <li className="rounded-lg flex flex-row">
                    <Link href="/services" className="my-auto flex-1 flex">
                      <Twitter className="text-sm" />
                      <span className="flex-1">Twitter Shilling</span>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          {/*web device */}

          <hr className=" mx-auto lg:max-w-screen-xl " />
          <div className="flex items-center gap-2">
            <Link
              href="#"
              className="hidden lg:block bg-transparent text-primary border hover:bg-primary border-primary hover:text-darkmode px-4 py-2 rounded-lg"
              onClick={() => {
                setIsSignInOpen(true);
              }}
            >
              Sign In
            </Link>
            {isSignInOpen && (
              <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div
                  ref={signInRef}
                  className="relative mx-auto w-full max-w-md overflow-hidden rounded-lg px-8 pt-14 pb-8 text-center bg-dark_grey bg-opacity-90 backdrop-blur-md"
                >
                  <button
                    onClick={() => setIsSignInOpen(false)}
                    className="absolute top-0 right-0 mr-8 mt-8 dark:invert"
                    aria-label="Close Sign In Modal"
                  >
                    <Icon
                      icon="tabler:currency-xrp"
                      className="text-white hover:text-primary text-24 inline-block me-2"
                    />
                  </button>
                  <Signin />
                </div>
              </div>
            )}

            <Link
              href="#"
              className="hidden lg:block bg-primary text-darkmode hover:bg-transparent hover:text-primary border border-primary px-4 py-2 rounded-lg"
              onClick={() => {
                setIsSignUpOpen(true);
              }}
            >
              Sign Up
            </Link>
            {isSignUpOpen && (
              <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div
                  ref={signUpRef}
                  className="relative mx-auto w-full max-w-md overflow-hidden rounded-lg bg-dark_grey bg-opacity-90 backdrop-blur-md px-8 pt-14 pb-8 text-center"
                >
                  <button
                    onClick={() => setIsSignUpOpen(false)}
                    className="absolute top-0 right-0 mr-8 mt-8 dark:invert"
                    aria-label="Close Sign Up Modal"
                  >
                    <Icon
                      icon="tabler:currency-xrp"
                      className="text-white hover:text-primary text-24 inline-block me-2"
                    />
                  </button>
                  <SignUp />
                </div>
              </div>
            )}

            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className="block lg:hidden p-2 rounded-lg "
              aria-label="Toggle mobile menu"
            >
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white mt-1.5"></span>
              <span className="block w-6 h-0.5 bg-white mt-1.5"></span>
            </button>
          </div>
        </div>

        {navbarOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40" />
        )}

        <div
          ref={mobileMenuRef}
          className={`lg:hidden fixed top-0 right-0 h-full w-full bg-darkmode shadow-lg transform transition-transform duration-300 max-w-xs ${
            navbarOpen ? "translate-x-0" : "translate-x-full"
          } z-50`}
        >
          <div className="flex items-center justify-between p-4">
            <h2 className="text-lg font-bold text-midnight_text dark:text-midnight_text">
              <Logo />
            </h2>

            {/*  */}
            <button
              onClick={() => setNavbarOpen(false)}
              className="bg-[url('/images/closed.svg')] bg-no-repeat bg-contain w-5 h-5 absolute top-0 right-0 mr-8 mt-8 "
              aria-label="Close menu Modal"
            ></button>
          </div>

          <nav className="flex flex-col items-center p-20 gap-4">
            {headerData.map((item, index) => (
              <MobileHeaderLink key={index} item={item} />
            ))}

            <div className="mt-4 flex flex-col space-y-4 w-full">
              <Link
                href="#"
                className="bg-transparent border border-primary text-primary px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white"
                onClick={() => {
                  setIsSignInOpen(true);
                  setNavbarOpen(false);
                }}
              >
                Sign In
              </Link>
              <Link
                href="#"
                className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                onClick={() => {
                  setIsSignUpOpen(true);
                  setNavbarOpen(false);
                }}
              >
                Sign Up
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
