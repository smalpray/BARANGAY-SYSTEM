import React, { useState } from "react";
import { Edit2 } from "lucide-react";
import DeleteSection from "./delete-section"; // you can reuse if you already have one
import { useSelector } from "react-redux";

export default function TableAdministratorUserSection() {
    const { administrators } = useSelector((store) => store.administrators);
    const users = [
        {
            id: "1",
            name: "John Doe",
            username: "johndoe",
            password: "password123",
            image: "JD",
        },
        {
            id: "2",
            name: "Jane Smith",
            username: "janesmith",
            password: "secret456",
            image: "JS",
        },
    ];
    console.log("administrators", administrators);

    const [searchTerm, setSearchTerm] = useState("");

    return (
        <div>
            {/* Header */}
            <div className="bg-blue-700 text-white">
                <div className="grid grid-cols-12 gap-4 px-4 py-3 text-sm font-medium">
                    <div className="col-span-2">IMAGE</div>
                    <div className="col-span-3">NAME</div>
                    <div className="col-span-3">USERNAME</div>
                    <div className="col-span-2">PASSWORD</div>
                    <div className="col-span-2">ACTION</div>
                </div>
            </div>
            {/* {residents?.data?.map((resident, index) => { */}
            {/* Rows */}
            {administrators?.data?.map((administrator, index) => (
                <div
                    key={administrator.id}
                    className={`grid grid-cols-12 gap-4 px-4 py-3 items-center ${
                        index % 2 === 0 ? "bg-white" : "bg-gray-50"
                    } hover:bg-blue-50 transition-colors`}
                >
                    {/* Image */}
                    <div className="col-span-2">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-sm font-bold text-blue-700">
                            {administrator.image || "NA"}
                        </div>
                    </div>

                    {/* Name */}
                    <div className="col-span-3 text-sm font-medium text-gray-900">
                        {administrator.firstName} {administrator.middleName}{" "}
                        {administrator.lastName}
                    </div>

                    {/* Username */}
                    <div className="col-span-3 text-sm text-gray-700">
                        {administrator.username}
                    </div>

                    {/* Password */}
                    <div className="col-span-2 text-sm text-gray-500 font-mono">
                        {administrator.password}
                    </div>

                    {/* Actions */}
                    <div className="col-span-2 flex space-x-2">
                        <button className="p-2 text-yellow-600 hover:bg-yellow-50 rounded-full transition-colors">
                            <Edit2 className="w-4 h-4" />
                        </button>
                        <DeleteSection data={administrator} />
                    </div>
                </div>
            ))}
        </div>
    );
}
