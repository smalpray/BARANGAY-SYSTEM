import { Edit, Eye, Trash2 } from "lucide-react";
import React, { useState } from "react";

export default function FamilyTableSection() {
    const handleView = (family) => {
        setSelectedFamily(family);
        setIsViewOpen(true);
    };
    const mockFamilies = [
        {
            id: 1,
            familyNumber: "F0001",
            headOfFamily: "Juan Dela Cruz",
            sitio: "Sitio A",
            street: "Main Street",
            houseNumber: "123",
            members: [
                {
                    id: 1,
                    name: "Juan Dela Cruz",
                    relationship: "Head",
                    role: "Father",
                    residentId: "R001",
                },
                {
                    id: 2,
                    name: "Maria Dela Cruz",
                    relationship: "Spouse",
                    role: "Mother",
                    residentId: "R002",
                },
                {
                    id: 3,
                    name: "Jose Dela Cruz",
                    relationship: "Child",
                    role: "Son",
                    residentId: "R003",
                },
            ],
            householdDetails: {
                incomeBracket: "₱15,000 - ₱30,000",
                houseType: "Concrete",
                utilities: "Electricity, Water",
                toiletType: "Water-sealed",
                wasteDisposal: "Garbage collection",
                notes: "Family actively participates in community programs",
            },
        },
        {
            id: 2,
            familyNumber: "F0002",
            headOfFamily: "Ana Santos",
            sitio: "Sitio B",
            street: "Second Street",
            houseNumber: "456",
            members: [
                {
                    id: 4,
                    name: "Ana Santos",
                    relationship: "Head",
                    role: "Mother",
                    residentId: "R004",
                },
                {
                    id: 5,
                    name: "Pedro Santos",
                    relationship: "Child",
                    role: "Son",
                    residentId: "R005",
                },
            ],
            householdDetails: {
                incomeBracket: "₱8,000 - ₱15,000",
                houseType: "Wood",
                utilities: "Electricity",
                toiletType: "Pit latrine",
                wasteDisposal: "Burning",
                notes: "Single parent household",
            },
        },
    ];
    const [families, setFamilies] = useState(mockFamilies);

    return (
        <div>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="bg-blue-50 border-b border-blue-200 p-6">
                    <h2 className="text-xl font-bold text-blue-800 flex items-center">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        Family Records
                    </h2>
                </div>

                {families.length > 0 ? (
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-blue-600 text-white">
                                <tr>
                                    <th className="px-6 py-4 text-left font-semibold">
                                        Family No.
                                    </th>
                                    <th className="px-6 py-4 text-left font-semibold">
                                        Head of Family
                                    </th>
                                    <th className="px-6 py-4 text-left font-semibold">
                                        Members
                                    </th>
                                    <th className="px-6 py-4 text-left font-semibold">
                                        Address
                                    </th>
                                    <th className="px-6 py-4 text-left font-semibold">
                                        Income Bracket
                                    </th>
                                    <th className="px-6 py-4 text-left font-semibold">
                                        House Type
                                    </th>
                                    <th className="px-6 py-4 text-center font-semibold">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-blue-100">
                                {families.map((family, index) => (
                                    <tr
                                        key={family.id}
                                        className={`hover:bg-blue-50 transition-all duration-200 ${
                                            index % 2 === 0
                                                ? "bg-blue-50"
                                                : "bg-white"
                                        }`}
                                    >
                                        <td className="px-6 py-4">
                                            <span className="text-blue-600 font-mono font-semibold">
                                                {family.familyNumber}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="font-semibold text-gray-900">
                                                {family.headOfFamily}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                                                {family.members?.length || 0}{" "}
                                                member
                                                {(family.members?.length ||
                                                    0) !== 1
                                                    ? "s"
                                                    : ""}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-gray-700">
                                            <div className="text-sm">
                                                <div>
                                                    {family.houseNumber}{" "}
                                                    {family.street}
                                                </div>
                                                <div className="text-gray-500">
                                                    {family.sitio}
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-gray-700">
                                            {family.householdDetails
                                                ?.incomeBracket || "—"}
                                        </td>
                                        <td className="px-6 py-4 text-gray-700">
                                            {family.householdDetails
                                                ?.houseType || "—"}
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex justify-center space-x-2">
                                                <button
                                                    onClick={() =>
                                                        handleView(family)
                                                    }
                                                    className="text-blue-600 hover:text-blue-800 hover:bg-blue-100 p-2 rounded-lg transition-all duration-200"
                                                    title="View Family Details"
                                                    aria-label="View"
                                                >
                                                    <Eye size={18} />
                                                </button>
                                                <button
                                                    onClick={() =>
                                                        handleEdit(family)
                                                    }
                                                    className="text-green-600 hover:text-green-800 hover:bg-green-100 p-2 rounded-lg transition-all duration-200"
                                                    title="Edit Family"
                                                    aria-label="Edit"
                                                >
                                                    <Edit size={18} />
                                                </button>
                                                <button
                                                    onClick={() =>
                                                        handleDelete(family)
                                                    }
                                                    className="text-red-600 hover:text-red-800 hover:bg-red-100 p-2 rounded-lg transition-all duration-200"
                                                    title="Delete Family"
                                                    aria-label="Delete"
                                                >
                                                    <Trash2 size={18} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <div className="text-center py-16">
                        <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-4xl">📊</span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                            No Families Found
                        </h3>
                        <p className="text-gray-600">
                            Add some families to get started with your family
                            management system.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
