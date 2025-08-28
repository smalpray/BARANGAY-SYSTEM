import store from "@/app/store/store";
import React from "react";
import { X } from "lucide-react";

import { delete_barangay_residents_service } from "@/app/services/barangay-resident-service";
import { get_barangay_residents_thunk } from "@/app/redux/barangay-resident-thunk";
export default function DeleteSection({ data }) {
    async function handleDelete() {
        await delete_barangay_residents_service(data.id);
        await store.dispatch(get_barangay_residents_thunk());
    }
    return (
        <>
            <button
                onClick={() => handleDelete()}
                className="text-red-600 hover:text-red-900 inline-flex items-center"
                title="Delete Item"
            >
                <X className="w-4 h-4" />
            </button>
        </>
    );
}
