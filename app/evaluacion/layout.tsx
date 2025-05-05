import { ReactNode } from "react";
import { steps } from "@/lib/steps";
import ProgressBar from "@/components/ProgressBar";
import EvaluationBreadcrumbs from "@/components/EvaluationBreadcrumb";

export default function EvaluacionLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <main className="min-h-screen flex flex-col items-center justify-start px-4 py-6">
      <div className="w-full max-w-2xl">
        <h1 className="text-2xl font-semibold text-center mb-4">
          Evaluación de Proyectos de Inversión
        </h1>

        <ProgressBar steps={steps} />
        <EvaluationBreadcrumbs />

        <div className="mt-6">{children}</div>
      </div>
    </main>
  );
}
