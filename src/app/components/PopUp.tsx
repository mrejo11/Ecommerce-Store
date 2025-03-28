"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
type showPopUpProp = {
  message: string;
  showPopUp: boolean;
};
export default function PopUp({ message, showPopUp }: showPopUpProp) {
  if (!showPopUp) return null;

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="fixed top-20 left-0 right-0 z-50 flex justify-center animate-fade-in">
            <Button className="bg-green-400 p-4 border border-green-400 rounded-xl flex items-center gap-2 shadow-lg animate-scale-in">
              <Loader2 className="animate-spin" />

              {message}
            </Button>
          </div>
      </motion.div>
    </>
  );
}
