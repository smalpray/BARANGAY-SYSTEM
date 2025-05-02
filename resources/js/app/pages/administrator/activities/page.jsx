import React from "react";
import Layout from "../layout";
import Button from "@/app/_components/button";
import { router } from "@inertiajs/react";

export default function Page() {
    return (
        <Layout>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <Button
                    onClick={() =>
                        router.visit("/administrator/activities/create")
                    }
                    variant="danger"
                >
                    Create Activity
                </Button>
            </div>
        </Layout>
    );
}
