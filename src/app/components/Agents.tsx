import { useEffect, useState } from "react";
import { motion, useAnimate } from "motion/react";
import { Check } from "lucide-react";

// Three workflow examples
const workflows = [
  {
    bubble: "When an HTTP request is received, sync customer info to Salesforce, create a HubSpot contact, and send a notification via AWS SNS.",
    steps: [
      "HTTP trigger configured",
      "Salesforce CRM connector configured",
      "HubSpot contact synced",
      "AWS SNS notification sent",
      "Monitoring active for new events",
    ],
  },
  {
    bubble: "Webhook from e-commerce site triggers AWS SQS queue, Azure Service Bus event, and Timer workflow for order processing.",
    steps: [
      "Webhook trigger configured",
      "AWS SQS queue updated",
      "Azure Service Bus event triggered",
      "Timer workflow started",
      "Monitoring active for new events",
    ],
  },
  {
    bubble: "WebSocket event received → HubSpot CRM updated → Salesforce CRM updated → Timer triggers follow-up actions.",
    steps: [
      "WebSocket trigger configured",
      "HubSpot CRM updated",
      "Salesforce CRM updated",
      "Timer workflow triggered",
      "Monitoring active for new events",
    ],
  },
];

function Agents() {
  const [scope, animate] = useAnimate();
  const [currentWorkflow, setCurrentWorkflow] = useState(0);

  useEffect(() => {
    const runSequence = async () => {
      while (true) {
        const { bubble, steps } = workflows[currentWorkflow];

        // Hide all animatable elements first
        await animate("[data-anim]", { opacity: 0, y: 20 }, { duration: 0 });

        // Update bubble text
        const bubbleEl = document.getElementById("bubble");
        if (bubbleEl) bubbleEl.textContent = bubble;

        // Animate bubble
        await animate("#bubble", { opacity: 1, y: 0 }, { duration: 0.6 });
        await animate("#arrow1", { opacity: 1 }, { duration: 0.4 });
        await animate("#agent", { opacity: 1, y: 0 }, { duration: 0.6 });
        await animate("#arrow2", { opacity: 1 }, { duration: 0.4 });

        // Animate workflow steps
        for (let i = 0; i < steps.length; i++) {
  const stepSpan = document.getElementById(`step-text-${i}`);
  if (stepSpan) stepSpan.textContent = steps[i];
  await animate(`#step-${i}`, { opacity: 1, y: 0 }, { duration: 0.5 });
}

        // Wait before hiding
        await new Promise((r) => setTimeout(r, 4000));
        await animate("[data-anim]", { opacity: 0, y: -10 }, { duration: 0.6 });
        await new Promise((r) => setTimeout(r, 600));

        // Move to next workflow
        setCurrentWorkflow((prev) => (prev + 1) % workflows.length);
      }
    };

    runSequence();
  }, [animate, currentWorkflow]);

  return (
    <section
      id="agents"
      className="py-14 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-blue-50 to-white relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-96 h-96 bg-blue-200/20 blur-3xl rounded-full animate-pulse" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-300/20 blur-3xl rounded-full animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-10 items-stretch">
        {/* LEFT SIDE */}
        <div ref={scope} className="relative h-full">
          <div className="bg-white rounded-3xl border border-blue-100 shadow-2xl p-3 flex flex-col items-center h-full justify-center">

            <div
              id="bubble"
              data-anim
              className="opacity-0 px-5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-900 font-medium text-sm mb-1 text-center"
            >
              {/* Bubble text updates dynamically */}
            </div>

            <div
              id="arrow1"
              data-anim
              className="opacity-0 flex flex-col items-center my-0 mb-4"
            >
              <div className="w-px h-6 bg-gradient-to-b from-blue-400/60 to-blue-200/40" />
              <svg
                className="w-5 h-5 text-blue-400 mt-0.5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 14a1 1 0 01-.707-.293l-4-4a1 1 0 111.414-1.414L10 11.586l3.293-3.293a1 1 0 111.414 1.414l-4 4A1 1 0 0110 14z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            <div
              id="agent"
              data-anim
              className="opacity-0 relative w-32 h-32 my-2"
            >
              <motion.div
                className="absolute inset-0 rounded-full border border-dashed border-blue-400/50"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              />
              <div className="absolute inset-4 rounded-full border border-blue-300/50" />
              <div className="absolute inset-8 rounded-full bg-white border border-blue-100 shadow-xl flex items-center justify-center text-blue-900 font-semibold tracking-widest">
                Agent
              </div>
            </div>

            <div
              id="arrow2"
              data-anim
              className="opacity-0 flex flex-col items-center my-0 mb-4"
            >
              <div className="w-px h-6 bg-gradient-to-b from-blue-400/60 to-blue-200/40" />
              <svg
                className="w-5 h-5 text-blue-400 mt-0.5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 14a1 1 0 01-.707-.293l-4-4a1 1 0 111.414-1.414L10 11.586l3.293-3.293a1 1 0 111.414 1.414l-4 4A1 1 0 0110 14z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            <div className="w-full flex flex-col gap-2 mt-2">
  {Array.from({ length: 5 }).map((_, i) => (
    <div
      key={i}
      id={`step-${i}`}
      data-anim
      className="opacity-0 flex items-center gap-3 px-2 py-1 rounded-xl bg-blue-50/60 border border-blue-100"
    >
      <Check className="text-green-500 w-4 h-4" />
      <span
        className="text-blue-900 text-sm step-text"
        id={`step-text-${i}`}
      >
        {workflows[currentWorkflow].steps[i]}
      </span>
    </div>
  ))}
</div>
          </div>
        </div>

        {/* RIGHT SIDE (unchanged) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-5 h-full flex flex-col justify-center"
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

          <div className="grid gap-4">
            <div className="p-4 rounded-2xl bg-white border border-blue-100 shadow-lg">
              <span className="inline-block mb-2 text-xs uppercase tracking-widest bg-blue-50 text-blue-600 px-3 rounded-full border border-blue-200">
                Event
              </span>
              <h3 className="text-lg font-semibold text-blue-900 mb-1">
                HTTP / Webhook Trigger
              </h3>
              <p className="text-blue-800 text-sm">
                Detects incoming HTTP requests or webhook calls from external systems.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-blue-100 shadow-lg">
              <span className="inline-block mb-2 text-xs uppercase tracking-widest bg-blue-50 text-blue-600 px-3 py-1 rounded-full border border-blue-200">
                Triggers
              </span>
              <h3 className="text-lg font-semibold text-blue-900 mb-1">
                Salesforce / HubSpot Sync
              </h3>
              <p className="text-blue-800 text-sm">
                Automatically creates or updates customer data in Salesforce and HubSpot CRM.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-blue-100 shadow-lg">
              <span className="inline-block mb-2 text-xs uppercase tracking-widest bg-blue-50 text-blue-600 px-3 py-1 rounded-full border border-blue-200">
                Notifications & Monitoring
              </span>
              <h3 className="text-lg font-semibold text-blue-900 mb-1">
                AWS SNS / SQS / Azure Service Bus / Timer
              </h3>
              <p className="text-blue-800 text-sm">
                Sends alerts, queues messages, triggers follow-up workflows automatically, and monitors workflow health in real-time.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Agents;