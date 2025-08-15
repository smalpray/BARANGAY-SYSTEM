import Button from '@/app/_components/button';
import React, { useState } from 'react';

function ProfileForm() {
  const [activeTab, setActiveTab] = useState('basic');
  const [formData, setFormData] = useState({
    // Basic Info
    voters: '',
    dateOfBirth: '',
    placeOfBirth: '',
    pwd: '',
    singleParent: '',
    firstName: '',
    middleName: '',
    lastName: '',
    suffix: '',
    gender: 'Male',
    civilStatus: 'Single',
    religion: '',
    nationality: '',
    // Other Info (Address)
    municipality: '',
    zip: '',
    barangay: '',
    houseNumber: '',
    street: '',
    address: '',
    contactNumber: '',
    emailAddress: '',
    // Guardian
    fatherName: '',
    motherName: '',
    guardianName: '',
    guardianContact: '',
    // Account
    username: '',
    password: '',
    confirmPassword: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const tabs = [
    { id: 'basic', label: 'Basic Info' },
    { id: 'other', label: 'Other Info' },
    { id: 'guardian', label: 'Guardian' },
    { id: 'account', label: 'Account' }
  ];

  const renderBasicInfo = () => (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-1 space-y-6">
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="w-24 h-24 bg-gray-100 rounded-lg mx-auto mb-4 flex items-center justify-center border border-gray-200">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
              <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
            </div>
          </div>
        </div>

       

        <div className="space-y-2">
          <label className="block text-gray-700 text-sm font-medium">Voters</label>
          <select
            name="voters"
            value={formData.voters}
            onChange={handleInputChange}
            className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring--500 focus:border-transparent"
          >
            <option value="">Select Voters</option>
            <option value="registered">Registered</option>
            <option value="unregistered">Unregistered</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="block text-gray-700 text-sm font-medium">Date of Birth</label>
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleInputChange}
            className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring--500 focus:border-transparent"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-gray-700 text-sm font-medium">Place of Birth</label>
          <input
            type="text"
            name="placeOfBirth"
            value={formData.placeOfBirth}
            onChange={handleInputChange}
            className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring--500 focus:border-transparent"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-gray-700 text-sm font-medium">PWD</label>
          <select
            name="pwd"
            value={formData.pwd}
            onChange={handleInputChange}
            className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring--500 focus:border-transparent"
          >
            <option value="">Select PWD Status</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="block text-gray-700 text-sm font-medium">Single Parent</label>
          <select
            name="singleParent"
            value={formData.singleParent}
            onChange={handleInputChange}
            className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring--500 focus:border-transparent"
          >
            <option value="">Select Status</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
      </div>

      <div className="lg:col-span-2">
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Personal Details</h2>

          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="block text-gray-700 text-sm font-medium">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring--500 focus:border-transparent"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-gray-700 text-sm font-medium">Middle Name</label>
                <input
                  type="text"
                  name="middleName"
                  value={formData.middleName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring--500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="block text-gray-700 text-sm font-medium">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring--500 focus:border-transparent"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-gray-700 text-sm font-medium">Suffix</label>
                <input
                  type="text"
                  name="suffix"
                  value={formData.suffix}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring--500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="block text-gray-700 text-sm font-medium">Gender</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring--500 focus:border-transparent"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="block text-gray-700 text-sm font-medium">Civil Status</label>
                <select
                  name="civilStatus"
                  value={formData.civilStatus}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring--500 focus:border-transparent"
                >
                  <option value="Single">Single</option>
                  <option value="Married">Married</option>
                  <option value="Divorced">Divorced</option>
                  <option value="Widowed">Widowed</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="block text-gray-700 text-sm font-medium">Religion</label>
                <input
                  type="text"
                  name="religion"
                  value={formData.religion}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring--500 focus:border-transparent"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-gray-700 text-sm font-medium">Nationality</label>
                <input
                  type="text"
                  name="nationality"
                  value={formData.nationality}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring--500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="pt-6">
              <Button>ADD NEW RESIDENT</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderOtherInfo = () => (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
      <h2 className="text-xl font-semibold text-gray-900 mb-6 text-center">Address</h2>
      
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="block text-black text-sm font-medium">Municipality</label>
            <input
              type="text"
              name="municipality"
              value={formData.municipality}
              onChange={handleInputChange}
              className="w-full px-3 py-2 bg-white border border-gray-600 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-black text-sm font-medium">Zip</label>
            <input
              type="text"
              name="zip"
              value={formData.zip}
              onChange={handleInputChange}
              className="w-full px-3 py-2 bg-white border border-gray-600 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="block text-black text-sm font-medium">Barangay</label>
            <input
              type="text"
              name="barangay"
              value={formData.barangay}
              onChange={handleInputChange}
              className="w-full px-3 py-2 bg-white border border-gray-600 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-black text-sm font-medium">House Number</label>
            <input
              type="text"
              name="houseNumber"
              value={formData.houseNumber}
              onChange={handleInputChange}
              className="w-full px-3 py-2 bg-white border border-gray-600 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="block text-black text-sm font-medium">Street</label>
            <input
              type="text"
              name="street"
              value={formData.street}
              onChange={handleInputChange}
              className="w-full px-3 py-2 bg-white border border-gray-600 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-black text-sm font-medium">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className="w-full px-3 py-2 bg-white border border-gray-600 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="block text-black text-sm font-medium">Contact Number</label>
            <input
              type="tel"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleInputChange}
              className="w-full px-3 py-2 bg-white border border-gray-600 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-blue-400 text-sm font-medium">Email Address</label>
            <input
              type="email"
              name="emailAddress"
              value={formData.emailAddress}
              onChange={handleInputChange}
              className="w-full px-3 py-2 bg-white border border-gray-600 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>
    </div>
  );

  const renderGuardian = () => (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
      <h2 className="text-xl font-semibold text-gray-900 mb-6 text-center">Guardian</h2>
      
      <div className="space-y-6">
        <div className="space-y-2">
          <label className="block text-black text-sm font-medium">Father's Name</label>
          <input
            type="text"
            name="fatherName"
            value={formData.fatherName}
            onChange={handleInputChange}
            className="w-full px-3 py-2 bg-white border border-gray-600 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-black text-sm font-medium">Mother's Name</label>
          <input
            type="text"
            name="motherName"
            value={formData.motherName}
            onChange={handleInputChange}
            className="w-full px-3 py-2 bg-white border border-gray-600 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-black text-sm font-medium">Guardian</label>
          <input
            type="text"
            name="guardianName"
            value={formData.guardianName}
            onChange={handleInputChange}
            className="w-full px-3 py-2 bg-white border border-gray-600 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-black text-sm font-medium">Contact</label>
          <input
            type="tel"
            name="guardianContact"
            value={formData.guardianContact}
            onChange={handleInputChange}
            className="w-full px-3 py-2 bg-white border border-gray-600 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>
    </div>
  );

  const renderAccount = () => (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
      <h2 className="text-xl font-semibold text-gray-900 mb-6 text-center">Account</h2>
      
      <div className="space-y-6">
        <div className="space-y-2">
          <div className="flex items-center bg-white border border-gray-600 rounded-md">
            <div className="px-3 py-2 border-r border-gray-600">
              <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              placeholder="USERNAME"
              className="w-full px-3 py-2 bg-transparent text-gray-400 placeholder-gray-500 focus:outline-none focus:text-black"
            />
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center bg-white border border-gray-600 rounded-md">
            <div className="px-3 py-2 border-r border-gray-600">
              <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
            </div>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="PASSWORD"
              className="w-full px-3 py-2 bg-transparent text-gray-400 placeholder-gray-500 focus:outline-none focus:text-black"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="px-3 py-2 text-blue-400 hover:text-blue-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clipRule="evenodd" />
                <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
              </svg>
            </button>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center bg-white border border-gray-600 rounded-md">
            <div className="px-3 py-2 border-r border-gray-600">
              <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
            </div>
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              placeholder="CONFIRM PASSWORD"
              className="w-full px-3 py-2 bg-transparent text-gray-400 placeholder-gray-500 focus:outline-none focus:text-black"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="px-3 py-2 text-blue-400 hover:text-blue-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clipRule="evenodd" />
                <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'basic':
        return renderBasicInfo();
      case 'other':
        return renderOtherInfo();
      case 'guardian':
        return renderGuardian();
      case 'account':
        return renderAccount();
      default:
        return renderBasicInfo();
    }
  };

  return (
    <div className={`min-h-screen p-6 ${activeTab !== 'basic' ? 'bg-white' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 text-sm font-medium ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-600 text-gray-300 hover:bg-gray-500 border border-gray-500'
              } ${
                tab.id === 'basic' ? 'rounded-l-lg' : ''
              } ${
                tab.id === 'account' ? 'rounded-r-lg' : ''
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {renderContent()}

        {activeTab !== 'basic' && (
          <div className="mt-8 flex justify-center">
            <Button >ADD NEW RESIDENT</Button>
          </div>
        )}
      </div> 
    </div>
  );
}

export default ProfileForm;