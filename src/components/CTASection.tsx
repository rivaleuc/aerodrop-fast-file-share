import { motion } from "framer-motion";
import { Upload } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-32 relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative glass-card glow-border p-12 md:p-20 text-center overflow-hidden"
        >
          {/* Background glow */}
          <div className="absolute inset-0 hero-gradient opacity-80" />

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Ready to <span className="gradient-text">Drop Files</span>?
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto mb-8 text-lg">
              Join thousands already using the fastest decentralized file transfer on the planet.
            </p>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_40px_hsl(var(--primary)/0.3)] gap-2 text-base px-10">
              <Upload className="h-4 w-4" />
              Launch AeroDrop
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
