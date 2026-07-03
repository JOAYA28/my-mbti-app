"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Copy, HeartHandshake, RefreshCw, Swords } from "lucide-react";
import { getPersona } from "@/lib/mbti-data";
import { MbtiCode } from "@/types";

interface ResultScreenProps {
  code: MbtiCode;
  onRestart: () => void;
}

export default function ResultScreen({ code, onRestart }: ResultScreenProps) {
  const [copied, setCopied] = useState(false);
  const persona = getPersona(code);

  if (!persona) return null;

  async function handleCopyLink() {
    const url = new URL(window.location.href);
    url.search = "";
    url.searchParams.set("result", code);

    try {
      await navigator.clipboard.writeText(url.toString());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // 클립보드 접근이 막힌 환경(구형 브라우저 등)에 대한 조용한 폴백
      window.prompt("아래 링크를 복사하세요", url.toString());
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex w-full max-w-md flex-col gap-6"
    >
      <div className="flex flex-col items-center gap-3 text-center">
        <motion.span
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
          className="rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 px-5 py-1.5 text-sm font-black tracking-[0.2em] text-white shadow-lg shadow-indigo-500/30"
        >
          {persona.code}
        </motion.span>
        <h1 className="text-2xl font-black leading-snug sm:text-3xl">
          {persona.title}
        </h1>
        <p className="text-balance text-sm text-slate-300 sm:text-base">
          &ldquo;{persona.tagline}&rdquo;
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur-sm">
        <h2 className="mb-4 text-sm font-bold text-indigo-300">
          나의 일상 속 특징
        </h2>
        <ul className="flex flex-col gap-3">
          {persona.traits.map((trait, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 + index * 0.1 }}
              className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-200 sm:text-[15px]"
            >
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
              {trait}
            </motion.li>
          ))}
        </ul>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-5 shadow-lg">
          <div className="mb-2 flex items-center gap-1.5 text-xs font-bold text-emerald-300">
            <HeartHandshake className="h-4 w-4" />
            찰떡궁합 파트너
          </div>
          <p className="mb-1 text-sm font-bold text-white">
            {persona.bestMatch.code} · {persona.bestMatch.title}
          </p>
          <p className="text-xs leading-relaxed text-slate-300">
            {persona.bestMatch.reason}
          </p>
        </div>

        <div className="rounded-2xl border border-rose-400/20 bg-rose-400/5 p-5 shadow-lg">
          <div className="mb-2 flex items-center gap-1.5 text-xs font-bold text-rose-300">
            <Swords className="h-4 w-4" />
            도전적인 케미 파트너
          </div>
          <p className="mb-1 text-sm font-bold text-white">
            {persona.challengingMatch.code} · {persona.challengingMatch.title}
          </p>
          <p className="text-xs leading-relaxed text-slate-300">
            {persona.challengingMatch.reason}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <motion.button
          onClick={onRestart}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="flex flex-1 items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-5 py-3.5 text-sm font-bold text-slate-100 transition-all hover:bg-white/10"
        >
          <RefreshCw className="h-4 w-4" />
          테스트 다시 하기
        </motion.button>
        <motion.button
          onClick={handleCopyLink}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-indigo-600 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-indigo-600/30 transition-all hover:bg-indigo-500"
        >
          {copied ? (
            <>
              <Check className="h-4 w-4" />
              복사 완료!
            </>
          ) : (
            <>
              <Copy className="h-4 w-4" />
              결과 링크 복사하기
            </>
          )}
        </motion.button>
      </div>
    </motion.div>
  );
}
