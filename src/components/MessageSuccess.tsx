import { motion } from "motion/react";
import { CheckCircle, Home, Mail } from "lucide-react";
import { useEffect, useState } from "react";

interface MessageSuccessProps {
  onClose: () => void;
}

export function MessageSuccess({ onClose }: MessageSuccessProps) {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number }>>([]);

  useEffect(() => {
    // Generate random particles
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-[#0a0a0f] bg-opacity-95 backdrop-blur-sm z-50 flex items-center justify-center p-6"
    >
      {/* Animated background particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-[#00d4ff] rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            scale: [0, 1.5, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: particle.id * 0.1,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Rotating rings */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <div className="w-[400px] h-[400px] border border-[#00d4ff] opacity-20 rounded-full"></div>
      </motion.div>

      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      >
        <div className="w-[300px] h-[300px] border border-[#b829ff] opacity-20 rounded-full"></div>
      </motion.div>

      {/* Success content */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ 
          type: "spring",
          stiffness: 200,
          damping: 20,
          delay: 0.2 
        }}
        className="relative z-10 bg-gradient-to-br from-[#12121a] to-[#0f0f1a] border-2 border-[#00d4ff] rounded-2xl p-12 max-w-md w-full text-center"
        style={{
          boxShadow: "0 0 50px rgba(0, 212, 255, 0.3)",
        }}
      >
        {/* Success icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ 
            type: "spring",
            stiffness: 300,
            damping: 15,
            delay: 0.5 
          }}
          className="flex justify-center mb-6"
        >
          <div className="relative">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 bg-[#00d4ff] rounded-full blur-xl"
            ></motion.div>
            <CheckCircle className="w-20 h-20 text-[#00d4ff] relative" strokeWidth={2} />
          </div>
        </motion.div>

        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <h2 className="mb-4 bg-gradient-to-r from-[#00d4ff] to-[#b829ff] bg-clip-text text-transparent" style={{ fontSize: "2rem", fontWeight: "700" }}>
            Message Sent Successfully!
          </h2>
          <p className="text-[#a0a0b0] mb-8" style={{ fontSize: "1.125rem" }}>
            Thank you for reaching out. I'll get back to you as soon as possible.
          </p>

          {/* Email confirmation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex items-center justify-center gap-2 mb-8 text-[#00d4ff]"
          >
            <Mail className="w-5 h-5" />
            <span style={{ fontSize: "0.875rem" }}>Email sent to fkoomson625@gmail.com</span>
          </motion.div>

          {/* Action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex gap-4 justify-center"
          >
            <button
              onClick={onClose}
              className="px-6 py-3 bg-gradient-to-r from-[#00d4ff] to-[#0099cc] hover:from-[#00e5ff] hover:to-[#00aadd] transition-all duration-300 rounded-lg flex items-center gap-2"
              style={{ fontWeight: "600" }}
            >
              <Home className="w-4 h-4" />
              Back to Home
            </button>
          </motion.div>
        </motion.div>

        {/* Decorative corners */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#b829ff] rounded-tl-lg"></div>
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#b829ff] rounded-tr-lg"></div>
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#b829ff] rounded-bl-lg"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#b829ff] rounded-br-lg"></div>
      </motion.div>
    </motion.div>
  );
}
