import Button from '@/app/_components/button'
import React, { useState } from 'react'

export default function SearchTableSection() {
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
  return (
    <div>
        <div className="flex items-center mb-4">
          <span className="text-gray-700 font-semibold text-lg">NUMBER OF RESIDENCE</span>
          <span className="ml-2 bg-blue-600 text-white px-3 py-1 rounded font-medium">8</span>
        </div>

        {/* Filter Form */}
        <div className="grid grid-cols-3 gap-4 mb-4">
          {/* First Row */}
          <div>
            <label className="block text-sm font-medium text-white bg-blue-500 px-3 py-2 rounded-t mb-0">
              FIRST NAME
            </label>
             
            <input
              type="text"
              value={filters.firstName}
              onChange={(e) => handleFilterChange('firstName', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-b focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter first name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white bg-blue-500 px-3 py-2 rounded-t mb-0">
              MIDDLE NAME
            </label>
            <input
              type="text"
              value={filters.middleName}
              onChange={(e) => handleFilterChange('middleName', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-b focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter middle name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white bg-blue-500 px-3 py-2 rounded-t mb-0">
              LAST NAME
            </label>
            <input
              type="text"
              value={filters.lastName}
              onChange={(e) => handleFilterChange('lastName', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-b focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter last name"
            />
          </div>

          {/* Second Row */}
          <div>
            <label className="block text-sm font-medium text-white bg-blue-500 px-3 py-2 rounded-t mb-0">
              VOTERS
            </label>
            <select
              value={filters.voters}
              onChange={(e) => handleFilterChange('voters', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-b focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">--SELECT VOTERS--</option>
              <option value="YES">YES</option>
              <option value="NO">NO</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-white bg-blue-500 px-3 py-2 rounded-t mb-0">
              AGE
            </label>
            <input
              type="number"
              value={filters.age}
              onChange={(e) => handleFilterChange('age', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-b focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter age"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white bg-blue-500 px-3 py-2 rounded-t mb-0">
              STATUS
            </label>
            <select
              value={filters.status}
              onChange={(e) => handleFilterChange('status', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-b focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">--SELECT STATUS--</option>
              <option value="ACTIVE">ACTIVE</option>
              <option value="INACTIVE">INACTIVE</option>
            </select>
          </div>

          {/* Third Row */}
          <div>
            <label className="block text-sm font-medium text-white bg-blue-500 px-3 py-2 rounded-t mb-0">
              PWD
            </label>
            <select
              value={filters.pwd}
              onChange={(e) => handleFilterChange('pwd', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-b focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">--SELECT PWD--</option>
              <option value="YES">YES</option>
              <option value="NO">NO</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-white bg-blue-500 px-3 py-2 rounded-t mb-0">
              SINGLE PARENT
            </label>
            <select
              value={filters.singleParent}
              onChange={(e) => handleFilterChange('singleParent', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-b focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">--SELECT PARENT STATUS--</option>
              <option value="YES">YES</option>
              <option value="NO">NO</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-white bg-blue-500 px-3 py-2 rounded-t mb-0">
              SENIOR
            </label>
            <select
              value={filters.senior}
              onChange={(e) => handleFilterChange('senior', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-b focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">--SELECT SENIOR--</option>
              <option value="YES">YES</option>
              <option value="NO">NO</option>
            </select>
          </div>

          {/* Fourth Row */}
          <div>
            <label className="block text-sm font-medium text-white bg-blue-500 px-3 py-2 rounded-t mb-0">
              RESIDENT NUMBER
            </label>
            <input
              type="text"
              value={filters.residentNumber}
              onChange={(e) => handleFilterChange('residentNumber', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-b focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter resident number"
            />
          </div>
        </div>

       
    </div>
  )
}
