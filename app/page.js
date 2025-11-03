import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ChartOverview from "./components/ChartOverviewWrapper";
import ExpenseDashboard from "./components/ExpensesDashboard";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ChartOverview />
      <ExpenseDashboard />
    </main>
  );
} 

 
