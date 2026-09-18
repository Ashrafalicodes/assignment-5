import { FiX } from "react-icons/fi";
import type { Ijob } from "./types/Type";

export interface AddprojectProps {
  saved: Ijob[];
  handleClearAll: () => void;
  onRemove: (id: string) => void;
}

export default function Addproject({ saved, handleClearAll, onRemove }: AddprojectProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm">
      <h2 className="text-base font-bold text-gray-900 mb-1">Your Stack</h2>

      <p className="text-sm text-gray-400 mb-3">
        {saved.length === 0
          ? "No technologies selected yet."
          : `${saved.length} technolog${saved.length > 1 ? "ies" : "y"} selected.`}
      </p>

      {saved.length === 0 ? (
        <div className="border border-dashed border-gray-300 rounded-xl py-6 flex items-center justify-center">
          <p className="text-xs text-gray-400">Your stack is empty.</p>
        </div>
      ) : (
        <>
          <ul className="space-y-2">
            {saved.map((item) => (
              <li
                key={item.id}
                className="flex items-center gap-3 border border-gray-200 rounded-xl px-3 py-2"
              >
                <img
                  src={item.icon}
                  alt={item.name}
                  className="w-8 h-8 object-contain"
                />
                <div>
                  <p className="text-sm font-medium text-gray-800">
                    {item.name}
                  </p>
                  <p className="text-xs text-gray-400">{item.category}</p>
                </div>

                <button
                  type="button"
                  className="ml-auto text-nav-icon hover:text-coral"
                  // onClick={() => onRemove(item.id)}
                  aria-label={`Remove ${item.name}`}
                >
                  <FiX/>
                </button>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={handleClearAll}
            className="btn btn-xs sm:btn-sm mt-3 w-full cursor-pointer"
          >
            Remove All
          </button>
        </>
      )}
    </div>
  );
}