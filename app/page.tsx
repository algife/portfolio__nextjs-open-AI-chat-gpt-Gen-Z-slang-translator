import Hero from "@/components/hero/hero";
import TranscriptionBlock from "@/components/TranscriptionBlock";

export default function Home() {
  return (
    <main className=" max-w-[1024px] flex flex-col items-center pt-20 w-full padding-x mx-auto">
      <Hero />
      <TranscriptionBlock />
    </main>
  );
}
