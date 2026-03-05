import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { UseCases } from './components/UseCases';
import Pricing from './components/Pricing'; // default import
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { ChatBot } from './components/ChatBot';
import Why from "./components/WhyItMatters";
import Agents from "./components/Agents"

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Pricing /> {/* infinite scrolling triggers */}
      <Why/>
      <Features />
      <Agents/>
      <UseCases />
      
      <CTA />
      <Footer />
      <ChatBot />
    </div>
  );
}