
import { motion } from "framer-motion";

const SuccessStoryHeader = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-hads-pink via-white to-hads-purple mb-6">
        Our Success Story
      </h1>
      <p className="text-lg text-gray-300 max-w-3xl mx-auto">
        A journey through our milestones in providing top-tier cloud solutions, from cloud migration to cutting-edge cybersecurity.
      </p>
    </motion.div>
  );
};

export default SuccessStoryHeader;
