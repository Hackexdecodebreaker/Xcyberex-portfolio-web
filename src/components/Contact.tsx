import { motion } from "motion/react";
import { Mail, Github, Linkedin, Twitter, Send } from "lucide-react";
import { useState } from "react";
import { MessageSuccess } from "./MessageSuccess";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // EmailJS Configuration (Replace with your actual EmailJS credentials)
    // Sign up at https://www.emailjs.com/ to get your credentials
    const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID"; // Replace with your EmailJS Service ID
    const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID"; // Replace with your EmailJS Template ID
    const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY"; // Replace with your EmailJS Public Key

    try {
      // Using EmailJS to send emails
      // Install: npm install @emailjs/browser
      // Import: import emailjs from '@emailjs/browser';
      
      // emailjs.send(
      //   EMAILJS_SERVICE_ID,
      //   EMAILJS_TEMPLATE_ID,
      //   {
      //     from_name: formData.name,
      //     from_email: formData.email,
      //     message: formData.message,
      //     to_email: "fkoomson625@gmail.com",
      //     subject: "Xcyberex Portfolio request"
      //   },
      //   EMAILJS_PUBLIC_KEY
      // );

      // Simulate email sending (remove this when using real EmailJS)
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Show success message
      setShowSuccess(true);
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        message: ""
      });
    } catch (error) {
      console.error("Failed to send message:", error);
      alert("Failed to send message. Please try again or email directly at fkoomson625@gmail.com");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseSuccess = () => {
    setShowSuccess(false);
  };

  return (
    <>
      {showSuccess && <MessageSuccess onClose={handleCloseSuccess} />}
      
      <section id="contact" className="py-20 px-6 bg-[#0a0a0f] relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#00d4ff] to-[#b829ff] rounded-full opacity-5 blur-[120px]"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-4 bg-gradient-to-r from-[#00d4ff] to-[#b829ff] bg-clip-text text-transparent inline-block" style={{ fontSize: "3rem", fontWeight: "700" }}>
              Get In Touch
            </h2>
            <div className="h-1 w-24 mx-auto bg-gradient-to-r from-[#00d4ff] to-[#b829ff]"></div>
            <p className="mt-6 text-[#a0a0b0]" style={{ fontSize: "1.125rem" }}>
              Have a project in mind or want to discuss security solutions? Let's connect.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-[#f0f0f5]" style={{ fontWeight: "500" }}>
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-[#12121a] border border-[#1f1f2e] rounded-lg text-[#f0f0f5] focus:border-[#00d4ff] focus:outline-none focus:ring-2 focus:ring-[#00d4ff] focus:ring-opacity-50 transition-all"
                    placeholder="Your name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-2 text-[#f0f0f5]" style={{ fontWeight: "500" }}>
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-[#12121a] border border-[#1f1f2e] rounded-lg text-[#f0f0f5] focus:border-[#00d4ff] focus:outline-none focus:ring-2 focus:ring-[#00d4ff] focus:ring-opacity-50 transition-all"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-2 text-[#f0f0f5]" style={{ fontWeight: "500" }}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 bg-[#12121a] border border-[#1f1f2e] rounded-lg text-[#f0f0f5] focus:border-[#00d4ff] focus:outline-none focus:ring-2 focus:ring-[#00d4ff] focus:ring-opacity-50 transition-all resize-none"
                    placeholder="Your message..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-[#00d4ff] to-[#b829ff] hover:from-[#00e5ff] hover:to-[#c935ff] transition-all duration-300 rounded-lg flex items-center justify-center gap-2 group"
                  style={{ fontWeight: "600" }}
                >
                  Send Message
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="mb-6 text-[#00d4ff]" style={{ fontSize: "1.5rem", fontWeight: "600" }}>
                  Connect With Me
                </h3>
                
                <div className="space-y-4">
                  <a
                    href="mailto:fkoomson625@gmail.com"
                    className="flex items-center gap-4 p-4 bg-[#12121a] border border-[#1f1f2e] rounded-lg hover:border-[#00d4ff] hover:bg-[#0f0f1a] transition-all group"
                  >
                    <div className="p-3 bg-[#0a0a0f] rounded-lg border border-[#00d4ff] group-hover:shadow-[0_0_20px_rgba(0,212,255,0.5)] transition-all">
                      <Mail className="w-5 h-5 text-[#00d4ff]" />
                    </div>
                    <div>
                      <p className="text-[#a0a0b0]" style={{ fontSize: "0.875rem" }}>Email</p>
                      <p className="text-[#f0f0f5]">fkoomson625@gmail.com</p>
                    </div>
                  </a>
                </div>
              </div>

              <div>
                <h4 className="mb-4 text-[#f0f0f5]" style={{ fontWeight: "600" }}>
                  Social Media
                </h4>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/Hackexdecodebreaker"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-[#12121a] border border-[#1f1f2e] rounded-lg hover:border-[#00d4ff] hover:bg-[#0f0f1a] transition-all group"
                  >
                    <Github className="w-6 h-6 text-[#a0a0b0] group-hover:text-[#00d4ff] transition-colors" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/felix-koomson-43745024a"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-[#12121a] border border-[#1f1f2e] rounded-lg hover:border-[#00d4ff] hover:bg-[#0f0f1a] transition-all group"
                  >
                    <Linkedin className="w-6 h-6 text-[#a0a0b0] group-hover:text-[#00d4ff] transition-colors" />
                  </a>
                  <a
                    href="#"
                    className="p-4 bg-[#12121a] border border-[#1f1f2e] rounded-lg hover:border-[#b829ff] hover:bg-[#0f0f1a] transition-all group"
                  >
                    <Twitter className="w-6 h-6 text-[#a0a0b0] group-hover:text-[#b829ff] transition-colors" />
                  </a>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-br from-[#12121a] to-[#0f0f1a] border border-[#1f1f2e] rounded-lg">
                <p className="text-[#a0a0b0]" style={{ fontSize: "0.875rem", lineHeight: "1.75" }}>
                  "Security is not a product, but a process. Let's work together to build secure, robust solutions for your digital infrastructure."
                </p>
                <p className="mt-4 text-[#00d4ff]" style={{ fontWeight: "600" }}>
                  - Felix Koomson
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 pt-8 border-t border-[#1f1f2e] text-center"
        >
          <p className="text-[#a0a0b0]">
            © 2025 Xcyberex. All rights reserved.
          </p>
        </motion.div>
      </section>
    </>
  );
}