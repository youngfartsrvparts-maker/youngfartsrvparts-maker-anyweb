import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ChevronRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden px-6">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-100/50 blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-100/50 blur-[120px] animate-pulse delay-700" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.05]" />
      </div>

      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-blue-200 text-blue-600 text-sm font-bold mb-8 shadow-sm"
        >
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
          Automation First Approach
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-extrabold tracking-tight mb-8 leading-[1.1] text-slate-900"
        >
          Websites, Automation & AI Systems Built for <span className="gradient-text">Real Growth</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          AnyWeb designs websites, builds Shopify stores, connects systems, and uses automation and AI to eliminate repetitive work and scale your business — from simple websites to advanced, fully integrated platforms powered by automation and AI.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col items-center gap-6"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full">
            <Link
              to="/contact"
              className="w-full sm:w-auto px-10 py-5 rounded-2xl gradient-bg text-white font-bold text-lg shadow-2xl shadow-blue-500/20 hover:shadow-blue-500/40 hover:scale-105 transition-all flex items-center justify-center gap-2"
            >
              Get a Quote
              <ChevronRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="w-full sm:w-auto px-10 py-5 rounded-2xl glass text-slate-900 font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-2 shadow-sm"
            >
              Get Free Demo
            </Link>
          </div>
          <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">
            Free consultation + free website demo available
          </p>
        </motion.div>

        {/* Floating UI Elements Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-24 relative max-w-5xl mx-auto"
        >
          <div className="glass rounded-[2rem] p-4 border-slate-200 shadow-2xl overflow-hidden">
            <div className="bg-slate-100 rounded-[1.5rem] aspect-video flex items-center justify-center relative overflow-hidden group">
              <img
                src="https://picsum.photos/seed/tech/1920/1080"
                alt="Dashboard Mockup"
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-linear-to-t from-white via-transparent to-transparent" />
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full gradient-bg flex items-center justify-center text-white shadow-2xl shadow-blue-500/50 cursor-pointer hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 fill-current" />
                </div>
              </div>

              {/* Floating Cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-10 left-10 glass p-4 rounded-2xl border-blue-200 shadow-lg hidden lg:block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                    <ChevronRight className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-bold text-slate-800">Automation Active</div>
                    <div className="text-[10px] text-slate-500">Syncing CRM...</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute bottom-10 right-10 glass p-4 rounded-2xl border-purple-200 shadow-lg hidden lg:block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600">
                    <Play className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-bold text-slate-800">AI Processing</div>
                    <div className="text-[10px] text-slate-500">Analyzing Leads...</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
