import React, { useEffect, useState } from "react";
import Layout from "../../layout";
import { Eye, Save, Trash2, UserPlus, X, Edit } from "lucide-react";

export default function Page() {
  return (
    <Layout>
      <FamilyTable />
    </Layout>
  );
}

// Mock data - replace with your actual data source
const mockFamilies = [
  {
    id: 1,
    familyNumber: 'F0001',
    headOfFamily: 'Juan Dela Cruz',
    sitio: 'Sitio A',
    street: 'Main Street',
    houseNumber: '123',
    members: [
      { id: 1, name: 'Juan Dela Cruz', relationship: 'Head', role: 'Father', residentId: 'R001' },
      { id: 2, name: 'Maria Dela Cruz', relationship: 'Spouse', role: 'Mother', residentId: 'R002' },
      { id: 3, name: 'Jose Dela Cruz', relationship: 'Child', role: 'Son', residentId: 'R003' }
    ],
    householdDetails: {
      incomeBracket: '₱15,000 - ₱30,000',
      houseType: 'Concrete',
      utilities: 'Electricity, Water',
      toiletType: 'Water-sealed',
      wasteDisposal: 'Garbage collection',
      notes: 'Family actively participates in community programs'
    }
  },
  {
    id: 2,
    familyNumber: 'F0002',
    headOfFamily: 'Ana Santos',
    sitio: 'Sitio B',
    street: 'Second Street',
    houseNumber: '456',
    members: [
      { id: 4, name: 'Ana Santos', relationship: 'Head', role: 'Mother', residentId: 'R004' },
      { id: 5, name: 'Pedro Santos', relationship: 'Child', role: 'Son', residentId: 'R005' }
    ],
    householdDetails: {
      incomeBracket: '₱8,000 - ₱15,000',
      houseType: 'Wood',
      utilities: 'Electricity',
      toiletType: 'Pit latrine',
      wasteDisposal: 'Burning',
      notes: 'Single parent household'
    }
  }
];

// View Family Modal
const ViewFamilyModal = ({ family, onClose }) => {
  if (!family) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-t-xl">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold">Family Details</h2>
              <p className="text-blue-100 mt-1">Family #{family.familyNumber}</p>
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
                  <span className="font-semibold text-blue-700">Family Number:</span>
                  <span className="text-blue-900">{family.familyNumber}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-blue-200">
                  <span className="font-semibold text-blue-700">Head of Family:</span>
                  <span className="text-blue-900">{family.headOfFamily}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="font-semibold text-blue-700">Address:</span>
                  <span className="text-blue-900 text-right">{family.houseNumber} {family.street}, {family.sitio}</span>
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
                  <span className="font-semibold text-gray-700">Income Bracket:</span>
                  <span className="text-gray-900">{family.householdDetails?.incomeBracket || '—'}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="font-semibold text-gray-700">House Type:</span>
                  <span className="text-gray-900">{family.householdDetails?.houseType || '—'}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="font-semibold text-gray-700">Utilities:</span>
                  <span className="text-gray-900">{family.householdDetails?.utilities || '—'}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="font-semibold text-gray-700">Toilet Type:</span>
                  <span className="text-gray-900">{family.householdDetails?.toiletType || '—'}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="font-semibold text-gray-700">Waste Disposal:</span>
                  <span className="text-gray-900">{family.householdDetails?.wasteDisposal || '—'}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Members Table */}
          <div className="bg-white rounded-xl border border-blue-200 overflow-hidden shadow-sm">
            <div className="bg-blue-50 px-6 py-4 border-b border-blue-200">
              <h3 className="text-xl font-bold text-blue-800 flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                Family Members ({family.members?.length ?? 0})
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Name</th>
                    <th className="px-6 py-4 text-left font-semibold">Relationship</th>
                    <th className="px-6 py-4 text-left font-semibold">Role</th>
                    <th className="px-6 py-4 text-left font-semibold">Resident ID</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-blue-100">
                  {(family.members || []).map((member, index) => (
                    <tr key={member.id} className={index % 2 === 0 ? 'bg-blue-50' : 'bg-white'}>
                      <td className="px-6 py-4 text-gray-900 font-medium">{member.name}</td>
                      <td className="px-6 py-4 text-gray-700">{member.relationship}</td>
                      <td className="px-6 py-4 text-gray-700">{member.role}</td>
                      <td className="px-6 py-4 text-blue-600 font-mono">{member.residentId}</td>
                    </tr>
                  ))}
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
              <p className="text-blue-900 leading-relaxed">{family.householdDetails.notes}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Edit Family Modal


