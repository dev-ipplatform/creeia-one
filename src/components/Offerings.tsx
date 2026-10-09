import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { DatabaseZap, Workflow, Shield, ArrowRight, Briefcase, X } from 'lucide-react';

const pillars = [
  {
    id: "aura",
    icon: DatabaseZap,
    title: "Aura Underwriting Studio",
    subtitle: "For Funders & Co-Investors",
    desc: "Gain a proprietary patent origination, underwriting, and monitoring edge. We help you see better opportunities earlier, diligence them faster, and manage funded campaigns with absolute discipline.",
    features: [
      "Standardized, rapid underwriting workflow",
      "Faster time-to-conviction or high-quality rejection",
      "Transaction-aware capital and structuring logic",
      "Post-funding lifecycle and PTAB monitoring"
    ],
    whyItWins: "Reduce dead-end diligence costs and improve risk-adjusted deployments. We deliver investment-committee-ready outputs, not just raw patent analytics.",
    detailedDesc: "Aura Underwriting Studio is designed natively for litigation funders, co-investors, and major plaintiff-side firms. It compresses the time between initial matter intake and investment committee approval or rejection. Rather than unstructured consultant reviews or generic tool outputs, Aura provides standardized, finance-grade triage. We handle patent-family normalization, target mapping, evidence-of-use structuring, and preliminary risk flagging upfront, ensuring senior underwriters only spend time on high-conviction matters. Post-deployment, Aura shifts to continuous monitoring of PTAB activity, related dockets, and defendant developments to actively manage fund reserve implications.",
    detailedDeliverables: ["Reviewed Underwriting Reports", "Target & Venue Strategy Maps", "Economics & Structure Recommendations", "IC Memo Generation", "Ongoing Docket & Risk Monitoring"]
  },
  {
    id: "sentinel",
    icon: Workflow,
    title: "Sentinel Managed Desk",
    subtitle: "For Law Firms",
    desc: "Your external patent AI and monetization operating layer. Screen, package, and pursue stronger matters faster without forcing your firm to build untested internal AI infrastructure.",
    features: [
      "Rapid matter intake & case selection filtering",
      "White-labeled diligence and funding preparation",
      "Scale throughput without adding fixed headcount",
      "Mid-market portfolio opportunity unlocking"
    ],
    whyItWins: "We make your team more scalable and credible. You keep the client relationship and strategic advisory role, while we run the operating layer behind the scenes.",
    detailedDesc: "Sentinel enables law firms to handle a massively increased volume of inbound patent monetization opportunities without aggressively scaling expensive associate headcount. It serves as a white-labeled, managed-desk extension of the firm. By rapidly filtering out low-quality matters and structuring the high-potential ones into funding-ready packages, Sentinel allows partners to focus purely on case strategy, client development, and advocacy. Firms eliminate the reputational and operational risks of trying to build internal AI workflows from scratch, instead relying on Creeia One's validated, secure infrastructure.",
    detailedDeliverables: ["Rapid 48-72 Hour Portfolio Triage", "Ranked Patent Target Lists", "Go/No-Go Recommendation Memos", "White-Labeled Claim Workup Support", "Funder-Ready Packaging"]
  },
  {
    id: "equinox",
    icon: Briefcase,
    title: "Equinox IP Treasury",
    subtitle: "For Corporate Patent Owners",
    desc: "Turn unclear, underused portfolios into decision-ready monetization opportunities. We act as your external IP treasury desk, connecting deep analysis directly to execution pathways.",
    features: [
      "Portfolio monetization readiness & scoring",
      "Non-core asset evaluation and spin-out analysis",
      "Board-ready, business-aligned outputs",
      "Multiple monetization path views (sell, license, JV)"
    ],
    whyItWins: "Stop relying on fragmented advisors or generic analytics. We provide ongoing, actionable clarity on what your portfolio is actually worth and what to do with it.",
    detailedDesc: "Many corporations possess substantial, undermanaged intellectual property portfolios. Equinox IP Treasury cuts through the noise of legacy assets to identify what is truly monetizable. Rather than simply delivering an analytics dashboard, Equinox functions as an external treasury unit: we evaluate the portfolio, identify core vs. non-core assets, and then recommend definitive strategic pathways—whether that is structured divestiture, pre-suit licensing, litigation funding, joint venture, or strategic abandonment. We provide the Board-ready materials necessary to secure internal buy-in for capital allocation decisions.",
    detailedDeliverables: ["Portfolio Scoring & Categorization", "Non-Core Asset Identification", "Divestiture & Packaging Strategy", "Executive/Board Presentation Materials", "Ongoing Market Valuation Monitoring"]
  },
  {
    id: "vertex",
    icon: Shield,
    title: "Vertex AI Assurance",
    subtitle: "Enterprise Governance",
    desc: "A trusted AI adoption and evaluation layer for legal teams. We evaluate external vendors, audit workflows, and establish secure AI governance without reputational risk.",
    features: [
      "Patent AI workflow audits and roadmapping",
      "Vendor hallucination, security & capability reviews",
      "Approved use-case and QA standard definition",
      "Traceable, auditable workflow design"
    ],
    whyItWins: "Avoid the reputational damage of bad AI outputs. We help you navigate legal tech FOMO with independent, domain-expert evaluations and governance frameworks.",
    detailedDesc: "Legal departments and law firms are facing immense pressure to adopt AI, balanced against profound fears of hallucination, data leakage, and reputational harm. Vertex AI Assurance provides an independent, domain-expert layer between your organization and the noisy AI vendor ecosystem. We do not sell generic tools; we audit your specific workflows, evaluate potential vendors against rigorous patent-specific testing regimens, and design the safe operating procedures your team needs to adopt these technologies compliantly. We define exactly where AI is safe to use and where human-in-the-loop validation remains mandatory.",
    detailedDeliverables: ["Current State AI Workflow Audits", "Tool/Vendor Capability Evaluations", "Secure Model Governance Recommendations", "Prompt & Workflow Standardization", "Internal QA & Training Playbooks"]
  }
];

