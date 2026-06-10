import Sidebar from "./Sidebar";
import FloatingBackground from "./FloatingBackground";

interface Props {
  children: React.ReactNode;
}

export default function AppLayout({
  children,
}: Props) {
  return (
    <div className="min-h-screen bg-black text-white">
      <FloatingBackground />

      <div className="relative z-10 flex">
        <Sidebar />

        <main className="ml-[280px] flex-1 p-10">
          {children}
        </main>
      </div>
    </div>
  );
}