// File: app/page.tsx (Landing Page)

'use client'
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from 'context/AuthContext';

export default function LandingPage(): JSX.Element {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">Welcome to the PRED AI Bot</h1>
      <p className="text-lg mb-8 text-center">
        Log in to access the bot.
      </p>
      <button
        onClick={() => router.push('/login')}
        className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
      >
        Log In
      </button>
    </div>
  );
}
