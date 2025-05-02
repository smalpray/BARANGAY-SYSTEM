import React, { useState } from "react";
import Layout from "../layout";
import Button from "@/app/_components/button";
import Input from "@/app/_components/input";
import { H1Icon, UserCircleIcon } from "@heroicons/react/24/outline";
import TextArea from "@/app/_components/textarea";
import Radio from "@/app/_components/radio";
import Modal from "@/Components/Modal";
import DashboardCardSection from "./sections/dashboard-card-section";

export default function Page() {
    const [open, setOpen] = useState(false);
    return (
        <Layout>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-wrap gap-7 rounded-md">
                        <DashboardCardSection
                            icon={<UserCircleIcon className="text-white h-6" />}
                            title="Create Booking"
                            href="/"
                            link="/"
                        />
                        <DashboardCardSection
                            icon={<UserCircleIcon className="text-white h-6" />}
                            title="Pending Booking"
                            href="/"
                            link="/"
                        />
                        <DashboardCardSection
                            icon={<UserCircleIcon className="text-white h-6" />}
                            title="Approved Booking"
                            href="/"
                            link="/"
                        />
                        <DashboardCardSection
                            icon={<UserCircleIcon className="text-white h-6" />}
                            title="Cancelled Booking"
                            href="/"
                            link="/"
                        />
                    </div>
                    <div className="flex flex-wrap gap-7 rounded-md">
                        <DashboardCardSection
                            icon={<UserCircleIcon className="text-white h-6" />}
                            title="Customer Responded"
                            href="/"
                            link="/"
                        />
                        <DashboardCardSection
                            icon={<UserCircleIcon className="text-white h-6" />}
                            title="Direct Email"
                            href="/"
                            link="/"
                        />
                        <DashboardCardSection
                            icon={<UserCircleIcon className="text-white h-6" />}
                            title="Users"
                            href="/"
                            link="/"
                        />
                        <DashboardCardSection
                            icon={<UserCircleIcon className="text-white h-6" />}
                            title="Customers"
                            href="/"
                            link="/"
                        />
                    </div>
                </div>
            </div>
        </Layout>
    );
}
