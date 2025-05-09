"use client";

import { useRouter } from "next/navigation";
import { steps } from "@/lib/steps";
import { useState, useEffect } from "react";
import { useEvaluationStore } from "@/lib/store/evaluationStore";
import type { QuestionKey } from "@/lib/store/evaluationStore";

type Props = {
  stepSlug: (typeof steps)[number];
  question: string;
  options: string[];
};

export default function StepForm({ stepSlug, question, options }: Props) {
  const [selected, setSelected] = useState<string | null>(null);
  const { setAnswer } = useEvaluationStore();
  const router = useRouter();

  useEffect(() => {
    // Opcional: reiniciar selección al cambiar de paso
    setSelected(null);
  }, [stepSlug]);

  const handleNext = () => {
    if (!selected) return;

    // Guardamos la respuesta en el estado global
    setAnswer(stepSlug as QuestionKey, selected);

    const currentIndex = steps.indexOf(stepSlug);
    const nextStep = steps[currentIndex + 1];

    // guardar en estado global o localStorage si hace falta

    if (nextStep) {
      router.push(`/evaluacion/${nextStep}`);
    } else {
      router.push("/resultados");
    }
  };

  return (
    <div>
      <p className="mb-4">{question}</p>
      <ul className="space-y-2 mb-4">
        {options.map((option) => (
          <li
            key={option}
            onClick={() => setSelected(option)}
            className={`p-2 border rounded cursor-pointer ${
              selected === option ? "border-blue-800 border-2" : ""
            }`}
          >
            {option}
          </li>
        ))}
      </ul>
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
        onClick={handleNext}
        disabled={!selected}
      >
        Siguiente
      </button>
    </div>
  );
}
