import { Button } from "@/components/ui/Button/Button";

export default function Home() {
  return (
    <div className="p-8 min-h-screen font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-blue-500 text-2xl mb-6 font-bold">Components</h1>
      <main className="">
        <div>
          <h2 className="text-lg mb-4 font-bold">Buttons</h2>
          <Button label="Primary Button" size="md" variant="primary" />
        </div>
      </main>
      <footer></footer>
    </div>
  );
}
