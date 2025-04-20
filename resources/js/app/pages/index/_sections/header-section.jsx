import { useState } from "react";

import {
    Bars3Icon,
    MagnifyingGlassIcon,
    ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import MenuDesktopSection from "./menu-desktop-section";
import MenuMobileSection from "./menu-mobile-section";
import moment from "moment";
import { Link } from "@inertiajs/react";

const navigation = {
    categories: [
        {
            id: "Features",
            name: "Features",
            featured: [],
            sections: [
                {
                    id: "Kid Camps",
                    name: "Kid Camps " + moment().format("Y"),
                    items: [
                        {
                            name: "Summer Camps " + moment().format("Y"),
                            href: "#",
                        },
                    ],
                },
                {
                    id: "Activities",
                    name: "Activities",
                    items: [
                        { name: "Archery lessons", href: "#" },
                        { name: "Archery Open Range", href: "#" },
                        { name: "Combat Archery", href: "#" },
                        { name: "Nerf Branded Blaster Wars", href: "#" },
                        { name: "Bubble Soccer", href: "#" },
                        { name: "Saber Wars", href: "#" },
                        { name: "Watch", href: "#" },
                        { name: "Waiver", href: "#" },
                    ],
                },
                {
                    id: "Small Group Options",
                    name: "Small Group Options (1-9ppl)",
                    items: [
                        { name: "Public Activities", href: "#" },
                        { name: "Public Combat Archery (8 yo+)", href: "#" },
                        {
                            name: "Nerf Branded Blaster Wars (6 yo+)",
                            href: "#",
                        },
                        { name: "Archery lessons", href: "#" },
                        { name: "Couple/Date Night", href: "#" },
                        { name: "Fun with Friends & Family", href: "#" },
                    ],
                },
                {
                    id: "Large Group Package",
                    name: "Large Group Package (10ppl+)",
                    items: [
                        { name: "Private Activities", href: "#" },
                        { name: "Karaoke Room Party", href: "#" },
                        { name: "Kids Birthday Party", href: "#" },
                        {
                            name: "Bachelor-(ette) & Birthday Parties",
                            href: "#",
                        },
                        { name: "Corporate & Team Building", href: "#" },
                        { name: "Facility Bookout", href: "#" },
                        { name: "External Events", href: "#" },
                    ],
                },
                {
                    id: "Arena Fitness",
                    name: "Arena Fitness",
                    items: [
                        { name: "Gym Rental", href: "#" },
                        { name: "Arena Fitness", href: "#" },
                    ],
                },
                {
                    id: "Store",
                    name: "Store",
                    items: [
                        { name: "Archery Games Equipments", href: "#" },
                        { name: "Archery Bow & Gears", href: "#" },
                        { name: "Sabers", href: "#" },
                        { name: "Clothes", href: "#" },
                        { name: "Merch", href: "#" },
                    ],
                },
            ],
        },
    ],
    pages: [
        { name: "Archers Arena", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Blogs", href: "#" },
        { name: "FAQ", href: "#" },
        { name: "Contact Us", href: "#" },
    ],
};

export default function HomepageHeaderSection() {
    const [open, setOpen] = useState(false);

    return (
        <div className="bg-white">
            {/* Mobile menu */}
            <MenuMobileSection
                setOpen={setOpen}
                open={open}
                navigation={navigation}
            />

            <header className="relative bg-white">
                <p className="flex h-10 items-center justify-center bg-red-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
                    Announcements: Hello World
                </p>

                <nav
                    aria-label="Top"
                    className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
                >
                    <div>
                        <div className="flex h-16 items-center">
                            <button
                                type="button"
                                onClick={() => setOpen(true)}
                                className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
                            >
                                <span className="absolute -inset-0.5" />
                                <span className="sr-only">Open menu</span>
                                <Bars3Icon
                                    aria-hidden="true"
                                    className="size-6"
                                />
                            </button>

                            {/* Logo */}
                            <div className="ml-4 flex lg:ml-0">
                                <a href="#">
                                    <span className="sr-only">
                                        Your Company
                                    </span>
                                    <img
                                        alt=""
                                        src="/images/logo.png"
                                        className="h-8 w-auto"
                                    />
                                </a>
                            </div>

                            {/* Flyout menus */}
                            <MenuDesktopSection navigation={navigation} />

                            <div className="ml-auto flex items-center">
                                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                                    <Link
                                        href="/administrator/dashboard"
                                        className="text-sm font-medium text-gray-700 hover:text-gray-800"
                                    >
                                        Sign in
                                    </Link>
                                    <span
                                        aria-hidden="true"
                                        className="h-6 w-px bg-gray-200"
                                    />
                                </div>

                                {/* Search */}
                                <div className="flex lg:ml-6">
                                    <a
                                        href="#"
                                        className="p-2 text-gray-400 hover:text-gray-500"
                                    >
                                        <span className="sr-only">Search</span>
                                        <MagnifyingGlassIcon
                                            aria-hidden="true"
                                            className="size-6"
                                        />
                                    </a>
                                </div>

                                {/* Cart */}
                                <div className="ml-4 flow-root lg:ml-6">
                                    <a
                                        href="#"
                                        className="group -m-2 flex items-center p-2"
                                    >
                                        <ShoppingBagIcon
                                            aria-hidden="true"
                                            className="size-6 shrink-0 text-gray-400 group-hover:text-gray-500"
                                        />
                                        <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                                            0
                                        </span>
                                        <span className="sr-only">
                                            items in cart, view bag
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
            <div className="border-b border-gray-200"></div>
        </div>
    );
}
