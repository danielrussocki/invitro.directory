/* lib */
import { Dialog } from "radix-ui";
import { motion, AnimatePresence } from "motion/react";
/* components */
import AppButton from "@/components/_core/button/AppButton";
/* icons */
import { Cross2Icon } from "@radix-ui/react-icons";
/* types */
import type { ICommonProps } from "@/lib/types/common";
import type { ReactNode } from "react";

type Props = ICommonProps &
  Dialog.DialogProps & {
    title?: ReactNode;
    description?: ReactNode;
    triggerContent?: ReactNode;
    triggerClassName?: string;
    onSaveAction?: () => void;
  };

export default function AppDialog({
  open,
  title,
  description,
  onSaveAction = () => null,
  triggerContent,
  triggerClassName,
  children,
  ...props
}: Props) {
  return (
    <Dialog.Root open={open} {...props}>
      <Dialog.Trigger asChild>
        <AppButton size="sm" severity="primary" className={triggerClassName}>
          {triggerContent}
        </AppButton>
      </Dialog.Trigger>
      <AnimatePresence mode="sync" anchorX="left" presenceAffectsLayout>
        {open && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild>
              <motion.div
                className="fixed inset-0 z-9999 bg-black/50"
                exit={{ opacity: 0, backdropFilter: "blur(0)" }}
                initial={{ opacity: 0, backdropFilter: "blur(0)" }}
                animate={{ opacity: 1, backdropFilter: "blur(3px)" }}
              />
            </Dialog.Overlay>
            <Dialog.Content asChild>
              <motion.div
                className="fixed bg-white z-99999 left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-[500px] -translate-x-1/2 -translate-y-1/2 transform-3d rounded-md pt-15 pb-6 px-6 shadow-lg focus:outline-none"
                exit={{
                  filter: "blur(10px)",
                  opacity: 0,
                  rotateX: 5,
                  rotateY: 25,
                  z: -100,
                  scale: 1,
                  transition: {
                    duration: 0.3,
                    ease: [0.67, 0.17, 0.62, 0.54],
                  },
                }}
                initial={{
                  filter: "blur(10px)",
                  opacity: 0,
                  rotateX: 5,
                  rotateY: 25,
                  z: -100,
                  scale: 1,
                  transition: {
                    duration: 0.3,
                    ease: [0.67, 0.17, 0.62, 0.54],
                  },
                }}
                animate={{
                  opacity: 1,
                  z: 0,
                  rotateX: 0,
                  rotateY: 0,
                  filter: "blur(0px)",
                  scale: 1.0044,
                  transition: {
                    type: "spring",
                    bounce: 0,
                    delay: 0.2,
                    duration: 0.5,
                    ease: [0.17, 0.67, 0.51, 0.1],
                    opacity: {
                      delay: 0.2,
                      duration: 0.5,
                      ease: "easeOut",
                    },
                  },
                }}
                style={{ transformPerspective: 500 }}
              >
                {title && (
                  <Dialog.Title className="mb-5 px-4 text-[17px] font-medium text-mauve12">
                    {title}
                  </Dialog.Title>
                )}
                {description && (
                  <Dialog.Description className="px-4 mb-10 mt-2.5 text-sm leading-normal text-gray-700">
                    {description}
                  </Dialog.Description>
                )}
                {children}
                <div className="mt-[25px] flex justify-end">
                  <AppButton
                    severity="primary"
                    size="md"
                    onClick={() => onSaveAction()}
                  >
                    Save changes
                  </AppButton>
                </div>
                <Dialog.Close asChild>
                  <button
                    className="absolute right-2.5 top-2.5 inline-flex size-6 appearance-none items-center justify-center rounded-full bg-gray-100 cursor-pointer hover:bg-gray-300 focus:shadow-sm focus:outline-none"
                    aria-label="Close"
                  >
                    <Cross2Icon />
                  </button>
                </Dialog.Close>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}
