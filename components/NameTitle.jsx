"use client";
import { motion } from 'framer-motion';

export default function NameTitle() {
    return(
        <>
            <motion.h1
        className="text-5xl font-bold text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Daan Frankhuizen
      </motion.h1>
      <motion.p
        className="mt-4 text-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Webdeveloper | Designer | Creative Problem Solver
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
      ></motion.div>
        </>
    )
}