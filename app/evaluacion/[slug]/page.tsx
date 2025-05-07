import { notFound, redirect } from "next/navigation";
import { questions, steps } from "@/lib/steps";
import StepForm from "@/components/StepForm";

type Params = { slug: string };

export default function StepPage({ params }: { params: Params }) {
  const { slug } = params;

  console.log("slug", slug);
  console.log("steps", steps);

  if (!steps.includes(slug as any)) notFound();

  const stepData = questions[slug as keyof typeof questions];

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-xl font-bold mb-4">Paso: {slug}</h1>
      <StepForm
        stepSlug={slug as keyof typeof questions}
        question={stepData.question}
        options={stepData.options}
      />
    </div>
  );
}
