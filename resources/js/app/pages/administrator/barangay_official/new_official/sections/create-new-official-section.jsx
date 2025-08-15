import React from 'react'

export default function CreateNewOfficialSection() {
    return (
        <>
            <div className="py-6 flex items-center justify-end">
                <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200 flex items-center space-x-2">
                    <span className="text-lg">+</span>
                    <span>ADD NEW OFFICIAL</span>
                </button>
            </div>
        </>
    )
}
