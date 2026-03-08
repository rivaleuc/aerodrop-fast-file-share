import { motion } from "framer-motion";
import { Upload, Link2, Download, Coins } from "lucide-react";

const steps = [
  {
    icon: Upload,
    step: "01",
    title: "Upload Your File",
    description: "Drag & drop any file up to 10GB+. It's encrypted and distributed across the network instantly.",
  },
  {
    icon: Link2,
    step: "02",
    title: "Get a Share Link",
    description: "Receive a unique, shareable link. Optionally set a micro-payment gate for downloads.",
  },
  {
    icon: Coins,
    step: "03",
    title: "Recipient Pays Micro-Fee",
    description: "The recipient pays a fraction of a cent to unlock—eliminating spam and abuse.",
  },
  {
    icon: Download,
    step: "04",
    title: "Instant Download",
    description: "File is decrypted and delivered peer-to-peer at blazing speed. No waiting.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-32 relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono text-primary tracking-widest uppercase">How It Works</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 tracking-tight">
            Four Steps. <span className="gradient-text">Zero Friction.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative"
            >
              <div className="glass-card p-6 h-full relative overflow-hidden group hover:border-primary/30 transition-all duration-500">
                <span className="absolute top-4 right-4 text-5xl font-bold text-primary/5 font-mono group-hover:text-primary/10 transition-colors">
                  {step.step}
                </span>
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <step.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
