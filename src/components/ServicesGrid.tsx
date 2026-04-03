import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { SERVICES } from '../constants';
import { cn } from '../lib/utils';

export default function ServicesGrid() {
  return (
    <section id="services" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-extrabold tracking-tight mb-6 text-slate-900"
          >
            Our <span className="gradient-text">Core Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 max-w-2xl mx-auto text-lg"
          >
            We combine high-end design with powerful automation and AI to build systems that actually move the needle for your business.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                "group relative p-8 rounded-[2rem] glass hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-2 shadow-sm hover:shadow-xl",
                service.highlighted && "border-blue-200 shadow-blue-500/5"
              )}
            >
              {service.highlighted && (
                <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-xs font-bold uppercase tracking-widest">
                  <Star className="w-3 h-3 fill-current" />
                  Core Service
                </div>
              )}

              <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-8 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-sm">
                <service.icon className="w-7 h-7" />
              </div>

              <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-blue-600 transition-colors text-slate-900">
                {service.title}
              </h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                {service.description}
              </p>

              <Link
                to={`/services/${service.slug}`}
                className="inline-flex items-center gap-2 text-slate-900 font-bold hover:gap-4 transition-all"
              >
                Learn More
                <ArrowRight className="w-5 h-5 text-blue-600" />
              </Link>

              {/* Decorative Gradient */}
              <div className="absolute inset-0 rounded-[2rem] bg-linear-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
