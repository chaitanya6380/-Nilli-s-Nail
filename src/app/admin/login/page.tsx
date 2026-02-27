'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Sparkles, Lock, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function AdminLogin() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      if (res.ok) {
        router.push('/admin');
      } else {
        setError('Invalid password');
      }
    } catch {
      setError('Something went wrong');
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#1f2937] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Sparkles className="w-10 h-10 text-[#E7646A] mx-auto mb-4" />
          <h1 className="text-2xl font-serif text-white tracking-widest">ADMIN PANEL</h1>
          <p className="text-gray-400 text-sm mt-2">Nili&apos;s Nail &amp; Beauty Lounge</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-2xl">
          <div className="flex items-center gap-3 mb-6">
            <Lock className="w-5 h-5 text-[#E7646A]" />
            <h2 className="font-serif text-xl">Sign In</h2>
          </div>

          {error && (
            <div className="bg-red-50 text-red-600 text-sm p-3 rounded-xl mb-4">{error}</div>
          )}

          <div className="space-y-4">
            <div>
              <label className="text-[10px] uppercase tracking-widest text-gray-400 ml-1 block mb-2">
                Admin Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password"
                className="w-full bg-gray-50 rounded-xl p-4 text-sm focus:ring-2 focus:ring-[#E7646A] focus:outline-none border border-gray-100"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#E7646A] text-white py-4 rounded-xl text-sm uppercase tracking-widest hover:bg-[#d4545a] transition-all disabled:opacity-50"
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </div>
        </form>

        <div className="text-center mt-6">
          <Link
            href="/"
            className="text-gray-400 text-sm hover:text-white transition-colors inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to website
          </Link>
        </div>
      </div>
    </div>
  );
}
