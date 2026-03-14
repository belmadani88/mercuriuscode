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
    <div className="flex flex-col items-center gap-1.5">
      <button
        onClick={onRun}
        aria-label="Run an example workflow"
        className={`group relative inline-flex items-center justify-center gap-2 rounded-xl border-2 font-semibold transition-all duration-300 active:scale-95
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background
          ${isMobile ? 'w-full px-4 py-3.5 text-sm' : 'px-8 py-3.5 text-sm'}
          ${isRunning && isManual
            ? 'border-accent/70 bg-accent text-accent-foreground shadow-lg'
            : 'border-accent/60 bg-accent text-accent-foreground shadow-md hover:brightness-110 hover:scale-[1.02]'
          }`}
        style={{
          boxShadow: isRunning && isManual
            ? '0 4px 24px -4px hsl(47 97% 54% / 0.5)'
            : '0 4px 16px -4px hsl(47 97% 54% / 0.35)',
        }}
      >
        <Play size={isMobile ? 14 : 16} className="fill-current" />
        {isRunning && isManual
          ? `Running: ${currentWorkflow.title}`
          : '▶ Run Example Workflow'}
      </button>
      <p className={`${isMobile ? 'text-[10px]' : 'text-xs'} text-muted-foreground`}>
        Click to see an AI workflow in action
      </p>
    </div>
  );
};

export default WorkflowControls;
