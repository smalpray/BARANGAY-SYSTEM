import Input from '@/app/_components/input'
import React, { useState } from 'react'

export default function OtherInfoSection() {

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
                <h2 className="text-xl font-semibold text-gray-900 mb-6 text-center">Address</h2>

                <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">

                            <Input
                                label="Municipality"
                                type="text"
                                name="municipality"
                                value={formData.municipality}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2"
                            />
                        </div>
                        <div className="space-y-2">
                            <Input
                                label="Zip Code"
                                type="text"
                                name="zip"
                                value={formData.zip}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Input
                                label="Barangat"
                                type="text"
                                name="barangay"
                                value={formData.barangay}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2"
                            />
                        </div>
                        <div className="space-y-2">
                            <Input
                                label="House Number"
                                type="text"
                                name="houseNumber"
                                value={formData.houseNumber}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Input
                                label="Street"
                                type="text"
                                name="street"
                                value={formData.street}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2"
                            />
                        </div>
                        <div className="space-y-2">
                            <Input
                                label="Address"
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Input
                                label="Contact Number"
                                type="text"
                                name="contactNumber"
                                value={formData.contactNumber}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2"
                            />
                        </div>
                        <div className="space-y-2">

                            <Input
                                label="Email Address"
                                type="text"
                                name="emailAddress"
                                value={formData.emailAddress}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2 "
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
