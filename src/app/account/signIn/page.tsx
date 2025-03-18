"use client";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
// import { useState } from "react";
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
} from "@/store/authSlice"; //تابع رو اینمپورت میکنیم
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const AuthForm = () => {
  // const [isLogin, setIsLogin] = useState(true); // حالت ورود یا ثبت‌نام
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [isLoading, setIsLoading] = useState(false); // حالت لودینگ
  const dispatch = useDispatch<AppDispatch>();
  const { email, isLoading, isLogin, password } = useSelector(
    (state: RootState) => state.authSlice
  ); //استیت تابع رو تو متغفیر دیاسراکت کردیم
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(setIsLoading(true)); // شروع لودینگ قبل از درخواست

    if (isLogin) {
      // درخواست ورود
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("ورود موفق:", user.email);
          router.push("/account/signIn/shipping"); // هدایت به صفحه شیپینگ
        })
        .catch((error) => {
          console.log("خطا در ورود:", error.message);
        })
        .finally(() => dispatch(setIsLoading(false))); // پایان لودینگ
    } else {
      // درخواست ثبت‌نام
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("ثبت‌نام موفق:", user.email);
        })
        .catch((error) => {
          console.log("خطا در ثبت‌نام:", error.message);
        })
        .finally(() => dispatch(setIsLoading(false))); // پایان لودینگ
    }
  };

  return (
    <div className=" absolute left-1/2 top-1/2 flex flex-col items-center justify-center w-[300px] h-[400] border shadow-md rounded-2xl  -translate-x-1/2 -translate-y-1/2 ">
      <div className=" flex ">
        <h1 className="text-2xl mb-3 font-mono">
          {isLogin ? "ALREADY REGISTERD?" : "Register"}
        </h1>
      </div>
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
          <Button
            disabled={isLoading} // دکمه فقط موقع لودینگ غیرفعال می‌شه
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
      onClick={() => dispatch(setIsLogin(!isLogin))}>
        {isLogin ? " GO TO REGISTER" : "به ورود بروید"}
      </button>

      {!isLogin && (
        <p>
          اگر عضو هستید، <a href="/login">اینجا کلیک کنید</a> برای ورود
        </p>
      )}
    </div>
  );
};

export default AuthForm;
