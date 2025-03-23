"use client";
import { useState } from "react";

function Footer() {
  const [email, setEmail] = useState("");
  const [isfill, setIsfill] = useState(false);
  const [isSubscribe, setIsSubscribe] = useState(false);
  // change the email input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleFillRadioBtn = () => {
    setIsfill(!isfill);
  };

  const handleSubscribe = () => {
    setIsSubscribe(true);
  };

  const isFocuse = email.length > 0;
  return (
    <div className="mx-auto flex flex-col items-center justify-center bg-gray-200 py-8">
      {/* Newsletter title */}
      {!isSubscribe ? (
        <>
          <h1 className="text-xl font-mono mb-4">
            Join our newsletter for trends, pre-shopping, and more
          </h1>
          {/* Email input field */}
          <input
            type="text"
            placeholder="Your email address"
            className="border focus:outline-none focus:border-b-black border-b-black text-center w-80 mb-4"
            value={email}
            onChange={handleChange} //update email value
          />

          <div
            className={`w-full max-w-[600px] transition-all ease-in-out duration-400 ${
              isFocuse
                ? "max-h-[500px] opacity-100"
                : "max-h-0 opacity-0 overflow-hidden"
            }`}
          >
            <div className="text-xs flex flex-col items-center">
              {/* Consent text with radio button */}
              <p className="mb-4">
                <input
                  type="radio"
                  className={`w-2 h-2 appearance-none border border-black ${
                    !isfill
                      ? "checked:bg-white rounded-none mr-3"
                      : "checked:bg-black rounded-none mr-3"
                  }`}
                  onClick={handleFillRadioBtn}
                />
                I agree that TechZone may insert analytical web beacons into the
                newsletter and create a personalized user profile based on my
                purchase and usage behavior, including sending a notification
                when I have placed something in the shopping cart. Further
                details can be found in our Privacy Policy, clause 5. I
                understand that I can revoke my consent at any time by emailing
                privacy@TechZone.com
              </p>
              {/* Subscribe button, centered with mx-auto */}
              <button
                disabled={!isfill}
                className={`${
                  !isfill
                    ? "bg-gray-500 text-white px-12 py-2 mx-auto block"
                    : "bg-gray-900 cursor-pointer text-white px-12 py-2 mx-auto block"
                }`}
                onClick={handleSubscribe}
              >
                SUBSCRIBE
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-xl font-bold font-mono">
            Thank you for subscribing
          </h1>
          <p className="font-mono text-xs">
            Thank you. You are now subscribed to the TechZone newsletter.
          </p>
        </div>
      )}
    </div>
  );
}

export default Footer;
