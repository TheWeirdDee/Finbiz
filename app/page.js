import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ChartOverview from "./components/ChartOverviewWrapper";
import ExpenseDashboard from "./components/ExpenseDashboard";
import TestimonialCarousel from "./components/TestimonialCarousel";
import Pricing from "./components/Pricing"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ChartOverview />
      <ExpenseDashboard />
      <TestimonialCarousel />
      <Pricing />
    </main>
  );
} 

 
