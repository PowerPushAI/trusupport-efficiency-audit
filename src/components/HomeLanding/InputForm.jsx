import React from "react";
import { Clock, MessageSquare, Zap } from "lucide-react";

const InputForm = ({ formData, setFormData, onCalculate }) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">
        <Zap className="text-blue-600" /> Support Metrics
      </h2>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Avg. First Response (Minutes)
          </label>
          <input
            type="number"
            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition"
            placeholder="e.g. 30"
            onChange={(e) =>
              setFormData({ ...formData, firstResponse: e.target.value })
            }
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Resolution Time (Minutes)
          </label>
          <input
            type="number"
            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition"
            placeholder="e.g. 120"
            onChange={(e) =>
              setFormData({ ...formData, resolutionTime: e.target.value })
            }
          />
        </div>

        <button
          onClick={onCalculate}
          className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg mt-4 transition-all transform hover:scale-[1.02]"
        >
          Generate SLA Report
        </button>
      </div>
    </div>
  );
};

export default InputForm;
