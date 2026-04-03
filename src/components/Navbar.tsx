import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';
import { SERVICES } from '../constants';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '#services', isDropdown: true },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        scrolled ? 'bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
            <Zap className="w-6 h-6 fill-current" />
          </div>
          <span className="text-2xl font-display font-extrabold tracking-tighter text-slate-900">
            Any<span className="gradient-text">Web</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              {link.isDropdown ? (
                <div className="flex items-center gap-1 text-slate-600 hover:text-slate-900 cursor-pointer py-2 font-medium">
                  {link.name}
                  <ChevronRight className="w-4 h-4 rotate-90 group-hover:rotate-[-90deg] transition-transform" />
                  
                  {/* Dropdown */}
                  <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="glass w-64 rounded-2xl p-4 shadow-2xl border-slate-200">
                      {SERVICES.map((service) => (
                        <Link
                          key={service.id}
                          to={`/services/${service.slug}`}
                          className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group/item"
                        >
                          <service.icon className="w-5 h-5 text-blue-600 group-hover/item:text-blue-500" />
                          <span className="text-sm font-semibold text-slate-700">{service.title}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  to={link.path}
                  className={cn(
                    'text-slate-600 hover:text-slate-900 transition-colors py-2 relative font-medium',
                    location.pathname === link.path && 'text-slate-900'
                  )}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 gradient-bg rounded-full"
                    />
                  )}
                </Link>
              )}
            </div>
          ))}
          <Link
            to="/contact"
            className="px-6 py-2.5 rounded-full gradient-bg text-white font-semibold hover:shadow-lg hover:shadow-blue-500/30 hover:scale-105 transition-all"
          >
            Get Quote
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-slate-600 hover:text-slate-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 glass border-t border-slate-200 p-6 md:hidden shadow-xl"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.isDropdown ? (
                    <div className="flex flex-col gap-2">
                      <span className="text-slate-400 text-xs font-bold uppercase tracking-widest px-2">
                        Services
                      </span>
                      {SERVICES.map((service) => (
                        <Link
                          key={service.id}
                          to={`/services/${service.slug}`}
                          className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50"
                        >
                          <service.icon className="w-5 h-5 text-blue-600" />
                          <span className="font-medium text-slate-700">{service.title}</span>
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link
                      to={link.path}
                      className="block p-3 rounded-xl hover:bg-slate-50 font-medium text-slate-700"
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <Link
                to="/contact"
                className="w-full text-center py-4 rounded-2xl gradient-bg text-white font-bold"
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
