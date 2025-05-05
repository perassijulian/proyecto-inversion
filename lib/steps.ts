// UNIFICAR AMBOS STEPS EN UNO
export const steps = [
  "rentabilidad",
  "riesgo",
  "tiempo",
  "impacto",
  "viabilidad",
] as const;

export const evaluationSteps = [
  {
    key: "rentabilidad",
    label: "Rentabilidad",
    href: "/evaluacion/rentabilidad",
  },
  { key: "riesgo", label: "Riesgo", href: "/evaluacion/riesgo" },
  {
    key: "recuperacion",
    label: "Recuperación",
    href: "/evaluacion/recuperacion",
  },
  { key: "impacto", label: "Impacto", href: "/evaluacion/impacto" },
  { key: "viabilidad", label: "Viabilidad", href: "/evaluacion/viabilidad" },
  { key: "resultados", label: "Resultados", href: "/evaluacion/resultados" },
];

export const questions: Record<
  (typeof steps)[number],
  {
    question: string;
    options: string[];
  }
> = {
  rentabilidad: {
    question: "¿Qué retorno esperas del proyecto en 3 años?",
    options: ["Menos del 10%", "Entre 10% y 20%", "Más del 20%"],
  },
  riesgo: {
    question: "¿Qué tan riesgoso consideras que es este proyecto?",
    options: ["Alto riesgo", "Riesgo moderado", "Bajo riesgo"],
  },
  tiempo: {
    question: "¿Cuánto tiempo se espera para recuperar la inversión?",
    options: ["Menos de 6 meses", "Entre 6 y 12 meses", "Más de 12 meses"],
  },
  impacto: {
    question: "¿Qué tan importante es el impacto comunitario de este proyecto?",
    options: ["Muy importante", "Moderadamente importante", "No es importante"],
  },
  viabilidad: {
    question:
      "¿Qué tan fácil será implementar el proyecto con los recursos disponibles?",
    options: ["Muy difícil", "Moderadamente difícil", "Fácil de implementar"],
  },
};
