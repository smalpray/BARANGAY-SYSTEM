import Input from '@/app/_components/input'
import React, { useState } from 'react'

export default function GuardianSection() {

    const [formData, setFormData] = useState({
        // Basic Info
        position: '',
        startDate: '',
        endDate: '',
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
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900 mb-6 text-center">Guardian</h2>

                <div className="space-y-6">
                    <div className="space-y-2">

                        <Input
                            label="Father's Name"
                            type="text"
                            name="fatherName"
                            value={formData.fatherName}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2"
                        />
                    </div>
                    <div className="space-y-2">
                        <Input
                            label="Mother's Name"
                            type="text"
                            name="motherName"
                            value={formData.motherName}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2"
                        />
                    </div>
                    <div className="space-y-2">
                        <Input
                            label="Guardian Name"
                            type="text"
                            name="guardian"
                            value={formData.guardian}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2"
                        />
                    </div>
                    <div className="space-y-2">
                        <Input
                            label="Contact"
                            type="tel"
                            name="contact"
                            value={formData.contact}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2"
                        />
                    </div>
                </div>
            </div>

        </>
    )
}
