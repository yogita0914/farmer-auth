'use client';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-green-700 text-white px-4 py-3 flex justify-between">
      <div className="text-xl font-bold">🌾 FarmerConnect</div>
      <div className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/login">Login</Link>
        <Link href="/register">Register</Link>
      </div>
    </nav>
  );
};

export default Navbar;
