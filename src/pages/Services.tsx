import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { SERVICES } from '../constants';

export default function Services() {
  return (
    <main className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-24">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display font-extrabold tracking-tight mb-8 leading-tight text-slate-900"
          >
            Our <span className="gradient-text">Core Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            We combine high-end design with powerful automation and AI to build systems that actually move the needle for your business.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-[2rem] border-slate-200 hover:border-blue-500/50 transition-all group shadow-sm hover:shadow-xl flex flex-col"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-8 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4 text-slate-900">{service.title}</h3>
              <p className="text-slate-600 mb-8 leading-relaxed flex-grow">
                {service.description}
              </p>
              <div className="space-y-3 mb-8">
                {service.features.slice(0, 3).map((feature, j) => (
                  <div key={j} className="flex items-center gap-2 text-sm text-slate-500">
                    <CheckCircle2 className="w-4 h-4 text-blue-500" />
                    {feature}
                  </div>
                ))}
              </div>
              <Link
                to={`/services/${service.slug}`}
                className="inline-flex items-center gap-2 text-slate-900 font-bold hover:gap-4 transition-all"
              >
                Learn More
                <ArrowRight className="w-5 h-5 text-blue-600" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Final CTA */}
        <section className="text-center">
          <div className="glass rounded-[4rem] p-12 md:p-24 border-blue-200 relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-linear-to-br from-blue-600/5 via-purple-600/5 to-red-600/5" />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <h2 className="text-4xl md:text-7xl font-display font-extrabold tracking-tight mb-8 leading-tight text-slate-900">
                Let’s Build Something That <span className="gradient-text">Actually Improves Your Business</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-12 leading-relaxed">
                Stop doing repetitive work. Start scaling with custom websites, automation, and AI systems built for real growth.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-10 py-5 rounded-2xl gradient-bg text-white font-bold text-lg shadow-2xl shadow-blue-500/20 hover:shadow-blue-500/40 hover:scale-105 transition-all"
              >
                Get a Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </main>
  );
}
