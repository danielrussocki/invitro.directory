/* lib */
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
/* components */
import AppButton from "@/components/_core/button/AppButton";
import AppHeading from "@/components/_core/heading/AppHeading";
/* icons */
import {
  MotionCross1Icon,
  MotionHamburguerIcon,
} from "@/components/_core/icon/Motion";

export default function AppNavigation() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function navigationClickHandler() {
    setIsOpen((current) => !current);
  }

  return (
    <>
      <div className="sticky top-0 left-0 z-99 p-5 pointer-events-none">
        <motion.nav className="rounded-full w-full h-15 pl-7 py-3 pr-3 flex justify-end items-center bg-white shadow-sm pointer-events-auto">
          <motion.div className="w-full h-full flex items-center justify-between">
            <AppHeading className="uppercase" size="xl">
              Logo
            </AppHeading>
            <AppButton rounded onClick={() => navigationClickHandler()}>
              <AnimatePresence>
                {isOpen ? (
                  <MotionCross1Icon
                    initial={{ opacity: 0 }}
                    exit={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    width={16}
                    height={16}
                  />
                ) : (
                  <MotionHamburguerIcon
                    initial={{ opacity: 0 }}
                    exit={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    width={16}
                    height={16}
                  />
                )}
              </AnimatePresence>
            </AppButton>
          </motion.div>
        </motion.nav>
      </div>
    </>
  );
}
