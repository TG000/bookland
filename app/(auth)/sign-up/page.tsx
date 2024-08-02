import SignUpForm from "@/components/forms/SignUpForm";
import { validateRequest } from "@/lib/actions/user.action";
import Link from "next/link";
import { redirect } from "next/navigation";

const SignUpPage = async () => {
    const { user } = await validateRequest();

    if (user) {
        redirect("/");
    }

    return (
        <>
            <div className="flex-center w-1/2 flex-col">
                <h1 className="h1-bold text-normal mb-5">SIGN UP</h1>
                <SignUpForm />
            </div>
            <p className="text-normal">
                Already have an account?{" "}
                <Link href="/sign-in" className="text-primary font-bold">
                    Sign In
                </Link>
            </p>
        </>
    );
};

export default SignUpPage;
