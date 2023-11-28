import Hero from "@/components/hero/hero";
import TranslateBlock from "@/components/TranslateBlock";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-24">
      <Hero />
      <TranslateBlock />
    </main>
  );
}
