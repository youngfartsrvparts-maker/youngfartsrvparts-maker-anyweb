import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, ChevronRight, Star, AlertCircle, Lightbulb, Zap, ArrowDown } from 'lucide-react';
import { SERVICES, PROCESS_STEPS } from '../constants';

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
          <Link to="/services" className="hover:text-blue-600 transition-colors">Services</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-blue-600">{service.title}</span>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center text-white mb-8 shadow-2xl shadow-blue-500/30">
              <service.icon className="w-8 h-8" />
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-extrabold tracking-tight mb-8 leading-tight text-slate-900">
              {service.title} <span className="gradient-text">Built for Growth</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              {service.longDescription}
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
                Get Free Demo
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

        {/* Pain Points Section */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-extrabold tracking-tight mb-6 text-slate-900">
              The <span className="gradient-text">Real Problem</span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Most businesses struggle with these common bottlenecks before they implement our systems.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.painPoints.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass p-8 rounded-3xl border-red-100 shadow-sm flex gap-4"
              >
                <AlertCircle className="w-6 h-6 text-red-500 shrink-0" />
                <p className="text-slate-700 font-medium">{point}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Solution Section */}
        <section className="mb-32 py-24 px-6 bg-slate-100/50 rounded-[4rem] border border-slate-200">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-extrabold tracking-tight mb-8 leading-tight text-slate-900">
                The <span className="gradient-text">AnyWeb Solution</span>
              </h2>
              <div className="space-y-8">
                {service.solutions.map((solution, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0 shadow-sm">
                      <Lightbulb className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-lg text-slate-700 font-medium leading-relaxed">{solution}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass p-12 rounded-[3rem] border-slate-200 shadow-xl">
              <h3 className="text-2xl font-display font-bold mb-8 flex items-center gap-3 text-slate-900">
                <Star className="w-8 h-8 text-blue-600" />
                Key Features
              </h3>
              <div className="space-y-6">
                {service.features.map((feature, i) => (
                  <div key={i} className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0" />
                    <p className="text-slate-700 font-medium text-lg">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-extrabold tracking-tight mb-6 text-slate-900">
              How We <span className="gradient-text">Make It Happen</span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              A streamlined process designed to get your systems running better, faster.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2 z-0" />
            
            {PROCESS_STEPS.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative z-10 glass p-10 rounded-[3rem] border-slate-200 text-center"
              >
                <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center text-white mx-auto mb-8 shadow-xl">
                  <step.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-4 text-slate-900">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Mid-page CTA */}
        <section className="mb-32">
          <div className="glass rounded-[3rem] p-12 border-blue-100 bg-linear-to-r from-blue-50 to-purple-50 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-3xl font-display font-bold text-slate-900 mb-2">Want to see what we can build for you?</h3>
              <p className="text-slate-600 text-lg">Get a free consultation and a custom demo preview of your system.</p>
            </div>
            <Link
              to="/contact"
              className="px-8 py-4 rounded-xl gradient-bg text-white font-bold shadow-lg hover:scale-105 transition-all flex items-center gap-2"
            >
              Get Free Demo
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

        {/* Use Cases Section */}
        {service.useCases && (
          <section className="mb-32">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-extrabold tracking-tight mb-6 text-slate-900">
                Real <span className="gradient-text">Results</span>
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                See how we've transformed businesses with {service.title}.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {service.useCases.map((useCase, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="glass rounded-[3rem] border-slate-200 overflow-hidden shadow-lg"
                >
                  <div className="p-10">
                    <div className="space-y-8">
                      <div>
                        <div className="text-red-500 font-bold uppercase tracking-widest text-xs mb-3 flex items-center gap-2">
                          <AlertCircle className="w-4 h-4" />
                          Before
                        </div>
                        <p className="text-slate-600 text-lg italic">"{useCase.before}"</p>
                      </div>
                      <div className="flex justify-center">
                        <ArrowDown className="w-6 h-6 text-slate-300" />
                      </div>
                      <div>
                        <div className="text-green-500 font-bold uppercase tracking-widest text-xs mb-3 flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4" />
                          After
                        </div>
                        <p className="text-slate-900 text-lg font-medium">"{useCase.after}"</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-slate-50 p-8 border-t border-slate-100">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center text-white shrink-0">
                        <Zap className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-slate-500 text-sm font-bold uppercase tracking-widest">Business Impact</div>
                        <div className="text-slate-900 font-bold text-xl">{useCase.impact}</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* Benefits Section */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-extrabold tracking-tight mb-6 text-slate-900">
              The <span className="gradient-text">Results You Can Expect</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass p-8 rounded-3xl border-green-100 shadow-sm flex gap-4"
              >
                <Zap className="w-6 h-6 text-green-500 shrink-0" />
                <p className="text-slate-700 font-medium">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-32 max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-extrabold tracking-tight mb-6 text-slate-900">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
          </div>
          <div className="space-y-6">
            {service.faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass p-8 rounded-3xl border-slate-200 shadow-sm"
              >
                <h3 className="text-xl font-display font-bold mb-4 text-slate-900">{faq.question}</h3>
                <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <div className="glass rounded-[4rem] p-12 md:p-24 border-blue-200 relative overflow-hidden text-center shadow-2xl">
          <div className="absolute inset-0 bg-linear-to-br from-blue-600/5 via-purple-600/10 to-red-600/5" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <h2 className="text-4xl md:text-7xl font-display font-extrabold tracking-tight mb-8 leading-tight text-slate-900">
              Ready to Scale Your <span className="gradient-text">{service.title}?</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-12 leading-relaxed">
              We understand the complexities of {service.title.toLowerCase()} and how it fits into your overall business strategy.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
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
                Get Free Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