// Delete Confirmation Modal
const DeleteFamilyModal = ({ family, onClose, onDelete }) => {
  if (!family) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full">
        {/* Header */}
        <div className="bg-gradient-to-r from-red-500 to-red-600 text-white p-6 rounded-t-xl">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-xl font-bold">Delete Family</h2>
              <p className="text-red-100 mt-1">Confirmation Required</p>
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
                Family #{family.familyNumber} – {family.headOfFamily}
              </p>
              <p className="text-red-600 text-sm mt-1">
                {(family.members?.length ?? 0)} family members • {family.sitio}
              </p>
            </div>
            <p className="text-gray-600 text-sm">
              This will permanently delete all family members and household details. This action cannot be undone.
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

// Main Family Table Component
const FamilyTable = () => {
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
    setFamilies(prev => prev.map(family => 
      family.id === updatedFamily.id ? updatedFamily : family
    ));
    setIsEditOpen(false);
    setSelectedFamily(null);
  };

  const handleDeleteConfirm = (familyId) => {
    setFamilies(prev => prev.filter(family => family.id !== familyId));
    setIsDeleteOpen(false);
    setSelectedFamily(null);
  };

  const closeModals = () => {
    setIsViewOpen(false);
    setIsEditOpen(false);
    setIsDeleteOpen(false);
    setSelectedFamily(null);
  };

  const totalMembers = families.reduce((total, fam) => total + (fam.members?.length || 0), 0);
  const avgFamilySize = families.length > 0 ? Math.round((totalMembers / families.length) * 10) / 10 : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto p-6">
        {/* Header Section */}
        <div className="bg-white rounded-2xl shadow-xl mb-8 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <span className="text-2xl">📊</span>
              </div>
              <div>
                <h1 className="text-3xl font-bold">Family Management System</h1>
                <p className="text-blue-100 mt-2">Manage family records, members, and household details</p>
              </div>
            </div>
          </div>

          {/* Statistics Cards */}
          <div className="p-8 bg-blue-50">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 border-l-4 border-blue-500 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-blue-600 font-semibold">Total Families</p>
                    <p className="text-3xl font-bold text-blue-800">{families.length}</p>
                  </div>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🏠</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 border-l-4 border-green-500 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-green-600 font-semibold">Total Members</p>
                    <p className="text-3xl font-bold text-green-800">{totalMembers}</p>
                  </div>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">👥</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 border-l-4 border-purple-500 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-purple-600 font-semibold">Average Family Size</p>
                    <p className="text-3xl font-bold text-purple-800">{avgFamilySize}</p>
                  </div>
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">📈</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Table */}
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
                    <th className="px-6 py-4 text-left font-semibold">Family No.</th>
                    <th className="px-6 py-4 text-left font-semibold">Head of Family</th>
                    <th className="px-6 py-4 text-left font-semibold">Members</th>
                    <th className="px-6 py-4 text-left font-semibold">Address</th>
                    <th className="px-6 py-4 text-left font-semibold">Income Bracket</th>
                    <th className="px-6 py-4 text-left font-semibold">House Type</th>
                    <th className="px-6 py-4 text-center font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-blue-100">
                  {families.map((family, index) => (
                    <tr key={family.id} className={`hover:bg-blue-50 transition-all duration-200 ${index % 2 === 0 ? 'bg-blue-50' : 'bg-white'}`}>
                      <td className="px-6 py-4">
                        <span className="text-blue-600 font-mono font-semibold">{family.familyNumber}</span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="font-semibold text-gray-900">{family.headOfFamily}</div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                          {(family.members?.length || 0)} member{(family.members?.length || 0) !== 1 ? 's' : ''}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-700">
                        <div className="text-sm">
                          <div>{family.houseNumber} {family.street}</div>
                          <div className="text-gray-500">{family.sitio}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-700">{family.householdDetails?.incomeBracket || '—'}</td>
                      <td className="px-6 py-4 text-gray-700">{family.householdDetails?.houseType || '—'}</td>
                      <td className="px-6 py-4">
                        <div className="flex justify-center space-x-2">
                          <button
                            onClick={() => handleView(family)}
                            className="text-blue-600 hover:text-blue-800 hover:bg-blue-100 p-2 rounded-lg transition-all duration-200"
                            title="View Family Details"
                            aria-label="View"
                          >
                            <Eye size={18} />
                          </button>
                          <button
                            onClick={() => handleEdit(family)}
                            className="text-green-600 hover:text-green-800 hover:bg-green-100 p-2 rounded-lg transition-all duration-200"
                            title="Edit Family"
                            aria-label="Edit"
                          >
                            <Edit size={18} />
                          </button>
                          <button
                            onClick={() => handleDelete(family)}
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
              <h3 className="text-xl font-semibold text-gray-800 mb-2">No Families Found</h3>
              <p className="text-gray-600">Add some families to get started with your family management system.</p>
            </div>
          )}
        </div>
      </div>

      {/* Modals */}
      {isViewOpen && (
        <ViewFamilyModal
          family={selectedFamily}
          onClose={closeModals}
        />
      )}

      {isEditOpen && (
        <EditFamilyModal
          family={selectedFamily}
          onClose={closeModals}
          onSave={handleSave}
        />
      )}

      {isDeleteOpen && (
        <DeleteFamilyModal
          family={selectedFamily}
          onClose={closeModals}
          onDelete={handleDeleteConfirm}
        />
      )}
    </div>
  );
};
