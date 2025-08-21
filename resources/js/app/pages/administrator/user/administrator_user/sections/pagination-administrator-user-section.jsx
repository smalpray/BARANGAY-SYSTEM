import React from 'react'

export default function PaginationAdministratorUserSection() {
    
    return (
        <>
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex justify-between items-center">
                <div className="text-sm text-gray-700">
                    Showing 1 to 2 of 2 entries
                </div>
                <div className="flex items-center gap-2">
                    <button className="px-3 py-1 text-gray-500 hover:text-gray-700 transition-colors">
                        Previous
                    </button>
                    <button className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                        1
                    </button>
                    <button className="px-3 py-1 text-gray-500 hover:text-gray-700 transition-colors">
                        Next
                    </button>
                </div>
            </div>
        </>
    )
}
