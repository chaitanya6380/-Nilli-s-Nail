
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, MessageCircle, Send, Loader2 } from 'lucide-react';
import { getBeautyAdvice } from '../services/gemini';

const AIAdvisor: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    setLoading(true);
    const advice = await getBeautyAdvice(input);
    setResult(advice);
    setLoading(false);
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-40 bg-[#C6A75E] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform group"
      >
        <Sparkles className="w-6 h-6" />
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-[#C6A75E] px-4 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg pointer-events-none">
          AI Beauty Advisor
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed bottom-24 right-8 z-50 w-96 max-w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-2xl border border-[#EAD8C0] overflow-hidden"
          >
            <div className="bg-[#FAF9F6] p-6 border-b border-[#EAD8C0] flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div className="bg-[#F6D6D8] p-2 rounded-full">
                  <Sparkles className="w-5 h-5 text-[#C6A75E]" />
                </div>
                <div>
                  <h3 className="font-serif text-lg leading-none">AI Consultant</h3>
                  <span className="text-[10px] text-gray-400 uppercase tracking-widest">Personalized Care</span>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-gray-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 max-h-[500px] overflow-y-auto bg-white">
              {result ? (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                  <p className="text-gray-600 italic leading-relaxed font-serif">"{result.opening}"</p>
                  <div className="space-y-3">
                    <h4 className="text-xs uppercase tracking-widest text-[#C6A75E] font-semibold">Recommended Services</h4>
                    {result.recommendations.map((rec: any, i: number) => (
                      <div key={i} className="bg-[#FAF9F6] p-3 rounded-xl border border-gray-100">
                        <p className="font-serif text-[#333]">{rec.service}</p>
                        <p className="text-xs text-gray-500 mt-1">{rec.benefit}</p>
                      </div>
                    ))}
                  </div>
                  <div className="bg-[#F6D6D8]/30 p-4 rounded-xl">
                    <h4 className="text-xs uppercase tracking-widest text-[#D8A75E] font-semibold mb-2">Home Care Secret</h4>
                    <p className="text-sm text-gray-700 leading-relaxed">{result.homeCareTip}</p>
                  </div>
                  <button 
                    onClick={() => {setResult(null); setInput('');}}
                    className="w-full text-xs text-gray-400 underline"
                  >
                    Start new consultation
                  </button>
                </motion.div>
              ) : (
                <div className="space-y-6">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Tell us about your beauty goals or skin concerns, and our AI will curate a bespoke experience for you.
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <textarea 
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="e.g., 'I want a radiant glow for an upcoming wedding...'"
                      className="w-full h-32 p-4 text-sm bg-gray-50 rounded-xl border border-gray-100 focus:ring-1 focus:ring-[#C6A75E] focus:outline-none resize-none"
                    />
                    <button 
                      disabled={loading || !input.trim()}
                      className="w-full bg-[#333] text-white py-3 rounded-xl text-sm uppercase tracking-widest hover:bg-black transition-colors disabled:bg-gray-300 flex justify-center items-center space-x-2"
                    >
                      {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <span>Analyze & Recommend</span>}
                    </button>
                  </form>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIAdvisor;
