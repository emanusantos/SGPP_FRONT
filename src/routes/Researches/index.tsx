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

const ResearchesMock = [
  {
    id: "card-fake-news",
    title:
      "A percepção dos alunos de Comunicação da UFAL sobre o controle das fake news",
    contributors: 10000,
    pictures: [MockPictureOne, MockPictureTwo, MockPictureThree],
  },
];

export function Researches() {
  return (
    <div className="flex flex-col min-h-dvh">
      <PageHeader />

      <PageSubheader
        title="Suas pesquisas"
        subtitle="Essas são as pesquisas que você colabora. Escolha uma das opções ou crie um nova para continuar."
      >
        <Button className="w-auto py-3 px-5">+ Nova pesquisa</Button>
      </PageSubheader>

      <PageMain className="flex flex-col gap-12">
        <Input placeholder="Pesquisar" />

        <div className="flex flex-wrap gap-11 px-16">
          {ResearchesMock.map((mock) => (
            <Card
              key={mock.id}
              title={mock.title}
              contributors={mock.contributors}
              pictures={mock.pictures}
            />
          ))}
        </div>
      </PageMain>
    </div>
  );
}
