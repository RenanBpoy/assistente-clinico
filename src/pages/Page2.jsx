import { Header } from "@/components/containers/Header";
import { BottomNav } from "@/components/containers/BottomNav";

const Page2 = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header section="Página 2" />
      <main className="flex-1 flex items-center justify-center">
        <h1 className="text-2xl font-bold text-purple-700">Conteúdo da Página 2</h1>
      </main>
      <BottomNav />
    </div>
  );
};

export default Page2;
