import { motion } from "framer-motion";

export default function FramerButton() {
  return (
    <motion.button
      whileHover={{ scale: 1.05, backgroundColor: "#1d4ed8" }}
      whileTap={{ scale: 0.95 }}
      className="px-6 py-3 bg-blue-600 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
    >
      Claude Design Button
    </motion.button>
  );
}
