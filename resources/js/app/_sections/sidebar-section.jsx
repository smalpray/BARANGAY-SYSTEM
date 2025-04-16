import { Transition } from "@headlessui/react";
import { Cog6ToothIcon, XMarkIcon } from "@heroicons/react/24/outline";
import React, { useState, Fragment } from "react";
import { setSidebarOpen } from "../redux/app-slice";
import { useDispatch, useSelector } from "react-redux";
import DisclosureComponent from "./../_components/disclosure";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function SidebarSection({ navigation }) {
    const { sidebarOpen } = useSelector((store) => store.app);
    const dispatch = useDispatch();
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <>
            {/* Mobile sidebar */}
            <Transition show={sidebarOpen} as={Fragment}>
                <div
                    onClick={() => dispatch(setSidebarOpen(false))}
                    className="relative z-50 lg:hidden"
                >
                    {/* Backdrop */}
                    <div>
                        <div className="fixed inset-0 bg-gray-900/80" />
                    </div>

                    {/* Sidebar panel */}
                    <div className="fixed inset-0 flex">
                        <Transition.Child
                            as={Fragment}
                            enter="transform transition duration-500 ease-out"
                            enterFrom="-translate-x-full"
                            enterTo="translate-x-0"
                            leave="transform transition duration-500 ease-in"
                            leaveFrom="translate-x-0"
                            leaveTo="-translate-x-full"
                        >
                            <div
                                onClick={(e) => e.stopPropagation()}
                                className="relative mr-16 flex w-full max-w-xs flex-1"
                            >
                                {/* Close button */}
                                <div className="absolute top-0 left-full flex w-16 justify-center pt-5">
                                    <button
                                        type="button"
                                        onClick={() =>
                                            dispatch(setSidebarOpen(false))
                                        }
                                        className="-m-2.5 p-2.5"
                                    >
                                        <span className="sr-only">
                                            Close sidebar
                                        </span>
                                        <XMarkIcon
                                            className="size-6 text-white"
                                            aria-hidden="true"
                                        />
                                    </button>
                                </div>

                                {/* Sidebar content */}
                                <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-3 pb-4">
                                    <div className="flex h-16 shrink-0 items-center">
                                        <img
                                            className="h-8 w-auto"
                                            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=blue&shade=600"
                                            alt="Your Company"
                                        />
                                    </div>
                                    <nav className="flex flex-1 flex-col">
                                        <ul
                                            role="list"
                                            className="flex flex-1 flex-col gap-y-7"
                                        >
                                            <li>
                                                <ul role="list">
                                                    {navigation.map((item, i) =>
                                                        !item.children ? (
                                                            <li key={item.name}>
                                                                <a
                                                                    href={
                                                                        item.href
                                                                    }
                                                                    className={classNames(
                                                                        item.current
                                                                            ? "bg-blue-600 text-white"
                                                                            : "text-gray-700 hover:bg-gray-50 hover:text-blue-600",
                                                                        "group flex gap-x-3 rounded-md p-2 py-3 text-sm/6 font-semibold"
                                                                    )}
                                                                >
                                                                    <item.icon
                                                                        aria-hidden="true"
                                                                        className={classNames(
                                                                            item.current
                                                                                ? "text-white"
                                                                                : "text-gray-700 group-hover:text-blue-600",
                                                                            "size-6 shrink-0"
                                                                        )}
                                                                    />
                                                                    {item.name}
                                                                </a>
                                                            </li>
                                                        ) : (
                                                            <li key={i}>
                                                                <DisclosureComponent
                                                                    setOpenIndex={
                                                                        setOpenIndex
                                                                    }
                                                                    openIndex={
                                                                        openIndex
                                                                    }
                                                                    item={item}
                                                                    i={i}
                                                                />
                                                            </li>
                                                        )
                                                    )}
                                                </ul>
                                            </li>
                                            <li className="mt-auto">
                                                <a
                                                    href="#"
                                                    className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-black"
                                                >
                                                    <Cog6ToothIcon
                                                        aria-hidden="true"
                                                        className="size-6 shrink-0 text-white  hover:bg-blue-700"
                                                    />
                                                    Settings
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </div>
            </Transition>

            {/* Desktop sidebar */}
            <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
                <div className="flex grow flex-col gap-y-5 border-r border-gray-300 bg-white px-1.5 pb-4 shadow-md">
                    <div className="flex h-16 shrink-0 items-center">
                        <img
                            className="h-8 w-auto"
                            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=blue&shade=600"
                            alt="Your Company"
                        />
                    </div>
                    <nav className="flex flex-1 flex-col">
                        <ul
                            role="list"
                            className="flex flex-1 flex-col gap-y-7"
                        >
                            <li>
                                <ul role="list">
                                    {navigation.map((item, i) =>
                                        !item.children ? (
                                            <li key={item.name}>
                                                <a
                                                    href={item.href}
                                                    className={classNames(
                                                        item.current
                                                            ? "bg-blue-600 text-white"
                                                            : "text-gray-700 hover:bg-gray-50 hover:text-blue-600",
                                                        "group flex gap-x-3 rounded-md p-2 py-3 text-sm/6 font-semibold"
                                                    )}
                                                >
                                                    <item.icon
                                                        aria-hidden="true"
                                                        className={classNames(
                                                            item.current
                                                                ? "text-white"
                                                                : "text-gray-700 group-hover:text-blue-600",
                                                            "size-6 shrink-0"
                                                        )}
                                                    />
                                                    {item.name}
                                                </a>
                                            </li>
                                        ) : (
                                            <li key={i}>
                                                <DisclosureComponent
                                                    setOpenIndex={setOpenIndex}
                                                    openIndex={openIndex}
                                                    item={item}
                                                    i={i}
                                                />
                                            </li>
                                        )
                                    )}
                                </ul>
                            </li>
                            <li className="mt-auto px-2">
                                <a
                                    href="#"
                                    className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-black"
                                >
                                    <Cog6ToothIcon
                                        aria-hidden="true"
                                        className="size-6 shrink-0  hover:bg-blue-700"
                                    />
                                    Settings
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );
}
