import { Button, PageHeader, PageMain, PageSubheader } from "@components";

export function CreateTeam() {
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

      <PageMain className="flex flex-col gap-12">Create Team!</PageMain>
    </div>
  );
}
