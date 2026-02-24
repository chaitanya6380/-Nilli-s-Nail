'use client';

import { useState, useEffect } from 'react';
import { Trash2, Eye, X, MessageSquare, Loader2, Mail, Phone } from 'lucide-react';

interface Contact {
  _id: string;
  name: string;
  email: string;
  phone?: string;
  service: string;
  message: string;
  read: boolean;
  createdAt: string;
}

export default function AdminContacts() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [viewing, setViewing] = useState<Contact | null>(null);
  const [message, setMessage] = useState({ text: '', type: '' });

  const fetchContacts = async () => {
    try {
      const res = await fetch('/api/admin/contacts');
      const data = await res.json();
      setContacts(data);
    } catch { /* empty */ }
    setLoading(false);
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const flash = (text: string, type = 'success') => {
    setMessage({ text, type });
    setTimeout(() => setMessage({ text: '', type: '' }), 3000);
  };

  const markAsRead = async (id: string) => {
    try {
      await fetch(`/api/admin/contacts/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ read: true }),
      });
      fetchContacts();
    } catch { /* empty */ }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this inquiry?')) return;

    try {
      await fetch(`/api/admin/contacts/${id}`, { method: 'DELETE' });
      flash('Inquiry deleted');
      setViewing(null);
      fetchContacts();
    } catch {
      flash('Error deleting', 'error');
    }
  };

  const viewContact = (contact: Contact) => {
    setViewing(contact);
    if (!contact.read) {
      markAsRead(contact._id);
    }
  };

  const unreadCount = contacts.filter((c) => !c.read).length;

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-serif text-[#333]">Contact Inquiries</h1>
          {unreadCount > 0 && (
            <span className="bg-[#E7646A] text-white text-xs px-2.5 py-1 rounded-full font-bold">
              {unreadCount} new
            </span>
          )}
        </div>
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
      ) : contacts.length === 0 ? (
        <div className="bg-white rounded-2xl p-12 text-center shadow-sm border border-gray-100">
          <MessageSquare className="w-16 h-16 text-gray-200 mx-auto mb-4" />
          <p className="text-gray-500">No inquiries yet</p>
          <p className="text-gray-400 text-sm mt-1">
            Submissions from the contact form will appear here
          </p>
        </div>
      ) : (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50/50">
                  <th className="w-10 p-4"></th>
                  <th className="text-left p-4 text-[10px] uppercase tracking-widest text-gray-400 font-semibold">
                    Name
                  </th>
                  <th className="text-left p-4 text-[10px] uppercase tracking-widest text-gray-400 font-semibold hidden md:table-cell">
                    Email
                  </th>
                  <th className="text-left p-4 text-[10px] uppercase tracking-widest text-gray-400 font-semibold hidden lg:table-cell">
                    Phone
                  </th>
                  <th className="text-left p-4 text-[10px] uppercase tracking-widest text-gray-400 font-semibold hidden lg:table-cell">
                    Service
                  </th>
                  <th className="text-left p-4 text-[10px] uppercase tracking-widest text-gray-400 font-semibold">
                    Date
                  </th>
                  <th className="text-right p-4 text-[10px] uppercase tracking-widest text-gray-400 font-semibold">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((c) => (
                  <tr
                    key={c._id}
                    className={`border-b border-gray-50 hover:bg-gray-50/50 cursor-pointer ${
                      !c.read ? 'bg-[#E7646A]/[0.03]' : ''
                    }`}
                    onClick={() => viewContact(c)}
                  >
                    <td className="p-4">
                      <span
                        className={`w-2.5 h-2.5 rounded-full inline-block ${
                          c.read ? 'bg-gray-300' : 'bg-[#E7646A]'
                        }`}
                      />
                    </td>
                    <td className={`p-4 text-[#333] ${!c.read ? 'font-semibold' : ''}`}>
                      {c.name}
                    </td>
                    <td className="p-4 text-gray-500 hidden md:table-cell">
                      {c.email}
                    </td>
                    <td className="p-4 text-gray-500 hidden lg:table-cell">
                      {c.phone || '—'}
                    </td>
                    <td className="p-4 text-gray-500 hidden lg:table-cell">
                      {c.service}
                    </td>
                    <td className="p-4 text-gray-400 text-xs">
                      {new Date(c.createdAt).toLocaleDateString()}
                    </td>
                    <td
                      className="p-4 text-right"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => viewContact(c)}
                          className="p-2 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-[#333]"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(c._id)}
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

      {viewing && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-lg shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-serif text-xl">Inquiry Details</h2>
              <button
                onClick={() => setViewing(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                <div className="w-10 h-10 rounded-full bg-[#E7646A]/10 flex items-center justify-center text-[#E7646A] font-serif text-lg">
                  {viewing.name[0]}
                </div>
                <div>
                  <p className="font-medium text-[#333]">{viewing.name}</p>
                  <p className="text-xs text-gray-500">
                    {new Date(viewing.createdAt).toLocaleString()}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Mail className="w-4 h-4" />
                <span>{viewing.email}</span>
              </div>

              {viewing.phone && (
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Phone className="w-4 h-4" />
                  <span>{viewing.phone}</span>
                </div>
              )}

              <div>
                <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-1">
                  Service Interest
                </p>
                <p className="text-sm text-[#E7646A] font-medium">
                  {viewing.service}
                </p>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-1">
                  Message
                </p>
                <div className="bg-gray-50 rounded-xl p-4 text-sm text-gray-700 leading-relaxed">
                  {viewing.message || 'No message provided'}
                </div>
              </div>

              <button
                onClick={() => handleDelete(viewing._id)}
                className="w-full py-3 rounded-xl text-sm text-red-500 border border-red-200 hover:bg-red-50 transition-colors"
              >
                Delete Inquiry
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
