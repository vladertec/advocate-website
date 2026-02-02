"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, XCircle, X } from "lucide-react";
import { useEffect } from "react";

export type ToastType = "success" | "error" | "info";

interface ToastProps {
  message: string;
  type: ToastType;
  isVisible: boolean;
  onClose: () => void;
  duration?: number;
}

export default function Toast({
  message,
  type,
  isVisible,
  onClose,
  duration = 4000,
}: ToastProps) {
  useEffect(() => {
    if (isVisible && duration > 0) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  const icons = {
    success: <CheckCircle size={20} className="text-green-400" />,
    error: <XCircle size={20} className="text-red-400" />,
    info: <CheckCircle size={20} className="text-blue-400" />,
  };

  const bgColors = {
    success: "bg-green-500/10 border-green-500/30",
    error: "bg-red-500/10 border-red-500/30",
    info: "bg-blue-500/10 border-blue-500/30",
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50, x: "-50%" }}
          animate={{ opacity: 1, y: 0, x: "-50%" }}
          exit={{ opacity: 0, y: -20, x: "-50%" }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed top-20 left-1/2 z-50 transform -translate-x-1/2"
        >
          <div
            className={`flex items-center space-x-3 px-6 py-4 rounded-lg border backdrop-blur-sm shadow-lg ${bgColors[type]} min-w-[300px] max-w-[500px]`}
          >
            {icons[type]}
            <p className="text-white flex-1 text-sm font-medium">{message}</p>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Закрити"
            >
              <X size={18} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

