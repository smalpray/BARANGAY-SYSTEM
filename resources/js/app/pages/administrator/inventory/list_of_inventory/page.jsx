import React, { useState } from 'react';
import { Plus, Edit, Trash2, Package, Search, Filter } from 'lucide-react';
import Layout from '../../layout';
import Button from '@/app/_components/button';
import SearchInventorySection from './sections/search-inventory-section';
import AddInventorySection from './sections/add-inventory-section';
import TableInventorySection from './sections/table-inventory-section';

export default function Page() {
  return (
    <Layout>
      <InventoryManager />
    </Layout>
  );
}

const InventoryManager = () => {
  

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
          </div>

        </div>
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <SearchInventorySection/>
      </div>
      {/* Button/Item Form Modal */}
      <AddInventorySection/>

      {/* Items List */}
      <div className="bg-white rounded-lg shadow-sm">
        <TableInventorySection/>
      </div>
    </div>

  );
};

