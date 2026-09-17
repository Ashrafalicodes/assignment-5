export interface AddprojectProps {
    prop: string
}

export default function Addproject({ prop }: AddprojectProps) {
    
    
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
      {/* Title */}
      <h2 className="text-lg font-bold text-gray-900 mb-1">
        Your Stack
      </h2>

      {/* Subtitle */}
      <p className="text-sm text-gray-400 mb-4">
        No technologies selected yet.
      </p>

      {/* Empty state box */}
      <div className="border border-dashed border-gray-300 rounded-xl py-10 flex items-center justify-center">
        <p className="text-sm text-gray-400">
          Your stack is empty.
        </p>
      </div>
    </div>
  )
}
    
