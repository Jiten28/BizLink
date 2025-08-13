import { useState } from "react";

export default function OnboardingForm({ role, onComplete }) {
  const [form, setForm] = useState({
    budget: "",
    industries: "",
    location: "",
    timeline: "",
    experience: "",
  });
  const [error, setError] = useState("");

  function update(k, v) {
    setForm((prev) => ({ ...prev, [k]: v }));
  }

  function handleSubmit() {
    if (!form.budget || !form.industries || !form.location || !form.timeline || !form.experience) {
      setError("Please fill all fields before submitting.");
      return;
    }
    setError("");

    if (role === "buyer") {
      form.demoMatch = {
        name: "Acme SaaS Solutions",
        industry: "SaaS",
        revenue: "₹50L",
        location: "Mumbai, India",
        summary: "A profitable SaaS company specializing in B2B workflow automation with 1,200 active clients.",
      };
    }

    onComplete(form);
  }

  return (
    <div className="max-w-3xl mx-auto my-8 p-6 rounded-lg bg-white dark:bg-[#222831] shadow">
      <h3 className="text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-100">
        {role === "buyer" ? "Buyer" : "Seller"} Onboarding
      </h3>
      <p className="text-sm text-gray-500 mb-4">
        A short 5-question form to help us match you quickly.
      </p>

      {error && <div className="mb-3 text-sm text-red-600">{error}</div>}

      <div className="space-y-3">
        {[
          { label: "Budget / Revenue range", key: "budget", placeholder: role === "buyer" ? "Example: ₹30L - ₹60L" : "Example: ₹25L - ₹50L revenue" },
          { label: "Industry preferences", key: "industries", placeholder: "SaaS, E-commerce, B2B" },
          { label: "Location", key: "location", placeholder: "City, Country" },
          { label: "Experience", key: "experience", placeholder: "Years of relevant experience" }
        ].map((f) => (
          <div key={f.key}>
            <label className="block text-sm mb-1">{f.label}</label>
            <input
              value={form[f.key]}
              onChange={(e) => update(f.key, e.target.value)}
              className="w-full p-3 rounded border dark:bg-[#393E46] dark:border-gray-700"
              placeholder={f.placeholder}
            />
          </div>
        ))}

        <div>
          <label className="block text-sm mb-1">Timeline</label>
          <select
            value={form.timeline}
            onChange={(e) => update("timeline", e.target.value)}
            className="w-full p-3 rounded border dark:bg-[#393E46] dark:border-gray-700"
          >
            <option value="">Select</option>
            <option value="<1m">Less than 1 month</option>
            <option value="1-3m">1–3 months</option>
            <option value=">3m">3+ months</option>
          </select>
        </div>
      </div>

      <div className="mt-4 flex justify-end">
        <button onClick={handleSubmit} className="px-4 py-2 rounded bg-[#00ADB5] text-black font-semibold">
          Complete Onboarding
        </button>
      </div>
    </div>
  );
}
