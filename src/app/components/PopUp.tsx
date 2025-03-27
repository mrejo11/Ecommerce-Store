import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
type showPopUpProp={
    message:string;
    showPopUp:boolean;
}
export default function PopUp({message,showPopUp}:showPopUpProp) {
    if(!showPopUp) return null

  return (
    <>
    <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
        <div className="fixed top-20 left-0 right-0 z-50 flex justify-center animate-fade-in">
          <div className="bg-amber-100 p-4 border border-green-400 rounded-xl flex items-center gap-2 shadow-lg animate-scale-in">
            <CheckCircle className="text-green-500 w-6 h-6 animate-pulse" />
            <span className="font-medium text-green-700">
              {message}
            </span>
          </div>
        </div>
        </motion.div>
    </>
  )
}
