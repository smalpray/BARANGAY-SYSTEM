import React, { useState } from "react";

export default function DeleteFamilySection() {
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
    const DeleteFamilyModal = ({ family, onClose, onDelete }) => {
        if (!family) return null;

        return (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                <div className="bg-white rounded-xl shadow-2xl max-w-md w-full">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-red-500 to-red-600 text-white p-6 rounded-t-xl">
                        <div className="flex justify-between items-center">
                            <div>
                                <h2 className="text-xl font-bold">
                                    Delete Family
                                </h2>
                                <p className="text-red-100 mt-1">
                                    Confirmation Required
                                </p>
                            </div>
                            <button
                                onClick={onClose}
                                className="text-white hover:text-red-200 bg-white/20 hover:bg-white/30 rounded-lg p-2 transition-all duration-200"
                                aria-label="Close"
                            >
                                <X size={20} />
                            </button>
                        </div>
                    </div>

                    <div className="p-6">
                        <div className="text-center mb-6">
                            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Trash2 size={32} className="text-red-600" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                Are you sure you want to delete this family?
                            </h3>
                            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                                <p className="font-semibold text-red-800">
                                    Family #{family.familyNumber} –{" "}
                                    {family.headOfFamily}
                                </p>
                                <p className="text-red-600 text-sm mt-1">
                                    {family.members?.length ?? 0} family members
                                    • {family.sitio}
                                </p>
                            </div>
                            <p className="text-gray-600 text-sm">
                                This will permanently delete all family members
                                and household details. This action cannot be
                                undone.
                            </p>
                        </div>

                        <div className="flex space-x-4">
                            <button
                                onClick={onClose}
                                className="flex-1 px-6 py-3 border-2 border-gray-300 rounded-lg text-gray-700 font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all duration-200"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={() => onDelete(family.id)}
                                className="flex-1 px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-200"
                            >
                                Delete Family
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
    return (
        <div>
            {isDeleteOpen && (
                <DeleteFamilyModal
                    family={selectedFamily}
                    onClose={closeModals}
                    onDelete={handleDeleteConfirm}
                />
            )}
        </div>
    );
}
