import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "@/components/ui/accordion";
import { SidebarMenuProps } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const SidebarMenu = ({
    menu,
    collapsed,
}: {
    menu: SidebarMenuProps;
    collapsed: boolean;
}) => {
    const pathName = usePathname();

    return (
        <div className="flex flex-col gap-4 mb-5">
            {!collapsed && (
                <p className="py-2 px-4 rounded-md text-normal bg-light-border-light dark:bg-dark-border-light w-fit">
                    {menu.menuLabel}
                </p>
            )}
            {menu.items.map((item) =>
                item.href !== undefined ? (
                    <Link
                        key={item.title}
                        className={`flex-start p-2 ${pathName !== item.href ? "text-normal hover:bg-light-border-heavy dark:hover:bg-dark-border-heavy" : "bg-primary text-white"} rounded-md text-nowrap ${collapsed ? "w-fit" : ""}`}
                        href={item.href}
                    >
                        <item.icon
                            className={`h-6 w-6 ${!collapsed ? "mr-3" : ""}`}
                        />
                        {!collapsed && item.title}
                    </Link>
                ) : (
                    <Accordion key={item.title} type="single" collapsible>
                        <AccordionItem value="item">
                            <AccordionTrigger className="text-normal hover:bg-light-border-heavy dark:hover:bg-dark-border-heavy">
                                <item.icon
                                    className={`h-6 w-6 ${!collapsed ? "mr-3" : ""}`}
                                />
                                {!collapsed && item.title}
                            </AccordionTrigger>
                            <AccordionContent
                                className={collapsed ? "hidden" : ""}
                            >
                                {item.subMenus!.map((subItem) => (
                                    <Link
                                        key={subItem.label}
                                        className={`flex-start p-2 my-1 ${pathName !== subItem.href ? "text-normal hover:bg-light-border-heavy dark:hover:bg-dark-border-heavy" : "bg-primary text-white"} rounded-md w-full`}
                                        href={subItem.href}
                                    >
                                        {subItem.label}
                                    </Link>
                                ))}
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                )
            )}
        </div>
    );
};

export default SidebarMenu;
