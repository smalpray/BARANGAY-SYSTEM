import React from "react";
import { useSelector } from "react-redux";
import ActionSection from "./action-section";
import DeleteSection from "./delete-section";

export default function TableSection1() {
  
  const { positions } = useSelector((store) => store.positions);
  


  return (
    <div>
      {/* Header Row */}
      <div className="bg-blue-700 text-white">
        <div className="grid grid-cols-12 gap-4 px-4 py-3 text-sm font-medium">
          <div className="col-span-6">POSITION</div>
          <div className="col-span-3">LIMIT</div>
          <div className="col-span-3">ACTION</div>
        </div>
      </div>

      {/* Body Rows */}
      {positions.length > 0 ? (
        positions.map((position, index) => (
          <div
            key={position.id}
            className={`grid grid-cols-12 gap-4 px-4 py-3 items-center ${
              index % 2 === 0 ? "bg-white" : "bg-gray-50"
            } hover:bg-blue-50 transition-colors`}
          >
            {/* Position Name */}
            <div className="col-span-6 text-sm font-medium text-gray-900">
              {position.position}
            </div>

            {/* Limit */}
            <div className="col-span-3 text-sm text-gray-700">
              {position.limit}
            </div>

            {/* Actions */}
            <div className="col-span-3 flex space-x-2">
              <ActionSection posId={position.id} />
              <DeleteSection data={position} />
            </div>
            

          </div>
        ))
      ) : (
        <div className="px-6 py-8 text-center text-gray-500 bg-white">
          No positions found
        </div>
      )}
    </div>
  );
}
