import AIChatPreview from "@/components/home/AIChatPreview";
import AIPropertyRecommender from "@/components/home/AIPropertyRecommender";
import AnalyzerSection from "@/components/home/AnalayzarSection";
import HeroSection from "@/components/home/HeroSection";
import MarketInsight from "@/components/home/MarketInsight";
import MortgageCalculatorCTA from "@/components/home/MortgageCalculatorCTA";
import TrustedPartners from "@/components/home/TrustedPartners";
import VisionCTA from "@/components/home/VisionCTA";
import ChatCTASection from "@/components/ui/site/ChatCTASection";
import FreeTrialCTASection from "@/components/ui/site/FreeTrialCTASection";
import Hero from "@/components/ui/site/Hero";
import LandingAIChat from "@/components/ui/site/LandingAIChat";
import TrustMetricsSection from "@/components/ui/site/TrustMetricsSection";
import WhatLikeToDo from "@/components/ui/site/WhatLikeToDo";



function Home() {
  return (
    <div>
      {/* <Hero />
      <LandingAIChat />
      <WhatLikeToDo />
      <ChatCTASection />
      <TrustMetricsSection />
      <FreeTrialCTASection /> */}
      <HeroSection />
      <AnalyzerSection />
      <AIChatPreview />
      <MarketInsight />
      <MortgageCalculatorCTA />
      <AIPropertyRecommender />
      <TrustedPartners />
      <VisionCTA />
    </div>
  )
}


export default Home;