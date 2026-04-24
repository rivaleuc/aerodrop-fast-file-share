import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowDownUp, Settings, Wallet, ChevronDown, Zap, TrendingUp, Droplets, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Token {
  symbol: string;
  name: string;
  balance: number;
  price: number;
  icon: string;
  color: string;
}

const TOKENS: Token[] = [
  { symbol: "ETH", name: "Ethereum", balance: 2.4521, price: 3420.5, icon: "Ξ", color: "from-blue-400 to-purple-500" },
  { symbol: "AERO", name: "AeroDrop", balance: 15420, price: 0.42, icon: "A", color: "from-cyan-400 to-teal-500" },
  { symbol: "USDC", name: "USD Coin", balance: 8430.12, price: 1.0, icon: "$", color: "from-blue-500 to-blue-600" },
  { symbol: "WBTC", name: "Wrapped BTC", balance: 0.1234, price: 67890.0, icon: "₿", color: "from-orange-400 to-yellow-500" },
  { symbol: "SOL", name: "Solana", balance: 45.67, price: 142.3, icon: "S", color: "from-purple-400 to-pink-500" },
];

const TokenIcon = ({ token }: { token: Token }) => (
  <div className={`h-8 w-8 rounded-full bg-gradient-to-br ${token.color} flex items-center justify-center text-white font-bold text-sm shrink-0`}>
    {token.icon}
  </div>
);

const TokenSelector = ({
  token,
  onSelect,
  open,
  setOpen,
}: {
  token: Token;
  onSelect: (t: Token) => void;
  open: boolean;
  setOpen: (v: boolean) => void;
}) => (
  <div className="relative">
    <button
      onClick={() => setOpen(!open)}
      className="flex items-center gap-2 bg-secondary/80 hover:bg-secondary rounded-full px-3 py-2 transition-all border border-border/50"
    >
      <TokenIcon token={token} />
      <span className="font-semibold text-foreground">{token.symbol}</span>
      <ChevronDown className="h-4 w-4 text-muted-foreground" />
    </button>
    {open && (
      <div className="absolute right-0 top-full mt-2 w-64 glass-card p-2 z-20 shadow-2xl">
        {TOKENS.map((t) => (
          <button
            key={t.symbol}
            onClick={() => {
              onSelect(t);
              setOpen(false);
            }}
            className="w-full flex items-center gap-3 p-2 rounded-lg hover:bg-secondary/60 transition-colors"
          >
            <TokenIcon token={t} />
            <div className="text-left flex-1">
              <div className="text-sm font-semibold text-foreground">{t.symbol}</div>
              <div className="text-xs text-muted-foreground">{t.name}</div>
            </div>
            <div className="text-xs text-muted-foreground">{t.balance.toFixed(2)}</div>
          </button>
        ))}
      </div>
    )}
  </div>
);

