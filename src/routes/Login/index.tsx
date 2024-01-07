import { Button, Input } from "@components";

export function Login() {
  return (
    <div className="h-full w-full flex min-h-dvh">
      <aside className="flex-grow bg-gray-dark" />

      <main className="flex-grow flex justify-center items-center">
        <div className="w-1/2 flex flex-col justify-center items-center">
          <h1 className="mb-16 font-orkneyMd text-2xl text-black">
            Bem-vindo de volta
          </h1>

          <div className="w-full flex flex-col gap-6">
            <Input type="text" placeholder="Digite o seu e-mail" />

            <Input type="password" placeholder="Digite a sua senha" />
          </div>

          <Button classes="mt-5">Entrar</Button>

          <Button classes="mt-10 font-orkney w-auto rounded-full flex items-center flex-row">
            <div className="bg-white rounded-full h-10 w-10 m-1" />
            <p className="text-white text-md font-orkneyMd ml-auto mr-auto px-4">
              Entrar com Google
            </p>
          </Button>

          <div className="w-[130%] h-[1px] my-10 bg-gray-dark" />

          <Button classes="mt-5 bg-transparent text-black font-orkney border border-primary">
            Criar uma nova conta
          </Button>
        </div>
      </main>
    </div>
  );
}
