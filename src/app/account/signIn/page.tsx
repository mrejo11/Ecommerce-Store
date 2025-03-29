"use client";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/fireBase";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { AppDispatch, RootState } from "@/store/store";
import {
  setEmail,
  setIsLoading,
  setIsLogin,
  setPassword,
} from "@/store/authSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useState } from "react";
import PopUp from "@/app/components/PopUp";

const AuthForm = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [showPopUp, setShowPopUp] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const { email, isLoading, isLogin, password } = useSelector(
    (state: RootState) => state.authSlice
  );
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(setIsLoading(true));
    setErrorMessage("");


  
    if (isLogin) {
      // login request
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user; //Save user data for future use (such as profile or admin-dashboard)
          console.log("success", user.email);
      setShowPopUp(true)
          setTimeout(()=>router.push("/account/signIn/shipping"),1000)// go to shipping page
        })
        .catch((error) => {
          if (error.code === "auth/invalid-credential") {
            setErrorMessage("The email or password you entered is incorrect");
          } else {
            setErrorMessage(error.message);
          }
        })
        .finally(() => dispatch(setIsLoading(false)));
    } else {
      // create request
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          router.push("/");
          console.log("success Login", user.email);
          dispatch(setIsLogin(true)); //After registering, LOGIN.
        })
        .catch((error) => {
          if (error.code === "auth/email-already-in-use") {
            setErrorMessage("this email is already used");
          } else if (error.code === "auth/weak-password") {
            setErrorMessage("password atleast must be 6 character");
          } else {
            setErrorMessage(error.message);
          }
        })
        .finally(() => dispatch(setIsLoading(false)));
    }
  };

  return (
    <div className="max-h-screen flex items-center justify-center">
      <PopUp showPopUp={showPopUp} message="Succssefully Logged In"/>

      <div className=" flex flex-col items-center justify-center w-[300px] h-[400px] border shadow-md rounded-2xl translate-y-10 md:translate-y-28">
        <h1 className="text-2xl mb-3 font-mono">
          {isLogin ? "ALREADY REGISTERD?" : "Register"}
        </h1>
        <div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              className="border p-1 rounded-2xl m-2"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => dispatch(setEmail(e.target.value))}
            />
            <input
              className="border p-1 rounded-2xl m-2"
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => dispatch(setPassword(e.target.value))}
            />
            {errorMessage && (
              <p className="text-red-500 text-sm text-center">{errorMessage}</p>
            )}
            <Button
              disabled={isLoading}
              className="bg-gray-800 p-2 text-2xl text-white rounded-full flex items-center justify-center font-mono hover:bg-gray-500 cursor-pointer"
              type="submit"
            >
              {isLoading ? (
                <Loader2 className="animate-spin" />
              ) : (
                <>{isLogin ? "LOG IN" : "REGISTER"}</>
              )}
            </Button>
          </form>
        </div>
        <button
          className=" flex mt-2 font-mono cursor-pointer hover:text-blue-500 "
          onClick={() => dispatch(setIsLogin(!isLogin))}
        >
          {isLogin ? " GO TO REGISTER" : " Go TO LOGIN"}
        </button>
      </div>
    </div>
  );
};

export default AuthForm;
