'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');

  const handleReset = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Password reset link sent to ${email}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 px-4">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-green-700 mb-4">Forgot Password</h1>
        <form onSubmit={handleReset} className="space-y-4">
          <div>
            <label className="block text-gray-700">Enter your email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded mt-1 text-gray-700"
              placeholder="Your registered email"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
          >
            Send Reset Link
          </button>
        </form>

        <div className="text-sm mt-4 text-center">
          <Link href="/login" className="text-green-600 hover:underline">
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
}
