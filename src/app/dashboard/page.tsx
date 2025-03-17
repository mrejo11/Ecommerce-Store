'use client'; // اگه این کامپوننت سمت کلاینت هست، این خط رو اضافه کنید
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store'; // مسیر درست store رو تنظیم کنید

export default function Page() {
  const { user } = useSelector((state: RootState) => state.authSlice); // گرفتن user از Redux

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-center">
        Welcome, {user?.email || 'Guest'}
      </h1>
    </div>
  );
}