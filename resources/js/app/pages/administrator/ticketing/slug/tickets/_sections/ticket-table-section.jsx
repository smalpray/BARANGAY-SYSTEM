import Table from "@/app/_components/table";
import moment from "moment";
import React from "react";
import { useSelector } from "react-redux";

export default function TicketTableSection() {
    const { tickets } = useSelector((store) => store.tickets);
    const columns = [
        { header: "Name of Requestor", accessor: "requestor" },
        { header: "Ticket No.", accessor: "ticket_no" },
        { header: "Location", accessor: "location" },
        { header: "Assigned To", accessor: "assigned_to" },
        { header: "Status", accessor: "status" },
        { header: "Date Created", accessor: "date_created" },
        { header: "Action", accessor: "action" },
    ];

    return (
        <>
            <Table
                columns={columns}
                data={tickets?.data?.map((res) => ({
                    requestor: res?.user?.name ?? "NONE",
                    location:res.location,
                    date_created: moment(res.created_at).format("LLL"),
                    assigned_to: res?.assigned_to?.name ?? "NONE",
                    ticket_no: res.ticket_id,
                    status: res.status,
                    action: <>Procceed</>,
                }))}
            />
        </>
    );
}
