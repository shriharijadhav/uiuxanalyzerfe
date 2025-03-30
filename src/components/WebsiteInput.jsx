import { useState } from "react";
import axios from "axios";

export default function WebsiteInput({ setAnalysis }) {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const analyzeWebsite = async () => {
    if (!url) return;
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:5000/analyze", { url });
      setAnalysis(response.data);
    } catch (error) {
      console.error("Error analyzing website:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex gap-2">
      <input
        type="text"
        className="border p-2 rounded-md w-80"
        placeholder="Enter website URL..."
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button
        onClick={analyzeWebsite}
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        disabled={loading}
      >
        {loading ? "Analyzing..." : "Analyze"}
      </button>
    </div>
  );
}
