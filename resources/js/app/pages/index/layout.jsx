import React,{useEffect} from "react";
import HomepageHeaderSection from "./_sections/header-section";
import store from "@/app/store/store";
import { get_categories_thunk } from "@/app/redux/categories-thunk";

export default function Layout({ children }) {

    useEffect(() => {
      store.dispatch(get_categories_thunk())
    }, [])
    
    return (
        <>
            <div >
                <HomepageHeaderSection />
            </div>
            <div className="mb-24">{children}</div>
        </>
    );
}
