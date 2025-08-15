import Button from '@/app/_components/button'
import React, { useState } from 'react'
import { Plus, Edit, Trash2, Package, Search, Filter } from 'lucide-react';
export default function AddInventorySection() {
    const [items, setItems] = useState([
        {
          id: 1,
          name: 'Shovel',
          description: 'Heavy-duty garden shovel for digging',
          quantity: 5,
          condition: 'Good',
          location: 'Tool Shed A',
          status: 'Active',
          dateAdded: '2024-01-15'
        },
        {
          id: 2,
          name: 'Lawn Mower',
          description: 'Electric lawn mower with mulching capability',
          quantity: 2,
          condition: 'New',
          location: 'Equipment Bay',
          status: 'Active',
          dateAdded: '2024-02-01'
        },
        {
          id: 3,
          name: 'Garden Hose',
          description: '50ft retractable garden hose',
          quantity: 1,
          condition: 'Fair',
          location: 'Storage Room B',
          status: 'Damaged',
          dateAdded: '2023-12-10'
        }
      ]);
    
      const [showForm, setShowForm] = useState(false);
      const [editingItem, setEditingItem] = useState(null);
      const [searchTerm, setSearchTerm] = useState('');
      const [statusFilter, setStatusFilter] = useState('All');
      const [formData, setFormData] = useState({
        name: '',
        description: '',
        quantity: '',
        condition: 'New',
        location: '',
        status: 'Active'
      });
    
      const conditions = ['New', 'Good', 'Fair', 'Poor'];
      const statuses = ['Active', 'Damaged', 'Retired'];
      const statusOptions = ['All', ...statuses];
    
      const resetForm = () => {
        setFormData({
          name: '',
          description: '',
          quantity: '',
          condition: 'New',
          location: '',
          status: 'Active'
        });
        setEditingItem(null);
        setShowForm(false);
      };
    
      const handleSubmit = () => {
        if (!formData.name || !formData.quantity) {
          alert('Please fill in required fields (Name and Quantity)');
          return;
        }
    
        const newItem = {
          ...formData,
          quantity: parseInt(formData.quantity),
          dateAdded: editingItem ? editingItem.dateAdded : new Date().toISOString().split('T')[0]
        };
    
        if (editingItem) {
          setItems(items.map(item =>
            item.id === editingItem.id ? { ...newItem, id: editingItem.id } : item
          ));
        } else {
          setItems([...items, { ...newItem, id: Date.now() }]);
        }
    
        resetForm();
      };
    
      const handleEdit = (item) => {
        setFormData({
          name: item.name,
          description: item.description,
          quantity: item.quantity.toString(),
          condition: item.condition,
          location: item.location,
          status: item.status
        });
        setEditingItem(item);
        setShowForm(true);
      };
    
      const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this item?')) {
          setItems(items.filter(item => item.id !== id));
        }
      };
    
      const handleRetire = (id) => {
        setItems(items.map(item =>
          item.id === id ? { ...item, status: 'Retired' } : item
        ));
      };
    
      const filteredItems = items.filter(item => {
        const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.location.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesFilter = statusFilter === 'All' || item.status === statusFilter;
        return matchesSearch && matchesFilter;
      });
    
      const getStatusColor = (status) => {
        switch (status) {
          case 'Active': return 'bg-green-100 text-green-800 border-green-300';
          case 'Damaged': return 'bg-yellow-100 text-yellow-800 border-yellow-300';
          case 'Retired': return 'bg-red-100 text-red-800 border-red-300';
          default: return 'bg-gray-100 text-gray-800 border-gray-300';
        }
      };
    
      const getConditionColor = (condition) => {
        switch (condition) {
          case 'New': return 'text-green-600';
          case 'Good': return 'text-blue-600';
          case 'Fair': return 'text-yellow-600';
          case 'Poor': return 'text-red-600';
          default: return 'text-gray-600';
        }
      };
  return (
    <div>
        <div className="flex justify-end mb-4">
        <Button
          onClick={() => setShowForm(true)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          <Plus className="h-5 w-5" />
          <span>Add Item</span>
        </Button>
      </div>


      {/* Item Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {editingItem ? 'Edit Item' : 'Add New Item'}
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Item Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., Shovel"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description
                  </label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Describe the item..."
                    rows={3}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Quantity *
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="0"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Condition
                  </label>
                  <select
                    value={formData.condition}
                    onChange={(e) => setFormData({ ...formData, condition: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {conditions.map(condition => (
                      <option key={condition} value={condition}>{condition}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Storage Location
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., Tool Shed A"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Status
                  </label>
                  <select
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {statuses.map(status => (
                      <option key={status} value={status}>{status}</option>
                    ))}
                  </select>
                </div>

                <div className="flex space-x-3 pt-4">
                  <button
                    onClick={handleSubmit}
                    className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    {editingItem ? 'Update Item' : 'Save Item'}
                  </button>
                  <button
                    onClick={resetForm}
                    className="flex-1 bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
