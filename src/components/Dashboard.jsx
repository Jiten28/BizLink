import Badge from "./Badge";

export default function Dashboard({ selectedMatch, onAnalyze }) {
    const steps = [
        "NDA Signed",
        "Data Room",
        "Due Diligence",
        "Negotiation",
        "Closing",
    ];

    return (
    <div className="p-6 rounded-lg bg-white dark:bg-[#222831] shadow">
        <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">
        Deal Process
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2">
            <div className="space-y-3">
            {steps.map((s, i) => (
                <div
                key={s}
                className="p-3 rounded border dark:border-gray-700 flex items-center justify-between bg-white/30 dark:bg-white/5"
                >
                <div>
                    <div className="text-sm font-medium text-gray-800 dark:text-gray-200">
                    {s}
                    </div>
                    <div className="text-xs text-gray-500">
                    {i === 0
                        ? "Completed"
                        : i === 1
                        ? "In progress"
                        : "Pending"}
                    </div>
                </div>
                <div>
                    {i === 1 && (
                    <button
                        onClick={() => onAnalyze()}
                        className="px-3 py-1 rounded bg-[#00ADB5] text-black text-sm"
                    >
                        Analyze Docs
                    </button>
                    )}
                </div>
                </div>
            ))}
            </div>
        </div>
        <div className="p-3 rounded border dark:border-gray-700 bg-white/10">
            <h4 className="text-sm font-semibold mb-2">Deal Summary</h4>
            {selectedMatch ? (
            <div>
                <div className="text-sm">
                Match with <strong>{selectedMatch.name}</strong>
                </div>
                <div className="text-xs text-gray-500">
                Budget: {selectedMatch.budget}
                </div>
                <div className="mt-3">
                <Badge>Risk: Medium</Badge>
                <Badge>
                  AI Score: {(selectedMatch.score * 100).toFixed(0)}%
                </Badge>
                </div>
            </div>
            ) : (
            <div className="text-sm text-gray-500">
                No active match. Accept a buyer to begin.
            </div>
            )}
        </div>
        </div>
    </div>
    );
}
