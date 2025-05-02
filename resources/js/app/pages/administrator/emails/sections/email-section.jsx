import React, { useState, useRef, useEffect } from "react";
import MessageEmailComponent from "../_components/message-email-component";

export default function EmailSection() {
    const filters = ["All", "None", "Read", "Unread", "Starred", "Unstarred"];
    const [checkAll, setCheckAll] = useState(false);
    const [filterMessages, setFilterMessages] = useState(false);
    const dropdownRef = useRef();

    useEffect(() => {
        function handleClickOutside(event) {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setFilterMessages(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const messages = [
        {
            sender: "William Livingston",
            subject: "Lorem ipsum dolor sit amet",
            preview:
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem",
            time: "3:05 PM",
            starred: false,
            important: false,
            unread: false,
        },
        {
            sender: "Betty Garmon",
            subject: "Consectetur adipiscing elit",
            preview:
                "Ccusantium doloremque laudantium, totam rem aperiam, eaque ipsa",
            time: "1:23 PM",
            starred: true,
            important: false,
            unread: true,
        },
        {
            sender: "Elsa J. Collins",
            subject: "Sed do eiusmod tempor incididunt",
            preview:
                "Quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo",
            time: "12:11 PM",
            starred: true,
            important: true,
            unread: true,
        },
        {
            sender: "Elsa J. Collins",
            subject: "Sed do eiusmod tempor incididunt",
            preview:
                "Quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo",
            time: "12:11 PM",
            starred: true,
            important: true,
            unread: true,
        },  {
            sender: "Elsa J. Collins",
            subject: "Sed do eiusmod tempor incididunt",
            preview:
                "Quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo",
            time: "12:11 PM",
            starred: true,
            important: true,
            unread: true,
        },  {
            sender: "Elsa J. Collins",
            subject: "Sed do eiusmod tempor incididunt",
            preview:
                "Quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo",
            time: "12:11 PM",
            starred: true,
            important: true,
            unread: true,
        },  {
            sender: "Elsa J. Collins",
            subject: "Sed do eiusmod tempor incididunt",
            preview:
                "Quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo",
            time: "12:11 PM",
            starred: true,
            important: true,
            unread: true,
        },  {
            sender: "Elsa J. Collins",
            subject: "Sed do eiusmod tempor incididunt",
            preview:
                "Quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo",
            time: "12:11 PM",
            starred: true,
            important: true,
            unread: true,
        },  {
            sender: "Elsa J. Collins",
            subject: "Sed do eiusmod tempor incididunt",
            preview:
                "Quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo",
            time: "12:11 PM",
            starred: true,
            important: true,
            unread: true,
        },  {
            sender: "Elsa J. Collins",
            subject: "Sed do eiusmod tempor incididunt",
            preview:
                "Quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo",
            time: "12:11 PM",
            starred: true,
            important: true,
            unread: true,
        },  {
            sender: "Elsa J. Collins",
            subject: "Sed do eiusmod tempor incididunt",
            preview:
                "Quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo",
            time: "12:11 PM",
            starred: true,
            important: true,
            unread: true,
        },  {
            sender: "Elsa J. Collins",
            subject: "Sed do eiusmod tempor incididunt",
            preview:
                "Quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo",
            time: "12:11 PM",
            starred: true,
            important: true,
            unread: true,
        },  {
            sender: "Elsa J. Collins",
            subject: "Sed do eiusmod tempor incididunt",
            preview:
                "Quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo",
            time: "12:11 PM",
            starred: true,
            important: true,
            unread: true,
        },  {
            sender: "Elsa J. Collins",
            subject: "Sed do eiusmod tempor incididunt",
            preview:
                "Quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo",
            time: "12:11 PM",
            starred: true,
            important: true,
            unread: true,
        },  {
            sender: "Elsa J. Collins",
            subject: "Sed do eiusmod tempor incididunt",
            preview:
                "Quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo",
            time: "12:11 PM",
            starred: true,
            important: true,
            unread: true,
        },  {
            sender: "Elsa J. Collins",
            subject: "Sed do eiusmod tempor incididunt",
            preview:
                "Quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo",
            time: "12:11 PM",
            starred: true,
            important: true,
            unread: true,
        },  {
            sender: "Elsa J. Collins",
            subject: "Sed do eiusmod tempor incididunt",
            preview:
                "Quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo",
            time: "12:11 PM",
            starred: true,
            important: true,
            unread: true,
        },  {
            sender: "Elsa J. Collins",
            subject: "Sed do eiusmod tempor incididunt",
            preview:
                "Quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo",
            time: "12:11 PM",
            starred: true,
            important: true,
            unread: true,
        },  {
            sender: "Elsa J. Collins",
            subject: "Sed do eiusmod tempor incididunt",
            preview:
                "Quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo",
            time: "12:11 PM",
            starred: true,
            important: true,
            unread: true,
        },  {
            sender: "Elsa J. Collins",
            subject: "Sed do eiusmod tempor incididunt",
            preview:
                "Quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo",
            time: "12:11 PM",
            starred: true,
            important: true,
            unread: true,
        },  {
            sender: "Elsa J. Collins",
            subject: "Sed do eiusmod tempor incididunt",
            preview:
                "Quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo",
            time: "12:11 PM",
            starred: true,
            important: true,
            unread: true,
        },  {
            sender: "Elsa J. Collins",
            subject: "Sed do eiusmod tempor incididunt",
            preview:
                "Quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo",
            time: "12:11 PM",
            starred: true,
            important: true,
            unread: true,
        },  {
            sender: "Elsa J. Collins",
            subject: "Sed do eiusmod tempor incididunt",
            preview:
                "Quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo",
            time: "12:11 PM",
            starred: true,
            important: true,
            unread: true,
        },  {
            sender: "Elsa J. Collins",
            subject: "Sed do eiusmod tempor incididunt",
            preview:
                "Quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo",
            time: "12:11 PM",
            starred: true,
            important: true,
            unread: true,
        },
    ];
    return (
        <div className="w-full rounded-lg flex  custom-scrollbar">
            <div className="w-64 px-4">
                <div className="h-16 flex items-center">
                    <a
                        href="#"
                        className="w-48 mx-auto bg-red-600 hover:bg-red-700 flex items-center justify-center text-gray-100 py-2 rounded space-x-2 transition duration-150"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                            />
                        </svg>
                        <span>Compose</span>
                    </a>
                </div>
                <div className="pr-2 pt-4 pb-8 border-r border-gray-300">
                    <ul className="space-y-2">
                        {/* Inbox */}
                        <li>
                            <a className="bg-gray-500 bg-opacity-30 text-red-600 flex items-center justify-between py-1.5 px-4 rounded cursor-pointer">
                                <span className="flex items-center space-x-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                                        />
                                    </svg>
                                    <span>Inbox</span>
                                </span>
                                <span className="bg-red-500 text-gray-100 font-bold px-2 py-0.5 text-xs rounded-lg">
                                    3
                                </span>
                            </a>
                        </li>

                        {/* Starred */}
                        <li>
                            <a className="hover:bg-gray-500 hover:bg-opacity-10 hover:text-red-600 flex items-center text-gray-700 py-1.5 px-4 rounded space-x-2 cursor-pointer">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                                    />
                                </svg>
                                <span>Starred</span>
                            </a>
                        </li>

                        {/* Snoozed */}
                        <li>
                            <a className="hover:bg-gray-500 hover:bg-opacity-10 hover:text-red-600 flex items-center text-gray-700 py-1.5 px-4 rounded space-x-2 cursor-pointer">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                                <span>Snoozed</span>
                            </a>
                        </li>

                        {/* Important */}
                        <li>
                            <a className="hover:bg-gray-500 hover:bg-opacity-10 hover:text-red-600 flex items-center text-gray-700 py-1.5 px-4 rounded space-x-2 cursor-pointer">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                                    />
                                </svg>
                                <span>Important</span>
                            </a>
                        </li>

                        {/* Sent */}
                        <li>
                            <a className="hover:bg-gray-500 hover:bg-opacity-10 hover:text-red-600 flex items-center text-gray-700 py-1.5 px-4 rounded space-x-2 cursor-pointer">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 rotate-90"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                                    />
                                </svg>
                                <span>Sent</span>
                            </a>
                        </li>

                        {/* Drafts */}
                        <li>
                            <a className="hover:bg-gray-500 hover:bg-opacity-10 hover:text-red-600 flex items-center justify-between text-gray-700 py-1.5 px-4 rounded space-x-2 cursor-pointer">
                                <span className="flex items-center space-x-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                        />
                                    </svg>
                                    <span>Drafts</span>
                                </span>
                                <span className="bg-red-500 text-gray-100 font-bold px-2 py-0.5 text-xs rounded-lg">
                                    1
                                </span>
                            </a>
                        </li>

                        {/* Spam */}
                        <li>
                            <a className="hover:bg-gray-500 hover:bg-opacity-10 hover:text-red-600 flex items-center text-gray-700 py-1.5 px-4 rounded space-x-2 cursor-pointer">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                                    />
                                </svg>
                                <span>Spam</span>
                            </a>
                        </li>

                        {/* Trash */}
                        <li>
                            <a className="hover:bg-gray-500 hover:bg-opacity-10 hover:text-red-600 flex items-center text-gray-700 py-1.5 px-4 rounded space-x-2 cursor-pointer">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                    />
                                </svg>
                                <span>Trash</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex-1 ">
                <div className="h-16 flex items-center justify-between">
                    {/* Left Controls */}
                    <div className="flex items-center">
                        {/* Checkbox + Filter */}
                        <div className="relative flex items-center px-0.5 space-x-0.5">
                            <input
                                type="checkbox"
                                className="focus:ring-0"
                                checked={checkAll}
                                onChange={() => setCheckAll(!checkAll)}
                            />
                            <button
                                onClick={() =>
                                    setFilterMessages(!filterMessages)
                                }
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>
                            {filterMessages && (
                                <div
                                    ref={dropdownRef}
                                    className="bg-gray-200 shadow-2xl absolute left-0 top-6 w-32 py-2 text-gray-900 rounded z-10"
                                >
                                    {filters.map((filter) => (
                                        <button
                                            key={filter}
                                            onClick={() =>
                                                setFilterMessages(false)
                                            }
                                            className="w-full text-sm py-1 hover:bg-red-600 hover:bg-opacity-30"
                                        >
                                            {filter}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Action Buttons Group 1 */}
                        <div className="flex items-center ml-3">
                            <button
                                title="Reload"
                                className="text-gray-700 px-2 py-1 border border-gray-300 rounded-lg shadow hover:bg-gray-200 transition duration-100"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                                    />
                                </svg>
                            </button>
                        </div>
                        <span className="bg-gray-300 h-6 w-[.5px] mx-3"></span>
                        <div className="flex items-center space-x-2">
                            {["Archive", "Mark As Spam", "Delete"].map(
                                (title, i) => (
                                    <button
                                        key={i}
                                        title={title}
                                        className="text-gray-700 px-2 py-1 border border-gray-300 rounded-lg shadow hover:bg-gray-200 transition duration-100"
                                    >
                                        {/* Replace with correct icons if needed */}
                                        <span className="h-5 w-5 inline-block">
                                            {title[0]}
                                        </span>
                                    </button>
                                )
                            )}
                        </div>
                        <span className="bg-gray-300 h-6 w-[.5px] mx-3"></span>
                        <div className="flex items-center space-x-2">
                            {["Mark As Read", "Mark As Unread", "Add Star"].map(
                                (title, i) => (
                                    <button
                                        key={i}
                                        title={title}
                                        className="text-gray-700 px-2 py-1 border border-gray-300 rounded-lg shadow hover:bg-gray-200 transition duration-100"
                                    >
                                        {/* Replace with correct icons if needed */}
                                        <span className="h-5 w-5 inline-block">
                                            {title[0]}
                                        </span>
                                    </button>
                                )
                            )}
                        </div>
                    </div>

                    {/* Right Controls */}
                    <div className="px-2 flex items-center space-x-4">
                        <span className="text-sm text-gray-500">
                            1-15 of 1,323
                        </span>
                        <div className="flex items-center space-x-2">
                            <button
                                className="bg-gray-200 text-gray-400 p-1.5 rounded-lg"
                                title="Newer"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>
                            <button
                                className="bg-gray-200 hover:bg-gray-300 text-gray-700 p-1.5 rounded-lg transition duration-150"
                                title="Older"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-100 h-[77vh] overflow-auto">
                    <ul>
                        {messages.map((msg, idx) => (
                            <MessageEmailComponent key={idx} {...msg} />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
