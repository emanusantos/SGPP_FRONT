import React from "react";

import {
  Button,
  Input,
  MultilineInput,
  PageHeader,
  PageMain,
  PageSubheader,
} from "@components";

import { CreateTeamStepCard } from "./components";

export function CreateTeam() {
  const [currentStep, setCurrentStep] = React.useState(1);

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
          <h3 className="font-orkneyBold text-black text-lg">
            Informações gerais
          </h3>
          <p className="subtitle">
            Escolha um nome e dê uma descrição para o seu time.
          </p>

          <Input
            containerClasses="mt-9"
            placeholder="Digite o nome do seu time"
            label="Nome do time"
          />

          <MultilineInput
            containerClasses="mt-5"
            className="h-24 items-start resize-none"
            placeholder="Digite uma breve descrição sobre o seu time"
            label="Descrição"
          />

          <Button className="mt-7">Avançar</Button>
        </CreateTeamStepCard>
      </PageMain>
    </div>
  );
}
