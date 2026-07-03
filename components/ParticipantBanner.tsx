"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Users } from "lucide-react";

interface ParticipantBannerProps {
  count: number;
}

export default function ParticipantBanner({ count }: ParticipantBannerProps) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200 shadow-lg shadow-cyan-500/10 backdrop-blur-sm">
      <Users className="h-4 w-4 shrink-0 text-cyan-300" />
      <span className="flex items-baseline gap-1">
        이미{" "}
        <AnimatePresence mode="popLayout">
          <motion.span
            key={count}
            initial={{ y: 8, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="font-extrabold text-cyan-300 tabular-nums"
          >
            {count.toLocaleString()}
          </motion.span>
        </AnimatePresence>
        명의 동료들이 자신의 부캐를 확인했어요!
      </span>
    </div>
  );
}
