

import moment from "moment";
import React, { useState } from "react";
import { FcAssistant } from "react-icons/fc";
import { useSelector } from "react-redux";


export default function LogsSection() {
    const { ticket } = useSelector((store) => store.tickets);
    return (
        <div className="lg:col-start-3">
            {/* Activity feed */}
            <h2 className="text-sm/6 font-semibold text-gray-900">LOGS</h2>
            <ul role="list" className="mt-6 space-y-6">
                {ticket?.notes?.map((res, i) => (
                    <li key={res?.id} className="relative flex gap-x-4">
                        <div
                            className={"absolute top-0 left-0 flex w-6 justify-center"}
                        >
                            <div className="w-px bg-gray-200" />
                        </div>
                        <>
                            <FcAssistant className="relative mt-3 size-6 flex-none rounded-full bg-gray-50" />
                            <div className="flex-auto rounded-md p-3 ring-1 ring-gray-200 ring-inset">
                                <div className="flex justify-between gap-x-4">
                                    <div className="py-0.5 text-xs/5 text-gray-500">
                                        <span className="font-medium text-gray-900">
                                            {res?.user?.name ?? "N/A"}:
                                        </span>{" "}
                                        {res.notes}
                                    </div>
                                    <time
                                        dateTime={moment(
                                            res?.created_at
                                        ).fromNow()}
                                        className="flex-none py-0.5 text-xs/5 text-gray-500"
                                    >
                                        {moment(res?.created_at).fromNow()}
                                    </time>
                                </div>
                                <p className="text-sm/6 text-gray-500">
                                    {res?.comment}
                                </p>
                            </div>
                        </>
                    </li>
                ))}
            </ul>

            {/* New comment form */}
           
        </div>
    );
}
