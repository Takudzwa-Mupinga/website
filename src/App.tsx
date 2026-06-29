/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  ArrowRight, 
  Search, 
  Box, 
  Users, 
  Zap, 
  Layers, 
  ShieldCheck, 
  Globe, 
  Cpu, 
  GraduationCap, 
  CheckCircle2, 
  MessageSquare,
  Clock,
  Briefcase,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6">
      <div className="glass-panel px-8 py-3 rounded-full flex items-center gap-12 border border-white/10 shadow-2xl">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-cad-accent rounded-lg flex items-center justify-center shadow-glow">
            <Layers className="w-5 h-5 text-cad-dark" />
          </div>
          <span className="font-bold text-xl tracking-tight">DesignLynk</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-cad-muted">
          <a href="#features" className="hover:text-cad-accent transition-colors">Features</a>
          <a href="#how-it-works" className="hover:text-cad-accent transition-colors">How it works</a>
          <a href="#academy" className="hover:text-cad-accent transition-colors">Academy</a>
          <a href="#pricing" className="hover:text-cad-accent transition-colors">Pricing</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="text-sm font-bold text-cad-text hover:text-cad-accent transition-colors">Login</button>
          <button className="bg-cad-accent text-cad-dark px-5 py-2 rounded-full text-sm font-bold shadow-glow-accent hover:bg-violet-400 transition-all active:scale-95">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-40 pb-20 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cad-accent/10 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black,transparent)]"></div>

      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 bg-cad-accent/10 border border-cad-accent/20 px-4 py-1.5 rounded-full mb-8">
            <span className="w-2 h-2 rounded-full bg-cad-accent animate-pulse"></span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-cad-accent">Revolutionizing Infrastructure Design</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
            Get CAD Work Done in <br className="hidden md:block" />
            <span className="text-cad-accent">Hours, Not Weeks</span>
          </h1>
          
          <p className="text-lg md:text-xl text-cad-muted max-w-2xl mx-auto mb-12">
            The world's first AI-powered marketplace for CAD designers, engineers, and architects. Fast, secure, and built for disaster recovery infrastructure.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-cad-accent text-cad-dark px-8 py-4 rounded-2xl font-bold text-lg shadow-glow-accent hover:bg-violet-400 transition-all flex items-center justify-center gap-3 group">
              Join as Freelancer <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto glass-panel px-8 py-4 rounded-2xl font-bold text-lg hover:border-cad-accent/50 transition-all flex items-center justify-center gap-3">
              Post a Project
            </button>
          </div>
        </div>

        
      </div>
    </section>
  );
};