const Dex = () => {
  const [fromToken, setFromToken] = useState<Token>(TOKENS[0]);
  const [toToken, setToToken] = useState<Token>(TOKENS[1]);
  const [fromAmount, setFromAmount] = useState("");
  const [openFrom, setOpenFrom] = useState(false);
  const [openTo, setOpenTo] = useState(false);

  const rate = fromToken.price / toToken.price;
  const toAmount = fromAmount ? (parseFloat(fromAmount) * rate).toFixed(6) : "";
  const usdValue = fromAmount ? (parseFloat(fromAmount) * fromToken.price).toFixed(2) : "0.00";

  const handleSwap = () => {
    setFromToken(toToken);
    setToToken(fromToken);
    setFromAmount(toAmount);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Background glow */}
      <div className="fixed inset-0 hero-gradient pointer-events-none" />

      <main className="relative pt-32 pb-24">
        <div className="container max-w-6xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card mb-4">
              <Activity className="h-3.5 w-3.5 text-primary" />
              <span className="text-xs font-mono text-muted-foreground">DECENTRALIZED EXCHANGE</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">
              Swap <span className="gradient-text">Tokens</span> Instantly
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              Trade any token at the best rates with zero slippage and lightning execution.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Swap Widget */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-2"
            >
              <div className="glass-card glow-border p-6 md:p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex gap-1 p-1 bg-secondary/60 rounded-lg">
                    <button className="px-4 py-1.5 text-sm font-semibold bg-primary text-primary-foreground rounded-md">Swap</button>
                    <button className="px-4 py-1.5 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors">Limit</button>
                    <button className="px-4 py-1.5 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors">DCA</button>
                  </div>
                  <button className="p-2 hover:bg-secondary/60 rounded-lg transition-colors">
                    <Settings className="h-4 w-4 text-muted-foreground" />
                  </button>
                </div>

                {/* From */}
                <div className="bg-secondary/40 rounded-2xl p-4 border border-border/30">
                  <div className="flex justify-between text-xs text-muted-foreground mb-2">
                    <span>From</span>
                    <span>Balance: {fromToken.balance.toFixed(4)} {fromToken.symbol}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Input
                      type="number"
                      placeholder="0.0"
                      value={fromAmount}
                      onChange={(e) => setFromAmount(e.target.value)}
                      className="bg-transparent border-0 text-3xl font-bold p-0 h-auto focus-visible:ring-0 placeholder:text-muted-foreground/40"
                    />
                    <TokenSelector token={fromToken} onSelect={setFromToken} open={openFrom} setOpen={setOpenFrom} />
                  </div>
                  <div className="flex justify-between mt-2">
                    <span className="text-xs text-muted-foreground">≈ ${usdValue}</span>
                    <div className="flex gap-1">
                      <button onClick={() => setFromAmount((fromToken.balance / 2).toString())} className="text-xs px-2 py-0.5 rounded bg-primary/10 text-primary hover:bg-primary/20 transition-colors">50%</button>
                      <button onClick={() => setFromAmount(fromToken.balance.toString())} className="text-xs px-2 py-0.5 rounded bg-primary/10 text-primary hover:bg-primary/20 transition-colors">MAX</button>
                    </div>
                  </div>
                </div>

                {/* Swap Button */}
                <div className="flex justify-center -my-2 relative z-10">
                  <button
                    onClick={handleSwap}
                    className="h-10 w-10 rounded-xl bg-card border-4 border-background hover:bg-primary hover:text-primary-foreground transition-all hover:rotate-180 duration-300 flex items-center justify-center"
                  >
                    <ArrowDownUp className="h-4 w-4" />
                  </button>
                </div>

                {/* To */}
                <div className="bg-secondary/40 rounded-2xl p-4 border border-border/30">
                  <div className="flex justify-between text-xs text-muted-foreground mb-2">
                    <span>To</span>
                    <span>Balance: {toToken.balance.toFixed(4)} {toToken.symbol}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Input
                      type="number"
                      placeholder="0.0"
                      value={toAmount}
                      readOnly
                      className="bg-transparent border-0 text-3xl font-bold p-0 h-auto focus-visible:ring-0 placeholder:text-muted-foreground/40"
                    />
                    <TokenSelector token={toToken} onSelect={setToToken} open={openTo} setOpen={setOpenTo} />
                  </div>
                  <div className="text-xs text-muted-foreground mt-2">
                    ≈ ${toAmount ? (parseFloat(toAmount) * toToken.price).toFixed(2) : "0.00"}
                  </div>
                </div>

                {/* Rate Info */}
                <div className="mt-4 p-3 bg-secondary/30 rounded-xl space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Rate</span>
                    <span className="text-foreground font-mono">1 {fromToken.symbol} = {rate.toFixed(6)} {toToken.symbol}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Network Fee</span>
                    <span className="text-foreground font-mono">~$0.0001</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Slippage</span>
                    <span className="text-primary font-mono">0.1%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Route</span>
                    <span className="text-foreground font-mono">{fromToken.symbol} → {toToken.symbol}</span>
                  </div>
                </div>

                <Button size="lg" className="w-full mt-4 bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_30px_hsl(var(--primary)/0.3)] gap-2 h-14 text-base">
                  <Wallet className="h-4 w-4" />
                  Connect Wallet to Swap
                </Button>
              </div>
            </motion.div>

            {/* Side Panel */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              {/* Stats */}
              <div className="glass-card p-6">
                <h3 className="text-sm font-semibold text-muted-foreground mb-4 flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-primary" />
                  Market Stats (24h)
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-baseline">
                    <span className="text-xs text-muted-foreground">Volume</span>
                    <span className="text-lg font-bold text-foreground font-mono">$2.4B</span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="text-xs text-muted-foreground">TVL</span>
                    <span className="text-lg font-bold text-foreground font-mono">$840M</span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="text-xs text-muted-foreground">Trades</span>
                    <span className="text-lg font-bold text-foreground font-mono">142,891</span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="text-xs text-muted-foreground">Active Pools</span>
                    <span className="text-lg font-bold text-primary font-mono">1,247</span>
                  </div>
                </div>
              </div>

              {/* Top Pools */}
              <div className="glass-card p-6">
                <h3 className="text-sm font-semibold text-muted-foreground mb-4 flex items-center gap-2">
                  <Droplets className="h-4 w-4 text-primary" />
                  Top Pools
                </h3>
                <div className="space-y-3">
                  {[
                    { pair: "ETH/USDC", apr: "12.4%", tvl: "$120M" },
                    { pair: "AERO/ETH", apr: "48.7%", tvl: "$24M" },
                    { pair: "WBTC/USDC", apr: "8.2%", tvl: "$89M" },
                    { pair: "SOL/USDC", apr: "22.1%", tvl: "$54M" },
                  ].map((p) => (
                    <div key={p.pair} className="flex items-center justify-between p-2 rounded-lg hover:bg-secondary/40 transition-colors cursor-pointer">
                      <div>
                        <div className="text-sm font-semibold text-foreground">{p.pair}</div>
                        <div className="text-xs text-muted-foreground">{p.tvl}</div>
                      </div>
                      <div className="text-sm font-mono text-primary">{p.apr}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Speed Card */}
              <div className="glass-card glow-border p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 h-24 w-24 bg-primary/10 rounded-full blur-2xl" />
                <Zap className="h-6 w-6 text-primary mb-2" />
                <h3 className="text-lg font-bold text-foreground mb-1">Lightning Fast</h3>
                <p className="text-xs text-muted-foreground">
                  Average swap execution in under 200ms across 12 chains.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dex;
