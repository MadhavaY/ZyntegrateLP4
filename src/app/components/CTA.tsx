import { Button } from './ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

export function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700 animate-gradient bg-[length:200%_auto]"></div>
      
      {/* Animated orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 size-64 bg-blue-400/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 size-80 bg-blue-300/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-blue-50 mb-8"
        >
          <Sparkles className="size-5 text-white" />
          <span className="font-medium text-white">Start Your Integration Journey Today</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
        >
          Ready to Transform Your Integrations?
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Join hundreds of enterprises who trust Zyntegrate to power their critical integrations. Start your free trial today.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-blue-50 gap-2 shadow-2xl shadow-blue-300/30 hover:shadow-blue-400/40 hover:scale-105 transition-all"
          >
            Start Free Trial
            <ArrowRight className="size-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white/10 backdrop-blur-sm"
          >
            Schedule Demo
          </Button>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 text-blue-100 text-sm"
        >
          No credit card required • 14-day free trial • Cancel anytime
        </motion.p>
      </motion.div>
    </section>
  );
}