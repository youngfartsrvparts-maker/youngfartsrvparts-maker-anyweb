import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, 
  Star, 
  Quote, 
  CheckCircle2, 
  Layout, 
  ShoppingBag, 
  Zap, 
  Cpu, 
  Database, 
  Users, 
  Link as LinkIcon,
  Monitor,
  Smartphone,
  TrendingUp,
  ShieldCheck,
  BarChart3,
  Layers,
  Globe,
  Code2,
  Eye
} from 'lucide-react';
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

      {/* Website Scale Positioning */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-display font-extrabold tracking-tight mb-6 text-slate-900"
            >
              We Design & Build Websites of <span className="gradient-text">Any Scale</span>
            </motion.h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              From simple business websites to fully custom platforms, AnyWeb builds digital experiences tailored to your business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Small Business Websites', desc: 'Clean, professional sites built to establish credibility and capture local leads.', icon: Globe },
              { title: 'High-End Brand Sites', desc: 'Premium visual experiences with custom animations and high-end UI for established brands.', icon: Star },
              { title: 'Shopify E-commerce', desc: 'High-converting stores built to scale, optimized for sales and operational efficiency.', icon: ShoppingBag },
              { title: 'Custom Platforms', desc: 'Bespoke web applications built with complex logic and unique business requirements.', icon: Code2 },
              { title: 'Internal Systems', desc: 'Private tools and dashboards built to manage your team, data, and operations.', icon: Database },
              { title: 'Marketplace Websites', desc: 'Multi-user platforms with complex search, filtering, and transaction capabilities.', icon: Layers }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass p-8 rounded-3xl border-slate-200 hover:border-blue-500/50 transition-all group shadow-sm hover:shadow-xl"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/10">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-display font-bold mb-3 text-slate-900">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* See It Before You Pay Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="glass rounded-[4rem] p-12 md:p-24 border-blue-200 relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-linear-to-br from-blue-600/5 via-purple-600/5 to-red-600/5" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-600 text-sm font-bold uppercase tracking-widest mb-6 shadow-sm">
                  <Eye className="w-4 h-4" />
                  Zero Risk
                </div>
                <h2 className="text-4xl md:text-6xl font-display font-extrabold tracking-tight mb-8 leading-tight text-slate-900">
                  See What We Can Build — <span className="gradient-text">Before You Pay</span>
                </h2>
                <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                  We offer a free consultation and can create a demo of your website or system so you can see the direction before committing. No pressure. No commitment. Just clarity.
                </p>
                <div className="space-y-6 mb-10">
                  {[
                    'Free consultation to understand your business',
                    'We map out exactly what you need',
                    'We create a custom demo or concept',
                    'You review before making a decision'
                  ].map((text, i) => (
                    <div key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                      <CheckCircle2 className="w-5 h-5 text-blue-600" />
                      {text}
                    </div>
                  ))}
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-10 py-5 rounded-2xl gradient-bg text-white font-bold text-lg shadow-2xl shadow-blue-500/20 hover:shadow-blue-500/40 hover:scale-105 transition-all"
                >
                  Get Free Demo
                  <ChevronRight className="w-5 h-5" />
                </Link>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="glass rounded-[3rem] p-4 border-slate-200 shadow-2xl overflow-hidden aspect-video">
                  <img
                    src="https://picsum.photos/seed/demo/1200/800"
                    alt="Demo Preview"
                    className="w-full h-full object-cover rounded-[2.5rem] opacity-80"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="glass p-6 rounded-2xl border-blue-200 shadow-2xl flex items-center gap-4 animate-bounce">
                      <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-white">
                        <Zap className="w-5 h-5 fill-current" />
                      </div>
                      <div className="font-bold text-slate-900">Your Demo is Ready</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <ServicesGrid />

      {/* Types of Projects Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-display font-extrabold tracking-tight mb-6 text-slate-900">
              What We <span className="gradient-text">Can Build for You</span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Our capability spans the entire digital spectrum, from simple landing pages to complex internal tools.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Service Websites', icon: Globe },
              { label: 'Landing Pages', icon: Layout },
              { label: 'Shopify Stores', icon: ShoppingBag },
              { label: 'Web Apps', icon: Code2 },
              { label: 'Marketplaces', icon: Layers },
              { label: 'Dashboards', icon: BarChart3 },
              { label: 'Client Portals', icon: Users },
              { label: 'Internal Tools', icon: Database }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass p-8 rounded-3xl flex flex-col items-center gap-4 text-center hover:border-blue-500/50 transition-all group shadow-sm hover:shadow-lg"
              >
                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-blue-600 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                  <item.icon className="w-7 h-7" />
                </div>
                <span className="text-sm font-bold uppercase tracking-widest text-slate-900">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
              { title: 'AI Chatbots', desc: '24/7 customer service that actually solves problems, trained on your business data.' },
              { title: 'Lead Qualification', desc: 'AI that identifies your best prospects automatically, saving your sales team hours.' },
              { title: 'Workflow AI', desc: 'AI-generated responses and automated internal tasks that accelerate your operations.' },
              { title: 'Staff Productivity', desc: 'Internal AI tools that help your team retrieve information and work 10x faster.' },
              { title: 'Data Analysis', desc: 'AI that finds hidden insights in your data, helping you make smarter decisions.' },
              { title: 'Custom AI Tools', desc: 'Bespoke AI solutions built for your specific business needs and unique challenges.' }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass p-8 rounded-3xl border-slate-200 hover:border-purple-500/50 transition-all group shadow-sm hover:shadow-xl"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-purple-500/10">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-display font-bold mb-3 text-slate-900">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Scale Trust Section */}
      <section className="py-24 px-6 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-display font-extrabold tracking-tight mb-8 leading-tight">
                Built for Businesses of <span className="gradient-text">Any Size</span>
              </h2>
              <p className="text-xl text-slate-400 mb-12 leading-relaxed">
                No matter the size or complexity of your operations, we build the right solution. We work with small businesses, growing companies, and established operations.
              </p>
              <div className="grid grid-cols-2 gap-8">
                {[
                  { label: 'Small Business', desc: 'Credibility & Leads' },
                  { label: 'Growing Teams', desc: 'Systems & Scale' },
                  { label: 'Established Ops', desc: 'Automation & AI' },
                  { label: 'Enterprise', desc: 'Custom Platforms' }
                ].map((item, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10">
                    <div className="text-blue-400 font-bold mb-1">{item.label}</div>
                    <div className="text-slate-500 text-sm">{item.desc}</div>
                  </div>
                ))}
              </div>
            </motion.div>
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500/20 blur-[100px] -z-10" />
              <div className="glass bg-white/5 border-white/10 rounded-[3rem] p-12 shadow-2xl">
                <div className="space-y-8">
                  {[
                    { title: 'Simple → Advanced → System', desc: 'We scale our solutions based on your specific needs.' },
                    { title: 'Future-Proof Architecture', desc: 'Built to grow as your business grows.' },
                    { title: 'Seamless Transitions', desc: 'We help you move from manual to automated smoothly.' }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-6">
                      <div className="w-12 h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                        <TrendingUp className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-display font-bold mb-2">{item.title}</h3>
                        <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design + Performance Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-display font-extrabold tracking-tight mb-6 text-slate-900">
              Built to Look Better. <span className="gradient-text">Built to Work Better.</span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              We don't sacrifice performance for design. We deliver both.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Modern Design', desc: 'Clean, premium aesthetics that build instant trust.', icon: Layout },
              { title: 'Mobile-First', desc: 'Perfect experiences on every device, every time.', icon: Smartphone },
              { title: 'Fast Performance', desc: 'Lightning-fast load times for better SEO and UX.', icon: Zap },
              { title: 'Conversion-Focused', desc: 'Built to turn visitors into paying customers.', icon: TrendingUp }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass p-8 rounded-3xl border-slate-200 text-center shadow-sm"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mx-auto mb-6 shadow-sm">
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-display font-bold mb-3 text-slate-900">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
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
                From Simple Websites to Advanced Systems — <span className="gradient-text">Let’s Build What You Need</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-12 leading-relaxed">
                Stop doing repetitive work. Start scaling with custom websites, automation, and AI systems built for real growth. You can see what we can build before you spend a dollar.
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
                  Get Free Demo
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
