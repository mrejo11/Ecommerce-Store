"use client";
import Link from "next/link";
import { Search, UserRound, ShoppingCart, Menu, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import { setCurrentPage } from "@/store/sortSlice";
export default function NavbarItems() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const searchRef = useRef<HTMLDivElement | null>(null); //margah baraye input

  const dispatch = useDispatch<AppDispatch>();

  const handleHeaderClick = () => {
    dispatch(setCurrentPage(1));
  };
  const handleLinkClick = () => {
    if (window.innerWidth < 768) {
      // فقط در موبایل (عرض کمتر از 768px)
      setIsOpen(false);
      dispatch(setCurrentPage(1));
    }
  };

  const handleSearchClick = () => {
    setIsSearchActive(!isSearchActive);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      // console.log("target:", event.target);
      // console.log("contains:", searchRef.current?.contains(event.target as Node));
      // console.log("!contains:", !searchRef.current?.contains(event.target as Node));
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node) &&
        isSearchActive
      ) {
        setIsSearchActive(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSearchActive]);

  return (
    <>
      <nav className="container mx-auto flex justify-center w-full gap-6 py-2 ">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* menu */}
          <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 backdrop-sepia  flex flex-col w-72 md:w-auto md:flex-row gap-4 md:gap-7 p-2 rounded-2xl ">
            <div className="flex items-center ">
              <div onClick={() => setIsOpen(!isOpen)}>
                <Menu className="md:hidden" />
              </div>

              <Link
                href="/"
                className="ml-12 font-serif font-bold text-xl hover:bg-gray-500 p-2 rounded-sm duration-500 ease-in-out text-center md:text-left "
                onClick={handleHeaderClick}
              >
                TechZone
              </Link>
            </div>
            <div
              className={`flex-col md:flex-row gap-2 md:gap-7 w-full ${
                isOpen ? "flex md:hidden" : "hidden md:flex"
              }`}
            >
              <Link
                href="/Tv"
                className="block hover:bg-gray-500 p-2 rounded-sm duration-500 ease-in-out duration-300"
                onClick={handleLinkClick}
              >
                Tv
              </Link>
              <Link
                href="/audio"
                className="block hover:bg-gray-500 p-2 rounded-sm duration-500 ease-in-out"
                onClick={handleLinkClick}
              >
                Audio
              </Link>
              <Link
                href="/laptop"
                className="block hover:bg-gray-500 p-2 rounded-sm duration-500 ease-in-out"
                onClick={handleLinkClick}
              >
                laptop
              </Link>
              <Link
                href="/mobile"
                className="block hover:bg-gray-500 p-2 rounded-sm duration-500 ease-in-out"
                onClick={handleLinkClick}
              >
                Mobile
              </Link>
              <Link
                href="/gaming"
                className="block hover:bg-gray-500 p-2 rounded-sm duration-500 ease-in-out"
                onClick={handleLinkClick}
              >
                Gaming
              </Link>
              <Link
                href="/appliances"
                className="block hover:bg-gray-500 p-2 rounded-sm duration-500 ease-in-out"
                onClick={handleLinkClick}
              >
                Appliances
              </Link>
              <div className="flex flex-col md:flex-row gap-8 md:items-center md:gap-4 ml-1 md:ml-8 cursor-pointer relative">
                <div className="flex items-center">
                  <button onClick={handleSearchClick}>
                    {isSearchActive ? (
                      <X color="#000" />
                    ) : (
                      <Search color="#000" />
                    )}
                  </button>
                </div>

                {isSearchActive && (
                  <div ref={searchRef}>
                    <Input
                      autoFocus
                      placeholder="Search..."
                      className="absolute top-10 left-0 w-40 md:w-64 border border-gray-300 p-2 rounded-md shadow-md bg-white"
                    />
                  </div>
                )}

                <div className="flex items-center md:hidden">
                  <UserRound color="#000" />
                  {isOpen ? (
                    <Link href="/account/signIn">
                      {" "}
                      <Button
                        size="lg"
                        className="ml-2"
                        onClick={handleLinkClick}
                      >
                        SignIn
                      </Button>{" "}
                    </Link>
                  ) : (
                    ""
                  )}
                </div>
                <div className="hidden md:block">
                  <Link href="/account/signIn">
                    <UserRound color="#000" />
                  </Link>
                </div>

                <div>
                  <Link href="/Cart">
                    <ShoppingCart color="#000" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </nav>
    </>
  );
}
