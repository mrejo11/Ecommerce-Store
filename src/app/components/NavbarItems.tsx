"use client";
import Link from "next/link";
import { UserRound, ShoppingCart, Menu} from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { setCurrentPage } from "@/store/sortSlice";
import { useSelector } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "@/lib/fireBase";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useRouter } from "next/navigation";
import { resetAuth } from "@/store/authSlice";


export default function NavbarItems() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  //add number of items on shopping icon for show any items to shopping basket
  const cart = useSelector((state: RootState) => state.productModal.cart);
  useSelector((state: RootState) => state.authSlice);
  const dispatch = useDispatch<AppDispatch>();

  const router=useRouter()
  const handleHeaderClick = () => {
    dispatch(setCurrentPage(1));
  };

 // Handles link clicks in the navbar on smaller screens.
// Closes the navbar (if screen width is less than 768px) and resets the current page to 1.
  const handleLinkClick = () => {
    if (window.innerWidth < 768) {
      setIsOpen(false);
      dispatch(setCurrentPage(1));
    }
  };

// Tracks user's login state using Firebase.
// Shows or hides the online status indicator based on authentication status.
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
    return () => unsubscribe();
  }, []);

// Signs the user out using Firebase authentication.
// On success: resets Redux auth state, navigates to home page, and alerts the user.
const handleSignOut = () => {
      signOut(auth)
        .then(() => {
          dispatch(resetAuth())
          router.push("/"); 
          alert("success logout"); 
        })
        .catch((error) => {
          console.error("Error on exit", error.message); 
        });
    };
  

  return (
    <>
      <nav className="container mx-auto flex justify-center w-full gap-6 py-2">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* menu */}
          <div className=" bg-gradient-to-r from-teal-500 to-indigo-500 backdrop-sepia  flex flex-col w-72 md:w-auto md:flex-row gap-4 md:gap-7 p-2 rounded-2xl">
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
                  {isLoggedIn?
                  
                  <Popover>
                  <PopoverTrigger>
                    <UserRound color="#000" />
                    {isLoggedIn && (
                      <span
                        className="absolute top-2 right-9 bg-green-500 text-white text-xs rounded-full h-2 w-2 flex items-center justify-center"
                        suppressHydrationWarning
                      ></span>
                    )}
                  </PopoverTrigger>
                  <PopoverContent className="w-32">
                    <div >
                      <Button type="submit" onClick={handleSignOut}>Sign Out</Button>
                    </div>
                  </PopoverContent>
                </Popover>
                  
                  : <Link href={"/account/signIn"}> <UserRound color="#000" /></Link>}
                
                </div>

                <div>
                  <Link href="/Cart">
                    <ShoppingCart color="#000" />
                    {cart.length > 0 && (
                      <span
                        className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center"
                        suppressHydrationWarning
                      >
                        {cart.length}
                      </span>
                    )}
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


