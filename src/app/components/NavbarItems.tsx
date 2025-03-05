"use client";
import Link from "next/link";
import { Search, UserRound, ShoppingCart,Menu } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function NavbarItems() {
    const [isOpen,setIsOpen]=useState(false)
  return (
    <>
      <nav className="container mx-auto flex justify-center w-full gap-6 py-2 ">
        {/* menu */}
        <div className="bg-blue-500/30 backdrop-sepia  flex flex-col w-full md:w-auto md:flex-row gap-4 md:gap-7 p-2 rounded-2xl ">
        <div className="flex items-center md:hidden"><button onClick={()=>setIsOpen(!isOpen)}><Menu /></button>
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
            className={!isOpen?"font-serif font-bold text-xl hover:bg-gray-500 p-2 rounded-sm duration-500 ease-in-out text-center md:text-left":"hidden"}
          >
            TechZone
          </Link>
        
          
          <Link
            href="/Tv"
            className="block hover:bg-gray-500 p-2 rounded-sm duration-500 ease-in-out"
          >
            Tv
          </Link>
          <Link
            href="/audio"
            className="block hover:bg-gray-500 p-2 rounded-sm duration-500 ease-in-out"
          >
            Audio
          </Link>
          <Link
            href="/laptop"
            className="block hover:bg-gray-500 p-2 rounded-sm duration-500 ease-in-out"
          >
            laptop
          </Link>
          <Link
            href="/mobile"
            className="block hover:bg-gray-500 p-2 rounded-sm duration-500 ease-in-out"
          >
            Mobile
          </Link>
          <Link
            href="/gaming"
            className="block hover:bg-gray-500 p-2 rounded-sm duration-500 ease-in-out"
          >
            Gaming
          </Link>
          <Link
            href="/appliances"
            className="block hover:bg-gray-500 p-2 rounded-sm duration-500 ease-in-out"
          >
            Appliances
          </Link>
          <div className="flex flex-col md:flex-row gap-8 md:items-center md:gap-4 ml-1 md:ml-8 cursor-pointer">
            <div className="flex items-center">
              <Search color="#000" />
              {isOpen ?<Input width="100%" placeholder="Serach"/>:''}
              
            </div>
            <div className="flex items-center">
              <UserRound color="#000" />
              {isOpen ?<Button>SignIn</Button>:''}
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
