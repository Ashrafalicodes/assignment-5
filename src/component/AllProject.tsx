        
import type { Ijob } from "./types/Type"

export interface AllProjectProps {
    singlebook: Ijob
    handleClick:(tech:Ijob)=> void
    saved : Ijob[]
    
}

export default function AllProject({ singlebook,handleClick,saved }: AllProjectProps) {
    const selected = saved.some((item)=> item.id===singlebook.id)
    console.log(selected);
    
    return (
        <div className=" bg-white shadow-sm border border-gray-200 rounded-xl p-6 relative">
            
            {/* Badge - top right */}
            {singlebook.badge && (
                <span className="absolute top-6 right-6 bg-blue-50 text-blue-500 text-xs font-medium px-3 py-1 rounded-full">
                    {singlebook.badge}
                </span>
            )}

            {/* Icon */}
            <img
                src={singlebook.icon}
                className="w-10 h-10 mb-4"
            />

            {/* Title */}
            <h2 className="text-xl font-bold text-gray-900 mb-2">
                {singlebook.name}
            </h2>

            {/* Description */}
            <p className="text-sm text-gray-500 mb-4 leading-relaxed">
                {singlebook.description}
            </p>

            {/* Tags + Rating */}
            <div className="flex justify-between items-center gap-3 mb-5">
                <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-md">
                    {singlebook.category}
                </span>
                <span className="text-gray-500 text-sm">
                    {singlebook.difficulty}
                </span>
                <span className="flex items-center gap-1 text-sm text-gray-700">
                    <span className="text-yellow-400">★</span>
                    {singlebook.rating}
                </span>
            </div>

            {/* Button */}
 
            <button className="w-full bg-black text-white font-medium py-3 rounded-lg hover:bg-gray-800 transition" 
            disabled={selected}
            onClick={() => handleClick(singlebook)}>
                Add to Stack
            </button>
        </div>
    )
}