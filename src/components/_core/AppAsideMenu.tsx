/* lib */
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
/* components */
import AppButton from "@/components/_core/button/AppButton";
/* icons */
import {
  MotionCross1Icon,
  MotionHamburguerIcon,
} from "@/components/_core/icon/Motion";
/* types */
import { ICommonProps } from "@/lib/types/common";

type Props = ICommonProps;

export default function AppAsideMenu({ children }: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function asideClickHandler() {
    setIsOpen((current) => !current);
  }

  return (
    <div className="flex">
      <div className="h-screen p-5 sticky top-0 left-0 z-99">
        <motion.aside
          className="p-2.5 w-full h-full flex bg-white"
          variants={{
            closed: {
              width: 60,
              justifyContent: "center",
              borderRadius: 30,
            },
            opened: {
              width: 320,
              justifyContent: "flex-end",
              borderRadius: 20,
            },
          }}
          initial="closed"
          animate={isOpen ? "opened" : "closed"}
        >
          <motion.div layout>
            <AppButton rounded onClick={() => asideClickHandler()}>
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
        </motion.aside>
      </div>
      <div className="w-full py-5 pr-5">
        <div className="bg-white w-full min-h-screen p-10 rounded-4xl">
          {children}
        </div>
      </div>
    </div>
  );
}
