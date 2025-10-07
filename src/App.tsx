import React from "react";
import { NetworkBackground } from "./components/NetworkBackground";
import { Button } from "./components/ui/button";
import { ArrowRight, Building2, Brain, Code } from "lucide-react";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";

const founders = [
  {
    name: "Fareza Yuza",
    role: "AI Systems Architect",
    expertise: "System Inovation",
    image: "/src/public/images/pasfoto_reza.png",
    bio: "Fareza is the architect behind our cognitive framework. Specializing in Knowledge Graphs, he leads the innovation of our core technology to understand data at its most fundamental level.",
  },
  {
    name: "Ghany Widito Baskoro",
    role: "Product & Business Strategist",
    expertise: "Product Strategy",
    image: "/src/public/images/pasfoto_ghany.png",
    bio: "Ghany bridges our advanced technology with real-world market needs. With a background as a Product Owner and ERP Specialist, he ensures our solution solves critical business problems.",
  },
  {
    name: "Muhammad Salman Al Hafizh",
    role: "Lead Software Engineer",
    expertise: "Technical Leadership",
    image: "/src/public/images/pasfoto_hafizh.png",
    bio: "Salman is the technical execution force turning complex architecture into a robust, scalable product. His experience as a Lead Developer ensures our vision is realized as an enterprise-ready platform.",
  },
];

const expertise = [
  {
    icon: Building2,
    title: "Product Strategy & Business Acumen",
    description: "Every line of code is driven by a clear strategy to solve real business problems and deliver measurable ROI.",
  },
  {
    icon: Brain,
    title: "AI Research & Innovation",
    description: "We don't just use AI, we design its foundation. Our expertise in Knowledge Graphs allows us to build systems that truly 'understand' your data.",
  },
  {
    icon: Code,
    title: "Engineering Excellence",
    description: "We build secure, scalable, and reliable platforms ready for the most demanding enterprise environments.",
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#121826] text-[#E5E7EB] overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
        <NetworkBackground />
        
        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl tracking-tight">
              Intelligence. Connectivity. Clarity.
            </h1>
            <p className="text-xl md:text-2xl text-[#9CA3AF] max-w-3xl mx-auto leading-relaxed">
              Building the next generation of AI-powered enterprise solutions. 
              Meet the team transforming how organizations harness knowledge.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button 
              size="lg" 
              className="bg-[#3B82F6] hover:bg-[#2563EB] text-white px-8 py-6 text-lg group"
            >
              Schedule a Research Interview
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-[#3B82F6] rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-[#3B82F6] rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Meet The Team Section */}
      <section className="py-32 px-6 bg-gradient-to-b from-[#121826] to-[#0f1419]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-20">
            <h2 className="text-4xl md:text-5xl">Meet The Team</h2>
            <p className="text-xl text-[#9CA3AF] max-w-2xl mx-auto">
              A proven track record of building transformative technology at scale
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {founders.map((founder, index) => (
              <div key={index} className="space-y-6 group">
                <div className="relative overflow-hidden rounded-2xl aspect-[3/4] bg-[#1a2332]">
                  <ImageWithFallback
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121826] via-transparent to-transparent opacity-60"></div>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <h3 className="text-2xl">{founder.name}</h3>
                    <p className="text-[#3B82F6]">{founder.role}</p>
                  </div>
                  
                  <div className="pt-2 space-y-2">
                    <div className="inline-block px-3 py-1 bg-[#1a2332] rounded-full">
                      <span className="text-sm text-[#9CA3AF]">{founder.expertise}</span>
                    </div>
                    <p className="text-[#9CA3AF] leading-relaxed">
                      {founder.bio}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collective Expertise Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-20">
            <h2 className="text-4xl md:text-5xl">Collective Expertise</h2>
            <p className="text-xl text-[#9CA3AF] max-w-2xl mx-auto">
              Combining deep technical knowledge with strategic business acumen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {expertise.map((item, index) => (
              <div 
                key={index} 
                className="p-8 rounded-2xl bg-gradient-to-br from-[#1a2332] to-[#121826] border border-[#2a3444] hover:border-[#3B82F6] transition-all duration-300 group"
              >
                <div className="space-y-6">
                  <div className="w-16 h-16 rounded-xl bg-[#3B82F6]/10 flex items-center justify-center group-hover:bg-[#3B82F6]/20 transition-colors">
                    <item.icon className="w-8 h-8 text-[#3B82F6]" strokeWidth={1.5} />
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-2xl">{item.title}</h3>
                    <p className="text-[#9CA3AF] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 px-6 bg-gradient-to-t from-[#121826] to-[#0f1419]">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl">Let's Shape the Future Together</h2>
            <p className="text-xl text-[#9CA3AF] leading-relaxed">
              We're conducting research interviews with industry leaders to understand 
              the challenges in enterprise knowledge management. Share your insights 
              and get early access to our platform.
            </p>
          </div>
          
          <Button 
            size="lg" 
            className="bg-[#3B82F6] hover:bg-[#2563EB] text-white px-10 py-6 text-lg group"
          >
            Book Your Research Session
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <p className="text-sm text-[#9CA3AF] pt-4">
            30-minute sessions · No commitment required · Early access opportunity
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-[#2a3444]">
        <div className="max-w-7xl mx-auto text-center text-[#9CA3AF]">
          <p>© 2025 AI Startup. Building intelligent systems for tomorrow.</p>
        </div>
      </footer>
    </div>
  );
}
