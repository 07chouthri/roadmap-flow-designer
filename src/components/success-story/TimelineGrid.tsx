
import { TimelineStep } from "./types";
import SuccessStoryCard from "./SuccessStoryCard";

interface TimelineGridProps {
  steps: TimelineStep[];
  animate: boolean;
}

const TimelineGrid = ({ steps, animate }: TimelineGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
      {steps.map((step, i) => (
        <SuccessStoryCard
          key={i}
          step={step}
          index={i}
          animate={animate}
        />
      ))}
    </div>
  );
};

export default TimelineGrid;
