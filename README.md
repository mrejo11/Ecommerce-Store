
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
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
