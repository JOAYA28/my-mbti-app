import { Question } from "@/types";

export const QUESTIONS: Question[] = [
  {
    id: 1,
    dimension: "EI",
    text: "새로운 대규모 IT 컨퍼런스나 네트워킹 파티에 참여했을 때 나의 행동은?",
    options: [
      {
        label: "A",
        text: "처음 보는 사람들에게도 적극적으로 명함을 건네며 링크드인 일촌을 맺는다.",
        letter: "E",
      },
      {
        label: "B",
        text: "아는 사람 몇 명과 주로 대화하거나, 조용히 세션을 들은 후 집으로 퇴근한다.",
        letter: "I",
      },
    ],
  },
  {
    id: 2,
    dimension: "EI",
    text: "대면 미팅과 슬랙(Slack)/카카오톡 업무 메시지 중 내가 더 선호하는 소통 방식은?",
    options: [
      {
        label: "A",
        text: "말로 빠르게 치고받으며 회의실 화이트보드에 적어가며 얘기하는 게 편하다.",
        letter: "E",
      },
      {
        label: "B",
        text: "생각과 텍스트를 정리해서 비동기식 메시지로 소통하는 게 훨씬 편하다.",
        letter: "I",
      },
    ],
  },
  {
    id: 3,
    dimension: "SN",
    text: "새로운 서비스 기획 아이디어 회의를 할 때, 내가 더 집중하는 부분은?",
    options: [
      {
        label: "A",
        text: "경쟁사 성공 사례, 현재 가용 리소스, 기존 데이터 지표 등 '현실적인 실현 가능성'",
        letter: "S",
      },
      {
        label: "B",
        text: "\"이 기능이 세상을 어떻게 바꿀까?\" 같은 '새롭고 실험적인 비전과 확장성'",
        letter: "N",
      },
    ],
  },
  {
    id: 4,
    dimension: "SN",
    text: "선배가 \"요즘 인공지능(AI) 트렌드가 급변하고 있네요\"라고 말했을 때 내 머릿속에 떠오르는 생각은?",
    options: [
      {
        label: "A",
        text: "\"맞아요, 당장 내년 우리 제품에 적용할 만한 LLM API 단가부터 알아봐야겠어요.\"",
        letter: "S",
      },
      {
        label: "B",
        text: "\"조만간 AI가 인간의 UI를 완전히 대체하는 영화 같은 세상이 오지 않을까요?\"",
        letter: "N",
      },
    ],
  },
  {
    id: 5,
    dimension: "TF",
    text: "동료가 \"제가 밤새서 기획서 써왔는데, 에러가 너무 많이 나요...\"라며 괴로워할 때 나의 첫마디는?",
    options: [
      {
        label: "A",
        text: "\"어디 봐봐요. 콘솔 로그에 어떤 에러 코드가 찍히는지 확인해 드릴게요.\"",
        letter: "T",
      },
      {
        label: "B",
        text: "\"어떡해요, 밤새 고생하셨을 텐데 진짜 속상하시겠어요. 커피 한잔 마시고 해요.\"",
        letter: "F",
      },
    ],
  },
  {
    id: 6,
    dimension: "TF",
    text: "프로젝트 피드백 세션에서 우리 팀 제품의 치명적인 단점을 지적받았을 때 내가 느끼는 감정은?",
    options: [
      {
        label: "A",
        text: "제품을 개선할 수 있는 객관적인 팩트 피드백이므로 유익하다고 생각한다.",
        letter: "T",
      },
      {
        label: "B",
        text: "우리 팀이 열심히 고생해서 만든 건데, 노력을 몰라주는 것 같아 조금 서운하다.",
        letter: "F",
      },
    ],
  },
  {
    id: 7,
    dimension: "JP",
    text: "내일 아침까지 끝내야 하는 중요한 스프린트 태스크(Task)가 주어졌을 때 내 스타일은?",
    options: [
      {
        label: "A",
        text: "오늘 시간대별로 작업 계획을 쪼개서 일정을 완벽히 통제하며 끝낸다.",
        letter: "J",
      },
      {
        label: "B",
        text: "일단 다른 급한 일부터 하다가, 마감 직전 초인적인 몰입력을 발휘해 끝낸다.",
        letter: "P",
      },
    ],
  },
  {
    id: 8,
    dimension: "JP",
    text: "프로젝트 도중 갑작스러운 클라이언트의 요구사항 변경으로 기존 기획을 대폭 수정해야 한다면?",
    options: [
      {
        label: "A",
        text: "철저하게 짜둔 일정과 WBS(일정표)가 꼬여서 엄청난 스트레스를 받는다.",
        letter: "J",
      },
      {
        label: "B",
        text: "\"IT 하다 보면 그럴 수 있지!\"라며 유연하게 생각하고 임기응변으로 대처한다.",
        letter: "P",
      },
    ],
  },
];
