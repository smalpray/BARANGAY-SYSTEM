import SidebarSection from "@/app/_sections/sidebar-section";
import TopbarSection from "@/app/_sections/topbar-section";
import {
    FcAssistant,
    FcBusinesswoman,
    FcCancel,
    FcCheckmark,
    FcClock,
    FcComboChart,
    FcContacts,
    FcFeedback,
    FcMms,
    FcOk,
    FcOvertime,
    FcPortraitMode,
    FcPrivacy,
    FcTemplate,
    FcTimeline,
    FcTreeStructure,
} from "react-icons/fc";



export default function Layout({ children }) {
const isCurrentMain = window.location.pathname.split('/')[2]
const isCurrentSub = window.location.pathname.split('/')[3]
    const navigation = [
        {
            name: "Dashboard",
            href: "/administrator/dashboard",
            icon: <FcTemplate className="h-6 w-6" />,
            current: isCurrentMain == 'dashboard',
        },
        {
            name: "Bookings",
            href: "#",
            icon: <FcContacts className="h-6 w-6" />,
            current: isCurrentMain == 'bookings',
            children: [
                {
                    name: "Pending",
                    href: "/administrator/bookings/pending",
                    icon: <FcClock className="h-6 w-6" />,
                    current: isCurrentSub == 'pending',
                },
                {
                    name: "Approved",
                    href: "/administrator/bookings/approved",
                    icon: <FcOk className="h-6 w-6" />,
                    current: isCurrentSub == 'approved',
                },
                {
                    name: "Cancelled",
                    href: "/administrator/bookings/cancelled",
                    icon: <FcCancel className="h-6 w-6" />,
                    current: isCurrentSub == 'cancelled',
                },
            ],
        },
        {
            name: "Users",
            href: "#",
            icon: <FcPrivacy className="h-6 w-6" />,
            current: isCurrentMain == 'users',
            children: [
                {
                    name: "CSR",
                    
                    href: "/administrator/users/csr",
                    icon: <FcAssistant className="h-6 w-6" />,
                    current: isCurrentSub == 'csr',
                },
                {
                    name: "Coaches",
                    href: "/administrator/users/coaches",
                    icon: <FcPortraitMode className="h-6 w-6" />,
                    current: isCurrentSub == 'coaches',
                },
            ],
        },
        {
            name: "Schedules",
            href: "/administrator/schedules",
            icon: <FcOvertime className="h-6 w-6" />,
            current: isCurrentMain == 'schedules',
        },
        {
            name: "Activities",
            href: "/administrator/activities",
            icon: <FcMms className="h-6 w-6" />,
            current: isCurrentMain == 'activities',
        },
        {
            name: "Customers",
            href: "/administrator/customers",
            icon: <FcBusinesswoman className="h-6 w-6" />,
            current: isCurrentMain == 'customers',
        },
        {
            name: "Emails",
            href: "/administrator/emails",
            icon: <FcFeedback className="h-6 w-6" />,
            current: isCurrentMain == 'emails',
        },
        {
            name: "Categories",
            href: "/administrator/categories",
            icon: <FcTreeStructure className="h-6 w-6" />,
            current: isCurrentMain == 'categories',
        },
        {
            name: "Resources",
            href: "/administrator/resources",
            icon: <FcTimeline className="h-6 w-6" />,
            current: isCurrentMain == 'resources',
        },
        {
            name: "General Statistics",
            href: "/administrator/general_statistics",
            icon: <FcComboChart className="h-6 w-6" />,
            current: isCurrentMain == 'general_statistics',
        },
    ];
    
    const userNavigation = [
        { name: "Your profile", href: "#" },
        { name: "Sign out", href: "#" },
    ];
    return (
        <>
            <div>
                <SidebarSection navigation={navigation} />
                <div className="lg:pl-72">
                    <TopbarSection userNavigation={userNavigation} />

                    <main className="py-4">
                        <div>
                            {children}
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}
