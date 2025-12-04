import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Shield, Code, Terminal } from "lucide-react";
import profileImage from "figma:asset/144ee71cb7f486e0ad14f065e6df83f116207179.png";

export function About() {
  return (
    <section id="about" className="py-20 px-6 bg-[#12121a] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#b829ff] rounded-full opacity-10 blur-[120px]"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 bg-gradient-to-r from-[#00d4ff] to-[#b829ff] bg-clip-text text-transparent inline-block" style={{ fontSize: "3rem", fontWeight: "700" }}>
            About Me
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-[#00d4ff] to-[#b829ff]"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Neon border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#00d4ff] to-[#b829ff] rounded-2xl opacity-50 blur-xl"></div>
              <div className="absolute inset-2 bg-[#0a0a0f] rounded-2xl"></div>
              <ImageWithFallback
                src={profileImage}
                alt="Profile"
                className="relative rounded-2xl w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-[#00d4ff]" style={{ fontSize: "1.875rem", fontWeight: "600" }}>
              Hi, I'm Felix Koomson
            </h3>
            <p className="text-[#a0a0b0]" style={{ fontSize: "1.125rem", lineHeight: "1.75" }}>
              With expertise in cybersecurity and software development, I specialize in building secure, scalable systems and identifying vulnerabilities before they become threats. I also develop robust Windows applications using Python for various enterprise solutions.
            </p>
            <p className="text-[#a0a0b0]" style={{ fontSize: "1.125rem", lineHeight: "1.75" }}>
              My skill set spans from full-stack development to penetration testing, with a focus on creating robust security solutions that protect critical infrastructure and sensitive data.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center p-4 bg-[#0a0a0f] rounded-lg border border-[#00d4ff] border-opacity-30 hover:border-opacity-100 transition-all">
                <Shield className="w-8 h-8 text-[#00d4ff] mx-auto mb-2" />
                <p className="text-[#a0a0b0]">Security</p>
              </div>
              <div className="text-center p-4 bg-[#0a0a0f] rounded-lg border border-[#b829ff] border-opacity-30 hover:border-opacity-100 transition-all">
                <Code className="w-8 h-8 text-[#b829ff] mx-auto mb-2" />
                <p className="text-[#a0a0b0]">Development</p>
              </div>
              <div className="text-center p-4 bg-[#0a0a0f] rounded-lg border border-[#00d4ff] border-opacity-30 hover:border-opacity-100 transition-all">
                <Terminal className="w-8 h-8 text-[#00d4ff] mx-auto mb-2" />
                <p className="text-[#a0a0b0]">Automation</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
