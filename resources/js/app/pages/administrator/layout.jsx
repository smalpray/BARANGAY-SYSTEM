import {
    CalendarIcon,
    ChartPieIcon,
    DocumentDuplicateIcon,
    FolderIcon,
    HomeIcon,
    UsersIcon,
} from "@heroicons/react/24/outline";
import SidebarSection from "@/app/_sections/sidebar-section";
import TopbarSection from "@/app/_sections/topbar-section";

const navigation = [
    { name: "Dashboard", href: "#", icon: HomeIcon, current: true },
    {
        name: "Team",
        href: "#",
        icon: UsersIcon,
        current: false,
        children: [
            { name: "Agent", href: "#", icon: HomeIcon, current: true },
            { name: "Register", href: "#", icon: HomeIcon, current: false },
        ],
    },
    {
        name: "Projects",
        href: "#",
        icon: FolderIcon,
        current: false,
        children: [
            { name: "Agent", href: "#", icon: HomeIcon, current: true },
            { name: "Register", href: "#", icon: HomeIcon, current: false },
        ],
    },
    { name: "Calendar", href: "#", icon: CalendarIcon, current: false },
    {
        name: "Documents",
        href: "#",
        icon: DocumentDuplicateIcon,
        current: false,
    },
    { name: "Reports", href: "#", icon: ChartPieIcon, current: false },
];

const userNavigation = [
    { name: "Your profile", href: "#" },
    { name: "Sign out", href: "#" },
];

export default function Layout({ children }) {
    return (
        <>
            <div>
                <SidebarSection navigation={navigation} />
                <div className="lg:pl-72">
                    <TopbarSection userNavigation={userNavigation} />

                    <main className="py-4">
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            {children}
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}
