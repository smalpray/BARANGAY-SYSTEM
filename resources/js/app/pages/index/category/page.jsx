import React, { useEffect } from "react";
import Layout from "../layout";
import BookSection from "./_sections/book-section";
import store from "@/app/store/store";
import { get_categories_by_id_thunk } from "@/app/redux/categories-thunk";

export default function Page() {
const category_id =window.location.pathname.split('/')[2]
    useEffect(()=>{
        store.dispatch(get_categories_by_id_thunk(category_id))
    },[])
    return (
        <Layout>
            <BookSection />
        </Layout>
    );
}
