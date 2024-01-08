import React from "react";

import {
  Button,
  Input,
  MultilineInput,
  PageHeader,
  PageMain,
  PageSubheader,
} from "@components";

import {
  CreateTeamFirstStep,
  CreateTeamSecondStep,
  CreateTeamStepCard,
} from "./components";

export function CreateTeam() {
  const [currentStep, setCurrentStep] = React.useState<1 | 2>(1);

  const onAdvanceFirstStep = () => setCurrentStep(2);

  const ComponentByStep = {
    1: <CreateTeamFirstStep onClickAdvance={onAdvanceFirstStep} />,
    2: <CreateTeamSecondStep />,
  };

  return (
    <div className="flex flex-col min-h-dvh">
      <PageHeader />

      <PageSubheader
        title="Criar novo time"
        subtitle="Complete o formulário abaixo para criar o seu novo time."
      >
        <Button className="w-auto py-3 px-10 bg-transparent border border-primary text-primary font-orkney">
          Voltar
        </Button>
      </PageSubheader>

      <PageMain className="flex flex-col gap-12 items-center justify-center py-12">
        <CreateTeamStepCard numberOfSteps={3} currentStep={currentStep}>
          {ComponentByStep[currentStep]}
        </CreateTeamStepCard>
      </PageMain>
    </div>
  );
}
