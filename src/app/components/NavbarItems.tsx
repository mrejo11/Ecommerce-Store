"use client";
import Link from "next/link";
import { Search, UserRound, ShoppingCart, Menu } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function NavbarItems() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    if (window.innerWidth < 768) {
      // فقط در موبایل (عرض کمتر از 768px)
      setIsOpen(false);
    }
  };

  return (
    <>
      <nav className="container mx-auto flex justify-center w-full gap-6 py-2 ">
        {/* menu */}
        <div className="bg-blue-500/30 backdrop-sepia  flex flex-col w-full md:w-auto md:flex-row gap-4 md:gap-7 p-2 rounded-2xl ">
          <div className="flex items-center md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              <Menu />
            </button>
            <Link
              href="/"
              className="ml-20 font-serif font-bold text-xl hover:bg-gray-500 p-2 rounded-sm duration-500 ease-in-out text-center md:text-left "
            >
              TechZone
            </Link>
          </div>
          <div
            className={`flex-col md:flex-row gap-2 md:gap-7 w-full ${
              isOpen ? "flex" : "hidden md:flex"
            }`}
          >
            <Link
              href="/"
              className={
                !isOpen
                  ? "font-serif font-bold text-xl hover:bg-gray-500 p-2 rounded-sm duration-500 ease-in-out text-center md:text-left"
                  : "hidden"
              }
              onClick={handleLinkClick}
            >
              TechZone
            </Link>

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
            <div className="flex flex-col md:flex-row gap-8 md:items-center md:gap-4 ml-1 md:ml-8 cursor-pointer">
              <div className="flex items-center scale-75">
                <Search color="#000" />
                {isOpen ? (
                  <Input width="100%" placeholder="Serach" className="ml-2" />
                ) : (
                  ""
                )}
              </div>

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
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="ghost" className="ml-2 p-2">
                      <UserRound color="#000" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-48">
                    <div className="flex flex-col gap-2">
                      <Link href="/account/signIn">
                        <Button
                          variant="outline"
                          className="w-full"
                          onClick={handleLinkClick}
                        >
                          Sign In
                        </Button>
                      </Link>
                      <Link href="/account/signUp">
                        <Button
                          variant="outline"
                          className="w-full"
                          onClick={handleLinkClick}
                        >
                          Sign Up
                        </Button>
                      </Link>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>

              <div>
                <ShoppingCart color="#000" />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
