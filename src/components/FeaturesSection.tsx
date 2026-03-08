import { motion } from "framer-motion";
import { Shield, Zap, Globe, Coins, Lock, Layers } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Peer-to-peer transfer with no bottlenecks. Files move directly between nodes at maximum speed.",
  },
  {
    icon: Shield,
    title: "End-to-End Encrypted",
    description: "Military-grade encryption ensures only the intended recipient can access your files.",
  },
  {
    icon: Coins,
    title: "Micro-Gated Downloads",
    description: "Set micro-payments on downloads. Earn fractions of a cent per download—spam-free by design.",
  },
  {
    icon: Globe,
    title: "Fully Decentralized",
    description: "No central servers. Your files are distributed across a global network of nodes.",
  },
  {
    icon: Lock,
    title: "Zero-Knowledge",
    description: "We never see your files. Zero-knowledge architecture means total privacy.",
  },
  {
    icon: Layers,
    title: "No Size Limits",
    description: "Upload massive files—video assets, datasets, software builds. No arbitrary caps.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-32 relative">
      <div className="absolute inset-0 hero-gradient opacity-50" />
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono text-primary tracking-widest uppercase">Features</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 tracking-tight">
            Built for the <span className="gradient-text">Future</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            Everything you need for secure, fast, decentralized file sharing—powered by Web3.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card glow-border p-6 group hover:border-primary/30 transition-all duration-500"
            >
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
