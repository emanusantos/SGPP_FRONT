import { Button, Input } from "@components";

export function CreateTeamSecondStep() {
  return (
    <>
      <h3 className="font-orkneyBold text-black text-lg">
        Adicionar Contribuidores
      </h3>
      <p className="subtitle">
        Convide os contribuidores que fazem parte do seu time.
      </p>
      <Input
        containerClasses="mt-9"
        placeholder="Digite o e-mail do contribuidor"
        label="E-mail do contribuidor"
      />

      {/* TODO: Fazer select */}
      <Input containerClasses="mt-5" label="Permissão" value="Administrador" />

      <div className="flex flex-col gap-5 mt-10">
        <Button className="bg-transparent text-primary font-orkney border border-primary">
          Adicionar
        </Button>
        <Button>Avançar</Button>
      </div>
    </>
  );
}
