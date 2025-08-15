import React, { useState } from 'react'
import { Plus, Edit, Trash2, Package, Search, Filter } from 'lucide-react';
export default function SearchInventorySection() {
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
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0 md:space-x-4">
                  <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search items..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        
                    />
        
        
                  </div>
        
                  <div className="flex items-center space-x-2">
                    <Filter className="h-5 w-5 text-gray-400" />
                    <select
                      value={statusFilter}
                      onChange={(e) => setStatusFilter(e.target.value)}
                      className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      {statusOptions.map(status => (
                        <option key={status} value={status}>{status}</option>
                      ))}
                    </select>
                  </div>
                </div>
    </div>
  )
}

