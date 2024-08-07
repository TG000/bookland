import Navbar from "@/components/shared/admin/navbar/Navbar";
import Sidebar from "@/components/shared/admin/sidebar/Sidebar";
import { userRoles } from "@/constants/user_constants";
import { validateRequest } from "@/lib/actions/user.action";
import { redirect } from "next/navigation";
import React from "react";

const AdminLayout = async ({ children }: { children: React.ReactNode }) => {
    const { user } = await validateRequest();

    if (user === null || user.role !== userRoles.ADMIN) {
        redirect("/");
    }

    return (
        <main className="flex">
            <Sidebar />
            <div className="flex flex-col grow">
                <Navbar />
                {children}
            </div>
        </main>
    );
};

export default AdminLayout;
