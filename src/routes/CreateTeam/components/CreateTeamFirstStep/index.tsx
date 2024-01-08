import { Button, Input, MultilineInput } from "@components";

export function CreateTeamFirstStep({
  onClickAdvance,
}: {
  onClickAdvance: () => void;
}) {
  return (
    <>
      <h3 className="font-orkneyBold text-black text-lg">Informações gerais</h3>
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

      <Button className="mt-7" onClick={onClickAdvance}>
        Avançar
      </Button>
    </>
  );
}
