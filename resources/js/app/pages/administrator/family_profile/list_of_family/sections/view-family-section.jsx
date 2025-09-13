import React, { useState } from "react";
import { X } from "lucide-react"; // ✅ you need this import

export default function ViewFamilySection() {
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
    // ✅ FIX: hooks must be here, not inside ViewFamilyModal
    const [families, setFamilies] = useState(mockFamilies);
    const [selectedFamily, setSelectedFamily] = useState(null);
    const [isViewOpen, setIsViewOpen] = useState(false);
    const [isEditOpen, setIsEditOpen] = useState(false);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);

    const handleView = (family) => {
        setSelectedFamily(family);
        setIsViewOpen(true);
    };

    const handleEdit = (family) => {
        setSelectedFamily(family);
        setIsEditOpen(true);
    };

    const handleDelete = (family) => {
        setSelectedFamily(family);
        setIsDeleteOpen(true);
    };

    const handleSave = (updatedFamily) => {
        setFamilies((prev) =>
            prev.map((family) =>
                family.id === updatedFamily.id ? updatedFamily : family
            )
        );
        setIsEditOpen(false);
        setSelectedFamily(null);
    };

    const handleDeleteConfirm = (familyId) => {
        setFamilies((prev) => prev.filter((family) => family.id !== familyId));
        setIsDeleteOpen(false);
        setSelectedFamily(null);
    };

    const closeModals = () => {
        setIsViewOpen(false);
        setIsEditOpen(false);
        setIsDeleteOpen(false);
        setSelectedFamily(null);
    };

    // ✅ Your full modal component (design unchanged)
    const ViewFamilyModal = ({ family, onClose }) => {
        if (!family) return null;

        return (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                <div className="bg-white rounded-xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-t-xl">
                        <div className="flex justify-between items-center">
                            <div>
                                <h2 className="text-2xl font-bold">
                                    Family Details
                                </h2>
                                <p className="text-blue-100 mt-1">
                                    Family #{family.familyNumber}
                                </p>
                            </div>
                            <button
                                onClick={onClose}
                                className="text-white hover:text-blue-200 bg-white/20 hover:bg-white/30 rounded-lg p-2 transition-all duration-200"
                                aria-label="Close"
                            >
                                <X size={24} />
                            </button>
                        </div>
                    </div>

                    <div className="p-8">
                        {/* Basic Information Cards */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                            {/* Family Information Card */}
                            <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-500">
                                <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center">
                                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                                    Family Information
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex justify-between py-2 border-b border-blue-200">
                                        <span className="font-semibold text-blue-700">
                                            Family Number:
                                        </span>
                                        <span className="text-blue-900">
                                            {family.familyNumber}
                                        </span>
                                    </div>
                                    <div className="flex justify-between py-2 border-b border-blue-200">
                                        <span className="font-semibold text-blue-700">
                                            Head of Family:
                                        </span>
                                        <span className="text-blue-900">
                                            {family.headOfFamily}
                                        </span>
                                    </div>
                                    <div className="flex justify-between py-2">
                                        <span className="font-semibold text-blue-700">
                                            Address:
                                        </span>
                                        <span className="text-blue-900 text-right">
                                            {family.houseNumber} {family.street}
                                            , {family.sitio}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Household Details Card */}
                            <div className="bg-white rounded-xl p-6 border border-blue-200 shadow-sm">
                                <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center">
                                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                                    Household Details
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex justify-between py-2 border-b border-gray-200">
                                        <span className="font-semibold text-gray-700">
                                            Income Bracket:
                                        </span>
                                        <span className="text-gray-900">
                                            {family.householdDetails
                                                ?.incomeBracket || "—"}
                                        </span>
                                    </div>
                                    <div className="flex justify-between py-2 border-b border-gray-200">
                                        <span className="font-semibold text-gray-700">
                                            House Type:
                                        </span>
                                        <span className="text-gray-900">
                                            {family.householdDetails
                                                ?.houseType || "—"}
                                        </span>
                                    </div>
                                    <div className="flex justify-between py-2 border-b border-gray-200">
                                        <span className="font-semibold text-gray-700">
                                            Utilities:
                                        </span>
                                        <span className="text-gray-900">
                                            {family.householdDetails
                                                ?.utilities || "—"}
                                        </span>
                                    </div>
                                    <div className="flex justify-between py-2 border-b border-gray-200">
                                        <span className="font-semibold text-gray-700">
                                            Toilet Type:
                                        </span>
                                        <span className="text-gray-900">
                                            {family.householdDetails
                                                ?.toiletType || "—"}
                                        </span>
                                    </div>
                                    <div className="flex justify-between py-2">
                                        <span className="font-semibold text-gray-700">
                                            Waste Disposal:
                                        </span>
                                        <span className="text-gray-900">
                                            {family.householdDetails
                                                ?.wasteDisposal || "—"}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Members Table */}
                        <div className="bg-white rounded-xl border border-blue-200 overflow-hidden shadow-sm">
                            <div className="bg-blue-50 px-6 py-4 border-b border-blue-200">
                                <h3 className="text-xl font-bold text-blue-800 flex items-center">
                                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                                    Family Members (
                                    {family.members?.length ?? 0})
                                </h3>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead className="bg-blue-600 text-white">
                                        <tr>
                                            <th className="px-6 py-4 text-left font-semibold">
                                                Name
                                            </th>
                                            <th className="px-6 py-4 text-left font-semibold">
                                                Relationship
                                            </th>
                                            <th className="px-6 py-4 text-left font-semibold">
                                                Role
                                            </th>
                                            <th className="px-6 py-4 text-left font-semibold">
                                                Resident ID
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-blue-100">
                                        {(family.members || []).map(
                                            (member, index) => (
                                                <tr
                                                    key={member.id}
                                                    className={
                                                        index % 2 === 0
                                                            ? "bg-blue-50"
                                                            : "bg-white"
                                                    }
                                                >
                                                    <td className="px-6 py-4 text-gray-900 font-medium">
                                                        {member.name}
                                                    </td>
                                                    <td className="px-6 py-4 text-gray-700">
                                                        {member.relationship}
                                                    </td>
                                                    <td className="px-6 py-4 text-gray-700">
                                                        {member.role}
                                                    </td>
                                                    <td className="px-6 py-4 text-blue-600 font-mono">
                                                        {member.residentId}
                                                    </td>
                                                </tr>
                                            )
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Notes */}
                        {family.householdDetails?.notes && (
                            <div className="mt-8 bg-blue-50 rounded-xl p-6 border-l-4 border-blue-400">
                                <h3 className="text-xl font-bold text-blue-800 mb-3 flex items-center">
                                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                                    Notes
                                </h3>
                                <p className="text-blue-900 leading-relaxed">
                                    {family.householdDetails.notes}
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div>
            {isViewOpen && (
                <ViewFamilyModal
                    family={selectedFamily}
                    onClose={closeModals}
                />
            )}
        </div>
    );
}
