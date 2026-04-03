import { motion } from 'motion/react';
import { PROCESS_STEPS } from '../constants';

export default function Process() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-extrabold tracking-tight mb-6 text-slate-900"
          >
            How We <span className="gradient-text">Build Your Success</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 max-w-2xl mx-auto text-lg"
          >
            Our 3-step process ensures we understand your business before writing a single line of code.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-200 hidden md:block -translate-y-1/2 -z-10" />

          {PROCESS_STEPS.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group relative flex flex-col items-center text-center p-8 rounded-[2rem] glass hover:border-blue-500/50 transition-all duration-500 shadow-sm hover:shadow-xl"
            >
              <div className="w-20 h-20 rounded-full gradient-bg flex items-center justify-center text-white font-bold text-3xl mb-8 shadow-2xl shadow-blue-500/30 group-hover:scale-110 transition-transform">
                <step.icon className="w-10 h-10" />
              </div>

              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-white border border-slate-200 text-xs font-bold text-blue-600 uppercase tracking-widest shadow-sm">
                Step {step.number}
              </div>

              <h3 className="text-2xl font-display font-bold mb-4 text-slate-900">
                {step.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
