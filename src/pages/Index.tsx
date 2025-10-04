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
    { duration: "7 Days", data: "12GB", price: "99" },
    { duration: "15 Days", data: "25GB", price: "150" },
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
        <div className="container relative mx-auto px-4 py-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="mb-3 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Starnet{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Kenya
              </span>
            </h1>
            <p className="mx-auto mb-5 max-w-xl text-lg text-muted-foreground md:text-xl">
              Affordable Internet Packages
            </p>
            <p className="text-base font-medium text-primary">
              Available on all networks
            </p>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-8 flex flex-wrap justify-center gap-4"
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

      {/* 👇 Carousel Section (reduced height) */}
      <div className="max-w-3xl mx-auto px-4">
        <Carousel />
      </div>

      {/* Packages Section */}
      <main className="container mx-auto px-4 py-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 gap-4" // 👈 always 1 column
        >
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -4,
                transition: { duration: 0.3 },
              }}
              className="group relative"
            >
              <div
                className={`relative h-40 overflow-hidden rounded-lg bg-card p-6 shadow-md transition-all duration-300 hover:shadow-lg flex flex-col justify-between ${
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

                <div>
                  <h3 className="text-lg font-bold text-card-foreground">
                    {pkg.duration}
                  </h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-extrabold text-primary">
                      {pkg.price}
                    </span>
                    <span className="text-xs text-muted-foreground">Ksh</span>
                  </div>
                  <div className="mt-1 inline-block rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 px-3 py-0.5">
                    <span className="text-sm font-semibold text-foreground">
                      {pkg.data}
                    </span>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedPackage(pkg)}
                  className={`mt-2 w-full rounded-md py-2 font-semibold transition-all duration-300 text-sm ${
                    pkg.featured
                      ? "bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow hover:shadow-md"
                      : "bg-primary text-primary-foreground hover:bg-primary/90"
                  }`}
                >
                  Get Started
                </motion.button>
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
      <footer className="border-t border-border bg-card/50 py-5">
        <div className="container mx-auto px-4 text-center space-y-2">
          <p className="text-xs text-muted-foreground">
            © 2025 Starnet Kenya. All rights reserved.
          </p>
          <a
            href="mailto:starnethelp01@gmail.com?subject=Internet%20Package%20Inquiry&body=Hi%20Starnet%20Kenya%2C%0AI%20would%20like%20to%20know%20more%20about%20your%20packages."
            className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-md shadow hover:bg-primary/90 transition text-xs"
          >
            Contact Us
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Index;