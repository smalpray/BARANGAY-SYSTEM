import React, { useEffect, useState } from "react";
import Layout from "../../../layout";
import LocationLayout from "../../location-layout";
import Table from "@/app/_components/table";
import TicketTableSection from "./_sections/ticket-table-section";
import PaginationSection from "./_sections/pagination-section";
import SearchSection from "../_sections/search-section";
import store from "@/app/store/store";
import { get_tickets_thunk } from "@/app/redux/ticket-thunk";
import Skeleton from "@/app/_components/skeleton";
import SkeletonSection from "../_sections/skeleton-section";

export default function Page() {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        async function get_data(params) {
            await store.dispatch(get_tickets_thunk());
            setLoading(false);
        }
        get_data();
    }, []);
    return (
        <Layout>
            <LocationLayout>
                <div className="py-3 flex flex-col gap-3">
                    <SearchSection />
                    {loading ? (
                        <>
                            <SkeletonSection />
                        </>
                    ) : (
                        <TicketTableSection />
                    )}

                    <PaginationSection />
                </div>
            </LocationLayout>
        </Layout>
    );
}