const ProblemSection = () => {
  const problems = [
    { title: "Snail-Paced Design", desc: "Traditional engineering firms take months to deliver blueprints for critical infrastructure.", icon: Clock },
    { title: "Wasted Talent", desc: "Thousands of skilled CAD designers are unemployed while communities wait for reconstruction.", icon: Users },
    { title: "Opaque Payments", desc: "Freelancers risk non-payment while clients worry about project delivery and quality.", icon: ShieldCheck },
  ];

  return (
    <section className="py-20 bg-black/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">The Bottleneck in Building the Future</h2>
          <p className="text-cad-muted text-lg">Modern infrastructure is failing because of outdated design processes.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((p, i) => (
            <div key={i} className="glass-card p-10 rounded-3xl group hover:border-red-500/30 transition-all duration-500">
              <div className="w-14 h-14 bg-red-500/10 border border-red-500/20 rounded-2xl flex items-center justify-center mb-6 text-red-500 group-hover:scale-110 transition-transform">
                <p.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{p.title}</h3>
              <p className="text-cad-muted leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SolutionSection = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cad-accent/5 rounded-full blur-[140px] -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 px-4 py-1 rounded-full mb-6">
              <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-green-500">The DesignLynk Advantage</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">Fast, Reliable & Impact-Driven</h2>
            <p className="text-lg text-cad-muted mb-10 leading-relaxed italic">
              "We've cut infrastructure design time by 75% for NGOs working in disaster zones."
            </p>
            
            <div className="space-y-6">
              {[
                { t: "AI Job Matching", d: "Proprietary algorithms pair your project with the perfect specialist based on skill & availability." },
                { t: "Escrow Protection", d: "Funds are held securely and released only when milestones are approved." },
                { t: "Global Talent Pool", d: "Access architects and engineers from around the world in a single click." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 p-4 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                  <div className="w-10 h-10 bg-cad-accent/20 rounded-lg flex items-center justify-center shrink-0">
                    <Zap className="w-5 h-5 text-cad-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{item.t}</h4>
                    <p className="text-sm text-cad-muted">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex-1 w-full relative">
             <div className="glass-panel p-6 rounded-3xl border border-white/10 shadow-premium relative z-10">
                <div className="flex justify-between items-center mb-8">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                            <Users className="w-5 h-5 text-cad-dark" />
                        </div>
                        <div>
                            <p className="text-xs font-bold uppercase tracking-widest">Team Studio</p>
                            <p className="text-[10px] text-cad-muted">4 members online</p>
                        </div>
                    </div>
                    <div className="flex -space-x-2">
                        {[1,2,3,4].map(i => <div key={i} className="w-8 h-8 rounded-full border-2 border-cad-dark bg-white/10"></div>)}
                    </div>
                </div>
                
                <div className="space-y-4">
                    <div className="bg-white/5 rounded-2xl p-4 border border-white/5">
                        <div className="flex justify-between mb-2">
                            <span className="text-[10px] font-bold text-cad-muted uppercase">Rendering Progress</span>
                            <span className="text-[10px] font-bold text-cad-accent">88%</span>
                        </div>
                        <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                            <div className="w-[88%] h-full bg-cad-accent shadow-glow transition-all duration-1000"></div>
                        </div>
                    </div>
                    <div className="aspect-video bg-black/40 rounded-2xl border border-white/10 flex items-center justify-center group overflow-hidden">
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=2070&auto=format&fit=crop')] bg-cover opacity-20 group-hover:scale-110 transition-transform duration-700"></div>
                        <Search className="w-8 h-8 text-white/40 animate-pulse relative z-10" />
                    </div>
                </div>
             </div>
             {/* Decorative background cards */}
             <div className="absolute -top-10 -right-10 w-full h-full glass-panel rotate-3 -z-10 rounded-3xl opacity-40"></div>
             <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-cad-accent rounded-full blur-[60px] opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    { title: "Post Project", desc: "Define your engineering or CAD needs in seconds.", icon: Briefcase },
    { title: "Get Matched", desc: "Our AI pairs you with top-tier verified talent.", icon: Search },
    { title: "Collaborate", desc: "Real-time studio for design review and chat.", icon: MessageSquare },
    { title: "Get Results", desc: "Download high-quality professional CAD files.", icon: Zap },
  ];

  return (
    <section id="how-it-works" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 text-center">
            <h2 className="text-4xl font-bold mb-4 tracking-tight">Streamlined From Draft to Final</h2>
            <div className="w-20 h-1.5 bg-cad-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
             {/* Connecting line */}
             <div className="hidden lg:block absolute top-[60px] left-20 right-20 h-[1px] bg-gradient-to-r from-transparent via-cad-accent/30 to-transparent -z-10"></div>
             
             {steps.map((s, i) => (
                <div key={i} className="flex flex-col items-center text-center p-8">
                    <div className="w-24 h-24 glass-panel rounded-[2rem] flex items-center justify-center mb-8 relative group cursor-default hover:border-cad-accent transition-colors">
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-cad-accent rounded-full flex items-center justify-center text-cad-dark font-bold text-xs ring-4 ring-cad-dark">
                            {i+1}
                        </div>
                        <s.icon className="w-10 h-10 text-cad-accent group-hover:scale-110 transition-transform" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                    <p className="text-sm text-cad-muted leading-relaxed">{s.desc}</p>
                </div>
             ))}
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ title, desc, icon: Icon, color, accentColor, comingSoon }: any) => (
    <div className={`glass-panel p-8 rounded-3xl group border-white/5 hover:border-${color}-500/30 transition-all duration-500 overflow-hidden relative h-full`}>
        <div className={`absolute -right-10 -top-10 w-40 h-40 bg-${color}-500/5 rounded-full blur-3xl pointer-events-none group-hover:opacity-100 opacity-60 transition-opacity`}></div>

        <div className="relative z-10 flex flex-col h-full justify-between">
            <div>
                <div className={`w-12 h-12 rounded-xl bg-${color}-500/20 border border-${color}-500/30 flex items-center justify-center text-${color}-400 mb-6 shadow-glow`}>
                    <Icon className="w-6 h-6" />
                </div>
                <h3 className={`text-2xl font-bold mb-4 group-hover:text-${color}-400 transition-colors`}>{title}</h3>
                <p className="text-cad-muted leading-relaxed text-sm mb-8">{desc}</p>
            </div>

            {comingSoon ? (
                <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-cad-muted cursor-default">
                    Coming Soon
                </div>
            ) : (
                <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-cad-muted group-hover:text-white transition-colors cursor-pointer group/btn">
                    Learn More <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </div>
            )}
        </div>
    </div>
);

const PlatformFeatures = () => {
    return (
        <section id="features" className="py-32 bg-[#050505]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-16 px-4">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">Enterprise-Grade Tools for Modern Teams</h2>
                        <p className="text-lg text-cad-muted">Everything you need to deliver world-class infrastructure design.</p>
                    </div>
                    <button className="text-sm font-bold text-cad-accent hover:text-white transition-colors uppercase tracking-widest flex items-center gap-2 group">
                        Explore Ecosystem <ExternalLink className="w-4 h-4" />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <FeatureCard 
                        title="AI Matching" 
                        desc="Advanced algorithms find the precise engineer for your unique structural challenges."
                        icon={Cpu}
                        color="purple"
                    />
                    <FeatureCard 
                        title="Studio 2.0" 
                        desc="Collaborative design review with real-time markups and 3D visualization."
                        icon={Box}
                        color="blue"
                    />
                    <FeatureCard 
                        title="Storage" 
                        desc="Military-grade encryption for your intellectual property and heavy CAD files."
                        icon={ShieldCheck}
                        color="emerald"
                    />
                    <FeatureCard
                        title="Academy"
                        desc="Upskill with professional-led courses on BIM, Revit, and sustainable design."
                        icon={GraduationCap}
                        color="amber"
                        comingSoon
                    />
                </div>
            </div>
        </section>
    );
};

const ValueSection = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/10 rounded-[3rem] overflow-hidden border border-white/10">
          {/* For Freelancers */}
          <div className="p-16 bg-cad-dark relative group overflow-hidden">
            <div className="absolute inset-0 bg-transparent group-hover:bg-cad-accent/5 transition-colors duration-700"></div>
            <div className="relative z-10">
              <h3 className="text-4xl font-bold mb-6">For Freelancers</h3>
              <p className="text-cad-muted text-lg mb-10 leading-relaxed">
                Turn your technical expertise into a thriving professional career. Whether you're a student or a veteran Engineer.
              </p>
              <ul className="space-y-5 mb-12">
                {["Global job opportunities", "Guaranteed payments via Escrow", "Build a verified portfolio", "Access to training courses"].map((t, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-medium">
                        <CheckCircle2 className="w-5 h-5 text-cad-accent" />
                        {t}
                    </li>
                ))}
              </ul>
              <button className="glass-panel px-8 py-4 rounded-2xl font-bold w-full md:w-auto hover:bg-cad-accent hover:text-cad-dark transition-all duration-500">
                Register as Designer
              </button>
            </div>
          </div>

          {/* For Clients */}
          <div className="p-16 bg-cad-dark relative group overflow-hidden">
          <div className="absolute inset-0 bg-transparent group-hover:bg-blue-500/5 transition-colors duration-700"></div>
            <div className="relative z-10">
              <h3 className="text-4xl font-bold mb-6">For Clients</h3>
              <p className="text-cad-muted text-lg mb-10 leading-relaxed">
                Scale your technical teams instantly. Hire affordable, high-quality CAD talent for any project size.
              </p>
              <ul className="space-y-5 mb-12">
                {["Fast delivery for urgent projects", "Vetted professional engineers", "Full IP rights & secure storage", "Reduced overhead costs"].map((t, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-medium">
                        <CheckCircle2 className="w-5 h-5 text-blue-500" />
                        {t}
                    </li>
                ))}
              </ul>
              <button className="glass-panel px-8 py-4 rounded-2xl font-bold w-full md:w-auto hover:bg-blue-500 hover:text-cad-dark transition-all duration-500">
                Hire a Specialist
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  return (
    <section className="py-32 relative">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <div className="glass-panel p-16 rounded-[3rem] border border-cad-accent/30 relative overflow-hidden bg-gradient-to-br from-cad-accent/10 to-transparent">
          <div className="absolute -top-24 -left-20 w-64 h-64 bg-cad-accent/20 rounded-full blur-[100px]"></div>
          <div className="absolute -bottom-24 -right-20 w-64 h-64 bg-blue-500/20 rounded-full blur-[100px]"></div>
          
          <div className="relative z-10">
            {/* <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter">Ready to redesign <br />the world?</h2> */}
            <p className="text-xl text-cad-muted mb-12 max-w-2xl mx-auto font-light">
              Join thousands of professionals and organizations building safer, faster infrastructure today.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="w-full sm:w-auto bg-cad-accent text-cad-dark px-10 py-5 rounded-2xl font-bold text-xl shadow-glow-accent hover:bg-violet-400 transition-all flex items-center justify-center gap-3 active:scale-95">
                Start My Application <ChevronRight className="w-6 h-6" />
              </button>
              <button className="w-full sm:w-auto glass-panel px-10 py-5 rounded-2xl font-bold text-xl hover:bg-white/5 transition-all">
                Post a Job
              </button>
            </div>
            
            <div className="mt-12 flex items-center justify-center gap-8 text-[10px] font-bold text-cad-muted uppercase tracking-[0.2em]">
                <div className="flex items-center gap-2"><Globe className="w-4 h-4" /> Global Talent</div>
                <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> Secure Escrow</div>
                <div className="flex items-center gap-2"><Clock className="w-4 h-4" /> 24/7 Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-20 border-t border-white/5 bg-black/40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 mb-20">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-cad-accent rounded-lg flex items-center justify-center">
                <Layers className="w-5 h-5 text-cad-dark" />
              </div>
              <span className="font-bold text-xl">DesignLynk</span>
            </div>
            <p className="text-cad-muted text-sm max-w-xs leading-relaxed">
              Accelerating global infrastructure design for disaster recovery and sustainable development.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Platform</h4>
            <ul className="space-y-4 text-sm text-cad-muted font-medium">
              <li><a href="#" className="hover:text-cad-accent transition-colors">Marketplace</a></li>
              <li><a href="#" className="hover:text-cad-accent transition-colors">Collaboration</a></li>
              <li><a href="#" className="hover:text-cad-accent transition-colors">Academy</a></li>
              <li><a href="#" className="hover:text-cad-accent transition-colors">Storage</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Resources</h4>
            <ul className="space-y-4 text-sm text-cad-muted font-medium">
              <li><a href="#" className="hover:text-cad-accent transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-cad-accent transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-cad-accent transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-cad-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Legal</h4>
            <ul className="space-y-4 text-sm text-cad-muted font-medium">
              <li><a href="#" className="hover:text-cad-accent transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-cad-accent transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-cad-accent transition-colors">Cookie Policy</a></li>
            </ul>
          </div>

          <div className="col-span-2 lg:col-span-1">
             <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Social</h4>
             <div className="flex gap-4">
                {[1,2,3,4].map(i => <div key={i} className="w-10 h-10 rounded-full glass-panel flex items-center justify-center hover:bg-cad-accent hover:text-cad-dark transition-colors cursor-pointer">
                    <Globe className="w-5 h-5" />
                </div>)}
             </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-10 border-t border-white/5 text-[10px] font-bold text-cad-muted uppercase tracking-[0.2em]">
          <div>© 2026 DesignLynk Inc. All rights reserved.</div>
          <div className="flex gap-8">
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <main className="min-h-screen selection:bg-cad-accent selection:text-cad-dark custom-scrollbar">
      <Navbar />
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <HowItWorks />
      <PlatformFeatures />
      <ValueSection />
      <CTASection />
      <Footer />
    </main>
  );
}
