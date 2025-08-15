import Input from '@/app/_components/input'
import Select from '@/app/_components/select'
import React, { useState } from 'react'

export default function BasicInfoSection() {
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
          

            <div className="lg:col-span-1">
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                    <h2 className="text-xl font-semibold text-gray-900 mb-6">Personal Details</h2>
                    <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Input
                                    label="First Name"
                                    placeholder="Enter First Name"
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="space-y-2">
                                <Input
                                    label="Middle Name"
                                    type="text"
                                    name="middleName"
                                    value={formData.middleName}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Input
                                    label="Last Name"
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="space-y-2">
                                <Input
                                    label="Suffix"
                                    type="text"
                                    name="suffix"
                                    value={formData.suffix}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Select
                                    name="gender"
                                    label="Gender"
                                    value={formData.gender}
                                    onChange={handleInputChange}
                                    options={[
                                        { value: "Male", label: "Male" },
                                        { value: "Female", label: "Female" },
                                        { value: "Other", label: "Other" },
                                    ]}
                                />
                            </div>
                            <div className="space-y-2">
                                <Select
                                    name="civilStatus"
                                    label="Civil Status"
                                    value={formData.civilStatus}
                                    onChange={handleInputChange}
                                    options={[
                                        { value: "Single", label: "Single" },
                                        { value: "Married", label: "Married" },
                                        { value: "Divorced", label: "Divorced" },
                                        { value: "Widowed", label: "Widowed" },
                                    ]}
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Input
                                    label="Religion"
                                    type="text"
                                    name="religion"
                                    value={formData.religion}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="space-y-2">
                                <Input
                                    label="Nationality"
                                    type="text"
                                    name="nationality"
                                    value={formData.nationality}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </div>

           
        </>
    )
}
