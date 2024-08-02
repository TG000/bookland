import { validateProtected } from "@/lib/utils";

const HomePage = () => {
    validateProtected();

    return <div>HomePage</div>;
};

export default HomePage;
