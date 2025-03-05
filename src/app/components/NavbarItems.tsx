"use client";
import Link from "next/link";
import { Search, UserRound, ShoppingCart, Menu } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Button } from "@/components/ui/button";

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
              <Menu/>
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
              <div className="flex items-center">
                <Search color="#000" />
                {isOpen ? <Input width="100%" placeholder="Serach" className="ml-2"/> : ""}
              </div>
              <div className="flex items-center">
                <UserRound color="#000" />
                {isOpen ?<Link href="/account/signIn"> <Button size="lg" className="ml-2"
                onClick={handleLinkClick}
                >SignIn</Button> </Link>: ""}
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
