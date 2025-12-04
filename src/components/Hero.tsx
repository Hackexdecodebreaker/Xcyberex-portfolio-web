import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0a0a0f] via-[#0f0f1a] to-[#12121a]">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,212,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_80%)]"></div>
      
      {/* 3D Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-[#00d4ff] rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Floating code-like elements */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`code-${i}`}
          className="absolute text-[#00d4ff] opacity-10 font-mono"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            fontSize: `${12 + Math.random() * 8}px`,
          }}
          animate={{
            y: [0, -100, -200],
            opacity: [0, 0.3, 0],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "linear",
          }}
        >
          {['</>','{}','[]','()','0x','::'][Math.floor(Math.random() * 6)]}
        </motion.div>
      ))}
      
      {/* 3D Rotating rings */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <div className="w-[600px] h-[600px] border border-[#00d4ff] opacity-10 rounded-full"></div>
      </motion.div>
      
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        <div className="w-[800px] h-[400px] border border-[#b829ff] opacity-10 rounded-full"></div>
      </motion.div>
      
      {/* Glowing orbs */}
      <motion.div
        className="absolute top-20 left-1/4 w-64 h-64 bg-[#00d4ff] rounded-full opacity-20 blur-[100px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-1/4 w-64 h-64 bg-[#b829ff] rounded-full opacity-20 blur-[100px]"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.25, 0.2],
          x: [0, -50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="mb-4">
            <span className="inline-block bg-gradient-to-r from-[#00d4ff] via-[#b829ff] to-[#00d4ff] bg-clip-text text-transparent" style={{ fontSize: "5rem", fontWeight: "800", letterSpacing: "0.05em" }}>
              XCYBEREX
            </span>
          </h1>
          <div className="h-1 w-64 mx-auto bg-gradient-to-r from-transparent via-[#00d4ff] to-transparent"></div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-12 text-[#a0a0b0] max-w-2xl mx-auto"
          style={{ fontSize: "1.25rem" }}
        >
          Elite Cybersecurity Specialist | Full-Stack Developer | Penetration Testing Expert
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <a
            href="https://github.com/Hackexdecodebreaker"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-gradient-to-r from-[#00d4ff] to-[#0099cc] hover:from-[#00e5ff] hover:to-[#00aadd] transition-all duration-300 relative group overflow-hidden rounded-lg"
          >
            <span className="relative z-10 flex items-center gap-2" style={{ fontWeight: "600" }}>
              View Projects
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#00e5ff] to-[#00aadd] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
          <a
            href="mailto:fkoomson625@gmail.com"
            className="px-8 py-4 border-2 border-[#b829ff] hover:bg-[#b829ff] hover:bg-opacity-10 transition-all duration-300 rounded-lg"
            style={{ fontWeight: "600" }}
          >
            Get in Touch
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-8 h-8 text-[#00d4ff]" />
        </motion.div>
      </div>
    </section>
  );
}