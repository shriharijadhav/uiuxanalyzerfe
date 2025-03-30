 import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { LinearProgress } from "@mui/material";

export default function Results({ analysis }) {
  const [expandedCategory, setExpandedCategory] = useState(null);

  const toggleCategory = (category) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  return (
    <div className="max-w-3xl mx-auto mt-6 bg-white shadow-lg rounded-xl p-6">
      {/* Header */}
      <h2 className="text-2xl font-bold text-gray-800 mb-4">🔍 UI/UX Analysis</h2>
      
      {/* General Info */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <p className="text-lg font-semibold text-gray-700">{analysis.title}</p>
        <p className="text-sm text-gray-600">{analysis.description}</p>
      </div>

      {/* UI/UX Score */}
      <div className="mt-4 p-4 bg-blue-100 rounded-lg text-center">
        <h3 className="text-xl font-semibold text-blue-900">🚀 UI/UX Score</h3>
        <p className="text-3xl font-bold text-blue-700 mt-2">{analysis.uiuxScore.toFixed(2)}%</p>
      </div>

      {/* Scores Section */}
      <div className="mt-4">
        {Object.entries(analysis.scores).map(([category, data]) => {
          const categoryTitle = 
            category === "performance" ? "📊 Performance" :
            category === "bestPractices" ? "🛠 Best Practices" : "♿ Accessibility";

          return (
            <div key={category} className="mt-4 p-4 bg-gray-100 rounded-lg shadow-md">
              {/* Score Header */}
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleCategory(category)}
              >
                <p className="text-lg font-semibold text-gray-800">{categoryTitle}</p>
                <p className="text-xl font-bold text-gray-700">{data.score}%</p>
                {expandedCategory === category ? <ChevronUp /> : <ChevronDown />}
              </div>

              {/* Progress Bar */}
              <LinearProgress variant="determinate" value={data.score} className="mt-2" />

              {/* Expandable Details */}
              {expandedCategory === category && (
                <ul className="mt-3 list-disc list-inside text-gray-700 text-sm">
                  {data.reasons.map((reason, index) => (
                    <li key={index} className="mt-2">
                      <strong>{reason.title}:</strong> {reason.description}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </div>

      {/* Screenshot */}
      {analysis.screenshot && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-700">📸 Website Screenshot</h3>
          <img src={analysis.screenshot} alt="Website Screenshot" className="mt-2 w-full rounded-lg shadow-md" />
        </div>
      )}
    </div>
  );
}
