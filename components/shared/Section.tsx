import { SectionProps } from "@/types";
import Link from "next/link";
import React from "react";

const Section = ({ title, href, children }: SectionProps) => {
    return (
        <>
            <div className="flex-between mb-5">
                <h3 className="sub-header font-bold text-normal">{title}</h3>
                <Link className="text-secondary body-medium" href={href}>
                    See all
                </Link>
            </div>
            {children}
        </>
    );
};

export default Section;
