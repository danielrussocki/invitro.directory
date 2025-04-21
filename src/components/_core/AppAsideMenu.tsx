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
    <div className="flex gap-x-5 h-full">
      <motion.aside
        className="border-2 p-2.5 w-full h-full rounded-lg sticky top-0 left-0 flex"
        variants={{
          closed: { width: 60, justifyContent: "center" },
          opened: { width: 320, justifyContent: "flex-end" },
        }}
        initial="closed"
        animate={isOpen ? "opened" : "closed"}
      >
        <motion.div layout>
          <AppButton onClick={() => asideClickHandler()}>
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
      <div className="w-full min-h-full border-2 rounded-lg p-2.5">
        <div className="w-full h-full overflow-y-scroll">{children}</div>
      </div>
    </div>
  );
}
