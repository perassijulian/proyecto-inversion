"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { evaluationSteps } from "@/lib/steps";

export default function EvaluationBreadcrumbs() {
  const pathname = usePathname();

  const currentIndex = evaluationSteps.findIndex((step) =>
    pathname.startsWith(step.href)
  );

  return (
    <nav className="flex items-center space-x-2 overflow-x-auto text-sm md:text-base py-4">
      {evaluationSteps.map((step, index) => {
        const isCurrent = pathname === step.href;
        const isCompleted = index < currentIndex;
        const isFuture = index > currentIndex;

        return (
          <div key={step.href} className="flex items-center">
            {isCompleted ? (
              <Link
                href={step.href}
                className="text-blue-600 hover:underline font-medium"
              >
                {step.label}
              </Link>
            ) : (
              <span
                className={clsx(
                  "px-1 font-semibold",
                  isCurrent
                    ? "text-white bg-blue-600 rounded px-2 py-1"
                    : "text-gray-400"
                )}
              >
                {step.label}
              </span>
            )}
            {index !== evaluationSteps.length - 1 && (
              <span className="mx-2 text-gray-300">›</span>
            )}
          </div>
        );
      })}
    </nav>
  );
}
