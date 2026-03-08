import { Zap } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/30 py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-primary" />
            <span className="text-lg font-bold text-foreground">
              Aero<span className="text-primary">Drop</span>
            </span>
          </div>

          <div className="flex gap-8">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Docs</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">GitHub</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Twitter</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Discord</a>
          </div>

          <p className="text-xs text-muted-foreground">
            © 2026 AeroDrop. Decentralized by design.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
