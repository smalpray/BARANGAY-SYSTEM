import SidebarSection from "@/app/_sections/sidebar-section";
import TopbarSection from "@/app/_sections/topbar-section";
import {
    FcAssistant,
    FcConferenceCall,
    FcHome,
    FcLibrary,
    FcOrganization,
    FcPortraitMode,
    FcPrivacy,
    FcTemplate,
} from "react-icons/fc";
import FloatingButtonSection from "./_sections/floating-button-section";

export default function Layout({ children }) {
    const isCurrentMain = window.location.pathname.split("/")[2];
    const isCurrentSub = window.location.pathname.split("/")[3];
    const navigation = [
        {
            name: "Dashboard",
            href: "/administrator/dashboard",
            icon: <FcTemplate className="h-6 w-6" />,
            current: isCurrentMain == "dashboard",
        },

        {
            name: "Users",
            href: "#",
            icon: <FcConferenceCall className="h-6 w-6" />,
            current: isCurrentMain == "users",
            children: [
                {
                    name: "Leaders",
                    href: "/administrator/users/leaders",
                    icon: <FcPortraitMode className="h-6 w-6" />,
                    current: isCurrentSub == "leaders",
                },
                {
                    name: "Engagement",
                    href: "/administrator/users/engagement",
                    icon: <FcPortraitMode className="h-6 w-6" />,
                    current: isCurrentSub == "engagement",
                },
                {
                    name: "IT Department",

                    href: "/administrator/users/it_department",
                    icon: <FcPortraitMode className="h-6 w-6" />,
                    current: isCurrentSub == "it_department",
                },

                {
                    name: "HR Department",
                    href: "/administrator/users/hr_department",
                    icon: <FcPortraitMode className="h-6 w-6" />,
                    current: isCurrentSub == "hr_department",
                },

                {
                    name: "Accounting Department",
                    href: "/administrator/users/accounting_department",
                    icon: <FcPortraitMode className="h-6 w-6" />,
                    current: isCurrentSub == "accounting_department",
                },
            ],
        },

        {
            name: "Locations",
            href: "#",
            icon: <FcOrganization className="h-6 w-6" />,
            current: isCurrentMain == "ticketing",
            children: [
                {
                    name: "Carcar",

                    href: "/administrator/ticketing/carcar/tickets",
                    icon: <FcHome className="h-6 w-6" />,
                    current: isCurrentSub == "carcar",
                },
                {
                    name: "San Carlos",
                    href: "/administrator/ticketing/san_carlos/tickets",
                    icon: <FcHome className="h-6 w-6" />,
                    current: isCurrentSub == "san_carlos",
                },
            ],
        },
    ];

    const userNavigation = [
        { name: "Your profile", href: "#" },
        { name: "Sign out", href: "#" },
    ];
    return (
        <>
            <SidebarSection navigation={navigation} />
            <div className="lg:pl-72">
                <TopbarSection userNavigation={userNavigation} />

                <main className="p-3">
                    <div>{children}</div>
                    <FloatingButtonSection />
                </main>
            </div>
        </>
    );
}
