import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, Zap, Cpu, Database, Settings } from 'lucide-react';
import { cn } from '../lib/utils';

export default function AutomationFeature() {
  const examples = [
    'Lead follow-up automation',
    'AI responding to customer inquiries',
    'Quote generation systems',
    'Order and inventory automation',
    'CRM syncing',
    'Internal workflows automated',
    'Reporting dashboards',
    'AI-powered assistants for staff'
  ];

  const steps = [
    { icon: Database, label: 'INPUT', color: 'blue' },
    { icon: Settings, label: 'PROCESS', color: 'purple' },
    { icon: Zap, label: 'AUTOMATION', color: 'red' },
    { icon: Cpu, label: 'OUTPUT', color: 'green' }
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden bg-slate-100/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-600 text-sm font-bold uppercase tracking-widest mb-6 shadow-sm">
              <Zap className="w-4 h-4" />
              Efficiency First
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-extrabold tracking-tight mb-8 leading-tight text-slate-900">
              Your Business Has Repetitive Work. <span className="gradient-text">We Automate It With AI.</span>
            </h2>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              We analyze how your business runs, identify repetitive tasks and bottlenecks, and replace manual work with automation and AI systems. Improve speed, consistency, and profitability.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              {examples.map((example, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-3 text-slate-700"
                >
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                  <span className="text-sm font-medium">{example}</span>
                </motion.div>
              ))}
            </div>

            <button className="px-8 py-4 rounded-2xl gradient-bg text-white font-bold hover:shadow-2xl hover:shadow-blue-500/30 hover:scale-105 transition-all flex items-center gap-2">
              Start Automating
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>

          {/* Visual Diagram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="glass rounded-[3rem] p-12 border-slate-200 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-br from-blue-500/5 via-purple-500/5 to-red-500/5" />
              
              <div className="relative flex flex-col items-center gap-12">
                {steps.map((step, i) => (
                  <div key={i} className="flex flex-col items-center gap-4 w-full">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className={cn(
                        "w-20 h-20 rounded-[1.5rem] flex items-center justify-center text-white shadow-2xl relative z-10",
                        i === 0 && "bg-blue-600 shadow-blue-500/20",
                        i === 1 && "bg-purple-600 shadow-purple-500/20",
                        i === 2 && "bg-red-600 shadow-red-500/20",
                        i === 3 && "bg-green-600 shadow-green-500/20"
                      )}
                    >
                      <step.icon className="w-10 h-10" />
                    </motion.div>
                    <span className="text-xs font-bold tracking-widest text-slate-500 uppercase">
                      {step.label}
                    </span>
                    
                    {i < steps.length - 1 && (
                      <div className="h-12 w-0.5 bg-linear-to-b from-slate-200 to-slate-300 relative">
                        <motion.div
                          animate={{ top: ['0%', '100%'] }}
                          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                          className="absolute left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-blue-500 blur-sm"
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-blue-500/10 blur-[80px]" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-purple-500/10 blur-[80px]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
