import { department_data } from "@/app/lib/department-lib";
import { Link } from "@inertiajs/react";
import React, { useEffect } from "react";
import CategoryTableSection from "./category-table-section";

export default function CategoriesTabs() {
    const queryParams = new URLSearchParams(window.location.search);
    const department = queryParams.get("department") ?? "";

    return (
        <div className="md:flex">
            <ul className="flex-column space-y space-y-3 text-sm font-medium text-gray-500 md:me-4 mb-4 md:mb-0">
                {department_data.map((res, i) => {
                    return (
                        <li key={i}>
                            <Link
                                href={`?department=${res.value}`}
                                className={`${
                                    res.value == department
                                        ? "border-2 border-blue-700 hover:bg-gray-200 text-blue-700"
                                        : "text-white hover:bg-blue-800 bg-blue-700"
                                } inline-flex items-center px-3 py-3  rounded-lg active w-full`}
                                aria-current="page"
                            >
                                {res.label}
                            </Link>
                        </li>
                    );
                })}
            </ul>
            <div className="p-0 bg-gray-50 overflow-auto h-[75vh] text-medium text-gray-500 rounded-lg w-full">
                <CategoryTableSection />
            </div>
        </div>
    );
}
