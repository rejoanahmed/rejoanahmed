'use client';
import {
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform
} from 'framer-motion';
import { useRef } from 'react';

const data = [
  '/icons/AppStore.png',
  '/icons/Calendar.png',
  '/icons/Chrome.png',
  '/icons/Excel.png',
  '/icons/FindMy.png',
  '/icons/Google Drive.png',
  '/icons/Safari.png'
];

export default function MacDock() {
  let mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className="mx-auto flex h-16 items-end justify-center gap-4 rounded-2xl bg-orange-100 px-4 pb-3"
    >
      {data.map((i) => (
        <AppIcon mouseX={mouseX} key={i} icon={i} />
      ))}
    </motion.div>
  );
}

function AppIcon({ mouseX, icon }: { mouseX: MotionValue; icon: string }) {
  let ref = useRef<HTMLDivElement>(null);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });

  let widthSync = useTransform(distance, [-150, 0, 150], [40, 100, 40]);
  let width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <motion.div
      ref={ref}
      style={{ width, height: width }}
      className="flex aspect-square h-10 w-10 items-center justify-center rounded-full bg-gray-400"
    >
      <img src={icon} className="h-full w-full cursor-pointer rounded-full" />
    </motion.div>
  );
}
