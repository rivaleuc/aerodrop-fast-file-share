import { motion } from "framer-motion";
import { Upload, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroVisual from "@/assets/hero-visual.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 hero-gradient" />
      
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
              <span className="text-xs font-mono text-primary tracking-wide">WEB3 FILE TRANSFER</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6">
              Send Files at
              <br />
              <span className="gradient-text">Light Speed</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-md mb-8 leading-relaxed">
              Decentralized, micro-gated file sharing. Upload massive files, share via link, 
              earn micro-payments. No centralized servers. No limits.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_30px_hsl(var(--primary)/0.3)] gap-2 text-base px-8">
                <Upload className="h-4 w-4" />
                Start Uploading
              </Button>
              <Button size="lg" variant="outline" className="border-border/50 text-foreground hover:bg-secondary gap-2 text-base">
                Learn More
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-12 pt-8 border-t border-border/30">
              {[
                { value: "10GB+", label: "Max File Size" },
                { value: "<0.01¢", label: "Per Download" },
                { value: "150ms", label: "Avg Latency" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-primary font-mono">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-2xl overflow-hidden glow-border">
              <img
                src={heroVisual}
                alt="Decentralized file transfer visualization"
                className="w-full rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>

            {/* Floating card */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-8 glass-card glow-border p-4"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Zap className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">Transfer Complete</div>
                  <div className="text-xs text-muted-foreground font-mono">4.2GB in 12s</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Need this import for the floating card
import { Zap } from "lucide-react";

export default HeroSection;
