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

import { useContext, useEffect, useRef, useState } from "react";

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
import { ThemeContext } from "@/context/ThemeContext";
import CoinTableNav from "./Navigation/CointableNav";
import { Icon } from "@mui/material";

const Header: React.FC = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  const signInRef = useRef<HTMLDivElement>(null);
  const signUpRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const { theme, changeTheme } = useContext(ThemeContext);

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
    <>
      <div className=" bg-darkmode  ">
        <div className="hidden md:flex container mx-auto lg:max-w-screen-xl flex-row max-w-7xl  p-2 ">
          <CoinTableNav />

          <div className="my-auto space-x-1">
            <div className="dropdown dropdown-hover dropdown-end">
              {/* <Settings role="button" className="text-md my-auto" tabIndex={0} /> */}
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu shadow bg-base-100 rounded-box w-52"
              >
                <li className="rounded-lg flex flex-row">
                  <span className="my-auto flex-1 flex">
                    <span className="flex-1"> Dark Mode</span>
                    <input
                      type="checkbox"
                      className="toggle my-auto flex-end"
                      onChange={(event) => {
                        if (event.target.checked) {
                          changeTheme("dark");
                        } else {
                          changeTheme("corporate");
                        }
                      }}
                    />
                  </span>
                </li>
              </ul>
            </div>

            <Link href="/submityourtoken" className="btn btn-success btn-sm">
              Go To Telegram Bot
            </Link>
          </div>
        </div>

        <hr className="container mx-auto lg:max-w-screen-xl  py-5" />
        {/* <div className="border border-[1px] border-accent"></div> */}

        <div className="navbar max-w-6xl mx-auto flex flex-row">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Parent</a>
                  <ul className="p-2">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>Item 3</a>
                </li>
              </ul>
            </div>
            <Logo />
          </div>

          <div className="navbar-start hidden lg:flex  ">
            <ul className="menu menu-horizontal px-1 gap-5">
              <li className="dropdown dropdown-hover dropdown-start dropdown-bottom font-bold my-auto hover:cursor-pointer text-white">
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
    
          <div className="gap-5 lg:flex ">
            <Link
              href="#"
              className="hidden text-center lg:block bg-transparent text-primary border hover:bg-primary border-primary hover:text-darkmode px-8 py-1 rounded-lg"
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
                    
                  </button>
                  <SignUp />
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
