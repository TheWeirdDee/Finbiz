import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ChartOverview from "./components/ChartOverviewWrapper";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ChartOverview />
    </main>
  );
}
