import AddBookForm from "@/components/forms/AddBookForm";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { pages } from "@/constants/route_constants";
import { MdHome } from "react-icons/md";

const AdminAddBookPage = () => {
    return (
        <>
            <div className="flex-between mb-5">
                <p className="sub-header font-semibold text-normal">
                    Add New Book
                </p>
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink
                                className="background p-2 body-small rounded-full"
                                href={pages.HOME}
                            >
                                <MdHome className="sub-header" />
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage className="text-secondary body-small">
                                Books
                            </BreadcrumbPage>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage className="text-primary/60 body-small">
                                Add New
                            </BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
            <div className="background flex flex-col p-5 rounded-xl">
                <AddBookForm />
            </div>
        </>
    );
};

export default AdminAddBookPage;
