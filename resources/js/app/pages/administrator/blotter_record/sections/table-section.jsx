import React, { useState } from "react";
import { Edit } from "lucide-react";
import { useSelector } from "react-redux";

export default function TableSection() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedItems, setSelectedItems] = useState([]);
    const { blotters } = useSelector((store) => store.blotters);

    const records = [
        {
            id: 1,
            blotterNumber: "2066133803768924",
            status: "NEW",
            remarks: "OPEN",
            incident: "qewr",
            location: "San Carlos",
            dateIncident: "04/25/2025 - 05:43 PM",
            dateReported: "04/25/2025 - 05:43 PM",
        },
        {
            id: 2,
            blotterNumber: "4108081920533098",
            status: "NEW",
            remarks: "OPEN",
            incident: "Sdaasd",
            location: "Sad",
            dateIncident: "04/11/2025 - 04:09 PM",
            dateReported: "04/25/2025 - 07:10 AM",
        },
    ];
    console.log("blotters", blotters);

    const handleSelectAll = (checked) => {
        setSelectedItems(checked ? records.map((r) => r.id) : []);
    };

    const handleSelectItem = (id, checked) => {
        setSelectedItems((prev) =>
            checked ? [...prev, id] : prev.filter((item) => item !== id)
        );
    };

    const filteredRecords = records.filter((record) =>
        Object.values(record).some((value) =>
            value.toString().toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    return (
        <div>
            {/* Header */}
            <div className="bg-blue-700 text-white">
                <div className="grid grid-cols-12 gap-4 px-4 py-3 text-sm font-medium">
                    <div className="col-span-1">
                        <input
                            type="checkbox"
                            checked={
                                selectedItems.length === records.length &&
                                records.length > 0
                            }
                            onChange={(e) => handleSelectAll(e.target.checked)}
                            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                    </div>
                    <div className="col-span-2">BLOTTER NO.</div>
                    <div className="col-span-1">STATUS</div>
                    <div className="col-span-1">REMARKS</div>
                    <div className="col-span-1">INCIDENT</div>
                    <div className="col-span-2">LOCATION</div>
                    <div className="col-span-2">DATE INCIDENT</div>
                    <div className="col-span-2">DATE REPORTED</div>
                </div>
            </div>

            {/* Rows */}
            {/* {residents?.data?.map((resident, index) => { */}
            {filteredRecords.length > 0 ? (
                blotters?.data?.map((blotter, index) => (
                    <div
                        key={blotter.id}
                        className={`grid grid-cols-12 gap-4 px-4 py-3 items-center ${
                            index % 2 === 0 ? "bg-white" : "bg-gray-50"
                        } hover:bg-blue-50 transition-colors`}
                    >
                        <div className="col-span-1">
                            <input
                                type="checkbox"
                                checked={selectedItems.includes(blotter.id)}
                                onChange={(e) =>
                                    handleSelectItem(
                                        blotter.id,
                                        e.target.checked
                                    )
                                }
                                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                            />
                        </div>
                        <div className="col-span-2 text-sm font-medium text-blue-600">
                            {/* {blotter.blotterNumber} */}N/A
                        </div>
                        <div className="col-span-1">
                            <span className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                                {blotter.status}
                            </span>
                        </div>
                        <div className="col-span-1">
                            <span className="px-2 py-1 text-xs font-semibold rounded bg-red-100 text-red-800">
                                {blotter.remarks}
                            </span>
                        </div>
                        <div className="col-span-1 text-sm text-gray-900">
                            {blotter.incident}
                        </div>
                        <div className="col-span-2 text-sm text-gray-900">
                            {blotter.location_of_incident}
                        </div>
                        <div className="col-span-2 text-sm text-gray-900">
                            {blotter.date_of_incident}
                        </div>
                        <div className="col-span-1 text-sm text-gray-900">
                            {blotter.date_reported}
                        </div>
                        <div className="col-span-1 flex space-x-2">
                            <button className="bg-yellow-400 hover:bg-yellow-500 text-yellow-900 p-2 rounded transition-colors">
                                <Edit size={16} />
                            </button>
                        </div>
                    </div>
                ))
            ) : (
                <div className="px-6 py-8 text-center text-gray-500 bg-white">
                    No blotter records found
                </div>
            )}
        </div>
    );
}
