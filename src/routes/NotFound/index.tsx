import { Button } from "@components";
import { useNavigate } from "react-router-dom";

export function NotFound() {
  const navigate = useNavigate();

  const goBack = () => navigate("/");

  return (
    <div className="w-screen h-screen">
      <div className="flex flex-col justify-center items-center h-1/2 mt-48 gap-4">
        <h1 className="font-orkneyBold text-6xl">Oops!</h1>

        <h1 className="font-orkneyBold text-3xl">Página não encontrada</h1>

        <Button className="w-1/6 mt-20" onClick={goBack}>
          Voltar
        </Button>
      </div>
    </div>
  );
}
