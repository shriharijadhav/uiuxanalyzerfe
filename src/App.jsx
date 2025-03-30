import { useState } from "react";
import WebsiteInput from "./components/WebsiteInput";
import Results from "./components/Results";

export default function App() {
  const [analysis, setAnalysis] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Website UI/UX Analyzer
      </h1>
      <WebsiteInput setAnalysis={setAnalysis} />
      {analysis && <Results analysis={analysis} />}
    </div>
  );
}
