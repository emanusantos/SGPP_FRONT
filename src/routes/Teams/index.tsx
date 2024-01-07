import { PageHeader } from "@components";
import { PageSubheader } from "@components/PageSubheader";

export function Teams() {
  return (
    <main>
      <PageHeader />

      <PageSubheader
        title="Seus times"
        subtitle="Esses são os times que você pertence. Escolha uma das opções ou crie um
          novo para continuar."
      ></PageSubheader>
    </main>
  );
}
