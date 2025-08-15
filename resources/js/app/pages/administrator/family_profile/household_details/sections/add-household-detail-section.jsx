import React, { useState } from 'react'
import { Home, DollarSign, Hash, Users, Zap, Droplets, Wifi, Trash, FileText, Building } from "lucide-react";
import Button from "@/app/_components/button";
import Select from '@/app/_components/select';
import Input from '@/app/_components/input';


export default function AddHouseholdDetailSection() {
    function Input({ label, name, type = "text", value, onChange, iconLeft, error, className = "", ...props }) {
  const inputClasses = `w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${iconLeft ? 'pl-10' : ''} ${error ? 'border-red-500' : ''} ${className}`;

  if (type === "checkbox") {
    return (
      <input
        type="checkbox"
        name={name}
        checked={value}
        onChange={onChange}
        className={className}
        {...props}
      />
    );
  }

  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
        </label>
      )}
      <div className="relative">
        {iconLeft && (
          <div className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500 z-10">
            {iconLeft}
          </div>
        )}
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className={inputClasses}
          {...props}
        />
      </div>
      {error && <p className="text-sm text-red-500 mt-1 ml-1">{error}</p>}
    </div>
  );
}

// Simple Select component
function Select({ children, name, value, onChange, className = "", ...props }) {
  return (
    <select
      name={name}
      value={value}
      onChange={onChange}
      className={className}
      {...props}
    >
      {children}
    </select>
  );
}
    const [formData, setFormData] = useState({
                      familyId: '',
                      incomeType: 'bracket', // 'bracket' or 'numeric'
                      incomeBracket: '',
                      numericIncome: '',
                      houseType: '',
                      numberOfRooms: '',
                      utilities: {
                          electricity: false,
                          water: false,
                          internet: false,
                          cable: false,
                          landline: false
                      },
                      toiletType: '',
                      wasteDisposal: '',
                      notes: ''
                  });
              
                  const [errors, setErrors] = useState({});
              
                  // Sample data
                  const [existingFamilies] = useState([
                      {
                          id: 'FAM-202501',
                          headOfFamily: 'Juan Dela Cruz',
                          address: 'Sitio Maligaya, Main St.',
                          memberCount: 4
                      },
                      {
                          id: 'FAM-202502',
                          headOfFamily: 'Maria Santos',
                          address: 'Sitio Bagong Pag-asa, Church St.',
                          memberCount: 3
                      },
                      {
                          id: 'FAM-202503',
                          headOfFamily: 'Pedro Rodriguez',
                          address: 'Sitio Tahanan, Market St.',
                          memberCount: 5
                      }
                  ]);
              
                  const incomeBrackets = [
                      "Below ₱10,000",
                      "₱10,000 - ₱20,000",
                      "₱20,001 - ₱30,000",
                      "₱30,001 - ₱50,000",
                      "₱50,001 - ₱75,000",
                      "₱75,001 - ₱100,000",
                      "Above ₱100,000"
                  ];
              
                  const houseTypes = [
                      "Concrete",
                      "Semi-concrete",
                      "Wood",
                      "Bamboo",
                      "Mixed (Concrete & Wood)",
                      "Nipa/Cogon",
                      "Makeshift/Temporary",
                      "Apartment/Condominium"
                  ];
              
                  const toiletTypes = [
                      "Water-sealed toilet",
                      "Closed pit latrine",
                      "Open pit latrine",
                      "Pour flush toilet",
                      "Composting toilet",
                      "Shared toilet facility",
                      "No toilet facility"
                  ];
              
                  const wasteDisposalTypes = [
                      "Collected by garbage truck",
                      "Burning",
                      "Burying",
                      "Composting",
                      "Throwing in vacant lot/waterway",
                      "Feeding to animals",
                      "Others"
                  ];
              
                  const handleInputChange = (e) => {
                      const { name, value, type, checked } = e.target;
              
                      if (name.startsWith('utilities.')) {
                          const utilityName = name.split('.')[1];
                          setFormData(prev => ({
                              ...prev,
                              utilities: {
                                  ...prev.utilities,
                                  [utilityName]: checked
                              }
                          }));
                      } else {
                          setFormData(prev => ({
                              ...prev,
                              [name]: type === 'checkbox' ? checked : value
                          }));
                      }
              
                      // Clear related errors
                      setErrors(prev => ({ ...prev, [name]: '' }));
                  };
              
                  const handleIncomeTypeChange = (type) => {
                      setFormData(prev => ({
                          ...prev,
                          incomeType: type,
                          incomeBracket: '',
                          numericIncome: ''
                      }));
                  };
              
                  const validateForm = () => {
                      const newErrors = {};
              
                      if (!formData.familyId) {
                          newErrors.familyId = 'Please select a family';
                      }
              
                      if (formData.incomeType === 'bracket' && !formData.incomeBracket) {
                          newErrors.income = 'Please select an income bracket';
                      }
              
                      if (formData.incomeType === 'numeric' && !formData.numericIncome) {
                          newErrors.income = 'Please enter monthly income';
                      }
              
                      if (!formData.houseType) {
                          newErrors.houseType = 'Please select house type';
                      }
              
                      if (!formData.numberOfRooms || parseInt(formData.numberOfRooms) < 0) {
                          newErrors.numberOfRooms = 'Please enter a valid number of rooms';
                      }
              
                      if (!formData.toiletType) {
                          newErrors.toiletType = 'Please select toilet type';
                      }
              
                      if (!formData.wasteDisposal) {
                          newErrors.wasteDisposal = 'Please select waste disposal method';
                      }
              
                      setErrors(newErrors);
                      return Object.keys(newErrors).length === 0;
                  };
              
                  const resetForm = () => {
                      setFormData({
                          familyId: '',
                          incomeType: 'bracket',
                          incomeBracket: '',
                          numericIncome: '',
                          houseType: '',
                          numberOfRooms: '',
                          utilities: {
                              electricity: false,
                              water: false,
                              internet: false,
                              cable: false,
                              landline: false
                          },
                          toiletType: '',
                          wasteDisposal: '',
                          notes: ''
                      });
                      setErrors({});
                  };
              
                  const handleSubmit = () => {
                      if (!validateForm()) {
                          return;
                      }
              
                      const submitData = {
                          ...formData,
                          income: formData.incomeType === 'bracket' ? formData.incomeBracket : formData.numericIncome,
                          utilityList: Object.entries(formData.utilities)
                              .filter(([_, enabled]) => enabled)
                              .map(([utility, _]) => utility)
                      };
              
                      console.log('Household Details Submitted:', submitData);
                      alert('Household details saved successfully!');
              
                      // Reset form
                      resetForm();
                  };
              
                  const selectedFamily = existingFamilies.find(family => family.id === formData.familyId);
  return (
    <div>
        <div className="space-y-6">
        {/* Family Selection */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <label className="block text-sm font-medium text-gray-700 mb-3">
            <Hash className="inline w-4 h-4 mr-1" />
            Select Family ID *
          </label>

          <div className="w-full">
            <div className="relative">
              <Users className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4 z-10" />
              <Select
                name="familyId"
                value={formData.familyId}
                onChange={handleInputChange}
                className="w-full pl-10 pr-4 py-2.5 border bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
              >
                <option value="">Select a family</option>
                {existingFamilies.map(family => (
                  <option key={family.id} value={family.id}>
                    {family.id} - {family.headOfFamily} ({family.memberCount} members)
                  </option>
                ))}
              </Select>
            </div>
            {errors.familyId && <p className="text-sm text-red-500 mt-1 ml-1">{errors.familyId}</p>}
          </div>

          {selectedFamily && (
            <div className="mt-3 p-3 bg-blue-50 rounded-md">
              <p className="text-sm text-blue-800">
                <strong>Selected Family:</strong> {selectedFamily.headOfFamily} - {selectedFamily.address}
                <br />
                <strong>Members:</strong> {selectedFamily.memberCount}
              </p>
            </div>
          )}
        </div>

        {/* Monthly Income */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
            <DollarSign className="w-5 h-5 mr-2" />
            Monthly Income *
          </h3>

          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="incomeBracket"
                  checked={formData.incomeType === 'bracket'}
                  onChange={() => handleIncomeTypeChange('bracket')}
                  className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <label htmlFor="incomeBracket" className="ml-2 text-sm text-gray-700">
                  Income bracket
                </label>
              </div>

              <div className="flex items-center">
                <input
                  type="radio"
                  id="numericIncome"
                  checked={formData.incomeType === 'numeric'}
                  onChange={() => handleIncomeTypeChange('numeric')}
                  className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <label htmlFor="numericIncome" className="ml-2 text-sm text-gray-700">
                  Specific amount
                </label>
              </div>
            </div>

            {formData.incomeType === 'bracket' ? (
              <div className="w-full">
                <div className="relative">
                  <DollarSign className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4 z-10" />
                  <select
                    name="incomeBracket"
                    value={formData.incomeBracket}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-2.5 border bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
                  >
                    <option value="">Select income bracket</option>
                    {incomeBrackets.map(bracket => (
                      <option key={bracket} value={bracket}>{bracket}</option>
                    ))}
                  </select>
                </div>
              </div>
            ) : (
              <Input
                label="Monthly Income (₱)"
                name="numericIncome"
                type="number"
                value={formData.numericIncome}
                onChange={handleInputChange}
                iconLeft={<DollarSign className="w-4 h-4" />}
                placeholder="Enter amount"
              />
            )}
            {errors.income && <p className="text-sm text-red-500 mt-1 ml-1">{errors.income}</p>}
          </div>
        </div>

        {/* House Information */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* House Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              <Building className="inline w-4 h-4 mr-1" />
              House Type *
            </label>
            <div className="w-full">
              <div className="relative">
                <Building className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4 z-10" />
                <Select
                  name="houseType"
                  value={formData.houseType}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-2.5 border bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
                >
                  <option value="">Select house type</option>
                  {houseTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </Select>
              </div>
              {errors.houseType && <p className="text-sm text-red-500 mt-1 ml-1">{errors.houseType}</p>}
            </div>
          </div>

          {/* Number of Rooms */}
          <div>
            <Input
              label="Number of Rooms *"
              name="numberOfRooms"
              type="number"
              value={formData.numberOfRooms}
              onChange={handleInputChange}
              iconLeft={<Home className="w-4 h-4" />}
              error={errors.numberOfRooms}
              placeholder="Enter number"
              min="0"

            />
          </div>
        </div>

        {/* Utilities */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
            <Zap className="w-5 h-5 mr-2" />
            Available Utilities
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="flex items-center space-x-3 p-3 border rounded-lg">
              <Input
                type="checkbox"
                id="electricity"
                name="utilities.electricity"
                value={formData.utilities.electricity}
                onChange={handleInputChange}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <Zap className="w-4 h-4 text-yellow-500" />
              <label htmlFor="electricity" className="text-sm text-gray-700">Electricity</label>
            </div>

            <div className="flex items-center space-x-3 p-3 border rounded-lg">
              <Input
                type="checkbox"
                id="water"
                name="utilities.water"
                value={formData.utilities.water}
                onChange={handleInputChange}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <Droplets className="w-4 h-4 text-blue-500" />
              <label htmlFor="water" className="text-sm text-gray-700">Water</label>
            </div>

            <div className="flex items-center space-x-3 p-3 border rounded-lg">
              <Input
                type="checkbox"
                id="internet"
                name="utilities.internet"
                value={formData.utilities.internet}
                onChange={handleInputChange}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <Wifi className="w-4 h-4 text-green-500" />
              <label htmlFor="internet" className="text-sm text-gray-700">Internet</label>
            </div>

            <div className="flex items-center space-x-3 p-3 border rounded-lg">
              <Input
                type="checkbox"
                id="cable"
                name="utilities.cable"
                value={formData.utilities.cable}
                onChange={handleInputChange}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <div className="w-4 h-4 bg-purple-500 rounded"></div>
              <label htmlFor="cable" className="text-sm text-gray-700">Cable TV</label>
            </div>

            <div className="flex items-center space-x-3 p-3 border rounded-lg">
              <Input
                type="checkbox"
                id="landline"
                name="utilities.landline"
                value={formData.utilities.landline}
                onChange={handleInputChange}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <div className="w-4 h-4 bg-gray-500 rounded"></div>
              <label htmlFor="landline" className="text-sm text-gray-700">Landline</label>
            </div>
          </div>
        </div>

        {/* Sanitation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Toilet Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Toilet Type *
            </label>
            <div className="w-full">
              <Select
                name="toiletType"
                value={formData.toiletType}
                onChange={handleInputChange}
                className="w-full px-4 py-2.5 border bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
              >
                <option value="">Select toilet type</option>
                {toiletTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </Select>
              {errors.toiletType && <p className="text-sm text-red-500 mt-1 ml-1">{errors.toiletType}</p>}
            </div>
          </div>

          {/* Waste Disposal */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              <Trash className="inline w-4 h-4 mr-1" />
              Waste Disposal *
            </label>
            <div className="w-full">
              <div className="relative">
                <Trash className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4 z-10" />
                <select
                  name="wasteDisposal"
                  value={formData.wasteDisposal}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-2.5 border bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
                >
                  <option value="">Select waste disposal method</option>
                  {wasteDisposalTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
              {errors.wasteDisposal && <p className="text-sm text-red-500 mt-1 ml-1">{errors.wasteDisposal}</p>}
            </div>
          </div>
        </div>


        {/* Notes */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            <FileText className="inline w-4 h-4 mr-1" />
            Notes / Additional Information
          </label>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleInputChange}
            rows={4}
            placeholder="Enter any additional household information, special conditions, or observations..."
            className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          />
        </div>

        {/* Submit Button */}
        <div className="pt-4 border-t border-gray-200">
          <div className="flex gap-3">
            <Button
              onClick={handleSubmit}
              variant="primary"
              size="lg"
              className="flex-1"
              disabled={!formData.familyId}
            >
              <Home className="w-5 h-5 mr-2" />
              Save Household Details
            </Button>

            <Button
              onClick={resetForm}
              variant="secondary"
              outline
              size="lg"
            >
              Reset Form
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
