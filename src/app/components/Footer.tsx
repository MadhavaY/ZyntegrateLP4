import { Facebook, Twitter, Linkedin, Mail, Instagram, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "./ui/button";
import logo from "../assets/logo2.png";
import { useRef } from "react";
import { useInView } from "motion/react";
import { useNavigate } from "react-router-dom";

const socialLinks = [
  { icon: Twitter, href: "https://x.com/ZNinth09", target: "_blank", label: "Twitter" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/z-ninth/?viewAsMember=true", target: "_blank", label: "LinkedIn" },
  { icon: Mail, href: "mailto:info@zyntegrate.com", label: "Email" },
  { icon: Instagram, href: "https://www.instagram.com/zninth09/", target: "_blank", label: "Instagram" },
  { icon: Facebook, href: "https://www.facebook.com/zninth09", target: "_blank", label: "Facebook" },
];

export function Footer() {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const navigate = useNavigate();

  return (
    <footer className="bg-gray-50 border-t border-gray-200">

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">

        {/* Top */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">

          {/* Brand */}
          <div className="max-w-sm">
            <div className="flex items-center gap-3 mb-4">
              <img className="w-10 h-10" src={logo} alt="Zyntegrate logo" />

              <span className="text-lg font-semibold text-gray-900">
                Zyntegrate
              </span>
            </div>

            <p className="text-sm text-gray-600 leading-relaxed">
              Powerful automation and integration infrastructure built
              for modern enterprises. Connect systems, automate workflows,
              and scale with confidence.
            </p>
          </div>

          {/* Social + Button */}
          <div
            ref={ref}
            className="flex flex-col items-center md:items-end gap-6"
          >
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="group flex items-center justify-center w-11 h-11 rounded-lg border border-gray-200 bg-white transition-all duration-300 hover:border-gray-300 hover:shadow-sm"
                >
                  <social.icon className="w-5 h-5 text-gray-500 transition-transform duration-300 group-hover:scale-110 group-hover:text-gray-800" />
                </a>
              ))}
            </div>

            {/* Contact Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="w-auto display-flex mt-2 mr-16"
            >
              <Button
              onClick={() => navigate("/contact")}
                size="lg"
                className="group px-10 py-6 text-lg font-semibold rounded-xl bg-gradient-to-r hover:cursor-pointer from-blue-600 to-indigo-600 text-white shadow-md hover:shadow-xl transition-all"
              >
                Contact Us
                <ArrowRight className="ml-3 size-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>

          </div>

        </div>

        {/* Divider */}
        <div className="my-12 border-t border-gray-200"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">

          <p>
            © 2026 Zyntegrate. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-900 transition-colors">
              Privacy
            </a>

            <a href="#" className="hover:text-gray-900 transition-colors">
              Terms
            </a>

            <a href="#" className="hover:text-gray-900 transition-colors">
              Cookies
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}