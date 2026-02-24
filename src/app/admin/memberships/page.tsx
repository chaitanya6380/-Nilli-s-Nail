'use client';

import { useState, useEffect } from 'react';
import { Plus, Pencil, Trash2, X, Users, Loader2 } from 'lucide-react';

interface Member {
  _id: string;
  name: string;
  email: string;
  phone: string;
  tier: string;
  status: 'active' | 'inactive' | 'pending';
  createdAt: string;
}

export default function AdminMemberships() {
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState<Member | null>(null);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    tier: 'Eclat Essence',
    status: 'active' as string,
  });
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });

  const fetchMembers = async () => {
    try {
      const res = await fetch('/api/admin/memberships');
      const data = await res.json();
      setMembers(data);
    } catch { /* empty */ }
    setLoading(false);
  };

  useEffect(() => {
    fetchMembers();
  }, []);

  const flash = (text: string, type = 'success') => {
    setMessage({ text, type });
    setTimeout(() => setMessage({ text: '', type: '' }), 3000);
  };

  const openAdd = () => {
    setEditing(null);
    setForm({ name: '', email: '', phone: '', tier: 'Eclat Essence', status: 'active' });
    setShowModal(true);
  };

  const openEdit = (member: Member) => {
    setEditing(member);
    setForm({
      name: member.name,
      email: member.email,
      phone: member.phone,
      tier: member.tier,
      status: member.status,
    });
    setShowModal(true);
  };

  const handleSave = async () => {
    if (!form.name || !form.email) return;
    setSaving(true);

    try {
      if (editing) {
        await fetch(`/api/admin/memberships/${editing._id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        });
        flash('Member updated');
      } else {
        await fetch('/api/admin/memberships', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        });
        flash('Member added');
      }
      setShowModal(false);
      fetchMembers();
    } catch {
      flash('Error saving member', 'error');
    }

    setSaving(false);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Remove this member?')) return;

    try {
      await fetch(`/api/admin/memberships/${id}`, { method: 'DELETE' });
      flash('Member removed');
      fetchMembers();
    } catch {
      flash('Error removing member', 'error');
    }
  };

  const statusColor = (s: string) => {
    switch (s) {
      case 'active':
        return 'bg-green-100 text-green-700';
      case 'inactive':
        return 'bg-gray-100 text-gray-600';
      case 'pending':
        return 'bg-yellow-100 text-yellow-700';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-serif text-[#333]">Membership Management</h1>
        <button
          onClick={openAdd}
          className="flex items-center gap-2 bg-[#E7646A] text-white px-5 py-2.5 rounded-xl text-sm hover:bg-[#d4545a] transition-colors"
        >
          <Plus className="w-4 h-4" />
          Add Member
        </button>
      </div>

      {message.text && (
        <div
          className={`mb-4 p-3 rounded-xl text-sm ${
            message.type === 'error'
              ? 'bg-red-50 text-red-700'
              : 'bg-green-50 text-green-700'
          }`}
        >
          {message.text}
        </div>
      )}

      {loading ? (
        <div className="flex justify-center py-20">
          <Loader2 className="w-8 h-8 animate-spin text-[#E7646A]" />
        </div>
      ) : members.length === 0 ? (
        <div className="bg-white rounded-2xl p-12 text-center shadow-sm border border-gray-100">
          <Users className="w-16 h-16 text-gray-200 mx-auto mb-4" />
          <p className="text-gray-500">No members yet</p>
        </div>
      ) : (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50/50">
                  <th className="text-left p-4 text-[10px] uppercase tracking-widest text-gray-400 font-semibold">
                    Name
                  </th>
                  <th className="text-left p-4 text-[10px] uppercase tracking-widest text-gray-400 font-semibold hidden md:table-cell">
                    Email
                  </th>
                  <th className="text-left p-4 text-[10px] uppercase tracking-widest text-gray-400 font-semibold hidden lg:table-cell">
                    Phone
                  </th>
                  <th className="text-left p-4 text-[10px] uppercase tracking-widest text-gray-400 font-semibold">
                    Tier
                  </th>
                  <th className="text-left p-4 text-[10px] uppercase tracking-widest text-gray-400 font-semibold">
                    Status
                  </th>
                  <th className="text-right p-4 text-[10px] uppercase tracking-widest text-gray-400 font-semibold">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {members.map((m) => (
                  <tr
                    key={m._id}
                    className="border-b border-gray-50 hover:bg-gray-50/50"
                  >
                    <td className="p-4 font-medium text-[#333]">{m.name}</td>
                    <td className="p-4 text-gray-500 hidden md:table-cell">
                      {m.email}
                    </td>
                    <td className="p-4 text-gray-500 hidden lg:table-cell">
                      {m.phone || '-'}
                    </td>
                    <td className="p-4">
                      <span className="text-xs font-medium text-[#E7646A]">
                        {m.tier}
                      </span>
                    </td>
                    <td className="p-4">
                      <span
                        className={`text-[10px] uppercase tracking-wider px-3 py-1 rounded-full font-semibold ${statusColor(
                          m.status
                        )}`}
                      >
                        {m.status}
                      </span>
                    </td>
                    <td className="p-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => openEdit(m)}
                          className="p-2 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-[#333]"
                        >
                          <Pencil className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(m._id)}
                          className="p-2 rounded-lg hover:bg-red-50 text-gray-400 hover:text-red-500"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {showModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-serif text-xl">
                {editing ? 'Edit Member' : 'Add New Member'}
              </h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-[10px] uppercase tracking-widest text-gray-400 ml-1 block mb-2">
                  Name
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-gray-50 rounded-xl p-3 text-sm focus:ring-2 focus:ring-[#E7646A] focus:outline-none border border-gray-100"
                />
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-widest text-gray-400 ml-1 block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-gray-50 rounded-xl p-3 text-sm focus:ring-2 focus:ring-[#E7646A] focus:outline-none border border-gray-100"
                />
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-widest text-gray-400 ml-1 block mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full bg-gray-50 rounded-xl p-3 text-sm focus:ring-2 focus:ring-[#E7646A] focus:outline-none border border-gray-100"
                />
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-widest text-gray-400 ml-1 block mb-2">
                  Tier
                </label>
                <select
                  value={form.tier}
                  onChange={(e) => setForm({ ...form, tier: e.target.value })}
                  className="w-full bg-gray-50 rounded-xl p-3 text-sm focus:ring-2 focus:ring-[#E7646A] focus:outline-none border border-gray-100"
                >
                  <option>Eclat Essence</option>
                  <option>Luxe Privilege</option>
                  <option>Diamond Royale</option>
                </select>
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-widest text-gray-400 ml-1 block mb-2">
                  Status
                </label>
                <select
                  value={form.status}
                  onChange={(e) => setForm({ ...form, status: e.target.value })}
                  className="w-full bg-gray-50 rounded-xl p-3 text-sm focus:ring-2 focus:ring-[#E7646A] focus:outline-none border border-gray-100"
                >
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                  <option value="pending">Pending</option>
                </select>
              </div>

              <button
                onClick={handleSave}
                disabled={saving || !form.name || !form.email}
                className="w-full bg-[#E7646A] text-white py-3 rounded-xl text-sm uppercase tracking-widest hover:bg-[#d4545a] transition-all disabled:opacity-50"
              >
                {saving ? 'Saving...' : editing ? 'Update Member' : 'Add Member'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
