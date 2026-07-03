export type EiLetter = "E" | "I";
export type SnLetter = "S" | "N";
export type TfLetter = "T" | "F";
export type JpLetter = "J" | "P";

export type AnswerLetter = EiLetter | SnLetter | TfLetter | JpLetter;

export type Dimension = "EI" | "SN" | "TF" | "JP";

export interface QuestionOption {
  label: "A" | "B";
  text: string;
  letter: AnswerLetter;
}

export interface Question {
  id: number;
  dimension: Dimension;
  text: string;
  options: [QuestionOption, QuestionOption];
}

export type MbtiCode =
  | "INTJ"
  | "INTP"
  | "ENTJ"
  | "ENTP"
  | "INFJ"
  | "INFP"
  | "ENFJ"
  | "ENFP"
  | "ISTJ"
  | "ISFJ"
  | "ESTJ"
  | "ESFJ"
  | "ISTP"
  | "ISFP"
  | "ESTP"
  | "ESFP";

export interface MatchInfo {
  code: MbtiCode;
  title: string;
  reason: string;
}

export interface MbtiPersona {
  code: MbtiCode;
  title: string;
  tagline: string;
  traits: [string, string, string];
  bestMatch: MatchInfo;
  challengingMatch: MatchInfo;
}

export interface StoredAnswer {
  questionId: number;
  dimension: Dimension;
  selected: AnswerLetter;
}

export type Stage = "home" | "quiz" | "loading" | "result";
