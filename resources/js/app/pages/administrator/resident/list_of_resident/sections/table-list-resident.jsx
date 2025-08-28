import React, { useState } from "react";
import { Edit2, X, Search, RotateCcw } from "lucide-react";
import { useSelector } from "react-redux";
import moment from "moment";
import DeleteSection from "./delete-section";
export default function TableListResident() {
    const { residents } = useSelector((store) => store.barangay_residents);
    const [filters, setFilters] = useState({
        firstName: "",
        middleName: "",
        lastName: "",
        voters: "",
        age: "",
        status: "",
        pwd: "",
        singleParent: "",
        senior: "",
        residentNumber: "",
    });

    console.log("residents", residents);
    return (
        <div>
            <div className="bg-blue-700 text-white">
                <div className="grid grid-cols-12 gap-4 px-4 py-3 text-sm font-medium">
                    <div className="col-span-1">IMAGE</div>
                    <div className="col-span-2">RESIDENT NUMBER</div>
                    <div className="col-span-2">NAME</div>
                    <div className="col-span-1">AGE</div>
                    <div className="col-span-1">PWD</div>
                    <div className="col-span-1">SINGLE PARENT</div>
                    <div className="col-span-1">VOTERS</div>
                    <div className="col-span-1">STATUS</div>
                    <div className="col-span-2">ACTION</div>
                </div>
            </div>
            {residents?.data?.map((resident, index) => {
                const dob = resident.dateOfBirth; // YYYY-MM-DD format

                // Calculate age
                const age = moment().diff(moment(dob, "YYYY-MM-DD"), "years");
                return (
                    <div
                        key={resident.id}
                        className={`grid grid-cols-12 gap-4 px-4 py-3 items-center ${
                            index % 2 === 0 ? "bg-white" : "bg-gray-50"
                        } hover:bg-blue-50 transition-colors`}
                    >
                        {/* Image */}
                        <div className="col-span-1">
                            <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                                <span className="text-gray-600 text-xs">
                                    IMG
                                </span>
                            </div>
                        </div>

                        {/* Resident Number */}
                        <div className="col-span-2 text-sm text-gray-700 font-mono">
                            {/* {resident.residentNumber} */}N/A
                        </div>

                        {/* Name */}
                        <div className="col-span-2 text-sm font-medium text-gray-900">
                            {resident.firstName} {resident.middleName}{" "}
                            {resident.lastName}
                        </div>

                        {/* Age */}
                        <div className="col-span-1 text-sm text-gray-700">
                            {age || "-"}
                        </div>

                        {/* PWD */}
                        <div className="col-span-1">
                            <span className="px-2 py-1 rounded text-xs font-medium bg-yellow-100 text-yellow-800">
                                {resident.pwd}
                            </span>
                        </div>

                        {/* Single Parent */}
                        <div className="col-span-1">
                            <span className="px-2 py-1 rounded text-xs font-medium bg-yellow-100 text-yellow-800">
                                {resident.singleParent}
                            </span>
                        </div>

                        {/* Voters */}
                        <div className="col-span-1">
                            <span
                                className={`px-2 py-1 rounded text-xs font-medium ${
                                    resident.voters === "YES"
                                        ? "bg-green-100 text-green-800"
                                        : "bg-red-100 text-red-800"
                                }`}
                            >
                                {resident.voters}
                            </span>
                        </div>

                        {/* Status */}
                        <div className="col-span-1">
                            <div className="flex items-center">
                                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                                <span className="text-sm text-gray-700">
                                    {resident.status}
                                </span>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="col-span-2 flex space-x-2">
                            <button className="p-2 text-yellow-600 hover:bg-yellow-50 rounded-full transition-colors">
                                <Edit2 className="w-4 h-4" />
                            </button>
                            <DeleteSection data={resident} />
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
