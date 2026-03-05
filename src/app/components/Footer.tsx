import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const footerLinks = {
  Product: ['Features', 'Integrations', 'Pricing', 'API Docs', 'Changelog'],
  Company: ['About', 'Blog', 'Careers', 'Press Kit', 'Contact'],
  Resources: ['Documentation', 'Help Center', 'Community', 'Tutorials', 'Webinars'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Security', 'Compliance'],
};

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Mail, href: '#', label: 'Email' },
];

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="size-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg"></div>
              <span className="font-semibold text-xl text-white">Zyntegrate</span>
            </div>
            <p className="text-sm text-gray-400 mb-6">
              Powerful integration made simple and affordable for modern enterprises.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="size-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors"
                >
                  <social.icon className="size-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {/* {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-white mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))} */}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © 2026 Zyntegrate. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
              Terms
            </a>
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
