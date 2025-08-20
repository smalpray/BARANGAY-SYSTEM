import React, { useState } from 'react'
import NewResidentLayout from '../layout-resident';
import BasicInfoResidentSection from './basic-info-resident-section';
import OtherInfoResidentSection from './other-info-resident-section';
import GuardianResidentSection from './guardian-resident-section';
import AccountResidentSection from './account-resident-section';
import CreateNewResidentSection from './create-new-resident';

export default function TabsResidentSection() {

    const [activeTab, setActiveTab] = useState('basic');

    const tabs = [
        { id: 'basic', label: 'Basic Info' },
        { id: 'other', label: 'Other Info' },
        { id: 'guardian', label: 'Guardian' },
        { id: 'account', label: 'Account' }
    ];


    // const renderContent = () => {
    //   switch (activeTab) {
    //     case 'basic':
    //       return renderBasicInfo();
    //     case 'other':
    //       return renderOtherInfo();
    //     case 'guardian':
    //       return renderGuardian();
    //     case 'account':
    //       return renderAccount();
    //     default:
    //       return renderBasicInfo();
    //   }
    // };
    return (
        <div className={`min-h-screen p-6 ${activeTab !== 'basic' ? 'bg-white-800' : 'bg-white-50'}`}>
            <div className="max-w-7xl mx-auto">
                <div className="flex mb-8">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-6 py-3 text-sm font-medium ${activeTab === tab.id
                                ? 'bg-blue-600 text-white'
                                : 'bg-white-600 text-white-300 hover:bg-white-500 border border-white-500'
                                } ${tab.id === 'basic' ? 'rounded-l-lg' : ''
                                } ${tab.id === 'account' ? 'rounded-r-lg' : ''
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
                <CreateNewResidentSection />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <NewResidentLayout>
                        {activeTab === 'basic' && <><BasicInfoResidentSection /></>}
                        {activeTab === 'other' && <><OtherInfoResidentSection /></>}
                        {activeTab === 'guardian' && <><GuardianResidentSection /></>}
                        {activeTab === 'account' && <><AccountResidentSection /></>}
                    </NewResidentLayout>
                </div>
                {/* {activeTab !== 'basic' && (
                    <div className="mt-8 flex justify-center">
                        <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-md transition-colors duration-200 flex items-center space-x-2">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                            </svg>
                            <span>ADD NEW OFFICIAL</span>
                        </button>
                    </div>
                )} */}
            </div>
        </div>
    )
}
