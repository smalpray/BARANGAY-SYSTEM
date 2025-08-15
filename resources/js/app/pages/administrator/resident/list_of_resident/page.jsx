import React, { useState } from 'react';
import { Edit2, X, Search, RotateCcw } from 'lucide-react';
import Layout from '../../layout';
import Button from '@/app/_components/button';
import Input from '@/app/_components/input';
import SearchTableSection from './sections/search-table-section';
import ActionButtonSection from './sections/action-button-section';
import TableListResident from './sections/table-list-resident';

const ResidentList = () => {
  const [filters, setFilters] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    voters: '',
    age: '',
    status: '',
    pwd: '',
    singleParent: '',
    senior: '',
    residentNumber: ''
  });

  const residents = [
    {
      id: 1,
      image: '/api/placeholder/40/40',
      residentNumber: '1648321043900',
      name: 'Wacky D. Hojilla',
      age: 21,
      pwd: 'NO',
      singleParent: 'NO',
      voters: 'YES',
      status: 'ACTIVE'
    },
    {
      id: 2,
      image: '/api/placeholder/40/40',
      residentNumber: '1135321697721',
      name: 'Janvee M. Romano',
      age: '',
      pwd: 'NO',
      singleParent: 'NO',
      voters: 'NO',
      status: 'ACTIVE'
    },
    
  ];

  const handleFilterChange = (field, value) => {
    setFilters(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSearch = () => {
    // Implement search logic here
    console.log('Searching with filters:', filters);
  };

  const handleReset = () => {
    setFilters({
      firstName: '',
      middleName: '',
      lastName: '',
      voters: '',
      age: '',
      status: '',
      pwd: '',
      singleParent: '',
      senior: '',
      residentNumber: ''
    });
  };

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      {/* Header */}
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 mb-6">
        <SearchTableSection/>
        <ActionButtonSection/>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        {/* Table Header */}
        <div className="bg-blue-700 text-white">
          <div className="grid grid-cols-12 gap-4 px-4 py-3 text-sm font-medium">
            <div className="col-span-1">IMAGE</div>
            <div className="col-span-2">RESIDENT NUMBER</div>
            <div className="col-span-2">NAME</div>
            <div className="col-span-1">AGE</div>
            <div className="col-span-1">PWD</div>
            <div className="col-span-1">SINGLE PARENT</div>
            <div className="col-span-1">VOTERS</div>
            <div className="col-span-1">STATUS</div>
            <div className="col-span-2">ACTION</div>
          </div>
        </div>

        {/* Table Body */}
        <div className="divide-y divide-gray-200">
         <TableListResident/>
        </div>
      </div>
    </div>
  );
};

export default function Page() {
  return (
    <Layout>
      <ResidentList />
    </Layout>
  )
}