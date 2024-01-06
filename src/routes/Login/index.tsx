import { Button, Input } from "@components";

export function Login() {
  return (
    <div className="h-full w-full flex min-h-dvh">
      <aside className="flex-grow bg-gray-dark" />

      <main className="flex-grow flex justify-center items-center">
        <div className="w-1/2 flex flex-col justify-center items-center">
          <h1 className="pb-10 font-orkneyMd text-2xl text-black">
            Bem-vindo de volta
          </h1>

          <div className="w-full flex flex-col gap-6">
            <Input type="text" placeholder="Digite o seu e-mail" />

            <Input type="password" placeholder="Digite a sua senha" />
          </div>

          <Button classes="mt-5">Entrar</Button>
        </div>
      </main>
    </div>
  );
}
