import { useEffect } from "react";
import { motion, useAnimate } from "motion/react";
import { Check } from "lucide-react";

const steps = [
  "Connector configured",
  "Workflow deployed",
  "Monitoring active",
  "Anomaly detection running",
];

function Agents() {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const runSequence = async () => {
      while (true) {
        await animate("[data-anim]", { opacity: 0, y: 20 }, { duration: 0 });

        await animate("#bubble", { opacity: 1, y: 0 }, { duration: 0.6 });

        await animate("#arrow1", { opacity: 1 }, { duration: 0.4 });

        await animate("#agent", { opacity: 1, y: 0 }, { duration: 0.6 });

        await animate("#arrow2", { opacity: 1 }, { duration: 0.4 });

        for (let i = 0; i < steps.length; i++) {
          await animate(
            `#step-${i}`,
            { opacity: 1, y: 0 },
            { duration: 0.5 }
          );
        }

        await new Promise((r) => setTimeout(r, 4000));

        await animate(
          "[data-anim]",
          { opacity: 0, y: -10 },
          { duration: 0.6 }
        );

        await new Promise((r) => setTimeout(r, 600));
      }
    };

    runSequence();
  }, [animate]);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-blue-50 to-white relative overflow-hidden">
      
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-96 h-96 bg-blue-200/20 blur-3xl rounded-full animate-pulse" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-300/20 blur-3xl rounded-full animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <div ref={scope} className="relative">
          <div className="bg-white rounded-3xl border border-blue-100 shadow-2xl p-10 flex flex-col items-center">

            <div
              id="bubble"
              data-anim
              className="opacity-0 px-6 py-3 rounded-full bg-blue-50 border border-blue-200 text-blue-900 font-medium text-sm mb-6"
            >
              “Start an integration using HTTP Trigger from System A to System B.”
            </div>

            <div
              id="arrow1"
              data-anim
              className="opacity-0 w-px h-10 bg-gradient-to-b from-blue-400/60 to-blue-200/40 my-6"
            />

            <div
              id="agent"
              data-anim
              className="opacity-0 relative w-40 h-40 my-4"
            >
              <motion.div
                className="absolute inset-0 rounded-full border border-dashed border-blue-400/50"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              />
              <div className="absolute inset-5 rounded-full border border-blue-300/50" />
              <div className="absolute inset-12 rounded-2xl bg-white border border-blue-100 shadow-xl flex items-center justify-center text-blue-900 font-semibold tracking-widest">
                Agent
              </div>
            </div>

            <div
              id="arrow2"
              data-anim
              className="opacity-0 w-px h-10 bg-gradient-to-b from-blue-400/60 to-blue-200/40 my-6"
            />

            <div className="w-full flex flex-col gap-4 mt-4">
              {steps.map((step, i) => (
                <div
                  key={step}
                  id={`step-${i}`}
                  data-anim
                  className="opacity-0 flex items-center gap-3 px-4 py-3 rounded-xl bg-blue-50/60 border border-blue-100"
                >
                  <Check className="text-green-500 w-4 h-4" />
                  <span className="text-blue-900 text-sm">{step}</span>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* RIGHT SIDE  */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 leading-tight">
            Your Systems.
            <span className="block bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
              Now Autonomous.
            </span>
          </h2>

          <p className="text-blue-800 text-lg leading-relaxed">
            AI agents that monitor events, trigger workflows, and optimize operations automatically.
          </p>

          <div className="grid gap-6">
            <div className="p-6 rounded-2xl bg-white border border-blue-100 shadow-lg">
              <span className="inline-block mb-3 text-xs uppercase tracking-widest bg-blue-50 text-blue-600 px-3 py-1 rounded-full border border-blue-200">
                Events
              </span>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">
                Event Monitoring
              </h3>
              <p className="text-blue-800 text-sm">
                Continuously tracks system activity across integrations.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-blue-100 shadow-lg">
              <span className="inline-block mb-3 text-xs uppercase tracking-widest bg-blue-50 text-blue-600 px-3 py-1 rounded-full border border-blue-200">
                Triggers
              </span>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">
                Smart Triggers
              </h3>
              <p className="text-blue-800 text-sm">
                Automatically launches workflows when conditions are met.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-blue-100 shadow-lg">
              <span className="inline-block mb-3 text-xs uppercase tracking-widest bg-blue-50 text-blue-600 px-3 py-1 rounded-full border border-blue-200">
                Anomalies
              </span>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">
                Anomaly Detection
              </h3>
              <p className="text-blue-800 text-sm">
                Detect and resolve workflow failures instantly.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Agents;