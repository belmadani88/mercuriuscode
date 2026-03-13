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
    <div className="flex flex-col items-center justify-center gap-2">
      <button
        onClick={onRun}
        aria-label="Run an example workflow"
        className={`group relative inline-flex items-center justify-center gap-2 rounded-xl border-2 font-semibold transition-all duration-300 active:scale-95
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background
          ${isMobile ? 'w-full px-4 py-3 text-sm' : 'px-6 py-3 text-sm'}
          ${isRunning && isManual
            ? 'border-primary bg-primary text-primary-foreground shadow-lg shadow-primary/30'
            : 'border-primary/70 bg-primary text-primary-foreground shadow-md shadow-primary/20 hover:brightness-110'
          }`}
      >
        <Play size={isMobile ? 14 : 16} className="fill-current" />
        {isRunning && isManual
          ? `Running: ${currentWorkflow.title}`
          : 'Run Example Workflow'}
      </button>
      <p className={`${isMobile ? 'text-[11px]' : 'text-xs'} text-muted-foreground`}>
        Click to trigger a real workflow demo
      </p>
    </div>
  );
};

export default WorkflowControls;
