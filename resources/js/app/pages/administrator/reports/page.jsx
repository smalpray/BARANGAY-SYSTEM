import React, { useState } from 'react';
import { Layers, Filter, RotateCcw, Printer, ChevronLeft, ChevronRight } from 'lucide-react';
import Layout from '../layout';

export default function Page() {
  return (
    <Layout>
      <ResidentReport />
    </Layout>
  );
}

function ResidentReport() {
  const [filters, setFilters] = useState({
    voters: '',
    age: '',
    status: '',
    pwd: '',
    singleParent: '',
    senior: ''
  });

  const [residents] = useState([
    { name: 'Hojilla Wacky D.', age: '20', pwd: '', singleParent: 'NO', voters: 'YES', status: 'ACTIVE', senior: 'NO' },
    { name: 'Asdasd Asdasd A.', age: '', pwd: '', singleParent: 'NO', voters: 'YES', status: 'ACTIVE', senior: 'NO' },
    { name: 'Bacarro Jancen P.', age: '20', pwd: '', singleParent: 'NO', voters: 'YES', status: 'ACTIVE', senior: 'NO' },
    { name: 'Hojilla Wacky D.', age: '20', pwd: '', singleParent: 'NO', voters: 'YES', status: 'ACTIVE', senior: 'NO' },
    { name: 'Jan Aj S.', age: '', pwd: '', singleParent: 'NO', voters: 'YES', status: 'ACTIVE', senior: 'NO' },
    { name: 'Pa Pa P.', age: '', pwd: '', singleParent: 'NO', voters: 'YES', status: 'ACTIVE', senior: 'NO' },
    { name: 'Dela Ayesha M.', age: '', pwd: '', singleParent: 'NO', voters: 'NO', status: 'ACTIVE', senior: 'NO' },
    { name: 'Maquilang Christine F.', age: '22', pwd: '', singleParent: 'NO', voters: 'YES', status: 'ACTIVE', senior: 'NO' }
  ]);

  const handleFilterChange = (field, value) => {
    setFilters(prev => ({ ...prev, [field]: value }));
  };

  const handleFilter = () => {
    console.log('Filtering with:', filters);
  };

  const handleReset = () => {
    setFilters({
      voters: '',
      age: '',
      status: '',
      pwd: '',
      singleParent: '',
      senior: ''
    });
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Resident Report</h1>
        
        {/* Filter Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            
            {/* VOTERS */}
            <div className="flex items-center gap-3">
              <label className="bg-blue-600 text-white px-4 py-2 rounded font-medium min-w-fit">
                VOTERS
              </label>
              <select 
                className="flex-1 border border-gray-300 rounded px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={filters.voters}
                onChange={(e) => handleFilterChange('voters', e.target.value)}
              >
                <option value="">--SELECT VOTERS--</option>
                <option value="YES">YES</option>
                <option value="NO">NO</option>
              </select>
            </div>

            {/* AGE */}
            <div className="flex items-center gap-3">
              <label className="bg-blue-600 text-white px-4 py-2 rounded font-medium min-w-fit">
                AGE
              </label>
              <input 
                type="text"
                placeholder="Enter age"
                className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={filters.age}
                onChange={(e) => handleFilterChange('age', e.target.value)}
              />
            </div>

            {/* STATUS */}
            <div className="flex items-center gap-3">
              <label className="bg-blue-600 text-white px-4 py-2 rounded font-medium min-w-fit">
                STATUS
              </label>
              <select 
                className="flex-1 border border-gray-300 rounded px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={filters.status}
                onChange={(e) => handleFilterChange('status', e.target.value)}
              >
                <option value="">--SELECT STATUS--</option>
                <option value="ACTIVE">ACTIVE</option>
                <option value="INACTIVE">INACTIVE</option>
              </select>
            </div>

            {/* PWD */}
            <div className="flex items-center gap-3">
              <label className="bg-blue-600 text-white px-4 py-2 rounded font-medium min-w-fit">
                PWD
              </label>
              <select 
                className="flex-1 border border-gray-300 rounded px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={filters.pwd}
                onChange={(e) => handleFilterChange('pwd', e.target.value)}
              >
                <option value="">--SELECT PWD--</option>
                <option value="YES">YES</option>
                <option value="NO">NO</option>
              </select>
            </div>

            {/* SINGLE PARENT */}
            <div className="flex items-center gap-3">
              <label className="bg-blue-600 text-white px-4 py-2 rounded font-medium min-w-fit">
                SINGLE PARENT
              </label>
              <select 
                className="flex-1 border border-gray-300 rounded px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={filters.singleParent}
                onChange={(e) => handleFilterChange('singleParent', e.target.value)}
              >
                <option value="">--SELECT PARENT STATUS--</option>
                <option value="YES">YES</option>
                <option value="NO">NO</option>
              </select>
            </div>

            {/* SENIOR */}
            <div className="flex items-center gap-3">
              <label className="bg-blue-600 text-white px-4 py-2 rounded font-medium min-w-fit">
                SENIOR
              </label>
              <select 
                className="flex-1 border border-gray-300 rounded px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={filters.senior}
                onChange={(e) => handleFilterChange('senior', e.target.value)}
              >
                <option value="">--SELECT SENIOR--</option>
                <option value="YES">YES</option>
                <option value="NO">NO</option>
              </select>
            </div>
          </div>

          {/* Filter Buttons */}
          <div className="flex gap-4 justify-center">
            <button 
              onClick={handleFilter}
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded flex items-center gap-2 transition-colors"
            >
              <Filter size={16} />
              FILTER
            </button>
            <button 
              onClick={handleReset}
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded flex items-center gap-2 transition-colors"
            >
              <RotateCcw size={16} />
              RESET
            </button>
          </div>
        </div>

        {/* Print Button */}
        <div className="mb-4">
          <button 
            onClick={handlePrint}
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded flex items-center gap-2 transition-colors"
          >
            <Printer size={16} />
            PRINT
          </button>
        </div>

        {/* Table Section */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b">Name</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b">Age</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b">Pwd</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b">Single Parent</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b">Voters</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b">Status</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b">Senior</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {residents.map((resident, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3 text-gray-800">{resident.name}</td>
                    <td className="px-4 py-3 text-gray-800">{resident.age}</td>
                    <td className="px-4 py-3 text-gray-800">{resident.pwd}</td>
                    <td className="px-4 py-3 text-gray-800">{resident.singleParent}</td>
                    <td className="px-4 py-3 text-gray-800">{resident.voters}</td>
                    <td className="px-4 py-3 text-gray-800">{resident.status}</td>
                    <td className="px-4 py-3 text-gray-800">{resident.senior}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-end gap-4 px-6 py-4 border-t bg-gray-50">
            <button className="flex items-center gap-2 px-3 py-1 text-gray-600 hover:text-blue-600 transition-colors">
              <ChevronLeft size={16} />
              Previous
            </button>
            <div className="flex items-center gap-2">
              <button className="px-3 py-1 bg-blue-600 text-white rounded">1</button>
            </div>
            <button className="flex items-center gap-2 px-3 py-1 text-gray-600 hover:text-blue-600 transition-colors">
              Next
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}