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
        <div className="flex items-end gap-6">
          <div className="flex flex-col gap-2">
            <p className="font-orkneyLight text-xs">
              Atual: Comunicação Social (COS)
            </p>

            <Button className="w-auto py-3 px-10 bg-transparent text-black font-orkney border border-primary">
              Mudar time
            </Button>
          </div>

          <Button className="w-auto py-3 px-5">+ Nova pesquisa</Button>
        </div>
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
