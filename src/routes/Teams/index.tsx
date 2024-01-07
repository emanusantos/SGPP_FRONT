import {
  MockPictureOne,
  MockPictureThree,
  MockPictureTwo,
} from "@assets/images";
import {
  Button,
  Card,
  Input,
  PageHeader,
  PageMain,
  PageSubheader,
} from "@components";

const TeamsMock = [
  {
    id: "card-ufal",
    title: "Universidade Federal de Alagoas (UFAL)",
    subtitle: "Time de pesquisas da UFAL",
    contributors: 10000,
    pictures: [MockPictureOne],
  },
  {
    id: "card-cos",
    title: "Comunicação Social (COS)",
    subtitle: "Time de pesquisas do COS",
    contributors: 10000,
    pictures: [MockPictureOne, MockPictureTwo],
  },
  {
    id: "card-prefeitura",
    title: "Prefeitura de Maceió",
    subtitle:
      "Time de pesquisas da prefeitura de Maceió junto com o Governo do estado.",
    contributors: 10000,
    pictures: [MockPictureOne, MockPictureTwo, MockPictureThree],
  },
];

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

      <PageMain className="flex flex-col gap-12">
        <Input placeholder="Pesquisar" />

        <div className="flex flex-wrap gap-11 px-16">
          {TeamsMock.map((mock) => (
            <Card
              key={mock.id}
              title={mock.title}
              subtitle={mock.subtitle}
              contributors={mock.contributors}
              pictures={mock.pictures}
            />
          ))}
        </div>
      </PageMain>
    </div>
  );
}
