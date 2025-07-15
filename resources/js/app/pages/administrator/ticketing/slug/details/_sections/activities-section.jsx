import moment from "moment";
import React from "react";
import { FcClock } from "react-icons/fc";
import { useSelector } from "react-redux";



function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function ActivitiesSection() {
    const { ticket } = useSelector((store) => store.tickets);
    return (
        <>
            <div className="lg:col-start-3 lg:row-end-1">
                <h2 className="text-sm/6 font-semibold text-gray-900">
                    ACTIVITIES
                </h2>
                <ul role="list" className="mt-6 space-y-6">
                    {ticket?.activities?.map((res, i) => (
                        <li key={res?.id} className="relative flex gap-x-4">
                            <div
                                className={classNames(
                                    i === res.length - 1
                                        ? "h-6"
                                        : "-bottom-6",
                                    "absolute top-0 left-0 flex w-6 justify-center"
                                )}
                            >
                                <div className="w-px bg-gray-200" />
                            </div>
                            <>
                                <div className="relative flex size-6 flex-none items-center justify-center bg-white">
                                    <FcClock className="h-6 w-6" />
                                </div>
                                <p className="flex-auto capitalize py-0.5 text-xs/5 text-gray-500">
                                    {res?.message}
                                </p>
                                <time
                                    dateTime={moment(res?.created_at).fromNow()}
                                    className="flex-none py-0.5 text-xs/5 text-gray-500"
                                >
                                    {moment(res?.created_at).fromNow()}
                                </time>
                            </>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
