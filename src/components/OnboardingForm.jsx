import { useState } from "react";

export default function OnboardingForm({ role, onComplete }) {
    const [form, setForm] = useState({
    budget: "",
    industries: "",
    location: "",
    timeline: "",
    experience: "",
    });

    function update(k, v) {
    setForm((prev) => ({ ...prev, [k]: v }));
    }

    return (
    <div className="max-w-3xl mx-auto my-8 p-6 rounded-lg bg-white dark:bg-[#222831] shadow">
        <h3 className="text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-100">
        {role === "buyer" ? "Buyer" : "Seller"} Onboarding
        </h3>
        <p className="text-sm text-gray-500 mb-4">
        A short 5-question form to help us match you quickly.
        </p>

        <div className="space-y-3">
        <div>
            <label className="block text-sm mb-1">Budget / Revenue range</label>
            <input
            value={form.budget}
            onChange={(e) => update("budget", e.target.value)}
            className="w-full p-3 rounded border dark:bg-[#393E46] dark:border-gray-700"
            placeholder={
                role === "buyer"
                ? "Example: ₹30L - ₹60L"
                : "Example: ₹25L - ₹50L revenue"
            }
            />
        </div>
        <div>
            <label className="block text-sm mb-1">Industry preferences</label>
            <input
            value={form.industries}
            onChange={(e) => update("industries", e.target.value)}
            className="w-full p-3 rounded border dark:bg-[#393E46] dark:border-gray-700"
            placeholder="SaaS, E-commerce, B2B"
            />
        </div>
        <div>
            <label className="block text-sm mb-1">Location</label>
            <input
            value={form.location}
            onChange={(e) => update("location", e.target.value)}
            className="w-full p-3 rounded border dark:bg-[#393E46] dark:border-gray-700"
            placeholder="City, Country"
            />
        </div>
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
        <div>
            <label className="block text-sm mb-1">Experience</label>
            <input
            value={form.experience}
            onChange={(e) => update("experience", e.target.value)}
            className="w-full p-3 rounded border dark:bg-[#393E46] dark:border-gray-700"
            placeholder="Years of relevant experience"
            />
        </div>
        </div>

        <div className="mt-4 flex gap-3 justify-end">
        <button
            onClick={() => onComplete(form)}
            className="px-4 py-2 rounded bg-[#00ADB5] text-black font-semibold"
        >
            Complete Onboarding
        </button>
        </div>
    </div>
    );
}
