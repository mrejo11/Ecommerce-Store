"use client";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useState } from "react";
// import { useRouter } from "next/navigation";
import { auth } from "@/lib/fireBase";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true); // حالت ورود یا ثبت‌نام
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogin) {
      //درخواست ورود
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("succsess login", user.email);
        })
        .catch((error) => {
          console.log("fail to login", error.message);
        });
      // ارسال درخواست ورود
      console.log("ورود با ایمیل:", email, "و رمز عبور:", password);

      // در اینجا می‌توانید درخواست API برای ورود به سیستم را اضافه کنید
    } else {
         // درخواست ثبت‌نام
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // کاربر با موفقیت ثبت‌نام کرد
      const user = userCredential.user;
      console.log("ثبت‌نام موفق:", user.email);
    })
    .catch((error) => {
      // خطا در ثبت‌نام
      console.log("خطا در ثبت‌نام:", error.message);
    });
    }
  };

  const handleClick = () => {};

  return (
    <div className=" flex flex-col w-full h-[50vh] justify-center items-center">
      <h1 className="text-2xl mb-3">{isLogin ? "SignIn Page" : "Register"}</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="border p-1 rounded-2xl"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="border p-1 rounded-2xl"
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="bg-gray-800 p-2 text-2xl text-white rounded-full flex items-center justify-center"
          type="submit"
          onClick={handleClick}
        >
          {isLogin ? "ورود" : "ثبت‌نام"}
        </button>
      </form>
      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "به ثبت‌نام بروید" : "به ورود بروید"}
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
