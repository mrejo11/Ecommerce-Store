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
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  postId:number;
  city:string;
  address:string;
  phone:number
};

export default function ShippingPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  // const onError: SubmitErrorHandler<FormValues> = (errors) => console.log(errors);

  const [isTextarea, setIsTextarea] = useState(false);
  const [address, setAddress] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const router = useRouter();
  const handleClick = () => {
    setIsTextarea(true);
  };

  const handleOnSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    router.push("/payment");
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
    <form onSubmit={handleSubmit(handleOnSubmit)}>
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
            <Input
              {...register("firstName",{
                required:"firstname is requird",
                minLength:2,
              })}
              placeholder="Name"
              className="w-full"
            />
            {errors.firstName && (
               <span className="text-red-600 font-mono">
               {errors.firstName.message}
             </span>
            )}
          </div>
          <div>
            <Input
              {...register("lastName", {
                required: "lastname is required",
                minLength: 2,
              })}
              placeholder="Lastname"
              className="w-full"
            />
            {errors.lastName && (
              <span className="text-red-600 font-mono">
                {errors.lastName.message}
              </span>
            )}
          </div>
          <div>
            <Input
            {...register("email",{
              required: "email is required",
                minLength: 2,
            })}
              placeholder="Email"
              className="w-full"
            />
              {errors.email && (
              <span className="text-red-600 font-mono">
                {errors.email.message}
              </span>
            )}
          </div>
          <div>
            <Input
              {...register("postId",{
                required: "PostId is required",
                  minLength: 2,
              })}
              placeholder="Post code"
              className="w-full"
            />
              {errors.postId && (
              <span className="text-red-600 font-mono">
                {errors.postId.message}
              </span>
            )}
          </div>
          <div>
            <Input
               {...register("city",{
                required: "ciry is required",
                  minLength: 2,
              })}
              placeholder="City"
              className="w-full"
            />
            {errors.city && (
              <span className="text-red-600 font-mono">
                {errors.city.message}
              </span>
            )}
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
              {...register("phone",{
                required: "phone is required",
                  minLength: 2,
              })}
              placeholder="Phone"
              className="w-full"
            />
             {errors.phone && (
              <span className="text-red-600 font-mono">
                {errors.phone.message}
              </span>
            )}
          </div>

          <div className="col-span-2">
            <Button type="submit" className="w-full mt-2">
              Proceed
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
}
