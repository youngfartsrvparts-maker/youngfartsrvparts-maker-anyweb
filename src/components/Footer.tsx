import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Zap } from 'lucide-react';
import { SERVICES } from '../constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-200 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Brand */}
        <div className="space-y-6">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
              <Zap className="w-5 h-5 fill-current" />
            </div>
            <span className="text-xl font-display font-extrabold tracking-tighter text-slate-900">
              Any<span className="gradient-text">Web</span>
            </span>
          </Link>
          <p className="text-slate-600 leading-relaxed">
            We don't just build websites — we understand business operations, identify pain points, and use automation + AI to eliminate inefficiencies.
          </p>
          <div className="flex items-center gap-4">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-500 hover:text-blue-600 hover:border-blue-500/50 transition-all shadow-sm"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-slate-900 font-bold mb-6">Services</h4>
          <ul className="space-y-4">
            {SERVICES.map((service) => (
              <li key={service.id}>
                <Link
                  to={`/services/${service.slug}`}
                  className="text-slate-600 hover:text-blue-600 transition-colors"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-slate-900 font-bold mb-6">Company</h4>
          <ul className="space-y-4">
            <li>
              <Link to="/about" className="text-slate-600 hover:text-blue-600 transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-slate-600 hover:text-blue-600 transition-colors">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/careers" className="text-slate-600 hover:text-blue-600 transition-colors">
                Careers
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="text-slate-600 hover:text-blue-600 transition-colors">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-slate-900 font-bold mb-6">Get in Touch</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-slate-600">
              <MapPin className="w-5 h-5 text-blue-600 shrink-0" />
              <span>123 Tech Avenue, Suite 500<br />Silicon Valley, CA 94025</span>
            </li>
            <li className="flex items-center gap-3 text-slate-600">
              <Phone className="w-5 h-5 text-blue-600 shrink-0" />
              <span>+1 (555) 123-4567</span>
            </li>
            <li className="flex items-center gap-3 text-slate-600">
              <Mail className="w-5 h-5 text-blue-600 shrink-0" />
              <span>hello@anyweb.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-500 text-sm">
        <p>© {currentYear} AnyWeb Systems. All rights reserved.</p>
        <div className="flex items-center gap-8">
          <a href="#" className="hover:text-slate-700">Terms of Service</a>
          <a href="#" className="hover:text-slate-700">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
}
