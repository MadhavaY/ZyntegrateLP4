import { Button } from './ui/button';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';
import './Hero.css'

export function Hero() {
  return (
    <section id='hero' className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-blue-50 to-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 size-72 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 size-96 bg-blue-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Text Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-sm backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            > */}
              {/* <Sparkles className="size-4 text-blue-600" /> */}
              {/* <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent font-medium">
                Now Available for Enterprise
              </span> */}
            {/* </motion.div> */}
            {/* <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Enterprise Integration Platform
        </motion.p> */}
            <motion.h1 
              className="text-5xl lg:text-6xl font-bold text-blue-900 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Connect Everything.
Automate Anything.  
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500 animate-gradient bg-[length:200%_auto]">
                Powered by Intelligent Agents.
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-l text-blue-800 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Zyntegrate unifies fragmented systems and automates complex workflows from legacy databases to cloud platforms and APIs all in one intelligent layer.
            </motion.p>
            
            {/* <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <Button size="lg" className="gap-2 bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-400/30 hover:shadow-xl hover:shadow-blue-400/40 transition-all">
                Start Free Trial
                <ArrowRight className="size-5" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2 border-2 border-blue-300 hover:bg-blue-50 text-blue-600">
                <Play className="size-5" />
                Watch Demo
              </Button>
            </motion.div> */}
            
            {/* <motion.div 
              className="flex items-center gap-8 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">50+</div>
                <div className="text-sm text-blue-800">Pre-built Connectors</div>
              </div>
              <div className="h-12 w-px bg-gradient-to-b from-transparent via-blue-200 to-transparent"></div>
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">99.9%</div>
                <div className="text-sm text-blue-800">Uptime SLA</div>
              </div>
              <div className="h-12 w-px bg-gradient-to-b from-transparent via-blue-200 to-transparent"></div>
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">24/7</div>
                <div className="text-sm text-blue-800">Support</div>
              </div>
            </motion.div> */}
          </motion.div>
          
          {/* Right Column - Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-100/30 to-blue-200/30 rounded-3xl blur-3xl"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/50 backdrop-blur-sm">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1644325349124-d1756b79dd42?q=80&w=1475&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Integration Dashboard"
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}