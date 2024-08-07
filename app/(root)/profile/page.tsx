import { validateRequest } from "@/lib/actions/user.action";
import { redirect } from "next/navigation";

const ProfilePage = async () => {
    const { user } = await validateRequest();

    if (!user) {
        redirect("/sign-in");
    }

    return <div>page</div>;
};

export default ProfilePage;
