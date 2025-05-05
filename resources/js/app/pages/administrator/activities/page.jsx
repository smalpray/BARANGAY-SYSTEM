import React, { useEffect } from "react";
import Layout from "../layout";
import Button from "@/app/_components/button";
import { router } from "@inertiajs/react";
import ActivitiesTableSection from "./_section.jsx/activities-table-section";
import store from "@/app/store/store";
import { get_activities_thunk } from "@/app/redux/activity-thunk";

export default function Page() {

    useEffect(()=>{
        store.dispatch(get_activities_thunk())
    },[])
    return (
        <Layout>
            <div className="mx-auto flex-col flex gap-5 max-w-7xl px-4 sm:px-6 lg:px-8">
                <Button
                className="w-48"
                    onClick={() =>
                        router.visit("/administrator/activities/create")
                    }
                    variant="danger"
                >
                    Create Activity
                </Button>
                <ActivitiesTableSection />
            </div>
        </Layout>
    );
}
