"use client";

import { useEvaluationStore } from "@/lib/store/evaluationStore";

export default function ResultadosPage() {
  const { answers } = useEvaluationStore();

  const noAnswers = Object.keys(answers).length === 0;

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Tus Respuestas</h1>

      {noAnswers ? (
        <div className="text-center text-gray-600">
          No se han registrado respuestas aún.
        </div>
      ) : (
        <ul className="space-y-4">
          {Object.entries(answers).map(([key, value]) => (
            <li
              key={key}
              className="p-4 bg-white border rounded-lg shadow-sm flex justify-between"
            >
              <span className="capitalize text-gray-700 font-medium">
                {key.replace(/_/g, " ")}
              </span>
              <span className="text-blue-800 font-semibold">{value}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
