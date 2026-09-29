"use client";
import { motion } from "framer-motion";

const ease = [0.2, 0.7, 0.2, 1];

// Staggered entrance for hero content; `step` sets the order.
export function FadeIn({ step = 0, className, children }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: step * 0.09, ease }}
    >
      {children}
    </motion.div>
  );
}

// Fades content in once it scrolls into view.
export function Reveal({ as = "div", className, children }) {
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.7, ease }}
    >
      {children}
    </Tag>
  );
}
