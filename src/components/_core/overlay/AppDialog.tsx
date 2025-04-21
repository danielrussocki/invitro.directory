/* lib */
import { useState } from "react";
import { Dialog } from "radix-ui";
import { motion, AnimatePresence } from "motion/react";
/* components */
import AppButton from "@/components/_core/button/AppButton";
/* icons */
import { Cross2Icon } from "@radix-ui/react-icons";
/* types */
import type { ICommonProps } from "@/lib/types/common";
import type { ReactNode } from "react";

type Props = ICommonProps & {
  triggerContent?: ReactNode;
};

export default function AppDialog({ triggerContent }: Props) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <AppButton className="text-xs leading-normal">
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
                className="fixed bg-white z-99999 left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-[500px] -translate-x-1/2 -translate-y-1/2 transform-3d rounded-md p-6 shadow-lg focus:outline-none"
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
                <Dialog.Title className="m-0 text-[17px] font-medium text-mauve12">
                  Edit profile
                </Dialog.Title>
                <Dialog.Description className="mb-5 mt-2.5 text-[15px] leading-normal text-mauve11">
                  Make changes to your profile here. Click save when you're
                  done.
                </Dialog.Description>
                <fieldset className="mb-[15px] flex items-center gap-5">
                  <label
                    className="w-[90px] text-right text-[15px] text-violet11"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    className="inline-flex h-[35px] w-full flex-1 items-center justify-center rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 outline-none focus:shadow-[0_0_0_2px] focus:shadow-violet8"
                    id="name"
                    defaultValue="Pedro Duarte"
                  />
                </fieldset>
                <fieldset className="mb-[15px] flex items-center gap-5">
                  <label
                    className="w-[90px] text-right text-[15px] text-violet11"
                    htmlFor="username"
                  >
                    Username
                  </label>
                  <input
                    className="inline-flex h-[35px] w-full flex-1 items-center justify-center rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 outline-none focus:shadow-[0_0_0_2px] focus:shadow-violet8"
                    id="username"
                    defaultValue="@peduarte"
                  />
                </fieldset>
                <div className="mt-[25px] flex justify-end">
                  <Dialog.Close asChild>
                    <button className="inline-flex h-[35px] items-center justify-center rounded bg-green4 px-[15px] font-medium leading-none text-green11 outline-none outline-offset-1 hover:bg-green5 focus-visible:outline-2 focus-visible:outline-green6 select-none">
                      Save changes
                    </button>
                  </Dialog.Close>
                </div>
                <Dialog.Close asChild>
                  <button
                    className="absolute right-2.5 top-2.5 inline-flex size-[25px] appearance-none items-center justify-center rounded-full text-violet11 bg-gray3 hover:bg-violet4 focus:shadow-[0_0_0_2px] focus:shadow-violet7 focus:outline-none"
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
