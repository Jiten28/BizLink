import { useState } from "react";
import * as pdfjsLib from "pdfjs-dist";

// ✅ Proper worker setup for Vite/React
pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

export default function Dashboard({ role, activeMatch, onAnalyzeDocs, setDocumentText }) {
  const [tempDoc, setTempDoc] = useState("");

  async function handleFileUpload(e) {
    const file = e.target.files[0];
    if (!file) return;

    if (file.type === "text/plain") {
      const text = await file.text();
      setTempDoc(text);
    } 
    else if (file.type === "application/pdf") {
      const reader = new FileReader();
      reader.onload = async function () {
        const typedarray = new Uint8Array(this.result);
        const pdf = await pdfjsLib.getDocument(typedarray).promise;
        let extracted = "";
        for (let i = 1; i <= pdf.numPages; i++) {
          const page = await pdf.getPage(i);
          const content = await page.getTextContent();
          extracted += content.items.map((s) => s.str).join(" ") + "\n";
        }
        setTempDoc(extracted);
      };
      reader.readAsArrayBuffer(file);
    } 
    else {
      alert("Only TXT and PDF files are supported in this demo.");
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      <div className="md:col-span-2 space-y-3">
        <h2 className="text-lg font-semibold mb-3">Deal Process</h2>

        <div className="p-4 rounded bg-gray-800/30">
          <div className="font-semibold">NDA Signed</div>
          <div className="text-sm text-gray-500">Completed</div>
        </div>

        <div className="p-4 rounded bg-gray-800/30">
          <div className="font-semibold mb-2">Data Room</div>
          <textarea
            className="w-full p-2 rounded border dark:bg-[#393E46] dark:border-gray-700 text-sm"
            rows={4}
            placeholder="Paste your document text here..."
            value={tempDoc}
            onChange={(e) => setTempDoc(e.target.value)}
          />
          <input
            type="file"
            accept=".txt,.pdf"
            onChange={handleFileUpload}
            className="mt-2"
          />
          <button
            onClick={() => {
              if (tempDoc.trim() !== "") {
                setDocumentText(tempDoc);
                onAnalyzeDocs();
              } else {
                alert("Please paste or upload a document before analyzing.");
              }
            }}
            className="mt-2 px-4 py-2 bg-[#00ADB5] text-black rounded"
          >
            Analyze Docs
          </button>
        </div>

        <div className="p-4 rounded bg-gray-800/30">
          <div className="font-semibold">Due Diligence</div>
          <div className="text-sm text-gray-500">Pending</div>
        </div>
        <div className="p-4 rounded bg-gray-800/30">
          <div className="font-semibold">Negotiation</div>
          <div className="text-sm text-gray-500">Pending</div>
        </div>
        <div className="p-4 rounded bg-gray-800/30">
          <div className="font-semibold">Closing</div>
          <div className="text-sm text-gray-500">Pending</div>
        </div>
      </div>

      <div className="p-4 rounded bg-gray-800/30">
        <h3 className="font-semibold">Deal Summary</h3>
        {activeMatch ? (
          <div className="mt-3 space-y-1 text-sm">
            <div><strong>Name:</strong> {activeMatch.name}</div>
            <div><strong>Industry:</strong> {activeMatch.industry}</div>
            <div><strong>Revenue:</strong> {activeMatch.revenue}</div>
            <div><strong>Location:</strong> {activeMatch.location}</div>
            <p className="mt-2 text-gray-400">{activeMatch.summary}</p>
          </div>
        ) : (
          <p className="text-sm text-gray-500">No active match. Accept a buyer to begin.</p>
        )}
      </div>
    </div>
  );
}
