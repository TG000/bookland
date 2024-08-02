import SignOutForm from "@/components/forms/SignOutForm";
import { validateRequest } from "@/lib/actions/user.action";
import Link from "next/link";

const HomePage = async () => {
    const { user } = await validateRequest();

    return user !== null ? (
        <div>
            <SignOutForm />
        </div>
    ) : (
        <div>
            <Link href="/sign-in">Sign In</Link>
            <Link href="/sign-up">Sign Up</Link>
        </div>
    );
};

export default HomePage;
