import { FooterMenuProps } from "@/types";
import Link from "next/link";
import React from "react";

const FooterMenu = ({ footerMenu }: { footerMenu: FooterMenuProps }) => {
    return (
        <div key={footerMenu.title} className="flex flex-col gap-5">
            <p className="sub-header font-bold text-normal">
                {footerMenu.title}
            </p>
            {footerMenu.footerLinks.map((footerLink) => (
                <Link
                    key={footerLink.href}
                    href={footerLink.href}
                    className="text-normal body-small"
                >
                    {footerLink.label}
                </Link>
            ))}
        </div>
    );
};

export default FooterMenu;
