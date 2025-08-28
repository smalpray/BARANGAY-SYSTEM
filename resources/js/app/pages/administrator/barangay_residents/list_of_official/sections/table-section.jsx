import { router } from "@inertiajs/react";
import {
    Edit2,
    X,
    ChevronLeft,
    ChevronRight,
    ChevronsLeft,
    ChevronsRight,
    Search,
} from "lucide-react";
import React, { useState } from "react";

export default function TableSection() {
    const [searchTerm, setSearchTerm] = useState("");
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const officials = [
        {
            id: 1,
            image: "/api/placeholder/40/40",
            position: "KAGAWAD",
            positionColor: "bg-green-500",
            officialNumber: "040520251157345802",
            name: "Christine M. Maquilang",
            pwd: "NO",
            singleParent: "NO",
            voters: "YES",
            status: "ACTIVE",
        },
        {
            id: 2,
            image: "/api/placeholder/40/40",
            position: "CHAIRMAN",
            positionColor: "bg-green-600",
            officialNumber: "040320251137084573",
            name: "Wacky D. Hojilla",
            pwd: "NO",
            singleParent: "NO",
            voters: "YES",
            status: "ACTIVE",
        },
        {
            id: 3,
            image: "/api/placeholder/40/40",
            position: "SK KAGAWAD",
            positionColor: "bg-green-400",
            officialNumber: "040520251153333372",
            name: "Ayesha M. Dela cruz",
            pwd: "NO",
            singleParent: "NO",
            voters: "YES",
            status: "ACTIVE",
        },
        {
            id: 4,
            image: "/api/placeholder/40/40",
            position: "SECRETARY",
            positionColor: "bg-purple-500",
            officialNumber: "040820251500582572",
            name: "Wakin D. Hojilla",
            pwd: "NO",
            singleParent: "NO",
            voters: "YES",
            status: "ACTIVE",
        },
        {
            id: 5,
            image: "/api/placeholder/40/40",
            position: "KAGAWAD",
            positionColor: "bg-green-500",
            officialNumber: "040520251151410491",
            name: "Janvee M. Romano",
            pwd: "NO",
            singleParent: "NO",
            voters: "YES",
            status: "ACTIVE",
        },
    ];

    const filteredOfficials = officials.filter(
        (official) =>
            official.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            official.position.toLowerCase().includes(searchTerm.toLowerCase())
    );

    function next_page(params) {
        router.visit("/administrator/barangay_official/list_of_official/2");
    }
    return (
        <div>
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                <div className="bg-blue-600 text-white">
                    <div className="grid grid-cols-12 gap-4 px-4 py-3 text-sm font-medium">
                        <div className="col-span-1">IMAGE</div>
                        <div className="col-span-2">
                            <select className="bg-white/40 border border-gray-600 rounded px-7 py-1 text-xs">
                                <option className="text-black">
                                    ALL POSITION
                                </option>
                                <option className="text-black">KAGAWAD</option>
                                <option className="text-black">CHAIRMAN</option>
                                <option className="text-black">
                                    SECRETARY
                                </option>
                                <option className="text-black">
                                    SK KAGAWAD
                                </option>
                            </select>
                        </div>
                        <div className="col-span-2">OFFICIAL NUMBER</div>
                        <div className="col-span-2">NAME</div>
                        <div className="col-span-1">PWD</div>
                        <div className="col-span-1">SINGLE PARENT</div>
                        <div className="col-span-1">VOTERS</div>
                        <div className="col-span-1">STATUS</div>
                        <div className="col-span-1">ACTION</div>
                    </div>
                </div>

                <div className="divide-y divide-gray-200">
                    {filteredOfficials.map((official, index) => (
                        <div
                            key={official.id}
                            className={`grid grid-cols-12 gap-4 px-4 py-3 items-center ${
                                index % 2 === 0 ? "bg-white" : "bg-gray-50"
                            } hover:bg-blue-50 transition-colors`}
                        >
                            <div className="col-span-1">
                                <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                                    <span className="text-gray-600 text-xs">
                                        IMG
                                    </span>
                                </div>
                            </div>
                            <div className="col-span-2">
                                <span
                                    className={`px-3 py-1 rounded-full text-white text-xs font-medium ${official.positionColor}`}
                                >
                                    {official.position}
                                </span>
                            </div>
                            <div className="col-span-2 text-sm text-gray-700">
                                {official.officialNumber}
                            </div>
                            <div className="col-span-2 text-sm font-medium text-gray-900">
                                {official.name}
                            </div>
                            <div className="col-span-1">
                                <span className="px-2 py-1 rounded text-xs font-medium bg-yellow-100 text-yellow-800">
                                    {official.pwd}
                                </span>
                            </div>
                            <div className="col-span-1">
                                <span className="px-2 py-1 rounded text-xs font-medium bg-yellow-100 text-yellow-800">
                                    {official.singleParent}
                                </span>
                            </div>
                            <div className="col-span-1">
                                <span className="px-2 py-1 rounded text-xs font-medium bg-green-100 text-green-800">
                                    {official.voters}
                                </span>
                            </div>
                            <div className="col-span-1">
                                <div className="flex items-center">
                                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                                    <span className="text-sm text-gray-700">
                                        {official.status}
                                    </span>
                                </div>
                            </div>
                            <div className="col-span-1 flex space-x-2">
                                <button
                                    onClick={() => next_page()}
                                    className="p-1 text-yellow-600 hover:bg-yellow-50 rounded"
                                >
                                    <Edit2 className="w-4 h-4" />
                                </button>
                                <button className="p-1 text-red-600 hover:bg-red-50 rounded">
                                    <X className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
