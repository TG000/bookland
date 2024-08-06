import { Input } from "../ui/input";
import { MdSearch } from "react-icons/md";

const GlobalSearchbar = () => {
    return (
        <div className="flex-start border-heavy rounded-xl border px-4 py-1 w-1/3">
            <MdSearch className="text-secondary body-medium" />
            <Input
                placeholder="Search..."
                className="no-focus text-normal body-medium placeholder:text-secondary border-0 bg-transparent w-full"
                autoComplete="off"
            />
        </div>
    );
};

export default GlobalSearchbar;
