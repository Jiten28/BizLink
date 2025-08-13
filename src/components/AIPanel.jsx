export default function AIPanel({ visible, documentText, onClose }) {
  if (!visible) return null;

  function analyzeText(text) {
    const lines = text.split("\n").map((l) => l.trim()).filter(Boolean);
    const summary = lines.slice(0, 3).join(" ");

    const riskIndex = lines.findIndex((l) => l.toLowerCase().includes("risk"));
    const risks = riskIndex !== -1
      ? lines.slice(riskIndex + 1).filter((l) => l.startsWith("-")).map((l) => l.replace(/^-/, "").trim())
      : [];

    const oppIndex = lines.findIndex((l) => l.toLowerCase().includes("opportunit"));
    const opportunities = oppIndex !== -1
      ? lines.slice(oppIndex + 1).filter((l) => l.startsWith("-")).map((l) => l.replace(/^-/, "").trim())
      : [];

    return { summary, risks, opportunities };
  }

  const { summary, risks, opportunities } = analyzeText(documentText);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-[#222831] p-6 rounded-lg w-full max-w-lg shadow-lg overflow-auto max-h-[90vh]">
        <h2 className="text-xl font-semibold mb-4">AI Document Analysis</h2>

        <h3 className="font-semibold">Summary</h3>
        <p className="mb-4 text-sm text-gray-700 dark:text-gray-300">{summary}</p>

        {risks.length > 0 && (
          <>
            <h3 className="font-semibold">Risks</h3>
            <ul className="list-disc pl-5 mb-4">
              {risks.map((risk, idx) => (
                <li key={idx} className="text-sm text-red-600 dark:text-red-400">{risk}</li>
              ))}
            </ul>
          </>
        )}

        {opportunities.length > 0 && (
          <>
            <h3 className="font-semibold">Opportunities</h3>
            <ul className="list-disc pl-5 mb-4">
              {opportunities.map((opp, idx) => (
                <li key={idx} className="text-sm text-green-600 dark:text-green-400">{opp}</li>
              ))}
            </ul>
          </>
        )}

        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded bg-[#00ADB5] text-black font-semibold"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
