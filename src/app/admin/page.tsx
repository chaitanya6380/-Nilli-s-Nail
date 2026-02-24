'use client';

import { useState, useEffect } from 'react';
import { ImageIcon, Users, MessageSquare, TrendingUp } from 'lucide-react';

interface Stats {
  gallery: number;
  memberships: number;
  contacts: number;
  recentContacts: any[];
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats>({
    gallery: 0,
    memberships: 0,
    contacts: 0,
    recentContacts: [],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/admin/stats')
      .then((res) => res.json())
      .then((data) => {
        setStats(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const cards = [
    { label: 'Gallery Photos', value: stats.gallery, icon: ImageIcon, color: 'bg-blue-500' },
    { label: 'Members', value: stats.memberships, icon: Users, color: 'bg-emerald-500' },
    { label: 'Contact Inquiries', value: stats.contacts, icon: MessageSquare, color: 'bg-[#E7646A]' },
  ];

  return (
    <div>
      <h1 className="text-2xl font-serif text-[#333] mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {cards.map((card) => (
          <div
            key={card.label}
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`${card.color} p-3 rounded-xl text-white`}>
                <card.icon className="w-6 h-6" />
              </div>
              <TrendingUp className="w-4 h-4 text-green-400" />
            </div>
            <p className="text-3xl font-bold text-[#333]">
              {loading ? '...' : card.value}
            </p>
            <p className="text-sm text-gray-500 mt-1">{card.label}</p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-lg font-serif text-[#333] mb-4">Recent Inquiries</h2>
        {loading ? (
          <p className="text-gray-400 text-sm">Loading...</p>
        ) : stats.recentContacts.length === 0 ? (
          <p className="text-gray-400 text-sm">No inquiries yet</p>
        ) : (
          <div className="space-y-3">
            {stats.recentContacts.map((c: any) => (
              <div
                key={c._id}
                className="flex items-center justify-between p-3 rounded-xl bg-gray-50"
              >
                <div>
                  <p className="text-sm font-medium text-[#333]">{c.name}</p>
                  <p className="text-xs text-gray-500">{c.email}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-400">
                    {new Date(c.createdAt).toLocaleDateString()}
                  </p>
                  <span
                    className={`text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full ${
                      c.read
                        ? 'bg-green-100 text-green-600'
                        : 'bg-[#E7646A]/10 text-[#E7646A]'
                    }`}
                  >
                    {c.read ? 'Read' : 'New'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
