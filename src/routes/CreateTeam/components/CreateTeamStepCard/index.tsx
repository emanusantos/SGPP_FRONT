import React from "react";

function StepNumber({
  step,
  isCurrentStep,
}: {
  step: number;
  isCurrentStep?: boolean;
}) {
  const bgColor = isCurrentStep ? "bg-primary" : "bg-white";
  const textColor = isCurrentStep ? "text-white" : "text-black";

  return (
    <div
      className={`rounded-full w-8 h-8 flex justify-center items-center border border-primary ${bgColor}`}
    >
      <p className={`font-orkney ${textColor}`}>{step}</p>
    </div>
  );
}

export function CreateTeamStepCard({
  numberOfSteps = 3,
  currentStep = 1,
  children,
}: {
  numberOfSteps: number;
  currentStep: number;
  children: React.ReactNode | React.ReactNode[];
}) {
  return (
    <div className="w-1/3 flex-grow bg-white border border-primary rounded-lg">
      <div className="w-full bg-gray-dark flex justify-center rounded-t-lg gap-3 py-10">
        {Array.from(Array(numberOfSteps)).map((_, index) => (
          <React.Fragment key={index}>
            <StepNumber
              step={index + 1}
              isCurrentStep={index + 1 === currentStep}
            />

            {index !== numberOfSteps - 1 && (
              <div className="w-1/5 h-[1px] bg-primary self-center" />
            )}
          </React.Fragment>
        ))}
      </div>

      <div className="pt-7 px-16 pb-16">{children}</div>
    </div>
  );
}
