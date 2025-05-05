import React, { useEffect } from "react";
import Layout from "../layout";
import CreateCategorySection from "./_sections/create-category-section";
import TableTableSection from "./_sections/table-category-section";
import store from "@/app/store/store";
import { get_categories_thunk } from "@/app/redux/categories-thunk";

export default function Page() {

    useEffect(()=>{
        store.dispatch(get_categories_thunk())
    },[])
    return (
        <Layout>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="px-4 sm:px-6 lg:px-8">
                    <div className="sm:flex sm:items-center">
                        <div className="sm:flex-auto">
                            <h1 className="text-base font-semibold text-gray-900">
                                Users
                            </h1>
                            <p className="mt-2 text-sm text-gray-700">
                                A list of all the users in your account
                                including their name, title, email and role.
                            </p>
                        </div>
                        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                            <CreateCategorySection />
                        </div>
                    </div>
                    <div className="-mx-4 mt-8 sm:-mx-0"></div>
                </div>
                <TableTableSection />
            </div>
        </Layout>
    );
}
