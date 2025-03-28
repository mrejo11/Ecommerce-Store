"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";


export default function ShippingPage() {
  const [isTextarea, setIsTextarea] = useState(false);
  const [address, setAddress] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const handleClick = () => {
    setIsTextarea(true);
  };

  const handleAddressChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setAddress(e.target.value);
  };


  // check aya click khareg as safeh shode
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        textareaRef.current &&
        !textareaRef.current.contains(event.target as Node)
      ) {
        //if click out of textarea close it
        setIsTextarea(false);
      }
    };

    //add eventlistener if text area is open
    if (isTextarea) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    //clear event listener if is texarea is change
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isTextarea]);

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="grid grid-cols-2 gap-4 w-full max-w-2xl h-auto border p-4 rounded-2xl shadow">
        <div className="col-span-2">
          <h1 className="text-2xl font-bold font-mono">SHIPPING ADDRESS</h1>
          <p className="text-gray-700 font-mono">
            Please enter your shipping address in the form below.
          </p>
        </div>

        <div>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Salutation *" />
            </SelectTrigger>
            <SelectContent className="font-mono text-stone-500">
              <SelectGroup>
                <SelectItem value="mr">Mr.</SelectItem>
                <SelectItem value="mrs">Mrs.</SelectItem>
                <SelectItem value="ms">Ms.</SelectItem>
                <SelectItem value="mx">Mx</SelectItem>
                <SelectItem value="none">No specification</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Input id="name" type="text" placeholder="Name" className="w-full" />
        </div>
        <div>
          <Input
            id="lastName"
            type="text"
            placeholder="Last Name"
            className="w-full"
          />
        </div>
        <div>
          <Input
            id="email"
            type="email"
            placeholder="Email"
            className="w-full"
          />
        </div>
        <div>
          <Input
            id="postcode"
            type="number"
            placeholder="Post code"
            className="w-full"
          />
        </div>
        <div>
          <Input id="city" type="text" placeholder="City" className="w-full" />
        </div>

        <div>
          {isTextarea ? (
            <textarea
              ref={textareaRef}
              id="address"
              placeholder="Address"
              value={address}
              onChange={handleAddressChange}
              className="w-full h-24 p-2 border rounded-md"
            />
          ) : (
            <Input
              id="address"
              type="text"
              placeholder="Address"
              value={address}
              className="w-full"
              onChange={handleAddressChange}
              onClick={handleClick}
            />
          )}
        </div>
        <div>
          <Input
            id="phone"
            type="number"
            placeholder="Phone"
            className="w-full"
          />
        </div>

        <div className="col-span-2">
          <Link href={"/payment"}>
            <Button className="w-full mt-2">Proceed</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
