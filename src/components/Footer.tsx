import { Heart, Coffee, Mail, Globe, Github, Twitter, Linkedin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Twitter, label: 'Twitter', url: '#' },
    { icon: Linkedin, label: 'LinkedIn', url: '#' },
    { icon: Github, label: 'GitHub', url: '#' },
    { icon: Mail, label: 'Email', url: 'mailto:shakirhussainbj128@gmail.com' }
  ];

  const quickLinks = [
    { label: 'Home', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'About', href: '#' },
    { label: 'Contact', href: '#' }
  ];

  const categories = [
    { label: 'Web Development', href: '#' },
    { label: 'Data Science', href: '#' },
    { label: 'WordPress', href: '#' },
    { label: 'UI/UX Design', href: '#' }
  ];

  const services = [
    { label: 'Frontend Development', href: '#' },
    { label: 'WordPress Development', href: '#' },
    { label: 'Data Analysis', href: '#' },
    { label: 'UI/UX Design', href: '#' }
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">SH</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Shakir Hussain</h3>
                <p className="text-gray-400 text-sm">Data Scientist & Developer</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Passionate Data Scientist, WordPress & Frontend Developer with 2+ years of experience. 
              Creating impactful digital solutions and sharing knowledge through blogging.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <Button
                    key={index}
                    variant="ghost"
                    size="icon"
                    className="text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
                    asChild
                  >
                    <a href={social.url} aria-label={social.label}>
                      <Icon size={20} />
                    </a>
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Blog Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Blog Categories</h4>
            <ul className="space-y-3">
              {categories.map((category, index) => (
                <li key={index}>
                  <a
                    href={category.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {category.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Get In Touch</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-300">
                  <Mail size={16} />
                  <a href="mailto:shakirhussainbj128@gmail.com" className="hover:text-white transition-colors">
                    shakirhussainbj128@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Phone size={16} />
                  <a href="tel:+923554545478" className="hover:text-white transition-colors">
                    +92 3554545478
                  </a>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Globe size={16} />
                  <span>Remote (Pakistan)</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Newsletter</h4>
              <p className="text-gray-300 mb-4 text-sm">
                Subscribe to get the latest updates on web development, data science, and tech insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-6 text-sm">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-gray-300 text-sm">
              <span>© {currentYear} Shakir Hussain. Made with</span>
              <Heart size={16} className="text-red-500" />
              <span>and</span>
              <Coffee size={16} className="text-amber-500" />
              <span>for the developer community</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">RSS Feed</a>
            </div>
          </div>
          
          <div className="mt-6 text-center text-sm text-gray-400">
            <p className="flex items-center justify-center gap-2">
              <Globe size={14} />
              Built with React, TypeScript, Tailwind CSS & Shadcn/ui • Optimized for SEO & Performance
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}