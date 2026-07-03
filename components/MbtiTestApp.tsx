"use client";

import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import AnimatedBackground from "@/components/AnimatedBackground";
import HomeScreen from "@/components/HomeScreen";
import QuizScreen from "@/components/QuizScreen";
import LoadingScreen from "@/components/LoadingScreen";
import ResultScreen from "@/components/ResultScreen";
import { calculateMbti } from "@/lib/scoring";
import { MBTI_DATA } from "@/lib/mbti-data";
import { MBTI_RESULTS_TABLE, supabase } from "@/lib/supabase";
import { useParticipantCount } from "@/lib/useParticipantCount";
import { MbtiCode, Stage, StoredAnswer } from "@/types";

export default function MbtiTestApp() {
  const searchParams = useSearchParams();
  const { count } = useParticipantCount();

  const [stage, setStage] = useState<Stage>("home");
  const [resultCode, setResultCode] = useState<MbtiCode | null>(null);

  // 공유된 결과 링크(예: ?result=INTJ)로 진입한 경우 바로 결과 화면을 보여준다.
  useEffect(() => {
    const shared = searchParams.get("result");
    if (shared && shared.toUpperCase() in MBTI_DATA) {
      setResultCode(shared.toUpperCase() as MbtiCode);
      setStage("result");
    }
  }, [searchParams]);

  const handleStart = useCallback(() => {
    setStage("quiz");
  }, []);

  const handleQuizComplete = useCallback((answers: StoredAnswer[]) => {
    const code = calculateMbti(answers);
    setResultCode(code);
    setStage("loading");

    supabase
      .from(MBTI_RESULTS_TABLE)
      .insert({
        mbti_result: code,
        answers,
      })
      .then(({ error }) => {
        if (error) {
          console.error("[supabase] 결과 저장 실패:", error.message);
        }
      });
  }, []);

  const handleLoadingDone = useCallback(() => {
    if (resultCode) {
      const url = new URL(window.location.href);
      url.searchParams.set("result", resultCode);
      window.history.replaceState({}, "", url);
    }
    setStage("result");
  }, [resultCode]);

  const handleRestart = useCallback(() => {
    const url = new URL(window.location.href);
    url.search = "";
    window.history.replaceState({}, "", url);
    setResultCode(null);
    setStage("home");
  }, []);

  return (
    <main className="relative flex min-h-screen w-full flex-col items-center justify-center px-4 py-16">
      <AnimatedBackground />
      <div className="relative z-10 flex w-full flex-col items-center">
        <AnimatePresence mode="wait">
          {stage === "home" && (
            <HomeScreen key="home" count={count} onStart={handleStart} />
          )}
          {stage === "quiz" && (
            <QuizScreen key="quiz" onComplete={handleQuizComplete} />
          )}
          {stage === "loading" && (
            <LoadingScreen key="loading" onDone={handleLoadingDone} />
          )}
          {stage === "result" && resultCode && (
            <ResultScreen
              key="result"
              code={resultCode}
              onRestart={handleRestart}
            />
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
