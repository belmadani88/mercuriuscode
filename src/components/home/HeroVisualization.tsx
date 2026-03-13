import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';
import ActivityFeed from './visualization/ActivityFeed';
import WorkflowNodes from './visualization/WorkflowNodes';
import TaskCounter from './visualization/TaskCounter';
import WorkflowControls from './visualization/WorkflowControls';

/* ── Data ── */
export const CENTER = { x: 50, y: 44 };

export const NODES = [
  { id: 'crm',       label: 'CRM',       emoji: '👤', x: 50, y: 6 },
  { id: 'support',   label: 'Support',   emoji: '🎧', x: 86, y: 28 },
  { id: 'email',     label: 'Email',     emoji: '✉️', x: 76, y: 72 },
  { id: 'analytics', label: 'Analytics', emoji: '📊', x: 24, y: 72 },
  { id: 'payments',  label: 'Payments',  emoji: '💳', x: 14, y: 28 },
] as const;

export type NodeId = typeof NODES[number]['id'];

export interface WorkflowStep {
  time: string;
  text: string;
  status?: 'pending' | 'processing' | 'done';
}

export interface Workflow {
  id: string;
  source: NodeId;
  target: NodeId;
  title: string;
  steps: WorkflowStep[];
}

export const WORKFLOWS: Workflow[] = [
  {
    id: 'lead',
    source: 'crm',
    target: 'email',
    title: 'Qualify Inbound Lead',
    steps: [
      { time: '09:14:00', text: 'New lead added to CRM', status: 'done' },
      { time: '09:14:02', text: 'AI Worker analyzing lead...', status: 'processing' },
      { time: '09:14:04', text: 'Lead qualified — scheduling demo', status: 'done' },
      { time: '09:14:06', text: 'Email sent to lead ✅', status: 'done' },
    ],
  },
  {
    id: 'ticket',
    source: 'support',
    target: 'analytics',
    title: 'Resolve Support Ticket',
    steps: [
      { time: '09:15:10', text: 'Support ticket received (urgent)', status: 'done' },
      { time: '09:15:12', text: 'AI Worker retrieving FAQ...', status: 'processing' },
      { time: '09:15:15', text: 'Answer generated — ticket resolved', status: 'done' },
      { time: '09:15:17', text: 'Ticket logged to Analytics ✅', status: 'done' },
    ],
  },
  {
    id: 'invoice',
    source: 'payments',
    target: 'crm',
    title: 'Process Invoice',
    steps: [
      { time: '09:16:00', text: 'Invoice generated from order', status: 'done' },
      { time: '09:16:02', text: 'AI Worker processing payment...', status: 'processing' },
      { time: '09:16:05', text: 'Payment confirmed — updating CRM', status: 'done' },
      { time: '09:16:07', text: 'Record synced to CRM ✅', status: 'done' },
    ],
  },
  {
    id: 'report',
    source: 'analytics',
    target: 'email',
    title: 'Share Analytics Report',
    steps: [
      { time: '09:17:00', text: 'Weekly report generated', status: 'done' },
      { time: '09:17:02', text: 'AI Worker summarizing insights...', status: 'processing' },
      { time: '09:17:05', text: 'Newsletter drafted with key metrics', status: 'done' },
      { time: '09:17:07', text: 'Report emailed to stakeholders ✅', status: 'done' },
    ],
  },
];

export type Phase = 'idle' | 'step0' | 'step1' | 'step2' | 'step3' | 'complete';

export const getNode = (id: string) => NODES.find(n => n.id === id)!;

