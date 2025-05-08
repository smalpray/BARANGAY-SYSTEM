import React, { useState, Fragment } from "react";
import {
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
    Transition,
} from "@headlessui/react";
import { useSelector } from "react-redux";
import { Link } from "@inertiajs/react";
export default function MenuDesktopSection({ navigation }) {
    const { categories } = useSelector((store) => store.categories);
    const list_of_category = categories.map((res, i) => ({
        id: i,
        name: res.name,
        items: res.activity_categories.map((ress, ii) => ({
            id: ii,
            name: ress?.activity?.name,
            href: "",
        })),
    }));

    const gridColsClass = {
        1: "grid-cols-1",
        2: "grid-cols-2",
        3: "grid-cols-3",
        4: "grid-cols-4",
        5: "grid-cols-5",
        6: "grid-cols-6",
        7: "grid-cols-7",
        8: "grid-cols-8",
        9: "grid-cols-9",
    };
    const columnClass = gridColsClass[list_of_category.length] || "grid-cols-1";
    return (
        <PopoverGroup className="hidden lg:ml-8 lg:block lg:self-stretch">
            <div className="flex h-full space-x-8">
                {navigation.categories.map((category) => (
                    <Popover key={category.name} className="flex">
                        <div className="relative flex">
                            <PopoverButton className="relative z-10 -mb-px flex items-center border-b-2 border-transparent pt-px text-sm font-medium text-gray-700 transition-colors duration-200 ease-out hover:text-gray-800 data-open:border-indigo-600 data-open:text-indigo-600">
                                {category.name}
                            </PopoverButton>
                        </div>

                        <PopoverPanel
                            transition
                            className="absolute inset-x-0 top-full text-sm text-gray-500 transition data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
                        >
                            {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                            <div
                                aria-hidden="true"
                                className="absolute inset-0 top-1/2 bg-white shadow-sm"
                            />

                            <div className="relative bg-white">
                                <div className="mx-auto max-w-7xl px-8">
                                    <div className="grid grid-cols-1 gap-x-8 gap-y-10 py-16">
                                        <div
                                            className={`row-start-1 grid  ${columnClass} gap-x-8 gap-y-10 text-sm`}
                                        >
                                            {category.sections.map(
                                                (section) => (
                                                    <div key={section.name}>
                                                        <p
                                                            id={`${section.name}-heading`}
                                                            className="font-medium text-gray-900"
                                                        >
                                                            {section.name}
                                                        </p>
                                                        <ul
                                                            role="list"
                                                            aria-labelledby={`${section.name}-heading`}
                                                            className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                                        >
                                                            {section.items.map(
                                                                (item) => (
                                                                    <li
                                                                        key={
                                                                            item.name
                                                                        }
                                                                        className="flex"
                                                                    >
                                                                        <Link
                                                                            href={
                                                                                item.href
                                                                            }
                                                                            className="hover:text-gray-800"
                                                                        >
                                                                            {
                                                                                item.name
                                                                            }
                                                                        </Link>
                                                                    </li>
                                                                )
                                                            )}
                                                        </ul>
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </PopoverPanel>
                    </Popover>
                ))}

                {navigation.pages.map((page) => (
                    <a
                        key={page.name}
                        href={page.href}
                        className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                        {page.name}
                    </a>
                ))}
            </div>
        </PopoverGroup>
    );
}
