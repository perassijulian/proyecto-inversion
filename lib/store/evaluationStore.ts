import { create } from "zustand";
import { devtools } from "zustand/middleware";

// Define the keys for the evaluation questions
// These keys should match the keys used in the questions object
export type QuestionKey =
  | "rentabilidad"
  | "riesgo"
  | "tiempo_recuperacion"
  | "impacto_comunitario"
  | "viabilidad_operacional";

type EvaluationAnswers = {
  [key in QuestionKey]?: string;
};

interface EvaluationState {
  projectName: string;
  answers: EvaluationAnswers;
  setProjectName: (name: string) => void;
  setAnswer: (key: QuestionKey, value: string) => void;
  resetEvaluation: () => void;
}

export const useEvaluationStore = create<EvaluationState>()(
  devtools((set) => ({
    projectName: "",
    answers: {},
    setProjectName: (name) =>
      set(() => ({ projectName: name }), false, "setProjectName"),
    setAnswer: (key, value) =>
      set(
        (state) => ({
          answers: { ...state.answers, [key]: value },
        }),
        false,
        `setAnswer/${key}`
      ),
    resetEvaluation: () =>
      set(() => ({ projectName: "", answers: {} }), false, "resetEvaluation"),
  }))
);
