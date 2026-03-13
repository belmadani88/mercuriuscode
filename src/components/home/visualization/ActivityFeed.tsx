import { motion, AnimatePresence } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';
import type { Workflow, Phase } from '../HeroVisualization';

interface Props {
  workflow: Workflow;
  visibleSteps: number;
  phase: Phase;
}

const ActivityFeed = ({ workflow, visibleSteps, phase }: Props) => {
  const isMobile = useIsMobile();

  if (phase === 'idle') return null;

  const stepsToShow = workflow.steps.slice(0, visibleSteps);

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-xl border border-border/40 bg-card/60 backdrop-blur-sm overflow-hidden"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-3 py-1.5 border-b border-border/30">
        <div className="flex items-center gap-2">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-400" />
          </span>
          <span className={`font-semibold text-foreground ${isMobile ? 'text-[9px]' : 'text-[11px]'}`}>
            Activity Log
          </span>
        </div>
        <span className={`text-muted-foreground ${isMobile ? 'text-[8px]' : 'text-[10px]'}`}>
          {workflow.title}
        </span>
      </div>

      {/* Log entries */}
      <div className={`${isMobile ? 'px-2 py-1.5' : 'px-3 py-2'} space-y-1`}>
        <AnimatePresence mode="popLayout">
          {stepsToShow.map((step, i) => (
            <motion.div
              key={`${workflow.id}-${i}`}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="flex items-start gap-2"
            >
              <span className={`font-mono text-muted-foreground shrink-0 ${isMobile ? 'text-[7px]' : 'text-[9px]'}`}>
                {step.time}
              </span>
              <span className={`${isMobile ? 'text-[8px]' : 'text-[10px]'} ${
                step.text.includes('✅') ? 'text-primary font-medium' :
                step.text.includes('...') ? 'text-accent font-medium' :
                'text-foreground'
              }`}>
                {step.text}
              </span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default ActivityFeed;
