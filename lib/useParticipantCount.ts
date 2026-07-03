"use client";

import { useEffect, useState } from "react";
import { MBTI_RESULTS_TABLE, supabase } from "@/lib/supabase";

const BASE_COUNT = 1284;

export function useParticipantCount() {
  const [count, setCount] = useState<number>(BASE_COUNT);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function fetchCount() {
      const { count: rowCount, error } = await supabase
        .from(MBTI_RESULTS_TABLE)
        .select("*", { count: "exact", head: true });

      if (!isMounted) return;

      if (!error && typeof rowCount === "number") {
        setCount(BASE_COUNT + rowCount);
      }
      setLoading(false);
    }

    fetchCount();

    const channel = supabase
      .channel("mbti_results_realtime")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: MBTI_RESULTS_TABLE },
        () => {
          setCount((prev) => prev + 1);
        }
      )
      .subscribe();

    return () => {
      isMounted = false;
      supabase.removeChannel(channel);
    };
  }, []);

  return { count, loading };
}
