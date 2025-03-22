
## فروشگاه تک زون | TechZone 🛒
پروژه تک زون یک وب اپلیکیشن تجارت الکترونیک است که با فریمورک Next.js توسعه داده شده است. این پروژه بر اساس مفهوم MVP (Minimum Viable Product) طراحی شده و فقط شامل ویژگی‌های اصلی برای نمایش و فروش و احراز هویت و هچنین صفحه پرداخت محصولات است. وب اپلیکیشن کاملاً ریسپانسیو بوده و روی دستگاه‌های مختلف مثل دسکتاپ، تبلت و موبایل به خوبی نمایش داده می‌شود. برای شبیه‌سازی داده‌های واقعی در طول توسعه، از یک API ساختگی استفاده شده است.




## ویژگی‌ها

استفاده از API محصولات از سایت https://fakestoreapi.in  

احراز هویت و ورود/خروج با Firebase  

بارگذاری سریع محصولات با استفاده از SSG (Static Site Generation) در Next.js  

مدیریت وضعیت با Redux  

فراخوانی بهینه داده‌ها با React Query  

طراحی واکنش‌گرا: ساخته‌شده با Tailwind CSS برای تجربه‌ای یکپارچه در تمامی دستگاه‌ها  

انیمیشن‌های روان در رابط کاربری با Framer Motion  

کامپوننت‌های مدرن رابط کاربری: طراحی سفارشی با Shadcn  





                                                      

  


 ## پیش نیاز های نصب
- Node.js (v16 or higher)
- npm or yarn
- Firebase account (for authentication setup)

نصب و راه‌اندازی

   ```bash
   git clone https://github.com/your-username/online-audio-visual-shop.git](https://github.com/mrejo11/Ecommerce-Store.git
   ```
   
برای رفتن به دایرکتوری پروژه، از دستور زیر در ترمینال استفاده کنید:
```bash
cd Ecommerce-Store
```
 نصب وابستگی‌های پروژه، دستور زیر را اجرا کنید:

```bash
npm install
# or
yarn install
```

 -  ایجاد فایل .env.local در دایرکتوری اصلی پروژه
 -  اضافه کردن تنظیمات Firebase
 -  ساخت اکانت در فایربیس و وارد کردن کلید API به موارد زیر
```bash
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```
##اه‌اندازی سرور توسعه
```bash
npm run dev
# or
yarn dev
```
## باز کردن پروژه در مرورگر
```bash
http://localhost:3000
```

## نسخه دمو  

Live demo: [https://techzone-re.netlify.app](https://techzone-re.netlify.app)  

- نکته:  
  به دلیل فیلترینگ یا تحریم‌ها، برای نمایش بهتر تصاویر توصیه می‌شود از VPN استفاده کنید.



  

## TechZone Online Store 🛒

TechZone is an e-commerce web application developed with the Next.js framework. This project is designed based on the MVP (Minimum Viable Product) concept and includes only the essential features for product display, sales, authentication, and payment processing. The web application is fully responsive, ensuring a seamless experience on desktops, tablets, and mobile devices. A fake API is used during development to simulate real data.

## Features

- Product data fetched from [https://fakestoreapi.in](https://fakestoreapi.in)
- Authentication and sign-in/sign-out using Firebase
- Fast product loading via SSG (Static Site Generation) in Next.js
- State management with Redux
- Optimized data fetching with React Query
- Responsive design built with Tailwind CSS for a seamless experience across all devices
- Smooth UI animations using Framer Motion
- Modern UI components with custom design using Shadcn

## Installation Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Firebase account (for authentication setup)

## Installation and Setup

Clone the repository:
```bash
git clone https://github.com/mrejo11/Ecommerce-Store.git
```
Navigate to the project directory:

```bash
cd Ecommerce-Store
```
Install the project dependencies:

```bash
npm install
# or
yarn install
```
Create a .env.local file in the root directory of the project and add your Firebase configuration:

```bash
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

Running the Development Server
Start the development server with:

```bash
npm run dev
# or
yarn dev
```
Opening the Project in Your Browser
Open your browser and navigate to:
 ```bash
http://localhost:3000
 ```

Live Demo
Live demo: https://techzone-re.netlify.app




















