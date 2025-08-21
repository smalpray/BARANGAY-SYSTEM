import React, { useState } from "react";
import BasicInfoSection from "./basic-info-section";
import NewOfficialLayout from "../layout";
import OtherInfoSection from "./other-info-section";
import GuardianSection from "./guardian-section";
import AccountSection from "./account-section";
import { useForm } from "react-hook-form";

export default function TabsSection() {
    const [activeTab, setActiveTab] = useState("basic");
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const tabs = [
        { id: "basic", label: "Basic Info" },
        { id: "other", label: "Other Info" },
        { id: "guardian", label: "Guardian" },
        { id: "account", label: "Account" },
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

    const onSubmit = (data) => {
        console.log("Submitted Data:", data);
        // send to API/backend here
    };
    return (
        <div
            className={`min-h-screen p-6 ${
                activeTab !== "basic" ? "bg-white-800" : "bg-white-50"
            }`}
        >
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="max-w-7xl mx-auto"
            >
                <div className="flex mb-8">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-6 py-3 text-sm font-medium ${
                                activeTab === tab.id
                                    ? "bg-blue-600 text-white"
                                    : "bg-white-600 text-white-300 hover:bg-white-500 border border-white-500"
                            } ${tab.id === "basic" ? "rounded-l-lg" : ""} ${
                                tab.id === "account" ? "rounded-r-lg" : ""
                            }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
                <div className="py-6 flex items-center justify-end">
                    <button
                        type="submit"
                        className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200 flex items-center space-x-2"
                    >
                        <span className="text-lg">+</span>
                        <span>ADD NEW OFFICIAL</span>
                    </button>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <NewOfficialLayout errors={errors} register={register}>
                        {activeTab === "basic" && (
                            <>
                                <BasicInfoSection
                                    errors={errors}
                                    register={register}
                                />
                            </>
                        )}
                        {activeTab === "other" && (
                            <>
                                <OtherInfoSection
                                    errors={errors}
                                    register={register}
                                />
                            </>
                        )}
                        {activeTab === "guardian" && (
                            <>
                                <GuardianSection
                                    errors={errors}
                                    register={register}
                                />
                            </>
                        )}
                        {activeTab === "account" && (
                            <>
                                <AccountSection
                                    errors={errors}
                                    register={register}
                                />
                            </>
                        )}
                    </NewOfficialLayout>
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
            </form>
        </div>
    );
}
