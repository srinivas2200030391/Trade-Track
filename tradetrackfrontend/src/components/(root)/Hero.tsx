"use client";
import { motion, AnimatePresence } from "framer-motion";
import { HeroHighlight, Highlight } from "../ui/hero-highlight";
import LoginButton from "./LoginButton";
import SignupFormDemo from "./signup-form-demo";
import { useState, useEffect, useRef } from "react";

export function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (formRef.current && !formRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-neutral-100 max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto">
        With insomnia, nothing&apos;s real. Everything is far away. Everything
        is a{" "}
        <Highlight className="text-black dark:text-white dark:bg-gray-800">
          copy, of a copy, of a copy.
        </Highlight>
      </motion.h1>
      <div className="relative isolate flex justify-center space-x-4 mt-8">
        <LoginButton text="Login" className="!p-4 !px-8" />
        <LoginButton
          text="Sign Up"
          className="!p-4 !px-8"
          onClick={() => setIsOpen(true)}
        />
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50"
            />
            <motion.div
              ref={formRef}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{
                opacity: 0,
                scale: 0.95,
                y: 20,
                transition: {
                  duration: 0.2,
                  ease: "easeOut",
                },
              }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
              className="fixed inset-0 flex items-center  z-50">
              <SignupFormDemo />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </HeroHighlight>
  );
}
