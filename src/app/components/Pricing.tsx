import React from "react";
import { motion } from "framer-motion";
import { Zap, Cloud, Activity, Layers3, Rocket, Briefcase, ShieldCheck } from "lucide-react";

interface Trigger {
  name: string;
  icon: React.ReactNode;
}

const triggers: Trigger[] = [
  { name: "Http Trigger", icon: <Zap className="w-8 h-8" /> },
  { name: "Webhook Trigger", icon: <Cloud className="w-8 h-8" /> },
  { name: "Hubspot Trigger", icon: <Activity className="w-8 h-8" /> },
  { name: "Salesforce Platform Event", icon: <Layers3 className="w-8 h-8" /> },
  { name: "AWS SNS Trigger", icon: <Rocket className="w-8 h-8" /> },
  { name: "AWS SQS Trigger", icon: <Briefcase className="w-8 h-8" /> },
  { name: "Azure Service Bus Trigger", icon: <ShieldCheck className="w-8 h-8" /> },
  { name: "Websocket Trigger", icon: <Zap className="w-8 h-8" /> },
  { name: "Timer Trigger", icon: <Rocket className="w-8 h-8" /> },
];

const Pricing: React.FC = () => {
  return (
    <div className="overflow-hidden w-full bg-gray-50 py-8">
      <motion.div
        className="flex gap-12"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        {[...triggers, ...triggers].map((trigger, idx) => (
          <div key={idx} className="flex flex-col items-center min-w-max">
            <div className="bg-white p-3 rounded-full shadow">{trigger.icon}</div>
            <span className="mt-2 text-sm text-gray-700 text-center">{trigger.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Pricing;