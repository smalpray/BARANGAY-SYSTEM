import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";

export default function HeroSection() {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-evenly w-full">
            <div className="flex-1 w-full">
                <div className="relative bg-gray-900 h-screen">
                    <div
                        aria-hidden="true"
                        className="absolute inset-0 overflow-hidden "
                    >
                        <img
                            alt=""
                            src="/resources/resources1.jpeg"
                            className="size-full object-cover "
                        />
                    </div>

                    <div
                        aria-hidden="true"
                        className="absolute inset-0 bg-black opacity-30"
                    />

                    <div className="relative flex max-w-3xl flex-col items-start justify-end h-full pb-32 text-black lg:px-0 text-left">
                        <div className="flex items-center justify-between gap-3 w-2/3 h-32 bg-orange-600 text-white text-base font-medium hover:bg-orange-500 px-4">
                            <div className="flex flex-col items-start justify-evenly h-full gap-1">
                                <div className="text-2xl font-black">
                                    ADVENTURE ZONE
                                </div>
                                <div className="capitalize">
                                    Your Space to explore
                                </div>
                            </div>
                            <div className="text-lg">
                                <FaArrowCircleRight className="text-5xl" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-1 w-full">
                <div className="relative bg-gray-900 h-screen">
                    <div
                        aria-hidden="true"
                        className="absolute inset-0 overflow-hidden "
                    >
                        <img
                            alt=""
                            src="/resources/resources2.jpeg"
                            className="size-full object-cover "
                        />
                    </div>

                    <div
                        aria-hidden="true"
                        className="absolute inset-0 bg-black opacity-30"
                    />

                    <div className="relative flex max-w-3xl flex-col items-start justify-end h-full pb-32 text-black lg:px-0 text-left">
                        <div className="flex items-center justify-between gap-3 w-2/3 h-32 bg-blue-800 text-white text-base font-medium hover:bg-blue-700 px-4">
                            <div className="flex flex-col items-start justify-evenly h-full gap-1">
                                <div className="text-2xl font-black">
                                    ADVENTURE ZONE
                                </div>
                                <div className="capitalize">
                                    Your Space to explore
                                </div>
                            </div>
                            <div className="text-lg">
                                <FaArrowCircleRight className="text-5xl" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-1 w-full">
                <div className="relative bg-gray-900 h-screen">
                    <div
                        aria-hidden="true"
                        className="absolute inset-0 overflow-hidden "
                    >
                        <img
                            alt=""
                            src="/resources/resources3.jpeg"
                            className="size-full object-cover "
                        />
                    </div>

                    <div
                        aria-hidden="true"
                        className="absolute inset-0 bg-black opacity-30"
                    />

                    <div className="relative flex max-w-3xl flex-col items-start justify-end h-full pb-32 text-black lg:px-0 text-left">
                        <div className="flex items-center justify-between gap-3 w-2/3 h-32 bg-purple-800 text-white text-base font-medium hover:bg-purple-700 px-4">
                            <div className="flex flex-col items-start justify-evenly h-full gap-1">
                                <div className="text-2xl font-black">
                                    ADVENTURE ZONE
                                </div>
                                <div className="capitalize">
                                    Your Space to explore
                                </div>
                            </div>
                            <div className="text-lg">
                                <FaArrowCircleRight className="text-5xl" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
