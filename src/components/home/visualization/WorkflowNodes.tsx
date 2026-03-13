import { motion, AnimatePresence } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';
import { NODES, type Workflow, type Phase, type NodeId } from '../HeroVisualization';

interface Props {
  activeSource: NodeId | null;
  activeTarget: NodeId | null;
  phase: Phase;
  workflow: Workflow;
  onNodeClick: (nodeId: string) => void;
}

const WorkflowNodes = ({ activeSource, activeTarget, phase, workflow, onNodeClick }: Props) => {
  const isMobile = useIsMobile();

  return (
    <>
      {NODES.map(n => {
        const isSource = activeSource === n.id;
        const isTarget = activeTarget === n.id;
        const isActive = isSource || isTarget;

        return (
          <div
            key={n.id}
            className="absolute -translate-x-1/2 -translate-y-1/2 z-10"
            style={{ left: `${n.x}%`, top: `${n.y}%` }}
          >
            <motion.button
              onClick={() => onNodeClick(n.id)}
              aria-label={`${n.label} — click to run a workflow`}
              className={`flex flex-col items-center gap-0.5 rounded-xl border backdrop-blur-sm transition-all duration-300 cursor-pointer
                ${isMobile ? 'px-2 py-1.5' : 'px-3.5 py-2'}
                ${isActive
                  ? 'border-primary/50 bg-primary/10'
                  : 'border-border/30 bg-card/60 hover:border-primary/25 hover:bg-card/80'
                }`}
              style={isActive ? { boxShadow: '0 0 18px -2px hsl(183,100%,27%,0.45)' } : undefined}
              animate={{ scale: isActive ? 1.12 : 1 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: isActive ? 1.12 : 1.05 }}
            >
              <span className={isMobile ? 'text-xs' : 'text-base'}>{n.emoji}</span>
              <span className={`font-medium leading-none
                ${isMobile ? 'text-[8px]' : 'text-[11px]'}
                ${isActive ? 'text-foreground' : 'text-muted-foreground'}`}
              >
                {n.label}
              </span>
            </motion.button>

            {/* Status badge on target */}
            <AnimatePresence>
              {isTarget && (phase === 'step3' || phase === 'complete') && (
                <motion.div
                  initial={{ opacity: 0, y: 0, scale: 0.8 }}
                  animate={{ opacity: 1, y: 6, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="absolute left-1/2 -translate-x-1/2 top-full mt-0.5 whitespace-nowrap z-20"
                >
                  <span className={`font-medium text-primary bg-primary/10 border border-primary/20 rounded-full px-2 py-0.5
                    ${isMobile ? 'text-[7px]' : 'text-[10px]'}`}
                  >
                    ✅ Done
                  </span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Tooltip: "Click to run" */}
            <AnimatePresence>
              {!isActive && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute left-1/2 -translate-x-1/2 bottom-full mb-1 whitespace-nowrap z-30 pointer-events-none"
                >
                  <span className={`bg-card border border-border/50 rounded px-1.5 py-0.5 text-muted-foreground
                    ${isMobile ? 'text-[6px]' : 'text-[8px]'}`}>
                    Click to run workflow
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </>
  );
};

export default WorkflowNodes;
