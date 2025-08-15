import React, { useState } from 'react'

export default function SearchSection() {
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
      <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <span className="text-gray-600">Show</span>
        <select
          value={entriesPerPage}
          onChange={(e) => setEntriesPerPage(Number(e.target.value))}
          className="border border-gray-300 rounded px-6 py-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {[10, 25, 50, 100].map((n) => (
            <option key={n} value={n}>{n}</option>
          ))}
        </select>
        <span className="text-gray-600">entries</span>
      </div>
      <div className="flex items-center  gap-2">
        <span className="text-gray-600">Search:</span>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-300 rounded px-3 py-1 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Search records..."
        />
      </div>
      </div>
    </div>
  )
}

