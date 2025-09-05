import { useEffect, useState } from "react";
import Header from "./components/Header";
import Landing from "./components/Landing";
import OnboardingForm from "./components/OnboardingForm";
import ProfileCard from "./components/ProfileCard";
import Dashboard from "./components/Dashboard";
import AIPanel from "./components/AIPanel";

// Example buyers shown to SELLERS in the Browse stage
const MOCK_BUYERS = [
  {
    id: "b1",
    name: "Asha Ventures",
    budget: "₹30L - ₹60L",
    industries: ["SaaS", "E-commerce"],
    location: "Mumbai, India",
    experience: "5 yrs",
    verified: true,
    score: 0.82,
    bio: "Operator-investor focused on bootstrapped SaaS businesses.",
  },
  {
    id: "b2",
    name: "Nova Capital",
    budget: "₹1Cr - ₹2Cr",
    industries: ["Manufacturing", "B2B"],
    location: "Delhi, India",
    experience: "10 yrs",
    verified: false,
    score: 0.65,
    bio: "Growth-stage buyer looking for profitable businesses.",
  },
];

export default function App() {
  // theme + dark mode
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
  }, [theme]);

  // app state
  const [stage, setStage] = useState("landing");     // landing | onboarding | browse | dashboard
  const [role, setRole] = useState(null);            // "buyer" | "seller"
  const [buyers, setBuyers] = useState(MOCK_BUYERS); // shown to sellers
  const [activeMatch, setActiveMatch] = useState(null);

  // doc analysis state
  const [documentText, setDocumentText] = useState("");
  const [showAIPanel, setShowAIPanel] = useState(false);

  // --- navigation handlers ---
  function handleChoose(chosenRole) {
    setRole(chosenRole);
    setStage("onboarding");
  }

  // called by OnboardingForm; auto-fills match for buyers
  function handleOnboardingComplete(formData) {
    if (formData?.demoMatch) setActiveMatch(formData.demoMatch);

    if (role === "seller") setStage("browse");
    else setStage("dashboard");
  }

  // seller actions on Browse page
  function acceptBuyer(b) {
    // transform buyer card -> match shape expected by Dashboard
    setActiveMatch({
      name: b.name,
      industry: Array.isArray(b.industries) ? b.industries.join(", ") : b.industries,
      revenue: b.budget,
      location: b.location,
      summary: b.bio || "Qualified buyer with strong interest.",
    });
    setStage("dashboard");
  }
  function rejectBuyer(b) {
    setBuyers(prev => prev.filter(x => x.id !== b.id));
  }

  return (
    <div className="min-h-screen bg-[#EEEEEE] dark:bg-[#121217] text-gray-900 dark:text-gray-100 transition-colors">
      <Header theme={theme} setTheme={setTheme} />

      <main className="p-4 md:p-8">
        {/* Landing uses ALL components later; starts the flow */}
        {stage === "landing" && <Landing onChoose={handleChoose} />}

        {/* Onboarding (Buyer/Seller) */}
        {stage === "onboarding" && (
          <OnboardingForm role={role} onComplete={handleOnboardingComplete} />
        )}

        {/* SELLER Browse: shows ProfileCard list + Dashboard side-by-side */}
        {stage === "browse" && (
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Buyer Matches</h3>
              <div className="space-y-4">
                {buyers.map(b => (
                  <ProfileCard
                    key={b.id}
                    buyer={b}
                    onAccept={acceptBuyer}
                    onReject={rejectBuyer}
                    onView={acceptBuyer}
                  />
                ))}
              </div>
            </div>

            <Dashboard
              role={role}
              activeMatch={activeMatch}
              onAnalyzeDocs={() => setShowAIPanel(true)}
              setDocumentText={setDocumentText}
            />
          </div>
        )}

        {/* BUYER Dashboard */}
        {stage === "dashboard" && (
          <div className="max-w-6xl mx-auto">
            <Dashboard
              role={role}
              activeMatch={activeMatch}
              onAnalyzeDocs={() => setShowAIPanel(true)}
              setDocumentText={setDocumentText}
            />
          </div>
        )}
      </main>

      {/* AI Panel */}
      <AIPanel
        visible={showAIPanel}
        documentText={documentText}
        onClose={() => setShowAIPanel(false)}
      />

      <footer className="p-4 text-center text-xs text-gray-500">
        Built by Jiten Kumar — BizLink demo
      </footer>
    </div>
  );
}
