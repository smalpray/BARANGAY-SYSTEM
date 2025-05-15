import { useState } from "react";

import {
    Bars3Icon,
    MagnifyingGlassIcon,
    ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import MenuDesktopSection from "./menu-desktop-section";
import MenuMobileSection from "./menu-mobile-section";
import moment from "moment";
import { Link, router } from "@inertiajs/react";
import { useSelector } from "react-redux";
import { RiShoppingCartFill } from "react-icons/ri";

export default function HomepageHeaderSection() {
    const [open, setOpen] = useState(false);
    const { categories } = useSelector((store) => store.categories);
    const { carts } = useSelector((store) => store.app);
    console.log(
        "categories",
        categories.map((res, i) => ({
            id: i,
            name: res.name,
            items: res.activity_categories.map((ress, ii) => ({
                id: ii,
                name: ress?.activity?.name,
                href: "/auth/login",
            })),
        }))
    );

    const list_of_category = categories.map((res, i) => ({
        id: i,
        name: res.name,
        items: res.activity_categories.map((ress, ii) => ({
            id: ii,
            name: ress?.activity?.name,
            href: `/category/${ress.category_id}`,
        })),
    }));
    const navigation = {
        categories: [
            {
                id: "Features",
                name: "Features",
                featured: [],
                sections: list_of_category,
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
    return (
        <div className="bg-white fixed w-full z-10">
            {/* Mobile menu */}
            <MenuMobileSection
                setOpen={setOpen}
                open={open}
                navigation={navigation}
            />

            <header className="relative bg-white">
                {/* <p className="flex h-10 items-center justify-center bg-red-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
                    Announcements: Hello World
                </p> */}

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
                                {/* Cart */}
                                <div className="ml-4 flow-root lg:ml-6">
                                    <button
                                        disabled={carts.length == 0}
                                        onClick={() => router.visit("/my_book")}
                                        className="group -m-2 flex bg-red-500 items-center p-2 rounded-full hover:bg-red-600"
                                    >
                                        <RiShoppingCartFill className="size-6 shrink-0 text-white " />
                                        <span className="ml-2  text-sm font-medium text-white ">
                                            {carts.length}
                                        </span>
                                        <span className="sr-only">
                                            items in cart, view bag
                                        </span>
                                    </button>
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
