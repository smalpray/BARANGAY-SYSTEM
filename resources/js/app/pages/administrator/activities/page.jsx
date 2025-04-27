import React from "react";
import Layout from "../layout";
import Button from "@/app/_components/button";
import { router } from "@inertiajs/react";

export default function Page() {
    return (
        <Layout>
            <Button 
            onClick={()=>router.visit('/administrator/activities/create')}
            variant="danger">Create Activity</Button>
        </Layout>
    );
}