export function Offerings() {
  const [activeId, setActiveId] = useState(pillars[0].id);
  const [expandedOffer, setExpandedOffer] = useState<string | null>(null);

  const activePillar = pillars.find(p => p.id === activeId);
  const expandedData = pillars.find(p => p.id === expandedOffer);

  return (
    <section id="solutions" className="py-24 md:py-32 px-6 md:px-12 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto relative">
        {/* Modals for Expanded View */}
        <AnimatePresence>
          {expandedData && (
            <>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setExpandedOffer(null)}
                className="fixed inset-0 bg-black/80 z-[60] backdrop-blur-sm cursor-pointer"
              />
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.95 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl max-h-[90vh] overflow-y-auto glass thin-border rounded-sm z-[70] p-8 md:p-12 shadow-2xl bg-[#080808]"
              >
                <button 
                  onClick={() => setExpandedOffer(null)}
                  className="absolute top-6 right-6 w-10 h-10 rounded-sm border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors text-white/50 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
                
                <div className="mb-6 w-16 h-16 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-white/80">
                  <expandedData.icon className="w-8 h-8" strokeWidth={1} />
                </div>
                
                <span className="text-[10px] uppercase font-semibold tracking-[0.3em] text-[#A1A1AA] block mb-2">{expandedData.subtitle}</span>
                <h2 className="font-display text-4xl md:text-5xl font-light italic mb-8 text-white">{expandedData.title}</h2>
                
                <div className="space-y-10">
                  <div>
                    <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-white/40 mb-4 tracking-widest border-b border-white/10 pb-4">Overview</h3>
                    <p className="text-base text-[#A1A1AA] leading-relaxed font-light">{expandedData.detailedDesc}</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div>
                      <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-white/40 mb-4 tracking-widest border-b border-white/10 pb-4">Key Capabilities</h3>
                      <ul className="space-y-3">
                         {expandedData.features.map(f => (
                           <li key={f} className="flex items-start gap-3 text-sm text-[#A1A1AA] font-light">
                             <span className="w-1.5 h-1.5 rounded-full bg-white/20 mt-1.5 shrink-0" />
                             {f}
                           </li>
                         ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-white/40 mb-4 tracking-widest border-b border-white/10 pb-4">Specific Deliverables</h3>
                      <ul className="space-y-3">
                         {expandedData.detailedDeliverables.map(d => (
                           <li key={d} className="flex items-start gap-3 text-sm text-emerald-400/80 font-light">
                             <ArrowRight className="w-4 h-4 mt-0.5 shrink-0" strokeWidth={1.5} />
                             <span className="text-[#A1A1AA]">{d}</span>
                           </li>
                         ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:max-w-2xl"
          >
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light italic mb-6 tracking-tight leading-[1] text-[#E5E7EB]">
              The Engine & <br/><span className="text-white/40">The Expertise.</span>
            </h2>
            <p className="text-[#A1A1AA] text-sm md:text-base font-light text-balance">
              Deploy our capabilities however you operate. From full-service underwriting to augmenting your internal teams.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
           <button className="whitespace-nowrap px-8 py-3 thin-border text-[11px] uppercase tracking-widest font-semibold hover:bg-white/5 transition-all duration-300">
             Schedule Consultation
           </button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Sidebar Tabs */}
          <div className="lg:col-span-4 flex flex-col gap-2">
            {pillars.map((pillar) => (
              <button
                key={pillar.id}
                onClick={() => setActiveId(pillar.id)}
                className={`text-left p-6 flex flex-col gap-2 transition-all duration-300 border-l-2 ${
                  activeId === pillar.id 
                    ? 'border-white/60 bg-white/[0.03]' 
                    : 'border-transparent hover:border-white/20 hover:bg-white/[0.01]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <pillar.icon className={`w-4 h-4 transition-colors ${activeId === pillar.id ? 'text-white' : 'text-white/40'}`} strokeWidth={1.5} />
                  <span className={`text-[9px] uppercase font-semibold tracking-[0.3em] transition-colors ${activeId === pillar.id ? 'text-[#E5E7EB]' : 'text-[#A1A1AA]'}`}>
                    {pillar.subtitle}
                  </span>
                </div>
                <h3 className={`font-display text-2xl font-light italic transition-colors ${activeId === pillar.id ? 'text-white' : 'text-white/60'}`}>
                  {pillar.title}
                </h3>
              </button>
            ))}
          </div>

          {/* Active Content */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              {activePillar && (
                <motion.div
                  key={activePillar.id}
                  initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -10, filter: 'blur(4px)' }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="glass thin-border rounded-sm p-8 md:p-12"
                >
                  <div className="mb-8 w-12 h-12 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-white/80">
                    <activePillar.icon className="w-5 h-5" strokeWidth={1} />
                  </div>
                  
                  <h3 className="font-display text-3xl font-light italic mb-6 text-white">{activePillar.title}</h3>
                  <p className="text-sm md:text-base text-[#A1A1AA] leading-relaxed font-light mb-12 max-w-2xl">
                    {activePillar.desc}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                      <h4 className="text-[10px] uppercase font-semibold tracking-[0.3em] text-[#E5E7EB] mb-6 border-b border-white/10 pb-4">
                        Capabilities Summary
                      </h4>
                      <div className="space-y-4">
                        {activePillar.features.map(feat => (
                          <div key={feat} className="flex items-center gap-3 text-xs md:text-sm font-light text-[#A1A1AA]">
                            <div className="w-1 h-1 rounded-full bg-white/20" />
                            {feat}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col h-full">
                      <h4 className="text-[10px] uppercase font-semibold tracking-[0.3em] text-[#E5E7EB] mb-6 border-b border-white/10 pb-4">
                        The Advantage
                      </h4>
                      <p className="text-xs md:text-sm text-[#A1A1AA] font-light leading-relaxed mb-8">
                        {activePillar.whyItWins}
                      </p>
                      <div className="mt-auto pt-8">
                        <button 
                          onClick={() => setExpandedOffer(activePillar.id)}
                          className="flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] font-medium text-white hover:text-white/70 transition-colors group"
                        >
                          Explore Detailed Structure
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={1} />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

