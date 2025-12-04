import { motion } from "motion/react";
import { Globe, Code2, Shield, Bot, Database, Search, Terminal, Workflow } from "lucide-react";

const skills = [
  { name: "Website Development", icon: Globe, level: 95, color: "blue" },
  { name: "Python Software Developer", icon: Code2, level: 98, color: "purple" },
  { name: "Cybersecurity Specialist", icon: Shield, level: 92, color: "blue" },
  { name: "Bot Systems Developer", icon: Bot, level: 90, color: "purple" },
  { name: "Database Developer", icon: Database, level: 88, color: "blue" },
  { name: "Web App Pentester", icon: Search, level: 94, color: "purple" },
  { name: "Shell Scripting", icon: Terminal, level: 91, color: "blue" },
  { name: "Systems Automation", icon: Workflow, level: 93, color: "purple" }
];

export function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-[#12121a] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#b829ff] rounded-full opacity-10 blur-[120px]"></div>
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#00d4ff] rounded-full opacity-10 blur-[120px]"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 bg-gradient-to-r from-[#00d4ff] to-[#b829ff] bg-clip-text text-transparent inline-block" style={{ fontSize: "3rem", fontWeight: "700" }}>
            Technical Expertise
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-[#00d4ff] to-[#b829ff]"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className={`p-3 rounded-lg bg-[#0a0a0f] border ${
                    skill.color === "blue"
                      ? "border-[#00d4ff] group-hover:shadow-[0_0_20px_rgba(0,212,255,0.5)]"
                      : "border-[#b829ff] group-hover:shadow-[0_0_20px_rgba(184,41,255,0.5)]"
                  } transition-all duration-300`}>
                    <Icon className={`w-6 h-6 ${
                      skill.color === "blue" ? "text-[#00d4ff]" : "text-[#b829ff]"
                    }`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-[#f0f0f5]" style={{ fontWeight: "600" }}>
                        {skill.name}
                      </h3>
                      <span className={`${
                        skill.color === "blue" ? "text-[#00d4ff]" : "text-[#b829ff]"
                      }`} style={{ fontSize: "0.875rem", fontWeight: "600" }}>
                        {skill.level}%
                      </span>
                    </div>
                    
                    {/* Progress bar */}
                    <div className="h-2 bg-[#1f1f2e] rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className={`h-full rounded-full ${
                          skill.color === "blue"
                            ? "bg-gradient-to-r from-[#00d4ff] to-[#0099cc]"
                            : "bg-gradient-to-r from-[#b829ff] to-[#8b1fcc]"
                        }`}
                        style={{
                          boxShadow: skill.color === "blue"
                            ? "0 0 10px rgba(0,212,255,0.5)"
                            : "0 0 10px rgba(184,41,255,0.5)"
                        }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
