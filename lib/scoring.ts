import { AnswerLetter, MbtiCode, StoredAnswer } from "@/types";

type LetterCounts = Record<AnswerLetter, number>;

// 동점일 경우 우선순위를 부여할 알파벳 (요구사항: I, N, T, P 우선)
const TIE_BREAK_PRIORITY: Record<"EI" | "SN" | "TF" | "JP", AnswerLetter> = {
  EI: "I",
  SN: "N",
  TF: "T",
  JP: "P",
};

const DIMENSION_PAIRS: Array<{
  key: "EI" | "SN" | "TF" | "JP";
  pair: [AnswerLetter, AnswerLetter];
}> = [
  { key: "EI", pair: ["E", "I"] },
  { key: "SN", pair: ["S", "N"] },
  { key: "TF", pair: ["T", "F"] },
  { key: "JP", pair: ["J", "P"] },
];

export function calculateMbti(answers: StoredAnswer[]): MbtiCode {
  const counts: LetterCounts = {
    E: 0,
    I: 0,
    S: 0,
    N: 0,
    T: 0,
    F: 0,
    J: 0,
    P: 0,
  };

  answers.forEach((answer) => {
    counts[answer.selected] += 1;
  });

  const resultLetters = DIMENSION_PAIRS.map(({ key, pair }) => {
    const [first, second] = pair;
    if (counts[first] > counts[second]) return first;
    if (counts[second] > counts[first]) return second;
    return TIE_BREAK_PRIORITY[key];
  });

  return resultLetters.join("") as MbtiCode;
}
