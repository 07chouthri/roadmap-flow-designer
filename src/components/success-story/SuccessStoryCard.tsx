import { motion } from "framer-motion";
import { TimelineStep } from "./types";

interface SuccessStoryCardProps {
  step: TimelineStep;
  index: number;
  animate: boolean;
}

const SuccessStoryCard = ({ step, index, animate }: SuccessStoryCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: animate ? 1 : 0, y: animate ? 0 : 30 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="group relative"
    >
      <div className="relative p-8 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500">
        <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-gradient-to-br from-hads-purple to-hads-pink text-white flex items-center justify-center text-xl font-bold transform transition-transform group-hover:scale-110 group-hover:rotate-12">
          {step.year}
        </div>

        <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-hads-pink transition-colors">
          {step.title}
        </h3>
        <p className="text-gray-300 group-hover:text-white transition-colors">
          {step.desc}
        </p>

        {step.logo && step.logo.length > 0 && (
          <div className="flex gap-4 mt-6">
            {step.logo.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt="Technology Logo"
                className="w-8 h-8 object-contain opacity-75 hover:opacity-100 transition-opacity"
              />
            ))}
          </div>
        )}

        <div className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-gradient-to-r from-hads-purple via-hads-pink to-hads-purple opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
    </motion.div>
  );
};

export default SuccessStoryCard;
