import { Suspense } from "react";
import MbtiTestApp from "@/components/MbtiTestApp";

export default function Home() {
  return (
    <Suspense fallback={null}>
      <MbtiTestApp />
    </Suspense>
  );
}
