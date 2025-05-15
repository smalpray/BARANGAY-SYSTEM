import { CheckIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import {
    FcCalendar,
    FcMoneyTransfer,
    FcPaid,
    FcTodoList,
    FcViewDetails,
} from "react-icons/fc";
import Section1 from "./section1";
import Section2 from "./section2";
import Section3 from "./section3";
import Section4 from "./section4";
import Button from "@/app/_components/button";

const steps = [
    {
        id: "01",
        name: "Calendars",
        href: "#",
        status: "complete",
        icon: <FcCalendar className="h-6 w-6" />,
    },
    {
        id: "02",
        name: "Add ons",
        href: "#",
        status: "current",
        icon: <FcPaid className="h-6 w-6" />,
    },
    {
        id: "03",
        name: "Order Review",
        href: "#",
        status: "upcoming",
        icon: <FcTodoList className="h-6 w-6" />,
    },
    {
        id: "04",
        name: "Checkout",
        href: "#",
        status: "upcoming",
        icon: <FcMoneyTransfer className="h-6 w-6" />,
    },
];

export default function StepperSection() {
    const [current, setCurrent] = useState(0);

    const handleBack = () => {
        if (current > 0) {
            setCurrent(current - 1);
        }
    };

    const handleNext = () => {
        // handleSubmit((data) => {
        //     if (current < steps.length - 1) {
        //         setCurrent(current + 1);
        //     }
        // })();
        if (current < steps.length - 1) {
            setCurrent(current + 1);
        }
    };

    const updatedSteps = steps.map((step, idx) => {
        if (idx < current) return { ...step, status: "complete" };
        if (idx === current) return { ...step, status: "current" };
        return { ...step, status: "upcoming" };
    });
    return (
        <>
            <nav aria-label="Progress">
                <ol
                    role="list"
                    className="divide-y divide-gray-300 rounded-md border border-gray-300 md:flex md:divide-y-0"
                >
                    {updatedSteps.map((step, stepIdx) => (
                        <li
                            key={step.name}
                            className="relative md:flex md:flex-1"
                        >
                            {step.status === "complete" ? (
                                <a
                                    href={step.href}
                                    className="group flex w-full items-center"
                                >
                                    <span className="flex items-center px-6 py-4 text-sm font-medium">
                                        <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-red-600 group-hover:bg-red-800">
                                            <CheckIcon
                                                aria-hidden="true"
                                                className="size-6 text-white"
                                            />
                                        </span>
                                        <span className="ml-4 text-sm font-medium text-gray-900 flex gap-3">
                                            {step.icon}
                                            {step.name}
                                        </span>
                                    </span>
                                </a>
                            ) : step.status === "current" ? (
                                <a
                                    href={step.href}
                                    aria-current="step"
                                    className="flex items-center px-6 py-4 text-sm font-medium"
                                >
                                    <span className="flex size-10 shrink-0 items-center justify-center rounded-full border-2 border-red-600">
                                        <span className="text-red-600">
                                            {step.id}
                                        </span>
                                    </span>
                                    <span className="ml-4 text-sm font-medium text-red-600 flex gap-3">
                                        {step.icon} {step.name}
                                    </span>
                                </a>
                            ) : (
                                <a
                                    href={step.href}
                                    className="group flex items-center"
                                >
                                    <span className="flex items-center px-6 py-4 text-sm font-medium">
                                        <span className="flex size-10 shrink-0 items-center justify-center rounded-full border-2 border-gray-300 group-hover:border-gray-400">
                                            <span className="text-gray-500 group-hover:text-gray-900">
                                                {step.id}
                                            </span>
                                        </span>
                                        <span className="ml-4  flex gap-3 text-sm font-medium text-gray-500 group-hover:text-gray-900">
                                            {step.icon} {step.name}
                                        </span>
                                    </span>
                                </a>
                            )}

                            {stepIdx !== steps.length - 1 ? (
                                <>
                                    {/* Arrow separator for lg screens and up */}
                                    <div
                                        aria-hidden="true"
                                        className="absolute top-0 right-0 hidden h-full w-5 md:block"
                                    >
                                        <svg
                                            fill="none"
                                            viewBox="0 0 22 80"
                                            preserveAspectRatio="none"
                                            className="size-full text-gray-300"
                                        >
                                            <path
                                                d="M0 -2L20 40L0 82"
                                                stroke="currentcolor"
                                                vectorEffect="non-scaling-stroke"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                </>
                            ) : null}
                        </li>
                    ))}
                </ol>
            </nav>
            <div className="min-h-[73vh] flex flex-col items-center justify-between">
                {current == 0 && <Section1 />}
                {current == 1 && <Section2 />}
                {current == 2 && <Section3 />}
                {current == 3 && <Section4 />}
                <div className="flex w-full items-center justify-between gap-3">
                    <div>
                        <Button
                            variant="danger"
                            onClick={handleBack}
                            disabled={current === 0}
                        >
                            BACK
                        </Button>
                    </div>
                    <div>
                        {current != steps.length - 1 && (
                            <Button
                                variant="danger"
                                type="button"
                                onClick={handleNext}
                                disabled={current === steps.length - 1}
                            >
                                NEXT
                            </Button>
                        )}
                        {current == steps.length - 1 && (
                            <Button
                                variant="danger"
                                type="submit"
                                // loading={isSubmitting}
                            >
                                SUBMIT
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
