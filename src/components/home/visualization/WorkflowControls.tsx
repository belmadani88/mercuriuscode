import { useIsMobile } from '@/hooks/use-mobile';
import { Play } from 'lucide-react';
import type { Workflow, Phase } from '../HeroVisualization';

interface Props {
  onRun: () => void;
  isManual: boolean;
  currentWorkflow: Workflow;
  phase: Phase;
}

const WorkflowControls = ({ onRun, isManual, currentWorkflow, phase }: Props) => {
  const isMobile = useIsMobile();
  const isRunning = phase !== 'idle' && phase !== 'complete';

  return (
    <div className="flex items-center justify-center">
      <button
        onClick={onRun}
        aria-label="Run an example workflow"
        className={`group flex items-center gap-2 font-semibold transition-all
          bg-card/60 backdrop-blur-sm border rounded-full
          hover:border-primary/40 hover:bg-primary/5 active:scale-95
          ${isRunning && isManual
            ? 'border-primary/40 text-primary'
            : 'border-border/40 text-muted-foreground hover:text-foreground'
          }
          ${isMobile ? 'text-[9px] px-3 py-1.5' : 'text-[11px] px-4 py-2'}`}
      >
        <Play
          size={isMobile ? 10 : 12}
          className={`fill-current transition-colors ${isRunning && isManual ? 'text-primary' : 'group-hover:text-primary'}`}
        />
        {isRunning && isManual
          ? `Running: ${currentWorkflow.title}...`
          : 'Run Example Workflow'}
      </button>
    </div>
  );
};

export default WorkflowControls;
