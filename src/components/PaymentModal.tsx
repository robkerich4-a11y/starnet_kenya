import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { Copy, CheckCircle2 } from "lucide-react";
import { useState } from "react";

interface Package {
  duration: string;
  data: string;
  price: string;
}

interface PaymentModalProps {
  package: Package | null;
  onClose: () => void;
}

export const PaymentModal = ({ package: pkg, onClose }: PaymentModalProps) => {
  const [copied, setCopied] = useState(false);
  const tillNumber = "6925336";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(tillNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!pkg) return null;

  return (
    <Dialog open={!!pkg} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">M-Pesa Payment Instructions</DialogTitle>
        </DialogHeader>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          {/* Selected Package Info */}
          <div className="rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10 p-4 text-center">
            <p className="text-sm text-muted-foreground mb-1">You have selected:</p>
            <p className="text-xl font-bold text-foreground">
              {pkg.duration} – {pkg.data}
            </p>
            <p className="text-2xl font-extrabold text-primary mt-2">
              Ksh {pkg.price}
            </p>
          </div>

          {/* Payment Steps */}
          <div className="space-y-3">
            <p className="font-semibold text-foreground mb-3">Please follow these steps:</p>
            <ol className="space-y-2 text-sm text-muted-foreground">
              <li className="flex gap-2">
                <span className="font-bold text-primary">1.</span>
                <span>Go to M-Pesa on your phone</span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold text-primary">2.</span>
                <span>Select Lipa na M-Pesa</span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold text-primary">3.</span>
                <span>Select Buy Goods and Services</span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold text-primary">4.</span>
                <div className="flex-1">
                  <span>Enter Till Number: </span>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="font-bold text-foreground text-lg">{tillNumber}</span>
                    <button
                      onClick={copyToClipboard}
                      className="p-1 hover:bg-accent rounded transition-colors"
                      title="Copy till number"
                    >
                      {copied ? (
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                      ) : (
                        <Copy className="h-4 w-4 text-muted-foreground" />
                      )}
                    </button>
                  </div>
                </div>
              </li>
              <li className="flex gap-2">
                <span className="font-bold text-primary">5.</span>
                <span>Enter Amount: <span className="font-semibold text-foreground">Ksh {pkg.price}</span></span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold text-primary">6.</span>
                <span>Enter your M-Pesa PIN</span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold text-primary">7.</span>
                <span>Confirm and send payment</span>
              </li>
            </ol>
          </div>

          {/* Confirmation Message */}
          <div className="rounded-lg bg-primary/5 border border-primary/20 p-3 text-center">
            <p className="text-sm text-foreground">
              Your package will be activated automatically after payment confirmation.
            </p>
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
};
