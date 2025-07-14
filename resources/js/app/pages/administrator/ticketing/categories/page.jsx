import React, { useEffect } from "react";
import Layout from "../../layout";
import CategoriesTabs from "./_sections/categories-tabs";
import CreateCategorySection from "./_sections/create-category-section";
import Title from "@/app/_components/title";
import store from "@/app/store/store";
import { get_categories_thunk } from "@/app/redux/categories-thunk";

export default function Page() {
    const queryParams = new URLSearchParams(window.location.search);
    const department = queryParams.get("department") ?? "";
    
    useEffect(() => {
        store.dispatch(
            get_categories_thunk({
                department: department,
            })
        );
    }, []);

    return (
        <Layout>
            <div className="my-3 flex w-full items-center justify-between">
                <Title label="Category Section" />
                <CreateCategorySection />
            </div>
            <CategoriesTabs />
        </Layout>
    );
}
