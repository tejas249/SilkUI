import HeroSection from "@/components/landing/hero";
export default function Home() {
  return (
    <main className="bg-linear-to-b from-white via-lime-50/30 to-cyan-50/40 dark:from-black dark:via-neutral-950 dark:to-cyan-950/40 overflow-x-hidden">
      <div className="w-full">
        <HeroSection />
      </div>
    </main>
  );
}
