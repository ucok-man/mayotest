// Stepper Component - Progress indicator untuk proses pembelian

import React from "react";

interface StepperProps {
  currentStep: number;
  steps: string[];
  completedSteps?: number[];
}

export const StepperProgress: React.FC<StepperProps> = ({
  currentStep,
  steps,
  completedSteps = [],
}) => {
  return (
    <>
      <style>{`
        .step-circle-active {
          background: linear-gradient(135.54deg, #FFBCD7 21.01%, #EC5A95 81.81%);
          box-shadow: 12px 12px 24px 0px rgba(255, 255, 255, 0.44) inset, -12px -12px 24px 0px rgba(255, 119, 151, 0.22) inset;
        }

        .step-circle-inactive {
          background: #939393;
          color: #FFFFFF;
          box-shadow: 12px 12px 24px 0px rgba(255, 255, 255, 0.3) inset, -12px -12px 24px 0px rgba(255, 119, 151, 0.3) inset;
        }

        .step-circle-completed {
          background: #FF7797;
          color: white;
          box-shadow: none;
        }

        .step-line {
          position: absolute;
          top: 30px;
          left: 50%;
          width: 100%;
          height: 3px;
          background: #E0E0E0;
          z-index: 1;
        }

        .step-line-dashed {
          position: absolute;
          top: 30px;
          left: 50%;
          width: 100%;
          height: 3px;
          background: none;
          border-top: 3px dashed #E0E0E0;
          z-index: 1;
        }

        .step-line-inactive {
          background: #939393;
        }

        .step-line-completed {
          background: #FF7797;
        }

        .step:last-child .step-line,
        .step:last-child .step-line-dashed {
          display: none;
        }

        @media (max-width: 768px) {
          .step-line,
          .step-line-dashed {
            top: 22px;
          }
        }
      `}</style>

      <div className="flex justify-center items-center gap-2 md:gap-4">
        {steps.map((step, index) => {
          const stepNumber = index + 1;
          const isActive = stepNumber === currentStep;
          const isCompleted = completedSteps.includes(stepNumber);
          const isDashed = stepNumber === currentStep;

          return (
            <div
              key={stepNumber}
              className="flex flex-col items-center relative shrink-0 w-20 md:w-32 step"
            >
              <div
                className={`${
                  isCompleted
                    ? "step-circle-completed"
                    : isActive
                    ? "step-circle-active"
                    : "step-circle-inactive"
                } w-12 h-12 md:w-16 md:h-16 rounded-full ${
                  isActive || isCompleted ? "text-white" : ""
                } flex items-center justify-center text-lg md:text-2xl font-bold mb-2 z-10 font-chillax`}
              >
                {stepNumber}
              </div>
              <div
                className={`text-xs md:text-sm font-semibold ${
                  isActive || isCompleted ? "text-pink-500" : "text-gray-600"
                } text-center leading-tight font-chillax`}
                dangerouslySetInnerHTML={{
                  __html: step.replace("<br>", "<br class='hidden md:block'>"),
                }}
              />
              {index < steps.length - 1 && (
                <div
                  className={`${
                    isDashed
                      ? "step-line-dashed"
                      : isCompleted
                      ? "step-line step-line-completed"
                      : "step-line step-line-inactive"
                  }`}
                />
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};
