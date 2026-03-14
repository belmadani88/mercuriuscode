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

  const stepsToShow = phase === 'idle' ? [] : workflow.steps.slice(0, visibleSteps);
  const isEmpty = stepsToShow.length === 0;

  return (
    <div className="rounded-xl border border-border/40 bg-card/60 backdrop-blur-sm overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-3 py-1.5 border-b border-border/30">
        <div className="flex items-center gap-2">
          <span className="relative flex h-1.5 w-1.5">
            <span className={`absolute inline-flex h-full w-full rounded-full ${isEmpty ? 'bg-muted-foreground' : 'bg-green-400 animate-ping'} opacity-75`} />
            <span className={`relative inline-flex rounded-full h-1.5 w-1.5 ${isEmpty ? 'bg-muted-foreground' : 'bg-green-400'}`} />
          </span>
          <span className={`font-semibold text-foreground ${isMobile ? 'text-[9px]' : 'text-[11px]'}`}>
            Activity Log
          </span>
        </div>
        <span className={`text-muted-foreground ${isMobile ? 'text-[8px]' : 'text-[10px]'}`}>
          {isEmpty ? 'Waiting for task...' : workflow.title}
        </span>
      </div>

      {/* Log entries — fixed height area */}
      <div className={`${isMobile ? 'px-2 py-1.5' : 'px-3 py-2'} space-y-1`}>
        {isEmpty ? (
          <div className={`flex items-center justify-center py-4 text-muted-foreground/50 ${isMobile ? 'text-[9px]' : 'text-[11px]'}`}>
            Click "Run Example Workflow" to see activity
          </div>
        ) : (
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
        )}
      </div>
    </div>
  );
};

export default ActivityFeed;
