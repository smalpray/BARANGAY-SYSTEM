import React, { useEffect, useState } from 'react'
import ActionSection from './action-section';

export default function TableSection1() {
    const [positions, setPositions] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    useEffect(() => {
        setPositions([
          { id: 1, name: "SK KAGAWAD", limit: 7 },
          { id: 2, name: "CHAIRMAN", limit: 1 },
          { id: 3, name: "SECRETARY", limit: 1 },
          { id: 4, name: "KAGAWAD", limit: 7 },
          { id: 5, name: "JO", limit: 2 },
        ]);
      }, []);
  const filteredPositions = positions.filter((pos) =>
    pos.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div><div className="bg-white border border-blue-200 rounded-lg shadow-sm overflow-hidden">
          <table className="min-w-full divide-y divide-blue-200 text-sm">
            <thead className="bg-blue-500 text-left text-white uppercase text-xs font-medium">
              <tr>
                <th className="px-6 py-4">Position</th>
                <th className="px-6 py-4">Limit</th>
                <th className="px-6 py-4">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredPositions.map((pos, index) => (
                <tr
                  key={pos.id}
                  className={`hover:bg-blue-25 transition-colors duration-150 ${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  }`}
                >
                  <td className="px-6 py-4 text-gray-900 font-medium">{pos.name}</td>
                  <td className="px-6 py-4 text-gray-700">{pos.limit}</td>
                  <td className="px-6 py-4 space-x-2">
                    <ActionSection/>
                  </td>
                </tr>
              ))}
              {filteredPositions.length === 0 && (
                <tr>
                  <td colSpan="3" className="px-6 py-8 text-center text-gray-500">
                    No positions found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div></div>
  )
}
