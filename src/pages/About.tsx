import { motion } from 'motion/react';
import { CheckCircle2, Star, Users, Target, Zap } from 'lucide-react';

export default function About() {
  return (
    <main className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-600 text-sm font-semibold mb-8 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping" />
            Our Mission
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-extrabold tracking-tight mb-8 leading-tight text-slate-900"
          >
            We Understand Business — <span className="gradient-text">Not Just Code</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            AnyWeb was founded on a simple principle: technology should serve the business, not the other way around. We combine high-end design with powerful automation and AI to build systems that solve real operational problems.
          </motion.p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {[
            { icon: Users, title: 'Client Focused', desc: 'We focus on your specific business goals and operational needs.' },
            { icon: Target, title: 'Results Driven', desc: 'Our success is measured by the efficiency and growth we create.' },
            { icon: Zap, title: 'Automation First', desc: 'We look for ways to eliminate manual work in everything we build.' },
            { icon: Star, title: 'Premium Quality', desc: 'We never settle for "good enough" — every build is high-end.' }
          ].map((value, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-3xl border-slate-200 hover:border-blue-500/50 transition-all group shadow-sm hover:shadow-xl"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform shadow-sm">
                <value.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-display font-bold mb-3 text-slate-900">{value.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{value.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-extrabold tracking-tight mb-8 leading-tight text-slate-900">
              We Focus on <span className="gradient-text">Efficiency and Growth</span>
            </h2>
            <div className="space-y-6">
              {[
                'We analyze how your business runs to find hidden bottlenecks.',
                'We identify repetitive tasks that can be replaced with AI.',
                'We build systems that actually get used by your staff.',
                'We combine design, automation, and AI for a complete solution.'
              ].map((point, i) => (
                <div key={i} className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0" />
                  <p className="text-slate-700 font-medium">{point}</p>
                </div>
              ))}
            </div>
            <p className="mt-10 text-slate-600 leading-relaxed">
              Our team consists of business strategists, high-end designers, and automation experts. We don't just take orders; we provide solutions that help you scale without adding more manual work.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass rounded-[3rem] p-4 border-slate-200 shadow-2xl overflow-hidden aspect-video">
              <img
                src="https://picsum.photos/seed/team/1200/800"
                alt="Our Team"
                className="w-full h-full object-cover rounded-[2.5rem] opacity-80"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-linear-to-t from-white/20 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <div className="glass rounded-[4rem] p-12 md:p-20 border-slate-200 text-center shadow-xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { label: 'Projects Completed', value: '250+' },
              { label: 'Hours Automated', value: '15k+' },
              { label: 'Client Retention', value: '98%' },
              { label: 'AI Integrations', value: '100+' }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-4xl md:text-6xl font-display font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-slate-500 font-bold text-sm uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
