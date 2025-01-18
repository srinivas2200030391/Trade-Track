"use client";
import { motion, AnimatePresence } from "framer-motion";
import { HeroHighlight, Highlight } from "../ui/hero-highlight";
import LoginButton from "./LoginButton";
import SignUp from "./SignUp";
import { useState, useEffect, useRef } from "react";
import Login from "./Login";

export function Hero() {
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Check if click target is on the modal backdrop
      if (
        event.target instanceof Element &&
        event.target.classList.contains("modal-backdrop")
      ) {
        setIsSignUpOpen(false);
        setIsLoginOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsSignUpOpen(false);
        setIsLoginOpen(false);
      }
    };

    if (isSignUpOpen || isLoginOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isSignUpOpen, isLoginOpen]);

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
        <LoginButton text="Login" className="!p-4 !px-8" onClick={()=> setIsLoginOpen(true)} />
        <LoginButton
          text="Sign Up"
          className="!p-4 !px-8"
          onClick={() => setIsSignUpOpen(true)}
        />
      </div>

      <AnimatePresence>
        {isSignUpOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50 modal-backdrop"
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
              className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none mt-10">
              <div className="pointer-events-auto">
                <SignUp />
              </div>
            </motion.div>
          </>
        )}

        {isLoginOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50 modal-backdrop"
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
              className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none mt-10">
              <div className="pointer-events-auto">
                <Login />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </HeroHighlight>
  );
}
