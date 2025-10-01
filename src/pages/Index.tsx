import { motion } from "framer-motion";
import { Wifi, Zap, Shield } from "lucide-react";
import { useState } from "react";
import { PaymentModal } from "@/components/PaymentModal";
import Carousel from "@/components/Carousel"; // 👈 import carousel

const Index = () => {
  const [selectedPackage, setSelectedPackage] = useState<{
    duration: string;
    data: string;
    price: string;
  } | null>(null);

  const packages = [
    { duration: "1 Day", data: "7GB", price: "79" },
    { duration: "7 Days", data: "12GB", price: "89" },
    { duration: "5 Days", data: "10GB", price: "99" },
    { duration: "14 Days", data: "25GB", price: "130" },
    { duration: "21 Days", data: "45GB", price: "225" },
    { duration: "30 Days", data: "Unlimited", price: "299", featured: true },
  ];

  const features = [
    { icon: Wifi, text: "Available on all networks" },
    { icon: Zap, text: "Instant activation" },
    { icon: Shield, text: "Secure & reliable" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/10">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 opacity-50" />
        <div className="container relative mx-auto px-4 py-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="mb-4 text-5xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl">
              Starnet{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Kenya
              </span>
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-xl text-muted-foreground md:text-2xl">
              Affordable Internet Packages
            </p>
            <p className="text-lg font-medium text-primary">
              Available on all networks
            </p>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-12 flex flex-wrap justify-center gap-8"
          >
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2 text-foreground">
                <feature.icon className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">{feature.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </header>

      {/* 👇 Carousel Section */}
      <Carousel />

      {/* Packages Section */}
      <main className="container mx-auto px-4 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 },
              }}
              className="group relative"
            >
              <div
                className={`relative h-full overflow-hidden rounded-2xl bg-card p-8 shadow-lg transition-all duration-300 hover:shadow-2xl ${
                  pkg.featured
                    ? "border-2 border-primary bg-gradient-to-br from-card to-primary/5"
                    : "border border-border"
                }`}
              >
                {pkg.featured && (
                  <div className="absolute right-4 top-4 rounded-full bg-gradient-to-r from-primary to-secondary px-3 py-1 text-xs font-bold text-primary-foreground">
                    POPULAR
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="mb-2 text-2xl font-bold text-card-foreground">
                    {pkg.duration}
                  </h3>
                  <div className="mb-4 flex items-baseline gap-1">
                    <span className="text-5xl font-extrabold text-primary">
                      {pkg.price}
                    </span>
                    <span className="text-xl text-muted-foreground">Ksh</span>
                  </div>
                  <div className="inline-block rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 px-4 py-2">
                    <span className="text-xl font-bold text-foreground">
                      {pkg.data}
                    </span>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedPackage(pkg)}
                  className={`w-full rounded-xl py-3 font-semibold transition-all duration-300 ${
                    pkg.featured
                      ? "bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-lg hover:shadow-xl"
                      : "bg-primary text-primary-foreground hover:bg-primary/90"
                  }`}
                >
                  Get Started
                </motion.button>

                {/* Hover glow effect */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(circle at center, hsl(var(--primary) / 0.1) 0%, transparent 70%)",
                    pointerEvents: "none",
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </main>

      {/* Payment Modal */}
      <PaymentModal
        package={selectedPackage}
        onClose={() => setSelectedPackage(null)}
      />

      {/* Footer */}
      <footer className="border-t border-border bg-card/50 py-8">
        <div className="container mx-auto px-4 text-center space-y-4">
          <p className="text-sm text-muted-foreground">
            © 2025 Starnet Kenya. All rights reserved.
          </p>
          <a
            href="mailto:starntkenya@gmail.com?subject=Internet%20Package%20Inquiry&body=Hi%20Starnet%20Kenya%2C%0AI%20would%20like%20to%20know%20more%20about%20your%20packages."
            className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-xl shadow hover:bg-primary/90 transition"
          >
            Contact Us
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Index;
