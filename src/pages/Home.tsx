import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ChevronRight, Star, Quote, CheckCircle2 } from 'lucide-react';
import Hero from '../components/Hero';
import ServicesGrid from '../components/ServicesGrid';
import AutomationFeature from '../components/AutomationFeature';
import Process from '../components/Process';

export default function Home() {
  return (
    <main>
      <Hero />

      {/* Trust Strip */}
      <section className="py-12 border-y border-slate-200 bg-white px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-12 md:gap-24">
          {[
            'Built for Real Businesses',
            'Automation First Approach',
            'AI Integrated Solutions',
            'Custom Systems, Not Templates'
          ].map((text, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-2 text-slate-500 font-bold text-sm uppercase tracking-widest"
            >
              <Star className="w-4 h-4 text-blue-600 fill-current" />
              {text}
            </motion.div>
          ))}
        </div>
      </section>

      <ServicesGrid />

      <AutomationFeature />

      {/* AI Integration Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-600 text-sm font-bold uppercase tracking-widest mb-6 shadow-sm"
          >
            <Star className="w-4 h-4" />
            The Future is Now
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-extrabold tracking-tight mb-8 text-slate-900"
          >
            AI Isn’t the Future. It’s Your <span className="gradient-text">Competitive Advantage.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto mb-16 leading-relaxed"
          >
            We don't just add AI for the sake of it. We layer practical, high-impact AI into your existing systems to improve customer service, lead qualification, and staff productivity.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {[
              { title: 'AI Chatbots', desc: '24/7 customer service that actually solves problems.' },
              { title: 'Lead Qualification', desc: 'AI that identifies your best prospects automatically.' },
              { title: 'Workflow AI', desc: 'AI-generated responses and automated internal tasks.' },
              { title: 'Staff Productivity', desc: 'Internal AI tools that help your team work 10x faster.' },
              { title: 'Data Analysis', desc: 'AI that finds insights in your data you didn’t know existed.' },
              { title: 'Custom AI Tools', desc: 'Bespoke AI solutions built for your specific business needs.' }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass p-8 rounded-3xl border-slate-200 hover:border-purple-500/50 transition-all group shadow-sm hover:shadow-xl"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-purple-500/20">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-display font-bold mb-3 text-slate-900">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Can Build Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-display font-extrabold tracking-tight mb-6 text-slate-900">
              What We <span className="gradient-text">Can Build</span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              From simple landing pages to complex AI-powered internal systems.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {[
              { label: 'Websites', icon: 'Layout' },
              { label: 'Shopify', icon: 'ShoppingBag' },
              { label: 'Automation', icon: 'Zap' },
              { label: 'AI Tools', icon: 'Cpu' },
              { label: 'Dashboards', icon: 'Database' },
              { label: 'Portals', icon: 'Users' },
              { label: 'APIs', icon: 'Link' }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass p-6 rounded-2xl flex flex-col items-center gap-4 text-center hover:border-blue-500/50 transition-all group shadow-sm hover:shadow-lg"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform shadow-sm">
                  <div className="font-bold text-lg">{item.label[0]}</div>
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-slate-500">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Process />

      {/* Why AnyWeb Section */}
      <section className="py-24 px-6 relative overflow-hidden bg-slate-100/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-display font-extrabold tracking-tight mb-8 leading-tight text-slate-900">
                We Understand Business — <span className="gradient-text">Not Just Code</span>
              </h2>
              <div className="space-y-8">
                {[
                  { title: 'Problem Solvers, Not Just Designers', desc: 'We don’t just design, we solve real operational problems.' },
                  { title: 'Focus on Efficiency and Growth', desc: 'Our systems are built to make you more profitable.' },
                  { title: 'Systems That Actually Get Used', desc: 'We focus on user adoption and practical implementation.' },
                  { title: 'The Ultimate Tech Stack', desc: 'We combine design + development + automation + AI.' }
                ].map((point, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0 shadow-sm">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-bold mb-2 text-slate-900">{point.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{point.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="glass rounded-[3rem] p-4 border-slate-200 shadow-2xl overflow-hidden aspect-square">
                <img
                  src="https://picsum.photos/seed/business/800/800"
                  alt="Business Strategy"
                  className="w-full h-full object-cover rounded-[2.5rem] opacity-80"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-linear-to-t from-white/20 via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial Placeholder */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="glass rounded-[3rem] p-12 md:p-20 border-slate-200 relative overflow-hidden text-center shadow-xl">
            <Quote className="w-20 h-20 text-blue-500/10 absolute top-10 left-10" />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-2xl md:text-4xl font-display font-medium italic mb-12 leading-relaxed text-slate-800">
                "AnyWeb didn't just build us a website. They rebuilt our entire lead follow-up system. We've seen a 40% increase in conversion speed since implementing their automation."
              </p>
              <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-slate-100 border-2 border-blue-500 shadow-lg shadow-blue-500/20" />
                <div>
                  <div className="font-bold text-xl text-slate-900">John Anderson</div>
                  <div className="text-slate-500 text-sm font-bold uppercase tracking-widest">CEO, TechFlow Solutions</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
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
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
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
                  Book a Call
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
