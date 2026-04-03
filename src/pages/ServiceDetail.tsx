import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, ChevronRight, Star } from 'lucide-react';
import { SERVICES } from '../constants';

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/" replace />;
  }

  return (
    <main className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-slate-500 text-sm font-bold uppercase tracking-widest mb-12">
          <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-slate-400">Services</span>
          <ChevronRight className="w-4 h-4" />
          <span className="text-blue-600">{service.title}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center text-white mb-8 shadow-2xl shadow-blue-500/30">
              <service.icon className="w-8 h-8" />
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-extrabold tracking-tight mb-8 leading-tight text-slate-900">
              {service.title} <span className="gradient-text">Built for Performance</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              {service.description} We don't just deliver a service; we build a system that integrates seamlessly into your business operations.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Link
                to="/contact"
                className="w-full sm:w-auto px-10 py-5 rounded-2xl gradient-bg text-white font-bold text-lg shadow-2xl shadow-blue-500/20 hover:shadow-blue-500/40 hover:scale-105 transition-all flex items-center justify-center gap-2"
              >
                Get a Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="w-full sm:w-auto px-10 py-5 rounded-2xl glass text-slate-900 font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                View Examples
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="glass rounded-[3rem] p-4 border-slate-200 shadow-2xl overflow-hidden aspect-square">
              <img
                src={`https://picsum.photos/seed/${service.id}/800/800`}
                alt={service.title}
                className="w-full h-full object-cover rounded-[2.5rem] opacity-80"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-linear-to-t from-white/20 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>

        {/* Features & Examples */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32">
          <div className="glass p-12 rounded-[3rem] border-slate-200 shadow-xl">
            <h2 className="text-3xl font-display font-bold mb-8 flex items-center gap-3 text-slate-900">
              <Star className="w-8 h-8 text-blue-600" />
              Key Features
            </h2>
            <div className="space-y-6">
              {service.features.map((feature, i) => (
                <div key={i} className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0" />
                  <p className="text-slate-700 font-medium text-lg">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="glass p-12 rounded-[3rem] border-slate-200 shadow-xl">
            <h2 className="text-3xl font-display font-bold mb-8 flex items-center gap-3 text-slate-900">
              <CheckCircle2 className="w-8 h-8 text-purple-600" />
              What We Build
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {service.examples.map((example, i) => (
                <div key={i} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-500/30 transition-all group shadow-sm">
                  <div className="text-blue-600 font-bold mb-2 group-hover:translate-x-1 transition-transform">Example {i + 1}</div>
                  <div className="text-slate-900 font-bold text-lg">{example}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="glass rounded-[4rem] p-12 md:p-24 border-blue-200 relative overflow-hidden text-center shadow-2xl">
          <div className="absolute inset-0 bg-linear-to-br from-blue-600/5 via-purple-600/10 to-red-600/5" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <h2 className="text-4xl md:text-6xl font-display font-extrabold tracking-tight mb-8 leading-tight text-slate-900">
              Ready to Scale Your <span className="gradient-text">{service.title}?</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-12 leading-relaxed">
              We understand the complexities of {service.title.toLowerCase()} and how it fits into your overall business strategy.
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
      </div>
    </main>
  );
}
