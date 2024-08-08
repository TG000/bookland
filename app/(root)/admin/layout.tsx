import Navbar from "@/components/shared/admin/navbar/Navbar";
import Sidebar from "@/components/shared/admin/sidebar/Sidebar";
import { pages } from "@/constants/route_constants";
import { validateRequest } from "@/lib/actions/user.action";
import { Role } from "@prisma/client";
import { redirect } from "next/navigation";
import React from "react";

const AdminLayout = async ({ children }: { children: React.ReactNode }) => {
    const { user } = await validateRequest();

    if (user === null || user.role !== Role.ADMIN) {
        redirect(pages.HOME);
    }

    return (
        <main className="flex overflow-y-scroll">
            <Sidebar />
            <div className="h-screen flex flex-col grow">
                <Navbar />
                <div className="surface grow p-8">{children}</div>
            </div>
        </main>
    );
};

export default AdminLayout;
