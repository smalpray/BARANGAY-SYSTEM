import React, { useState } from 'react';
import { Plus, X } from "lucide-react";

// Mock Button component since we can't import the actual one
const Button = ({ children, onClick, className, type = "button", ...props }) => (
  <button 
    type={type}
    onClick={onClick} 
    className={className}
    {...props}
  >
    {children}
  </button>
);

// Modal Component
const AddPositionModal = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    position: '',
    limit: '',
    description: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    if (formData.position && formData.limit) {
      onSubmit(formData);
      setFormData({ position: '', limit: '', description: '' });
      onClose();
    } else {
      alert('Please fill in all required fields');
    }
  };

  const handleCancel = () => {
    setFormData({ position: '', limit: '', description: '' });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-xl font-semibold text-gray-800">Add New Position</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          <div className="space-y-4">
            {/* Position Field */}
            <div>
              <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-2">
                Position <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="position"
                name="position"
                value={formData.position}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter position title"
              />
            </div>

            {/* Limit Field */}
            <div>
              <label htmlFor="limit" className="block text-sm font-medium text-gray-700 mb-2">
                Limit <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                id="limit"
                name="limit"
                value={formData.limit}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter position limit"
                min="1"
              />
            </div>

            {/* Description Field */}
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows="3"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                placeholder="Enter position description (optional)"
              />
            </div>
          </div>

          {/* Modal Footer */}
          <div className="flex gap-3 mt-6 pt-4 border-t">
            <Button
              type="button"
              onClick={handleCancel}
              className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors duration-200"
            >
              Cancel
            </Button>
            <Button
              type="button"
              onClick={handleSubmit}
              className="flex-1 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors duration-200"
            >
              Add Position
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Updated AddPositionSection Component
export default function AddPositionSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddPosition = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmitPosition = (positionData) => {
    console.log('New position data:', positionData);
    // Here you would typically send the data to your backend or update your state
    alert(`Position "${positionData.position}" added successfully!`);
  };

  return (
    <div>
      <div className="flex justify-end items-center">
        <Button
          onClick={handleAddPosition}
          className="flex items-center gap-2 bg-blue-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
        >
          <Plus size={16} />
          ADD POSITION
        </Button>
      </div>

      <AddPositionModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmitPosition}
      />
    </div>
  );
}