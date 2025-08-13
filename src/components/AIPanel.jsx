import { useMemo } from "react";

export default function AIPanel({ visible, documentText, onClose }) {
    if (!visible) return null;

    const summary = useMemo(() => {
    if (!documentText)
        return "No document uploaded. Upload a financial or legal document to see a summary.";
    const sentences = documentText.split(".").filter(Boolean);
    return (
        sentences.slice(0, 2).join(". ") +
        (sentences.length > 2 ? "..." : "")
    );
    }, [documentText]);

    return (
    <div className="fixed right-4 top-20 w-96 p-4 rounded-lg bg-white dark:bg-[#222831] shadow-lg border">
        <div className="flex items-start justify-between">
        <h4 className="font-semibold">AI Document Analyzer</h4>
        <button onClick={onClose} className="text-sm text-gray-500">
            Close
        </button>
        </div>
        <div className="mt-3 text-sm text-gray-700 dark:text-gray-200">
        <div className="mb-2 text-xs text-gray-500">Summary</div>
        <div className="p-3 rounded bg-gray-50 dark:bg-[#393E46]">
            {summary}
        </div>
        <div className="mt-3 text-xs text-gray-500">Risk Insights</div>
        <ul className="list-disc list-inside text-sm mt-1">
            <li>Revenue concentration: medium</li>
            <li>Customer churn: low</li>
            <li>Legal flags: none found</li>
        </ul>
        </div>
    </div>
    );
}
