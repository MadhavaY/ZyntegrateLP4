import { Button } from './ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { useNavigate } from "react-router-dom";

export function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const navigate = useNavigate();

  return (
    <section
      id="cta"
      className="py-28 px-6 lg:px-8 bg-white"
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        {/* CTA CARD */}
        <motion.div
          whileHover={{ y: -6, scale: 1.01 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="group relative p-16 rounded-3xl border border-gray-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300"
        >
          {/* animated border glow */}
          {/* <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 blur-xl"></div>
          </div> */}

          <div className="relative text-center">

            {/* badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-5 py-2 bg-gray-100 border border-gray-200 rounded-full text-sm mb-8"
            >
              <Sparkles className="size-4 text-blue-600" />
              <span className="font-medium text-gray-700">
                Start Your Integration Journey
              </span>
            </motion.div>

            {/* headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            >
              Stop Managing Integrations.
              <br />
              Start Orchestrating Systems.
            </motion.h2>

            {/* description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-600 max-w-2xl mx-auto mb-12"
            >
              Bring clarity to your infrastructure. Automate intelligently.
              Move at the speed of business.
            </motion.p>

            {/* button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
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
        </motion.div>
      </motion.div>
    </section>
  );
}