/* ── Main Component ── */
const HeroVisualization = () => {
  const isMobile = useIsMobile();
  const [wfIdx, setWfIdx] = useState(0);
  const [phase, setPhase] = useState<Phase>('idle');
  const [visibleSteps, setVisibleSteps] = useState(0);
  const [isManual, setIsManual] = useState(false);
  const aliveRef = useRef(true);
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  const clearTimers = useCallback(() => {
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
  }, []);

  const runWorkflow = useCallback((idx: number, manual: boolean) => {
    clearTimers();
    setWfIdx(idx);
    setIsManual(manual);
    setVisibleSteps(0);
    setPhase('idle');

    const t = (fn: () => void, ms: number) => {
      timersRef.current.push(setTimeout(fn, ms));
    };

    // Step 0: source lights up, first log entry
    t(() => { setPhase('step0'); setVisibleSteps(1); }, 200);
    // Step 1: particle to center, AI processing
    t(() => { setPhase('step1'); setVisibleSteps(2); }, 1200);
    // Step 2: AI done, particle to target
    t(() => { setPhase('step2'); setVisibleSteps(3); }, 2400);
    // Step 3: target lights up, final log
    t(() => { setPhase('step3'); setVisibleSteps(4); }, 3600);
    // Complete
    t(() => { setPhase('complete'); }, 4800);
    // Auto-advance to next
    t(() => {
      if (aliveRef.current) {
        setIsManual(false);
        runWorkflow((idx + 1) % WORKFLOWS.length, false);
      }
    }, 7000);
  }, [clearTimers]);

  // Start auto-cycle on mount
  useEffect(() => {
    aliveRef.current = true;
    const startTimer = setTimeout(() => runWorkflow(0, false), 1500);
    return () => {
      aliveRef.current = false;
      clearTimeout(startTimer);
      clearTimers();
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const triggerWorkflow = useCallback((idx?: number) => {
    const nextIdx = idx !== undefined ? idx : (wfIdx + 1) % WORKFLOWS.length;
    runWorkflow(nextIdx, true);
  }, [wfIdx, runWorkflow]);

  // Find workflow by node click
  const handleNodeClick = useCallback((nodeId: string) => {
    const idx = WORKFLOWS.findIndex(w => w.source === nodeId);
    if (idx !== -1) {
      triggerWorkflow(idx);
    }
  }, [triggerWorkflow]);

  const wf = WORKFLOWS[wfIdx];
  const src = getNode(wf.source);
  const tgt = getNode(wf.target);

  // Particle position
  const particlePos = (() => {
    switch (phase) {
      case 'step0': return { x: src.x, y: src.y };
      case 'step1': return CENTER;
      case 'step2': return CENTER;
      case 'step3': return { x: tgt.x, y: tgt.y };
      default: return null;
    }
  })();

  return (
    <div className="relative w-full max-w-xl mx-auto flex flex-col gap-3">
      {/* Task counter */}
      <TaskCounter />

      {/* Main visualization */}
      <div className="relative w-full" style={{ aspectRatio: isMobile ? '1' : '1.05' }}>
        {/* SVG lines + ambient particles */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" fill="none">
          <defs>
            <filter id="line-glow">
              <feGaussianBlur stdDeviation="0.5" />
              <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>

          {NODES.map((n, i) => {
            const isSourceActive = wf.source === n.id && ['step0', 'step1'].includes(phase);
            const isTargetActive = wf.target === n.id && ['step2', 'step3', 'complete'].includes(phase);
            const lineActive = isSourceActive || isTargetActive;

            return (
              <g key={n.id}>
                <line
                  x1={n.x} y1={n.y} x2={CENTER.x} y2={CENTER.y}
                  stroke={lineActive ? 'hsl(var(--primary))' : 'hsl(var(--muted-foreground))'}
                  strokeWidth={lineActive ? '0.45' : '0.2'}
                  strokeOpacity={lineActive ? '0.7' : '0.15'}
                  filter="url(#line-glow)"
                />
                <path id={`mp-${n.id}`} d={`M${n.x},${n.y} L${CENTER.x},${CENTER.y}`} />
                {/* Ambient particle */}
                <circle r="0.5" fill="hsl(183,100%,50%)">
                  <animateMotion dur={`${3.5 + i * 0.4}s`} repeatCount="indefinite" begin={`${i * 0.6}s`}>
                    <mpath href={`#mp-${n.id}`} />
                  </animateMotion>
                  <animate attributeName="opacity" values="0;0.35;0.35;0" keyTimes="0;0.1;0.85;1"
                    dur={`${3.5 + i * 0.4}s`} repeatCount="indefinite" begin={`${i * 0.6}s`} />
                </circle>
              </g>
            );
          })}
        </svg>

        {/* System nodes */}
        <WorkflowNodes
          activeSource={['step0', 'step1'].includes(phase) ? wf.source : null}
          activeTarget={['step2', 'step3', 'complete'].includes(phase) ? wf.target : null}
          phase={phase}
          workflow={wf}
          onNodeClick={handleNodeClick}
        />

        {/* Central AI Worker */}
        <div className="absolute left-1/2 -translate-x-1/2 z-10" style={{ top: `${CENTER.y}%`, transform: 'translate(-50%, -50%)' }}>
          <motion.div
            className={`relative flex flex-col items-center gap-1 rounded-2xl border-2 backdrop-blur-sm transition-all duration-300
              ${isMobile ? 'px-3 py-2' : 'px-5 py-3'}
              ${phase === 'step1' || phase === 'step2'
                ? 'border-primary bg-primary/15'
                : 'border-primary/30 bg-card/70'
              }`}
            style={{
              boxShadow: phase === 'step1' || phase === 'step2'
                ? '0 0 30px -4px hsl(183,100%,27%,0.55)'
                : '0 0 12px -4px hsl(183,100%,27%,0.15)',
            }}
            animate={phase === 'step1' ? { scale: [1, 1.08, 1] } : { scale: 1 }}
            transition={{ duration: 0.6, repeat: phase === 'step1' ? 1 : 0 }}
          >
            <div className="absolute -inset-2 rounded-2xl border border-primary/10 animate-pulse pointer-events-none" />
            <span className={`${isMobile ? 'text-base' : 'text-xl'}`}>🤖</span>
            <span className={`font-semibold text-foreground whitespace-nowrap ${isMobile ? 'text-[9px]' : 'text-xs'}`}>
              AI Worker
            </span>
          </motion.div>

          {/* Current task label */}
          <AnimatePresence>
            {phase !== 'idle' && phase !== 'complete' && (
              <motion.div
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 4 }}
                className="absolute left-1/2 -translate-x-1/2 top-full mt-2 whitespace-nowrap"
              >
                <div className="rounded-lg border border-border/60 bg-card/90 px-2.5 py-1.5 backdrop-blur-sm">
                  <p className={`font-semibold text-foreground ${isMobile ? 'text-[8px]' : 'text-[10px]'}`}>
                    {wf.title}
                  </p>
                  <p className={`text-primary ${isMobile ? 'text-[7px]' : 'text-[9px]'}`}>
                    {phase === 'step0' && 'Event captured'}
                    {phase === 'step1' && 'Processing...'}
                    {phase === 'step2' && 'Executing action'}
                    {phase === 'step3' && 'Delivering result'}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Workflow particle */}
        {particlePos && phase !== 'idle' && phase !== 'complete' && (
          <motion.div
            key={`particle-${wfIdx}-${phase}`}
            className="absolute w-2.5 h-2.5 md:w-3 md:h-3 rounded-full pointer-events-none z-20"
            style={{
              background: 'hsl(var(--accent))',
              boxShadow: '0 0 12px 3px hsl(47,97%,54%,0.5)',
              transform: 'translate(-50%, -50%)',
            }}
            initial={{
              left: phase === 'step0' ? `${src.x}%` : phase === 'step3' ? `${CENTER.x}%` : `${src.x}%`,
              top: phase === 'step0' ? `${src.y}%` : phase === 'step3' ? `${CENTER.y}%` : `${src.y}%`,
              opacity: 0,
              scale: 0,
            }}
            animate={{
              left: `${particlePos.x}%`,
              top: `${particlePos.y}%`,
              opacity: 0.95,
              scale: 1,
            }}
            transition={{ duration: phase === 'step0' ? 0.3 : 0.9, ease: 'easeInOut' }}
          />
        )}
      </div>

      {/* Bottom panel: activity feed + controls */}
      <div className="flex flex-col gap-2">
        <ActivityFeed workflow={wf} visibleSteps={visibleSteps} phase={phase} />
        <WorkflowControls
          onRun={() => triggerWorkflow()}
          isManual={isManual}
          currentWorkflow={wf}
          phase={phase}
        />
      </div>
    </div>
  );
};

export default HeroVisualization;
