import React, { useEffect } from "react";
import TabsSection from "./_sections/tabs-section";
import store from "@/app/store/store";
import { get_categories_thunk } from "@/app/redux/categories-thunk";
import { get_sites_thunk } from "@/app/redux/site-thunk";
import { get_tickets_thunk } from "@/app/redux/ticket-thunk";

export default function LocationLayout({ children }) {
    useEffect(() => {
        store.dispatch(get_categories_thunk());
        store.dispatch(get_sites_thunk());
    }, []);
    return (
        <>
            <TabsSection />
            {children}
        </>
    );
}
