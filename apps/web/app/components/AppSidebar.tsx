"use client";

import { Sidebar, type NavItem } from "@repo/ui";
import { Home, LayoutDashboard, User } from "lucide-react";
import { usePathname } from "next/navigation";

export function AppSidebar({ className }: { className?: string }) {
    const pathname = usePathname();

    const isActive = (href: string) => {
        if (href === "/") return pathname === "/";
        return pathname.startsWith(href);
    };

    const navItems: NavItem[] = [
        {
            href: "/",
            label: "Home",
            icon: <Home size={20} />,
            isActive: isActive("/"),
        },
        {
            href: "/dashboard",
            label: "Dashboard",
            icon: <LayoutDashboard size={20} />,
            isActive: isActive("/dashboard"),
        },
        {
            href: "/profile",
            label: "Profile",
            icon: <User size={20} />,
            isActive: isActive("/profile"),
        },
    ];

    return <Sidebar className={className} navItems={navItems} />;
}
