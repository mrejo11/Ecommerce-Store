تک زون 
##  مرورکلی
پروژه تگ زون یک وب اپلیکیشن تجارت الکترونیک است که با فریمورک Next.js توسعه داده شده است. این پروژه بر اساس مفهوم MVP (Minimum Viable Product) طراحی شده و فقط شامل ویژگی‌های اصلی برای نمایش و فروش و احراز هویت و هچنین صفحه پرداخت محصولات است. وب اپلیکیشن کاملاً ریسپانسیو بوده و روی دستگاه‌های مختلف مثل دسکتاپ، تبلت و موبایل به خوبی نمایش داده می‌شود. برای شبیه‌سازی داده‌های واقعی در طول توسعه، از یک API ساختگی استفاده شده است.



## ویژگی ها
- برای گرفتن API محصولات از سایت https://fakestoreapi.in/ استفاده شده است
- احراز هویت و LOGIN/OUT با fireBase
- برای بار گذاری سریع محصولات استفاده در NEXT.js-SSG
- مدریت وضعیت با Redux
- فراخوانی بهینه داده با React Query
- طراحی واکنش‌گرا: ساخته‌شده با Tailwind CSS برای تجربه‌ای یکپارچه در تمامی دستگاه‌ها
- انیمیشن‌ها: انتقال‌های روان در رابط کاربری با استفاده از Framer Motion
- کامپوننت‌های مدرن رابط کاربری: کامپوننت‌های سفارشی با Shadcn
  


## پیش نیاز های نصب
- Node.js (v16 or higher)
- npm or yarn
- Firebase account (for authentication setup)

##نصب و راه‌اندازی

   ```bash
   git clone https://github.com/your-username/online-audio-visual-shop.git
   ```
   
##برای رفتن به دایرکتوری پروژه، از دستور زیر در ترمینال استفاده کنید:
```bash
cd Ecommerce-Store
```
## برای نصب وابستگی‌های پروژه، دستور زیر را اجرا کنید:

```bash
npm install
# or
yarn install
```

 -  ایجاد فایل .env.local در دایرکتوری اصلی پروژه
 -  اضافه کردن تنظیمات Firebase
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
Live demo: [https://techzone-re.netlify.app/]






















