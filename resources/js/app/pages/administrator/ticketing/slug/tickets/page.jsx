import React from "react";
import Layout from "../../../layout";
import LocationLayout from "../../location-layout";
import Table from "@/app/_components/table";

export default function Page() {
    const columns = [
        { header: "Name of Requestor", accessor: "requestor" },
        { header: "Ticket No.", accessor: "ticket_no" },
        { header: "Assigned To", accessor: "assigned_to" },
        { header: "Status", accessor: "status" },
        { header: "Date Created", accessor: "date_created" },
        { header: "Action", accessor: "action" },
    ];

    const data = [
        {
            requestor: "John Doe",
            date_created: "1/11/2025",
            assigned_to: "John Doe",
            ticket_no: "john@example.com",
            status: "Active",
            action: <>Procceed</>,
        },
        {
            requestor: "Jane Smith",
            date_created: "1/11/2025",
            assigned_to: "John Doe",
            ticket_no: "jane@example.com",
            status: "Inactive",
            action: <>Procceed</>,
        },
          {
            requestor: "Jane Smith",
            date_created: "1/11/2025",
            assigned_to: "John Doe",
            ticket_no: "jane@example.com",
            status: "Inactive",
            action: <>Procceed</>,
        },
          {
            requestor: "Jane Smith",
            date_created: "1/11/2025",
            assigned_to: "John Doe",
            ticket_no: "jane@example.com",
            status: "Inactive",
            action: <>Procceed</>,
        },
          {
            requestor: "Jane Smith",
            date_created: "1/11/2025",
            assigned_to: "John Doe",
            ticket_no: "jane@example.com",
            status: "Inactive",
            action: <>Procceed</>,
        },
          {
            requestor: "Jane Smith",
            date_created: "1/11/2025",
            assigned_to: "John Doe",
            ticket_no: "jane@example.com",
            status: "Inactive",
            action: <>Procceed</>,
        },
          {
            requestor: "Jane Smith",
            date_created: "1/11/2025",
            assigned_to: "John Doe",
            ticket_no: "jane@example.com",
            status: "Inactive",
            action: <>Procceed</>,
        },
          {
            requestor: "Jane Smith",
            date_created: "1/11/2025",
            assigned_to: "John Doe",
            ticket_no: "jane@example.com",
            status: "Inactive",
            action: <>Procceed</>,
        },
          {
            requestor: "Jane Smith",
            date_created: "1/11/2025",
            assigned_to: "John Doe",
            ticket_no: "jane@example.com",
            status: "Inactive",
            action: <>Procceed</>,
        },
          {
            requestor: "Jane Smith",
            date_created: "1/11/2025",
            assigned_to: "John Doe",
            ticket_no: "jane@example.com",
            status: "Inactive",
            action: <>Procceed</>,
        },
    ];
    return (
        <Layout>
            <LocationLayout>
                <div className="py-3">
                    <Table columns={columns} data={data} />
                </div>
            </LocationLayout>
        </Layout>
    );
}
