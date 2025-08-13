import { useState } from "react";
import Header from "./components/Header";
import Landing from "./components/Landing";
import OnboardingForm from "./components/OnboardingForm";
import ProfileCard from "./components/ProfileCard";
import Dashboard from "./components/Dashboard";
import AIPanel from "./components/AIPanel";

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
  const [theme, setTheme] = useState("dark");
  const [stage, setStage] = useState("landing");
  const [role, setRole] = useState(null);
  const [buyers, setBuyers] = useState(MOCK_BUYERS);
  const [selectedMatch, setSelectedMatch] = useState(null);
  const [aiVisible, setAiVisible] = useState(false);
  const [docText, setDocText] = useState("");

  function handleChoose(r) {
    setRole(r);
    setStage("onboarding");
  }

  function handleOnboardingComplete() {
    if (role === "seller") setStage("browse");
    else setStage("dashboard");
  }

  function acceptBuyer(buyer) {
    setSelectedMatch(buyer);
    setStage("dashboard");
  }

  function rejectBuyer(buyer) {
    setBuyers((prev) => prev.filter((b) => b.id !== buyer.id));
  }

  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <div className="min-h-screen bg-[#EEEEEE] dark:bg-[#121217] text-gray-900 dark:text-gray-100 transition-colors">
        <Header theme={theme} setTheme={setTheme} />

        <main className="p-4 md:p-8">
          {stage === "landing" && <Landing onChoose={handleChoose} />}

          {stage === "onboarding" && (
            <OnboardingForm role={role} onComplete={handleOnboardingComplete} />
          )}

          {stage === "browse" && (
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Buyer Matches</h3>
                <div className="space-y-4">
                  {buyers.map((b) => (
                    <ProfileCard
                      key={b.id}
                      buyer={b}
                      onAccept={acceptBuyer}
                      onReject={rejectBuyer}
                      onView={(b) => {
                        setSelectedMatch(b);
                        setStage("dashboard");
                      }}
                    />
                  ))}
                </div>
              </div>
              <div>
                <Dashboard
                  selectedMatch={selectedMatch}
                  onAnalyze={() => setAiVisible(true)}
                />
                <div className="mt-4 p-4 rounded bg-white dark:bg-[#222831]">
                  <h4 className="font-semibold mb-2">Upload Document (mock)</h4>
                  <textarea
                    value={docText}
                    onChange={(e) => setDocText(e.target.value)}
                    placeholder="Paste a financial summary or term sheet here"
                    className="w-full h-32 p-2 rounded border dark:bg-[#393E46]"
                  ></textarea>
                  <div className="flex justify-end mt-2">
                    <button
                      onClick={() => setAiVisible(true)}
                      className="px-3 py-2 rounded bg-[#00ADB5] text-black"
                    >
                      Run AI Analyze
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {stage === "dashboard" && (
            <div className="max-w-5xl mx-auto">
              <Dashboard
                selectedMatch={selectedMatch}
                onAnalyze={() => setAiVisible(true)}
              />
            </div>
          )}
        </main>

        <AIPanel
          visible={aiVisible}
          documentText={docText}
          onClose={() => setAiVisible(false)}
        />

        <footer className="p-4 text-center text-xs text-gray-500">
          Built for Caprae Capital - BizLink demo
        </footer>
      </div>
    </div>
  );
}
