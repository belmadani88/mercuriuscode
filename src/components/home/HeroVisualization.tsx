import { useState, useEffect, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';
import { Users, Headphones, Mail, BarChart3, CreditCard, Cpu, Play } from 'lucide-react';

/* ── Data ── */
const CENTER = { x: 50, y: 48 };

const NODES = [
  { id: 'crm',       label: 'CRM',       Icon: Users,      x: 50, y: 10 },
  { id: 'support',   label: 'Support',   Icon: Headphones, x: 83, y: 30 },
  { id: 'email',     label: 'Email',     Icon: Mail,       x: 73, y: 82 },
  { id: 'analytics', label: 'Analytics', Icon: BarChart3,  x: 27, y: 82 },
  { id: 'payments',  label: 'Payments',  Icon: CreditCard, x: 17, y: 30 },
] as const;

const WORKFLOWS = [
  { source: 'crm',       target: 'email',     task: 'Qualify inbound lead',      status: 'Follow-up sent' },
  { source: 'support',   target: 'analytics', task: 'Resolve support ticket',    status: 'Ticket categorized' },
  { source: 'payments',  target: 'crm',       task: 'Process invoice',           status: 'Invoice processed' },
  { source: 'analytics', target: 'email',     task: 'Generate analytics report', status: 'Report delivered' },
] as const;

type Phase = 'idle' | 'source' | 'to-center' | 'process' | 'to-target' | 'target';

const SOURCE_PHASES: Phase[] = ['source', 'to-center', 'process'];
const TARGET_PHASES: Phase[] = ['to-target', 'target'];

const getNode = (id: string) => NODES.find(n => n.id === id)!;

/* ── Component ── */
const HeroVisualization = () => {
  const isMobile = useIsMobile();
  const [wfIdx, setWfIdx] = useState(0);
  const [phase, setPhase] = useState<Phase>('idle');
  const [isManualRun, setIsManualRun] = useState(false);
  const [runSeed, setRunSeed] = useState({ index: 0, manual: false, nonce: 0 });

  /* Auto-cycle workflows — restarts whenever runSeed changes */
  useEffect(() => {
    let alive = true;
    const ids: ReturnType<typeof setTimeout>[] = [];
    const t = (fn: () => void, ms: number) => ids.push(setTimeout(() => alive && fn(), ms));

    const run = (i: number, manual: boolean) => {
      if (!alive) return;
      setWfIdx(i);
      setIsManualRun(manual);
      setPhase('source');
      t(() => setPhase('to-center'), 700);
      t(() => setPhase('process'), 1700);
      t(() => setPhase('to-target'), 2400);
      t(() => setPhase('target'), 3400);
      t(() => {
        setPhase('idle');
        if (manual) setIsManualRun(false);
        t(() => run((i + 1) % WORKFLOWS.length, false), 1000);
      }, 4800);
    };

    t(() => run(runSeed.index, runSeed.manual), runSeed.nonce === 0 ? 1500 : 120);
    return () => {
      alive = false;
      ids.forEach(clearTimeout);
    };
  }, [runSeed]);

  const triggerWorkflow = useCallback(() => {
    const nextWorkflow = (wfIdx + 1) % WORKFLOWS.length;

    setIsManualRun(true);
    setWfIdx(nextWorkflow);
    setPhase('source');
    setRunSeed(seed => ({ index: nextWorkflow, manual: true, nonce: seed.nonce + 1 }));
  }, [wfIdx]);

  const wf = WORKFLOWS[wfIdx];
  const src = getNode(wf.source);
  const tgt = getNode(wf.target);

  const particleTarget = useMemo((): { x: number; y: number } | null => {
    switch (phase) {
      case 'source': return { x: src.x, y: src.y };
      case 'to-center':
      case 'process':
        return CENTER;
      case 'to-target':
      case 'target':
        return { x: tgt.x, y: tgt.y };
      default:
        return null;
    }
  }, [phase, src, tgt]);

  const stepText = useMemo(() => {
    switch (phase) {
      case 'source':
        return `${src.label} event captured`;
      case 'to-center':
        return 'Routing task to AI Worker';
      case 'process':
        return 'AI Worker is executing the task';
      case 'to-target':
        return `Sending action to ${tgt.label}`;
      case 'target':
        return wf.status;
      default:
        return 'Monitoring systems for the next workflow';
    }
  }, [phase, src.label, tgt.label, wf.status]);

  const flowLabel = `${src.label} → AI Worker → ${tgt.label}`;

  return (
    <div className="relative w-full max-w-xl mx-auto" style={{ aspectRatio: '1' }}>
      {/* SVG: connection lines + ambient particles */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" fill="none">
        <defs>
          <filter id="line-glow">
            <feGaussianBlur stdDeviation="0.6" />
            <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        {NODES.map((n, i) => {
          const sourceLegActive = wf.source === n.id && SOURCE_PHASES.includes(phase);
          const targetLegActive = wf.target === n.id && TARGET_PHASES.includes(phase);
          const lineActive = sourceLegActive || targetLegActive;

          return (
            <g key={n.id}>
              {/* Connection line */}
              <line
                x1={n.x}
                y1={n.y}
                x2={CENTER.x}
                y2={CENTER.y}
                stroke={lineActive ? 'hsl(var(--primary))' : 'hsl(var(--muted-foreground))'}
                strokeWidth={lineActive ? '0.45' : '0.25'}
                strokeOpacity={lineActive ? '0.65' : '0.2'}
                filter="url(#line-glow)"
              />
              {/* Path for particle motion */}
              <path id={`mp-${n.id}`} d={`M${n.x},${n.y} L${CENTER.x},${CENTER.y}`} />

            {/* Forward ambient particle */}
            <circle r="0.6" fill="hsl(183,100%,50%)">
              <animateMotion
                dur={`${3 + i * 0.5}s`} repeatCount="indefinite"
                begin={`${i * 0.7}s`}
              >
                <mpath href={`#mp-${n.id}`} />
              </animateMotion>
              <animate
                attributeName="opacity" values="0;0.5;0.5;0"
                keyTimes="0;0.08;0.88;1"
                dur={`${3 + i * 0.5}s`} repeatCount="indefinite"
                begin={`${i * 0.7}s`}
              />
            </circle>

            {/* Reverse ambient particle */}
            <circle r="0.4" fill="hsl(183,100%,40%)">
              <animateMotion
                dur={`${4 + i * 0.3}s`} repeatCount="indefinite"
                begin={`${i + 2}s`}
                keyPoints="1;0" keyTimes="0;1" calcMode="linear"
              >
                <mpath href={`#mp-${n.id}`} />
              </animateMotion>
              <animate
                attributeName="opacity" values="0;0.3;0.3;0"
                keyTimes="0;0.08;0.88;1"
                dur={`${4 + i * 0.3}s`} repeatCount="indefinite"
                begin={`${i + 2}s`}
              />
            </circle>
          </g>
          );
        })}
      </svg>

      {/* Outer system nodes */}
      {NODES.map(n => {
        const isActive =
          (phase === 'source' && wf.source === n.id) ||
          (phase === 'target' && wf.target === n.id);

        return (
          <div
            key={n.id}
            className="absolute -translate-x-1/2 -translate-y-1/2 z-10"
            style={{ left: `${n.x}%`, top: `${n.y}%` }}
          >
            <motion.div
              className={`flex flex-col items-center gap-0.5 rounded-xl border backdrop-blur-sm transition-all duration-300
                ${isMobile ? 'px-2 py-1.5' : 'px-3 py-2'}
                ${isActive
                  ? 'border-primary/50 bg-primary/10'
                  : 'border-border/30 bg-card/50'
                }`}
              style={isActive ? { boxShadow: '0 0 16px -2px hsl(183,100%,27%,0.4)' } : undefined}
              animate={{ scale: isActive ? 1.1 : 1 }}
              transition={{ duration: 0.3 }}
            >
              <n.Icon
                size={isMobile ? 12 : 16}
                className={isActive ? 'text-primary' : 'text-muted-foreground'}
              />
              <span className={`font-medium leading-none
                ${isMobile ? 'text-[8px]' : 'text-[11px]'}
                ${isActive ? 'text-foreground' : 'text-muted-foreground'}`}
              >
                {n.label}
              </span>
            </motion.div>

            {/* Status label on target activation */}
            <AnimatePresence>
              {isActive && phase === 'target' && (
                <motion.div
                  initial={{ opacity: 0, y: 0 }}
                  animate={{ opacity: 1, y: 6 }}
                  exit={{ opacity: 0 }}
                  className="absolute left-1/2 -translate-x-1/2 top-full mt-0.5 whitespace-nowrap z-20"
                >
                  <span className={`font-medium text-primary bg-primary/10 border border-primary/20 rounded-full px-2 py-0.5
                    ${isMobile ? 'text-[7px]' : 'text-[10px]'}`}
                  >
                    ✓ {wf.status}
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}

      {/* Center: AI Worker hub */}
      <div className="absolute left-1/2 top-[48%] -translate-x-1/2 -translate-y-1/2 z-10">
        <motion.div
          className={`relative flex flex-col items-center gap-1 rounded-2xl border-2 backdrop-blur-sm transition-all duration-300
            ${isMobile ? 'px-3 py-2' : 'px-5 py-3'}
            ${phase === 'process'
              ? 'border-primary bg-primary/15'
              : 'border-primary/30 bg-card/70'
            }`}
          style={{
            boxShadow: phase === 'process'
              ? '0 0 30px -4px hsl(183,100%,27%,0.5)'
              : '0 0 16px -4px hsl(183,100%,27%,0.2)',
          }}
          animate={phase === 'process' ? { scale: [1, 1.08, 1] } : { scale: 1 }}
          transition={{ duration: 0.5, repeat: phase === 'process' ? 1 : 0 }}
        >
          {/* Pulse ring */}
          <div className="absolute -inset-2 rounded-2xl border border-primary/10 animate-pulse pointer-events-none" />
          <Cpu size={isMobile ? 16 : 22} className="text-primary" />
          <span className={`font-semibold text-foreground whitespace-nowrap
            ${isMobile ? 'text-[9px]' : 'text-xs'}`}
          >
            AI Worker
          </span>
        </motion.div>

        {/* Active task label */}
        <AnimatePresence>
          {phase !== 'idle' && (
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 4 }}
              className="absolute left-1/2 -translate-x-1/2 top-full mt-2 whitespace-nowrap"
            >
              <div className="rounded-lg border border-border/60 bg-card/85 px-2.5 py-1 backdrop-blur-sm">
                <p className={`font-medium text-foreground ${isMobile ? 'text-[8px]' : 'text-[10px]'}`}>
                  {wf.task}
                </p>
                <p className={`text-muted-foreground ${isMobile ? 'text-[7px]' : 'text-[9px]'}`}>
                  {stepText}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Workflow particle */}
      {particleTarget && phase !== 'idle' && (
        <motion.div
          key={`wp-${wfIdx}`}
          className="absolute w-2 h-2 md:w-2.5 md:h-2.5 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20"
          style={{
            background: 'hsl(47,97%,54%)',
            boxShadow: '0 0 10px 2px hsl(47,97%,54%,0.5)',
          }}
          initial={{ left: `${src.x}%`, top: `${src.y}%`, opacity: 0, scale: 0 }}
          animate={{
            left: `${particleTarget.x}%`,
            top: `${particleTarget.y}%`,
            opacity: phase === 'target' ? 0 : 0.9,
            scale: phase === 'target' ? 0 : 1,
          }}
          transition={{ duration: phase === 'source' ? 0.3 : 0.85, ease: 'easeInOut' }}
        />
      )}

      {/* Run workflow button */}
      <div className="absolute bottom-1 left-1/2 -translate-x-1/2 z-20">
        <div className="flex flex-col items-center gap-1.5">
          <button
            onClick={triggerWorkflow}
            aria-label="Run an example workflow animation"
            className={`flex items-center gap-1.5 font-medium text-muted-foreground hover:text-foreground
              transition-colors bg-card/50 backdrop-blur-sm border border-border/30 rounded-full
              px-2.5 py-1 hover:border-primary/25
              ${isMobile ? 'text-[8px]' : 'text-[10px]'}`}
          >
            <Play size={8} className={`fill-current ${isManualRun ? 'text-primary' : ''}`} />
            {isManualRun ? 'Running workflow...' : 'Run example workflow'}
          </button>

          <span
            aria-live="polite"
            className={`rounded-full border border-border/50 bg-card/70 px-2 py-0.5 text-muted-foreground
              ${isMobile ? 'text-[7px]' : 'text-[9px]'}`}
          >
            {isManualRun ? `Manual demo: ${flowLabel}` : `Live demo: ${flowLabel}`}
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeroVisualization;
