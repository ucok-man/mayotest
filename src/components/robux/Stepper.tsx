// Stepper Component - For multi-step forms

import type { OrderStep } from "../../types/domain";

interface StepperProps {
  steps: OrderStep[];
}

export const Stepper = ({ steps }: StepperProps) => {
  return (
    <div className="flex justify-center items-center gap-2 md:gap-4">
      {steps.map((step, index) => (
        <div
          key={step.number}
          className="flex flex-col items-center relative flex-shrink-0 w-20 md:w-32"
        >
          {/* Circle */}
          <div
            className={`w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center text-lg md:text-2xl font-bold mb-2 z-10 ${
              step.isActive
                ? "bg-gradient-to-br from-pink-300 via-pink-400 to-pink-500 text-white shadow-lg"
                : step.isCompleted
                ? "bg-gradient-to-br from-green-400 to-green-500 text-white"
                : "bg-gray-400 text-white"
            }`}
            style={
              step.isActive
                ? {
                    boxShadow:
                      "12px 12px 24px 0px rgba(255, 255, 255, 0.44) inset, -12px -12px 24px 0px rgba(255, 119, 151, 0.22) inset",
                  }
                : {}
            }
          >
            {step.isCompleted ? (
              <svg
                className="w-6 h-6 md:w-8 md:h-8"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              step.number
            )}
          </div>

          {/* Label */}
          <div
            className={`text-xs md:text-sm font-semibold text-center leading-tight ${
              step.isActive ? "text-pink-500" : "text-gray-600"
            }`}
          >
            {step.title}
            <br className="hidden md:block" />
            {step.subtitle}
          </div>

          {/* Line to next step */}
          {index < steps.length - 1 && (
            <div
              className={`absolute top-6 md:top-8 left-[60%] w-full h-0.5 z-0 ${
                step.isCompleted ? "bg-green-400" : "bg-gray-300"
              } ${
                step.isActive
                  ? "border-t-2 border-dashed border-gray-300 bg-transparent"
                  : ""
              }`}
            ></div>
          )}
        </div>
      ))}
    </div>
  );
};
