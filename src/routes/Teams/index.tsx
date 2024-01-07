import { Button, PageHeader, PageMain, PageSubheader } from "@components";

export function Teams() {
  return (
    <div className="flex flex-col min-h-dvh">
      <PageHeader />

      <PageSubheader
        title="Seus times"
        subtitle="Esses são os times que você pertence. Escolha uma das opções ou crie um
          novo para continuar."
      >
        <Button className="w-auto py-3 px-5">+ Novo time</Button>
      </PageSubheader>

      <PageMain>Page main!</PageMain>
    </div>
  );
}
