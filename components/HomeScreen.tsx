"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import ParticipantBanner from "@/components/ParticipantBanner";

interface HomeScreenProps {
  count: number;
  onStart: () => void;
}

export default function HomeScreen({ count, onStart }: HomeScreenProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.4 }}
      className="flex w-full max-w-md flex-col items-center gap-8 text-center"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.4 }}
        className="flex items-center gap-1.5 rounded-full bg-indigo-500/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-indigo-300 ring-1 ring-inset ring-indigo-400/30"
      >
        <Sparkles className="h-3.5 w-3.5" />
        MBTI × IT 직무 페르소나
      </motion.div>

      <h1 className="text-3xl font-black leading-snug sm:text-4xl">
        출근길 내 모습으로 알아보는
        <br />
        <span className="text-gradient-brand animate-gradient-x">
          &lsquo;IT 부캐&rsquo; 테스트
        </span>
      </h1>

      <p className="text-balance text-sm leading-relaxed text-slate-300 sm:text-base">
        협업 스타일부터 위기 대처법까지, 내 MBTI 유형에 맞는
        <br className="hidden sm:block" />
        IT 직무 페르소나는 과연 무엇일까요?
      </p>

      <ParticipantBanner count={count} />

      <motion.button
        onClick={onStart}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        className="group mt-2 flex w-full items-center justify-center gap-2 rounded-2xl bg-indigo-600 px-8 py-4 text-base font-bold text-white shadow-xl shadow-indigo-600/30 transition-all hover:bg-indigo-500"
      >
        내 IT 부캐 확인하러 가기
        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
      </motion.button>

      <p className="text-xs text-slate-500">
        8개의 질문 · 약 1분 소요 · 결과는 즉시 확인 가능해요
      </p>
    </motion.div>
  );
}
