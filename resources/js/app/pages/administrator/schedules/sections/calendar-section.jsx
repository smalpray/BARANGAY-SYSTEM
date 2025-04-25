import {
    ChevronDownIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    EllipsisHorizontalIcon,
} from "@heroicons/react/20/solid";
import { useEffect, useRef, useState } from "react";
import CreateScheduleSection from "./create-schedule-section";
import CalendarHeaderSection from "./calendar-header-section";
import { Calendar } from "antd";
import { Dayjs } from "dayjs";
import { Button, Flex, Modal } from "antd";

const days = [
    { date: "2021-12-27" },
    { date: "2021-12-28" },
    { date: "2021-12-29" },
    { date: "2021-12-30" },
    { date: "2021-12-31" },
    { date: "2022-01-01", isCurrentMonth: true },
    { date: "2022-01-02", isCurrentMonth: true },
    { date: "2022-01-03", isCurrentMonth: true },
    { date: "2022-01-04", isCurrentMonth: true },
    { date: "2022-01-05", isCurrentMonth: true },
    { date: "2022-01-06", isCurrentMonth: true },
    { date: "2022-01-07", isCurrentMonth: true },
    { date: "2022-01-08", isCurrentMonth: true },
    { date: "2022-01-09", isCurrentMonth: true },
    { date: "2022-01-10", isCurrentMonth: true },
    { date: "2022-01-11", isCurrentMonth: true },
    { date: "2022-01-12", isCurrentMonth: true },
    { date: "2022-01-13", isCurrentMonth: true },
    { date: "2022-01-14", isCurrentMonth: true },
    { date: "2022-01-15", isCurrentMonth: true },
    { date: "2022-01-16", isCurrentMonth: true },
    { date: "2022-01-17", isCurrentMonth: true },
    { date: "2022-01-18", isCurrentMonth: true },
    { date: "2022-01-19", isCurrentMonth: true },
    { date: "2022-01-20", isCurrentMonth: true, isToday: true },
    { date: "2022-01-21", isCurrentMonth: true },
    { date: "2022-01-22", isCurrentMonth: true, isSelected: true },
    { date: "2022-01-23", isCurrentMonth: true },
    { date: "2022-01-24", isCurrentMonth: true },
    { date: "2022-01-25", isCurrentMonth: true },
    { date: "2022-01-26", isCurrentMonth: true },
    { date: "2022-01-27", isCurrentMonth: true },
    { date: "2022-01-28", isCurrentMonth: true },
    { date: "2022-01-29", isCurrentMonth: true },
    { date: "2022-01-30", isCurrentMonth: true },
    { date: "2022-01-31", isCurrentMonth: true },
    { date: "2022-02-01" },
    { date: "2022-02-02" },
    { date: "2022-02-03" },
    { date: "2022-02-04" },
    { date: "2022-02-05" },
    { date: "2022-02-06" },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function CalendarSection() {
    const container = useRef(null);
    const containerNav = useRef(null);
    const containerOffset = useRef(null);
    const [open, setOpen] = useState(false);
    const [openResponsive, setOpenResponsive] = useState(false);

    useEffect(() => {
        const currentMinute = new Date().getHours() * 60;
        const containerEl = container.current;
        const navHeight = containerNav.current?.offsetHeight || 0;
        const offsetHeight = containerOffset.current?.offsetHeight || 0;

        if (containerEl) {
            containerEl.scrollTop =
                ((containerEl.scrollHeight - navHeight - offsetHeight) *
                    currentMinute) /
                1440;
        }
    }, []);

    const onSelect = (value, mode) => {
        setOpen(true);
        console.log(value.format("YYYY-MM-DD"), mode);
    };

    return (
        <div className="flex h-full flex-col">
            <CalendarHeaderSection />

            <div className="isolate flex flex-auto overflow-hidden bg-white">
                <Modal
                    footer={false}
                    title="Schedules Of The Day"
                    centered
                    open={open}
                    // onOk={() => setOpen(false)}
                    onCancel={() => setOpen(false)}
                    width={1000}
                >
                    <div
                        ref={container}
                        className="flex flex-1 flex-col overflow-auto"
                    >
                        <div
                            ref={containerNav}
                            className="sticky top-0 z-10 grid flex-none grid-cols-7 bg-white text-xs text-gray-500 shadow-sm ring-1 ring-black/5 md:hidden"
                        >
                            {["W", "T", "F", "S", "S", "M", "T"].map(
                                (label, index) => (
                                    <button
                                        key={index}
                                        type="button"
                                        className="flex flex-col items-center pt-3 pb-1.5"
                                    >
                                        <span>{label}</span>
                                        <span
                                            className={classNames(
                                                "mt-3 flex size-8 items-center justify-center rounded-full text-base font-semibold",
                                                index === 1
                                                    ? "text-indigo-600"
                                                    : index === 3
                                                    ? "bg-gray-900 text-white"
                                                    : "text-gray-900"
                                            )}
                                        >
                                            {19 + index}
                                        </span>
                                    </button>
                                )
                            )}
                        </div>

                        <div className="h-[75vh]">
                            <div className="flex w-full flex-auto">
                                <div className="w-14 flex-none bg-white ring-1 ring-gray-100" />

                                <div className="grid flex-auto grid-cols-1 grid-rows-1">
                                    <div
                                        className="col-start-1 col-end-2 row-start-1 grid divide-y divide-gray-100"
                                        style={{
                                            gridTemplateRows:
                                                "repeat(48, minmax(3.5rem, 1fr))",
                                        }}
                                    >
                                        <div
                                            ref={containerOffset}
                                            className="row-end-1 h-7"
                                        />
                                        {Array.from({ length: 24 }).map(
                                            (_, hour) => (
                                                <div key={hour}>
                                                    <div className="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5 text-gray-400">
                                                        {hour === 0
                                                            ? "12AM"
                                                            : hour < 12
                                                            ? `${hour}AM`
                                                            : hour === 12
                                                            ? "12PM"
                                                            : `${hour - 12}PM`}
                                                    </div>
                                                </div>
                                            )
                                        )}
                                    </div>

                                    <ol
                                        className="col-start-1 col-end-2 row-start-1 grid grid-cols-1"
                                        style={{
                                            gridTemplateRows:
                                                "1.75rem repeat(288, minmax(0, 1fr)) auto",
                                        }}
                                    >
                                        <li
                                            className="relative mt-px flex"
                                            style={{ gridRow: "74 / span 12" }}
                                        >
                                            <a
                                                href="#"
                                                className="group absolute inset-1 flex flex-col overflow-y-auto rounded-lg bg-blue-50 p-2 text-xs/5 hover:bg-blue-100"
                                            >
                                                <p className="order-1 font-semibold text-blue-700">
                                                    Breakfast
                                                </p>
                                                <p className="text-blue-500 group-hover:text-blue-700">
                                                    <time dateTime="2022-01-22T06:00">
                                                        6:00 AM
                                                    </time>
                                                </p>
                                            </a>
                                        </li>
                                        <li
                                            className="relative mt-px flex"
                                            style={{ gridRow: "92 / span 30" }}
                                        >
                                            <a
                                                href="#"
                                                className="group absolute inset-1 flex flex-col overflow-y-auto rounded-lg bg-pink-50 p-2 text-xs/5 hover:bg-pink-100"
                                            >
                                                <p className="order-1 font-semibold text-pink-700">
                                                    Flight to Paris
                                                </p>
                                                <p className="order-1 text-pink-500 group-hover:text-pink-700">
                                                    John F. Kennedy
                                                    International Airport
                                                </p>
                                                <p className="text-pink-500 group-hover:text-pink-700">
                                                    <time dateTime="2022-01-22T07:30">
                                                        7:30 AM
                                                    </time>
                                                </p>
                                            </a>
                                        </li>
                                        <li
                                            className="relative mt-px flex"
                                            style={{ gridRow: "134 / span 18" }}
                                        >
                                            <a
                                                href="#"
                                                className="group absolute inset-1 flex flex-col overflow-y-auto rounded-lg bg-indigo-50 p-2 text-xs/5 hover:bg-indigo-100"
                                            >
                                                <p className="order-1 font-semibold text-indigo-700">
                                                    Sightseeing
                                                </p>
                                                <p className="order-1 text-indigo-500 group-hover:text-indigo-700">
                                                    Eiffel Tower
                                                </p>
                                                <p className="text-indigo-500 group-hover:text-indigo-700">
                                                    <time dateTime="2022-01-22T11:00">
                                                        11:00 AM
                                                    </time>
                                                </p>
                                            </a>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal>

                <div className="hidden flex-1 border-l border-gray-100 px-8 py-10 md:block">
                    <Calendar onSelect={onSelect} />;
                </div>
            </div>
        </div>
    );
}
