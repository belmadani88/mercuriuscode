import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';

const TaskCounter = () => {
  const isMobile = useIsMobile();
  const [count, setCount] = useState(18432);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(c => c + Math.floor(Math.random() * 3) + 1);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      className="flex items-center justify-center gap-3"
    >
      <div className="flex items-center gap-2 rounded-full border border-border/40 bg-card/50 backdrop-blur-sm px-3 py-1">
        <span className="relative flex h-1.5 w-1.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-400" />
        </span>
        <span className={`font-medium text-muted-foreground ${isMobile ? 'text-[8px]' : 'text-[10px]'}`}>
          Tasks completed today:
        </span>
        <span className={`font-bold text-foreground tabular-nums ${isMobile ? 'text-[10px]' : 'text-xs'}`}
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {count.toLocaleString()}
        </span>
      </div>
    </motion.div>
  );
};

export default TaskCounter;
