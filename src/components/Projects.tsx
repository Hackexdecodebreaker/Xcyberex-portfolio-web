import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Network Security Framework",
    description: "Advanced penetration testing toolkit for enterprise-level network security audits.",
    image: "https://images.unsplash.com/photo-1691435828932-911a7801adfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwbmV0d29ya3xlbnwxfHx8fDE3NjQ3Njg0MzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Python", "Security", "Pentesting"],
    color: "blue"
  },
  {
    title: "Automated Bot System",
    description: "Intelligent automation platform for complex workflows and data processing.",
    image: "https://images.unsplash.com/photo-1593377202145-c5e97fd065f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdCUyMGN5YmVyc3BhY2UlMjBkaWdpdGFsfGVufDF8fHx8MTc2NDg3MTI0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Python", "Automation", "AI"],
    color: "purple"
  },
  {
    title: "Web Application Scanner",
    description: "Comprehensive vulnerability scanner for modern web applications and APIs.",
    image: "https://images.unsplash.com/photo-1548092372-0d1bd40894a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwc2VjdXJpdHl8ZW58MXx8fHwxNzY0NzU5NzIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Security", "Web", "Testing"],
    color: "blue"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-[#0a0a0f] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00d4ff] rounded-full opacity-10 blur-[120px]"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 bg-gradient-to-r from-[#00d4ff] to-[#b829ff] bg-clip-text text-transparent inline-block" style={{ fontSize: "3rem", fontWeight: "700" }}>
            Featured Projects
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-[#00d4ff] to-[#b829ff]"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-[#12121a] rounded-xl overflow-hidden border border-[#1f1f2e] hover:border-[#00d4ff] transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12121a] via-transparent to-transparent opacity-60"></div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#00d4ff] via-transparent to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="mb-2 text-[#f0f0f5] group-hover:text-[#00d4ff] transition-colors" style={{ fontSize: "1.25rem", fontWeight: "600" }}>
                  {project.title}
                </h3>
                <p className="text-[#a0a0b0] mb-4" style={{ fontSize: "0.875rem" }}>
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`px-3 py-1 rounded-full border ${
                        project.color === "blue"
                          ? "border-[#00d4ff] text-[#00d4ff]"
                          : "border-[#b829ff] text-[#b829ff]"
                      }`}
                      style={{ fontSize: "0.75rem" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="flex items-center gap-2 text-[#00d4ff] hover:text-[#00e5ff] transition-colors">
                    <ExternalLink className="w-4 h-4" />
                    <span style={{ fontSize: "0.875rem" }}>View</span>
                  </button>
                  <button className="flex items-center gap-2 text-[#a0a0b0] hover:text-[#f0f0f5] transition-colors">
                    <Github className="w-4 h-4" />
                    <span style={{ fontSize: "0.875rem" }}>Code</span>
                  </button>
                </div>
              </div>

              {/* Glow effect on hover */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${
                project.color === "blue"
                  ? "shadow-[0_0_30px_rgba(0,212,255,0.3)]"
                  : "shadow-[0_0_30px_rgba(184,41,255,0.3)]"
              }`}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}