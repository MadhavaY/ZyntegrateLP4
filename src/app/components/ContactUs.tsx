import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Mail, Phone, User } from "lucide-react";

export default function ContactUs() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-white rounded-2xl shadow-sm border border-gray-200 p-10"
      >
        {/* Title */}
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-semibold text-gray-900">
            Contact Us
          </h1>
          <p className="text-sm text-gray-500 mt-2">
            We'd love to hear from you. Fill in your details and we'll get back to you.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5">

          {/* Full Name */}
          <div>
            <label className="text-sm text-gray-600 mb-2 block">
              Full Name
            </label>
            <div className="relative">
              <User className="absolute left-3 top-3.5 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="John Doe"
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Phone Number */}
          <div>
            <label className="text-sm text-gray-600 mb-2 block">
              Phone Number
            </label>
            <div className="relative">
              <Phone className="absolute left-3 top-3.5 w-4 h-4 text-gray-400" />
              <input
                type="tel"
                placeholder="+1 234 567 890"
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Company Email */}
          <div>
            <label className="text-sm text-gray-600 mb-2 block">
              Company Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-3.5 w-4 h-4 text-gray-400" />
              <input
                type="email"
                placeholder="company@example.com"
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full py-6 text-base font-semibold rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-lg transition-all"
          >
            Submit
          </Button>
        </form>
      </motion.div>
    </div>
  );
}