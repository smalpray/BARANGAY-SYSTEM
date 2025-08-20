import Input from '@/app/_components/input'
import Select from '@/app/_components/select'
import React, { useState } from 'react'

export default function NewResidentLayout({ children }) {

    const [formData, setFormData] = useState({
        // Basic Info
       
        voters: '',
        dateOfBirth: '',
        placeOfBirth: '',
        pwd: '',
        singleParent: '',
        firstName: '',
        middleName: '',
        lastName: '',
        suffix: '',
        gender: 'Male',
        civilStatus: 'Single',
        religion: '',
        nationality: '',
        // Other Info (Address)
        municipality: '',
        zip: '',
        barangay: '',
        houseNumber: '',
        street: '',
        address: '',
        contactNumber: '',
        emailAddress: '',
        // Guardian
        fatherName: '',
        motherName: '',
        guardianName: '',
        guardianContact: '',
        // Account
        username: '',
        password: '',
        confirmPassword: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };
    return (

        <>
          
            <div className="lg:col-span-1 space-y-6">
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                    <div className="w-24 h-24 bg-gray-100 rounded-lg mx-auto mb-4 flex items-center justify-center border border-gray-200">
                        <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                            <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
                        </div>
                    </div>
                </div>
                

                <div className="space-y-2">
                    <Select
                        name="voters"
                        label="Voters Status"
                        value={formData.voters}
                        onChange={handleInputChange}
                        options={[
                            { value: "registered", label: "Registered" },
                            { value: "unregistered", label: "Unregistered" },
                        ]}
                    />
                </div>
                <div className="space-y-2">
                    <Input
                        type="date"
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={handleInputChange}
                        label="Date of Birth"
                    />
                </div>


                <div className="w-full">
                    <Input
                        label="Place of Birth"
                        placeholder="Enter Place of Birth"
                        type="text"
                        name="placeOfBirth"
                        value={formData.placeOfBirth}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="w-full">
                    <Input
                        label="PWD"
                        placeholder="Enter PWD"
                        type="text"
                        name="pwd"
                        value={formData.pwd}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="space-y-2">
                    <Select
                        name="singleParent"
                        label="Single Parent"
                        value={formData.singleParent}
                        onChange={handleInputChange}
                        options={[
                            { value: "", label: "Select Status" },
                            { value: "yes", label: "Yes" },
                            { value: "no", label: "No" },
                        ]}
                    />
                </div>
            </div>
            {children}
        </>

    )
}
