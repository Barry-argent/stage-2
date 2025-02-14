"use client";
import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-900">
      <div className="flex space-x-2">
        <motion.div
          className="w-5 h-5 bg-blue-500 rounded-full"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 0.6, ease: "easeInOut" }}
        />
        <motion.div
          className="w-5 h-5 bg-green-500 rounded-full"
          animate={{ y: [0, -10, 0] }}
          transition={{
            repeat: Infinity,
            duration: 0.6,
            ease: "easeInOut",
            delay: 0.2,
          }}
        />
        <motion.div
          className="w-5 h-5 bg-yellow-500 rounded-full"
          animate={{ y: [0, -10, 0] }}
          transition={{
            repeat: Infinity,
            duration: 0.6,
            ease: "easeInOut",
            delay: 0.4,
          }}
        />
      </div>
    </div>
  );
}
