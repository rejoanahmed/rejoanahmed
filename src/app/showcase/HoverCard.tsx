'use client';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { MouseEvent } from 'react';

export default function HoverCard() {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className="bg-pink group relative max-w-md rounded-xl border border-white/50 bg-white px-8 py-16 shadow-2xl"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              250px circle at ${mouseX}px ${mouseY}px,
              rgb(190, 24, 93, 0.15),
              transparent 80%
            )
          `
        }}
      />
      <div>
        <h3 className="text-base font-semibold leading-7 text-sky-500">
          Full Stack Web Developer
        </h3>
        <div className="mt-2 flex items-center gap-x-2">
          <span className="text-5xl font-bold tracking-tight text-black">
            Rejoan Ahmed
          </span>
        </div>
        <p className="mt-6 text-base leading-7 text-gray-700">
          Full Stack Web Developer. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Sint, molestias.
        </p>
      </div>
    </div>
  );
}
