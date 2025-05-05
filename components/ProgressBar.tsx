"use client";

import { usePathname } from "next/navigation";
import { steps } from "@/lib/steps";

type Props = {
  steps: typeof steps;
};

export default function ProgressBar({ steps }: Props) {
  const pathname = usePathname();
  const currentStep = pathname?.split("/").pop();
  const currentIndex = steps.indexOf(currentStep as any);

  const progressPercent = ((currentIndex + 1) / steps.length) * 100;

  return (
    <div className="w-full bg-gray-200 h-2 rounded mb-4">
      <div
        className="bg-blue-500 h-2 rounded transition-all"
        style={{ width: `${progressPercent}%` }}
      />
    </div>
  );
}
