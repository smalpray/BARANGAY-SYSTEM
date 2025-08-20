import Button from '@/app/_components/button';
import Input from '@/app/_components/input'
import { RotateCcw, Search } from 'lucide-react';
import React, { useState } from 'react'

export default function SearchResidentUserSection() {
    const handleReset = () => {
        setSearchData({
            firstName: "",
            middleName: "",
            lastName: "",
            residentNumber: "",
        });
    };

    const handleSearch = () => {
        console.log("Searching with:", searchData);
    };
    const [searchData, setSearchData] = useState({
        firstName: "",
        middleName: "",
        lastName: "",
        residentNumber: "",
    });
    return (
        <>
            <div className=" text-black p-6">
                <h2 className="text-xl font-semibold mb-6">
                    NUMBER OF USERS RESIDENT
                </h2>

                {/* Search Form with Input Component */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                    <Input
                        label="FIRST NAME"
                        name="firstName"
                        value={searchData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                    />
                    <Input
                        label="MIDDLE NAME"
                        name="middleName"
                        value={searchData.middleName}
                        onChange={(e) => handleInputChange("middleName", e.target.value)}
                    />
                    <Input
                        label="LAST NAME"
                        name="lastName"
                        value={searchData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                    />
                    <Input
                        label="RESIDENT NUMBER"
                        name="residentNumber"
                        value={searchData.residentNumber}
                        onChange={(e) =>
                            handleInputChange("residentNumber", e.target.value)
                        }
                    />
                </div>

                {/* Search Buttons */}
                <div className="flex gap-3">
                    <Button
                        onClick={handleSearch}
                        className="flex items-center gap-2  px-4 py-2 rounded-md transition-colors"
                    >
                        <Search size={16} />
                        SEARCH
                    </Button>
                    <Button
                        onClick={handleReset}
                        className="flex items-center gap-2  px-4 py-2 rounded-md transition-colors"
                    >
                        <RotateCcw size={16} />
                        RESET
                    </Button>
                </div>
            </div>
        </>
    )
}
