import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Mail, Lock } from "lucide-react";

export default function SignIn() {
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
            Sign in to your account
          </h1>
          <p className="text-sm text-gray-500 mt-2">
            Welcome back. Please enter your details.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5">

          {/* Email */}
          <div>
            <label className="text-sm text-gray-600 mb-2 block">
              Email
            </label>

            <div className="relative">
              <Mail className="absolute left-3 top-3.5 w-4 h-4 text-gray-400" />

              <input
                type="email"
                placeholder="you@company.com"
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="text-sm text-gray-600 mb-2 block">
              Password
            </label>

            <div className="relative">
              <Lock className="absolute left-3 top-3.5 w-4 h-4 text-gray-400" />

              <input
                type="password"
                placeholder="••••••••"
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Remember + Forgot */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-600">
              <input type="checkbox" className="rounded border-gray-300" />
              Remember me
            </label>

            <a href="#" className="text-blue-600 hover:text-blue-700">
              Forgot password?
            </a>
          </div>

          {/* Button */}
          <Button
            className="w-full py-6 text-base font-semibold rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-lg transition-all"
          >
            Sign In
          </Button>

        </form>

        {/* Sign up */}
        <p className="text-sm text-gray-500 text-center mt-6">
          Don't have an account?{" "}
          <a
            href="#"
            className="text-blue-600 font-medium hover:text-blue-700"
          >
            Contact Us
          </a>
        </p>
      </motion.div>

    </div>
  );
}