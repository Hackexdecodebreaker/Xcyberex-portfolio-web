import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface Trail {
  id: number;
  x: number;
  y: number;
  symbol: string;
}

export function MouseTrail() {
  const [trails, setTrails] = useState<Trail[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const codeSymbols = ['</>','{}','[]','()','0x1','::','&&','||','===','!==','fn','var','let','const'];

  useEffect(() => {
    let throttleTimeout: NodeJS.Timeout;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (throttleTimeout) return;
      
      throttleTimeout = setTimeout(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
        
        const newTrail: Trail = {
          id: Date.now() + Math.random(),
          x: e.clientX,
          y: e.clientY,
          symbol: codeSymbols[Math.floor(Math.random() * codeSymbols.length)]
        };
        
        setTrails((prev) => [...prev.slice(-15), newTrail]);
        throttleTimeout = null as any;
      }, 50);
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (throttleTimeout) clearTimeout(throttleTimeout);
    };
  }, []);

  useEffect(() => {
    if (trails.length > 0) {
      const timer = setTimeout(() => {
        setTrails((prev) => prev.slice(1));
      }, 800);
      
      return () => clearTimeout(timer);
    }
  }, [trails]);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      <AnimatePresence>
        {trails.map((trail) => (
          <motion.div
            key={trail.id}
            initial={{ opacity: 0.8, scale: 1 }}
            animate={{ 
              opacity: 0,
              scale: 0.5,
              y: trail.y - 50,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute text-[#00d4ff] font-mono pointer-events-none"
            style={{
              left: trail.x,
              top: trail.y,
              fontSize: '12px',
              textShadow: '0 0 10px rgba(0, 212, 255, 0.8)',
            }}
          >
            {trail.symbol}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
