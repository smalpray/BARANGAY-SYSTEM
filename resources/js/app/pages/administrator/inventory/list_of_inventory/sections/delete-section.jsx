import { get_inventories_thunk } from "@/app/redux/inventories-thunk";
import { delete_inventories_service } from "@/app/services/inventories-service";
import store from "@/app/store/store";
import { Trash2 } from "lucide-react";
import React from "react";

export default function DeleteSection({data}) {

    async function handleDelete() {
        await delete_inventories_service(data.id)
        await store.dispatch(get_inventories_thunk());
    }
    
    return (
        <div>
            <button
                onClick={() => handleDelete()}
                className="text-red-600 hover:text-red-900 inline-flex items-center"
                title="Delete Item"
            >
                <Trash2 className="h-4 w-4" />
            </button>
        </div>
    );
}
