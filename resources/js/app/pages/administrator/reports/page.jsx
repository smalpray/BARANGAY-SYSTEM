import React, { useState } from 'react';
import { Layers, Filter, RotateCcw, Printer, ChevronLeft, ChevronRight } from 'lucide-react';
import Layout from '../layout';
import SearchReportSection from './sections/search-report-section';

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
      <div className="">
        {/* Header */}
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Resident Report</h1>
        
        {/* Filter Section */}
        <SearchReportSection/>
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