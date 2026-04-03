import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { SERVICES } from '../constants';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-5xl md:text-7xl font-display font-extrabold tracking-tight mb-8 leading-tight text-slate-900">
              Tell Us What You <span className="gradient-text">Need Built</span>
            </h1>
            <p className="text-xl text-slate-600 mb-12 leading-relaxed">
              Ready to automate your business and scale with custom systems? Fill out the form and our team will get back to you within 24 hours.
            </p>

            <div className="space-y-8 mb-12">
              {[
                { icon: Mail, label: 'Email Us', value: 'hello@anyweb.com' },
                { icon: Phone, label: 'Call Us', value: '+1 (555) 123-4567' },
                { icon: MapPin, label: 'Visit Us', value: '123 Tech Avenue, Silicon Valley, CA' }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-blue-600 group-hover:scale-110 group-hover:border-blue-500/50 transition-all shadow-sm">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-1">{item.label}</div>
                    <div className="text-xl font-bold text-slate-900">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="glass p-8 rounded-3xl border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-slate-900">Why Work With Us?</h3>
              <div className="space-y-4">
                {[
                  'We understand business operations',
                  'We focus on efficiency and growth',
                  'We build systems that solve real problems',
                  'We combine design, automation, and AI'
                ].map((point, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-600">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                    <span className="text-sm font-medium">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="glass p-8 md:p-12 rounded-[3rem] border-slate-200 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-br from-blue-500/5 via-purple-500/5 to-red-500/5" />
              
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-20 relative z-10"
                >
                  <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center text-green-600 mx-auto mb-8 shadow-sm">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h2 className="text-3xl font-display font-bold mb-4 text-slate-900">Message Sent!</h2>
                  <p className="text-slate-600 mb-8">Thank you for reaching out. Our team will contact you shortly.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-8 py-3 rounded-xl glass hover:bg-slate-50 transition-all font-bold text-slate-900 shadow-sm"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-500 uppercase tracking-widest px-2">Name</label>
                      <input
                        required
                        type="text"
                        placeholder="John Doe"
                        className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all shadow-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-500 uppercase tracking-widest px-2">Company</label>
                      <input
                        required
                        type="text"
                        placeholder="Acme Inc."
                        className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all shadow-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-500 uppercase tracking-widest px-2">Email</label>
                      <input
                        required
                        type="email"
                        placeholder="john@example.com"
                        className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all shadow-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-500 uppercase tracking-widest px-2">Phone</label>
                      <input
                        required
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all shadow-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-500 uppercase tracking-widest px-2">Project Type</label>
                      <div className="relative">
                        <select className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all appearance-none shadow-sm text-slate-900">
                          {SERVICES.map((service) => (
                            <option key={service.id} value={service.slug}>{service.title}</option>
                          ))}
                          <option value="other">Other</option>
                        </select>
                        <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                          <Send className="w-4 h-4 rotate-90" />
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-500 uppercase tracking-widest px-2">Budget</label>
                      <div className="relative">
                        <select className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all appearance-none shadow-sm text-slate-900">
                          <option value="5k-10k">$5k - $10k</option>
                          <option value="10k-25k">$10k - $25k</option>
                          <option value="25k-50k">$25k - $50k</option>
                          <option value="50k+">$50k+</option>
                        </select>
                        <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                          <Send className="w-4 h-4 rotate-90" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-500 uppercase tracking-widest px-2">Message</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell us about your project..."
                      className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all resize-none shadow-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-5 rounded-2xl gradient-bg text-white font-bold text-lg shadow-2xl shadow-blue-500/20 hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3"
                  >
                    Send Message
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
