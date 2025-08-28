import { delete_positions_service } from "@/app/services/positions-service";
import store from "@/app/store/store";
import React from "react";

export default function DeleteSection({data}) {
    async function handleDelete() {
            await delete_positions_service(data.id);
            await store.dispatch(get_positions_thunk());
        }
    return (
        <>
            <Button
                onClick={() => handleDelete(pos.id)}
                className="inline-flex items-center gap-1 text-red-600 border border-red-300 hover:bg-red-50 px-3 py-1.5 text-sm"
            >
                <Trash2 size={14} />
            </Button>
        </>
    );
}
