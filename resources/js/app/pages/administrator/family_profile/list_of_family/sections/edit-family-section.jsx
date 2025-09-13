import React, { useState } from "react";
import { X } from "lucide-react"; // ✅ added missing import

export default function ViewFamilySection() {
    const EditFamilyModal = ({ family, onClose, onSave }) => {
        const [activeTab, setActiveTab] = useState("family");
        const [editedFamily, setEditedFamily] = useState(family);

        useEffect(() => {
            setEditedFamily(family);
        }, [family]);

        if (!family) return null;

        const handleSave = () => {
            onSave(editedFamily);
        };

        const updateFamilyInfo = (field, value) => {
            setEditedFamily((prev) => ({ ...prev, [field]: value }));
        };

        const updateHouseholdDetails = (field, value) => {
            setEditedFamily((prev) => ({
                ...prev,
                householdDetails: {
                    ...(prev.householdDetails || {}),
                    [field]: value,
                },
            }));
        };

        const addMember = () => {
            const newMember = {
                id: Date.now(),
                name: "",
                relationship: "",
                role: "",
                residentId: "",
            };
            setEditedFamily((prev) => ({
                ...prev,
                members: [...(prev.members || []), newMember],
            }));
        };

        const updateMember = (memberId, field, value) => {
            setEditedFamily((prev) => ({
                ...prev,
                members: (prev.members || []).map((member) =>
                    member.id === memberId
                        ? { ...member, [field]: value }
                        : member
                ),
            }));
        };

        const removeMember = (memberId) => {
            setEditedFamily((prev) => ({
                ...prev,
                members: (prev.members || []).filter(
                    (member) => member.id !== memberId
                ),
            }));
        };

        const tabs = [
            { id: "family", label: "Family Info", icon: "🏠" },
            { id: "members", label: "Members", icon: "👥" },
            { id: "household", label: "Household Details", icon: "🏘️" },
        ];

        const household = editedFamily.householdDetails || {};
        const members = editedFamily.members || [];

        return (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                <div className="bg-white rounded-xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-t-xl">
                        <div className="flex justify-between items-center">
                            <div>
                                <h2 className="text-2xl font-bold">
                                    Edit Family
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

                    {/* Tabs */}
                    <div className="bg-blue-50 border-b border-blue-200">
                        <div className="flex space-x-0">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`py-4 px-6 font-semibold transition-all duration-200 flex items-center space-x-2 ${
                                        activeTab === tab.id
                                            ? "text-blue-700 bg-white border-b-4 border-blue-600"
                                            : "text-blue-600 hover:text-blue-800 hover:bg-blue-100"
                                    }`}
                                >
                                    <span className="text-lg">{tab.icon}</span>
                                    <span>{tab.label}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="p-8">
                        {/* Family Info Tab */}
                        {activeTab === "family" && (
                            <div className="space-y-6">
                                <h3 className="text-xl font-bold text-blue-800 mb-6">
                                    Family Information
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="block font-semibold text-blue-700">
                                            Head of Family
                                        </label>
                                        <input
                                            type="text"
                                            value={
                                                editedFamily.headOfFamily || ""
                                            }
                                            onChange={(e) =>
                                                updateFamilyInfo(
                                                    "headOfFamily",
                                                    e.target.value
                                                )
                                            }
                                            className="w-full border-2 border-blue-200 rounded-lg px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-200"
                                            placeholder="Enter head of family name"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="block font-semibold text-blue-700">
                                            House Number
                                        </label>
                                        <input
                                            type="text"
                                            value={
                                                editedFamily.houseNumber || ""
                                            }
                                            onChange={(e) =>
                                                updateFamilyInfo(
                                                    "houseNumber",
                                                    e.target.value
                                                )
                                            }
                                            className="w-full border-2 border-blue-200 rounded-lg px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-200"
                                            placeholder="Enter house number"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="block font-semibold text-blue-700">
                                            Street
                                        </label>
                                        <input
                                            type="text"
                                            value={editedFamily.street || ""}
                                            onChange={(e) =>
                                                updateFamilyInfo(
                                                    "street",
                                                    e.target.value
                                                )
                                            }
                                            className="w-full border-2 border-blue-200 rounded-lg px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-200"
                                            placeholder="Enter street name"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="block font-semibold text-blue-700">
                                            Sitio
                                        </label>
                                        <input
                                            type="text"
                                            value={editedFamily.sitio || ""}
                                            onChange={(e) =>
                                                updateFamilyInfo(
                                                    "sitio",
                                                    e.target.value
                                                )
                                            }
                                            className="w-full border-2 border-blue-200 rounded-lg px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-200"
                                            placeholder="Enter sitio"
                                        />
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Members Tab */}
                        {activeTab === "members" && (
                            <div className="space-y-6">
                                <div className="flex justify-between items-center">
                                    <h3 className="text-xl font-bold text-blue-800">
                                        Family Members
                                    </h3>
                                    <button
                                        onClick={addMember}
                                        className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 shadow-md hover:shadow-lg"
                                    >
                                        <UserPlus size={20} />
                                        <span>Add Member</span>
                                    </button>
                                </div>

                                <div className="space-y-4">
                                    {members.map((member, index) => (
                                        <div
                                            key={member.id}
                                            className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6"
                                        >
                                            <div className="flex justify-between items-center mb-4">
                                                <h4 className="font-semibold text-blue-800">
                                                    Member #{index + 1}
                                                </h4>
                                                <button
                                                    onClick={() =>
                                                        removeMember(member.id)
                                                    }
                                                    className="text-red-500 hover:text-red-700 hover:bg-red-100 p-2 rounded-lg transition-all duration-200"
                                                    title="Remove member"
                                                    aria-label="Remove member"
                                                >
                                                    <Trash2 size={18} />
                                                </button>
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                                <div className="space-y-2">
                                                    <label className="block font-semibold text-blue-700">
                                                        Name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        value={member.name}
                                                        onChange={(e) =>
                                                            updateMember(
                                                                member.id,
                                                                "name",
                                                                e.target.value
                                                            )
                                                        }
                                                        className="w-full border-2 border-blue-200 rounded-lg px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-200"
                                                        placeholder="Enter name"
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="block font-semibold text-blue-700">
                                                        Relationship
                                                    </label>
                                                    <select
                                                        value={
                                                            member.relationship
                                                        }
                                                        onChange={(e) =>
                                                            updateMember(
                                                                member.id,
                                                                "relationship",
                                                                e.target.value
                                                            )
                                                        }
                                                        className="w-full border-2 border-blue-200 rounded-lg px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-200"
                                                    >
                                                        <option value="">
                                                            Select relationship
                                                        </option>
                                                        <option value="Head">
                                                            Head
                                                        </option>
                                                        <option value="Spouse">
                                                            Spouse
                                                        </option>
                                                        <option value="Child">
                                                            Child
                                                        </option>
                                                        <option value="Parent">
                                                            Parent
                                                        </option>
                                                        <option value="Sibling">
                                                            Sibling
                                                        </option>
                                                        <option value="Other">
                                                            Other
                                                        </option>
                                                    </select>
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="block font-semibold text-blue-700">
                                                        Role
                                                    </label>
                                                    <input
                                                        type="text"
                                                        value={member.role}
                                                        onChange={(e) =>
                                                            updateMember(
                                                                member.id,
                                                                "role",
                                                                e.target.value
                                                            )
                                                        }
                                                        className="w-full border-2 border-blue-200 rounded-lg px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-200"
                                                        placeholder="Enter role"
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="block font-semibold text-blue-700">
                                                        Resident ID
                                                    </label>
                                                    <input
                                                        type="text"
                                                        value={
                                                            member.residentId
                                                        }
                                                        onChange={(e) =>
                                                            updateMember(
                                                                member.id,
                                                                "residentId",
                                                                e.target.value
                                                            )
                                                        }
                                                        className="w-full border-2 border-blue-200 rounded-lg px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-200"
                                                        placeholder="Enter resident ID"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    {members.length === 0 && (
                                        <div className="text-center py-8 text-gray-500">
                                            No family members added yet. Click
                                            "Add Member" to get started.
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* Household Details Tab */}
                        {activeTab === "household" && (
                            <div className="space-y-6">
                                <h3 className="text-xl font-bold text-blue-800 mb-6">
                                    Household Details
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="block font-semibold text-blue-700">
                                            Income Bracket
                                        </label>
                                        <select
                                            value={
                                                household.incomeBracket || ""
                                            }
                                            onChange={(e) =>
                                                updateHouseholdDetails(
                                                    "incomeBracket",
                                                    e.target.value
                                                )
                                            }
                                            className="w-full border-2 border-blue-200 rounded-lg px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-200"
                                        >
                                            <option value="">
                                                Select income bracket
                                            </option>
                                            <option value="Below ₱8,000">
                                                Below ₱8,000
                                            </option>
                                            <option value="₱8,000 - ₱15,000">
                                                ₱8,000 - ₱15,000
                                            </option>
                                            <option value="₱15,000 - ₱30,000">
                                                ₱15,000 - ₱30,000
                                            </option>
                                            <option value="₱30,000 - ₱50,000">
                                                ₱30,000 - ₱50,000
                                            </option>
                                            <option value="Above ₱50,000">
                                                Above ₱50,000
                                            </option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="block font-semibold text-blue-700">
                                            House Type
                                        </label>
                                        <select
                                            value={household.houseType || ""}
                                            onChange={(e) =>
                                                updateHouseholdDetails(
                                                    "houseType",
                                                    e.target.value
                                                )
                                            }
                                            className="w-full border-2 border-blue-200 rounded-lg px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-200"
                                        >
                                            <option value="">
                                                Select house type
                                            </option>
                                            <option value="Concrete">
                                                Concrete
                                            </option>
                                            <option value="Wood">Wood</option>
                                            <option value="Mixed">Mixed</option>
                                            <option value="Bamboo">
                                                Bamboo
                                            </option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="block font-semibold text-blue-700">
                                            Utilities
                                        </label>
                                        <input
                                            type="text"
                                            value={household.utilities || ""}
                                            onChange={(e) =>
                                                updateHouseholdDetails(
                                                    "utilities",
                                                    e.target.value
                                                )
                                            }
                                            className="w-full border-2 border-blue-200 rounded-lg px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-200"
                                            placeholder="e.g., Electricity, Water, Internet"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="block font-semibold text-blue-700">
                                            Toilet Type
                                        </label>
                                        <select
                                            value={household.toiletType || ""}
                                            onChange={(e) =>
                                                updateHouseholdDetails(
                                                    "toiletType",
                                                    e.target.value
                                                )
                                            }
                                            className="w-full border-2 border-blue-200 rounded-lg px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-200"
                                        >
                                            <option value="">
                                                Select toilet type
                                            </option>
                                            <option value="Water-sealed">
                                                Water-sealed
                                            </option>
                                            <option value="Pit latrine">
                                                Pit latrine
                                            </option>
                                            <option value="Shared">
                                                Shared
                                            </option>
                                            <option value="None">None</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2 md:col-span-2">
                                        <label className="block font-semibold text-blue-700">
                                            Waste Disposal
                                        </label>
                                        <select
                                            value={
                                                household.wasteDisposal || ""
                                            }
                                            onChange={(e) =>
                                                updateHouseholdDetails(
                                                    "wasteDisposal",
                                                    e.target.value
                                                )
                                            }
                                            className="w-full border-2 border-blue-200 rounded-lg px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-200"
                                        >
                                            <option value="">
                                                Select waste disposal method
                                            </option>
                                            <option value="Garbage collection">
                                                Garbage collection
                                            </option>
                                            <option value="Burning">
                                                Burning
                                            </option>
                                            <option value="Composting">
                                                Composting
                                            </option>
                                            <option value="Burial">
                                                Burial
                                            </option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="block font-semibold text-blue-700">
                                        Notes
                                    </label>
                                    <textarea
                                        value={household.notes || ""}
                                        onChange={(e) =>
                                            updateHouseholdDetails(
                                                "notes",
                                                e.target.value
                                            )
                                        }
                                        rows="4"
                                        className="w-full border-2 border-blue-200 rounded-lg px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-200 resize-none"
                                        placeholder="Additional notes about the family..."
                                    />
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Action Buttons */}
                    <div className="bg-blue-50 p-6 rounded-b-xl border-t border-blue-200">
                        <div className="flex justify-end space-x-4">
                            <button
                                onClick={onClose}
                                className="px-8 py-3 border-2 border-gray-300 rounded-lg text-gray-700 font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all duration-200"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleSave}
                                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold flex items-center space-x-2 shadow-md hover:shadow-lg transition-all duration-200"
                            >
                                <Save size={18} />
                                <span>Save Changes</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div>
            {isEditOpen && (
                <EditFamilyModal
                    family={selectedFamily}
                    onClose={closeModals}
                    onSave={handleSave}
                />
            )}
        </div>
    );
}
