import React, { useState } from 'react'
import { Plus, Trash2, Edit, X, User, Users, MapPin, Calendar, FileText, AlertCircle, MessageSquare } from 'lucide-react';
export default function TableSection() {
  const [searchTerm, setSearchTerm] = useState('');
    const [entriesPerPage, setEntriesPerPage] = useState(10);
    const [selectedItems, setSelectedItems] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({});
  
    const records = [
      {
        id: 1,
        blotterNumber: '2066133803768924',
        status: 'NEW',
        remarks: 'OPEN',
        incident: 'qewr',
        location: 'San Carlos',
        dateIncident: '04/25/2025 - 05:43 PM',
        dateReported: '04/25/2025 - 05:43 PM'
      },
      {
        id: 2,
        blotterNumber: '4108081920533098',
        status: 'NEW',
        remarks: 'OPEN',
        incident: 'Sdaasd',
        location: 'Sad',
        dateIncident: '04/11/2025 - 04:09 PM',
        dateReported: '04/25/2025 - 07:10 AM'
      }
    ];
  
    const handleSelectAll = (checked) => {
      setSelectedItems(checked ? records.map(r => r.id) : []);
    };
  
    const handleSelectItem = (id, checked) => {
      setSelectedItems(prev =>
        checked ? [...prev, id] : prev.filter(item => item !== id)
      );
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Form submitted:', formData);
      // Handle form submission here
      setShowModal(false);
      // Reset form or show success message
    };
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    };
  
    const filteredRecords = records.filter(record =>
      Object.values(record).some(value =>
        value.toString().toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  return (
    <div>
      <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-blue-500 text-left text-white uppercase text-xs font-medium">
                      <tr>
                        <th className="px-6 py-3">
                          <input
                            type="checkbox"
                            checked={selectedItems.length === records.length && records.length > 0}
                            onChange={(e) => handleSelectAll(e.target.checked)}
                            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                          />
                        </th>
                        <th className="px-6 py-3">Blotter Number</th>
                        <th className="px-6 py-3">Status</th>
                        <th className="px-6 py-3">Remarks</th>
                        <th className="px-6 py-3">Incident Number</th>
                        <th className="px-6 py-3">Location of Incident</th>
                        <th className="px-6 py-3">Date Incident</th>
                        <th className="px-6 py-3">Date Reported</th>
                        <th className="px-6 py-3">Action</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {filteredRecords.map((record) => (
                        <tr key={record.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4">
                            <input
                              type="checkbox"
                              checked={selectedItems.includes(record.id)}
                              onChange={(e) => handleSelectItem(record.id, e.target.checked)}
                              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                            />
                          </td>
                          <td className="px-6 py-4 text-sm text-blue-600 font-medium">{record.blotterNumber}</td>
                          <td className="px-6 py-4">
                            <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                              {record.status}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <span className="inline-flex px-2 py-1 text-xs font-semibold rounded bg-red-100 text-red-800">
                              {record.remarks}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-900">{record.incident}</td>
                          <td className="px-6 py-4 text-sm text-gray-900">{record.location}</td>
                          <td className="px-6 py-4 text-sm text-gray-900">{record.dateIncident}</td>
                          <td className="px-6 py-4 text-sm text-gray-900">{record.dateReported}</td>
                          <td className="px-6 py-4">
                            <button className="bg-yellow-400 hover:bg-yellow-500 text-yellow-900 p-2 rounded transition-colors">
                              <Edit size={16} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
    </div>
  )
}
