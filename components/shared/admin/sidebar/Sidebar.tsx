"use client";

import Logo from "@/components/shared/Logo";
import { MdWidgets } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { sidebarMenus } from "@/constants";
import SidebarMenu from "@/components/shared/admin/sidebar/SidebarMenu";
import { ScrollArea } from "@/components/ui/scroll-area";

const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);

    const handleCollapse = () => {
        setCollapsed(!collapsed);
    };

    return (
        <div
            data-collapsed={collapsed}
            className={`surface flex flex-col data-[collapsed=true]:w-[88px] data-[collapsed=false]:w-1/6 transition-[width] duration-300 h-screen`}
        >
            <div
                className={`${!collapsed ? "flex-between" : "flex-center"} p-4 border-b border-light h-[86px]`}
            >
                {!collapsed && <Logo />}
                <Button
                    className="btn-secondary rounded-full h-10 w-10 my-[7px] px-2.5"
                    onClick={handleCollapse}
                >
                    <MdWidgets className="text-normal w-full h-full" />
                </Button>
            </div>
            <ScrollArea className="flex px-4 py-6">
                {sidebarMenus.map((sidebarMenu) => (
                    <SidebarMenu
                        key={sidebarMenu.menuLabel}
                        menu={sidebarMenu}
                        collapsed={collapsed}
                    />
                ))}
            </ScrollArea>
        </div>
    );
};

export default Sidebar;
