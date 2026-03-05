import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import logo from "../assets/logo2.png";

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Mail, href: "#", label: "Email" },
];

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-gray-950 to-gray-900 text-gray-400 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          
          {/* Brand Block */}
          <div className="text-center md:text-left max-w-md">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-5">
              <img
                className="w-11 h-11"
                src={logo}
                alt="Zyntegrate logo"
              />
              <span className="text-xl font-semibold text-white tracking-tight">
                Zyntegrate
              </span>
            </div>

            <p className="text-sm leading-relaxed text-gray-500">
              Powerful automation and integration infrastructure built for
              modern enterprises. Connect systems, automate workflows, and scale with confidence.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="w-11 h-11 rounded-xl bg-gray-800/60 backdrop-blur 
                           border border-gray-800 flex items-center justify-center 
                           transition-all duration-300 
                           hover:bg-indigo-600/20 hover:border-indigo-500/40 group"
              >
                <social.icon className="w-5 h-5 text-gray-400 group-hover:text-indigo-400 transition-colors duration-300" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500 text-center md:text-left">
            © 2026 Zyntegrate. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">
              Terms
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}