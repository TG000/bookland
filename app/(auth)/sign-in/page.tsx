import SignInForm from "@/components/forms/SignInForm";
import OAuthButton from "@/components/shared/OAuthButton";
import { Separator } from "@/components/ui/separator";
import { validateRequest } from "@/lib/actions/user.action";
import Link from "next/link";
import { redirect } from "next/navigation";

const SignInPage = async () => {
    const { user } = await validateRequest();

    if (user) {
        redirect("/");
    }

    return (
        <>
            <div className="flex-center w-1/2 flex-col">
                <h1 className="h1-bold text-normal mb-5">SIGN IN</h1>
                <SignInForm />
                <Separator className="bg-border-heavy my-6" />
                <OAuthButton provider="google" />
            </div>
            <p className="text-normal">
                Don&apos;t have an account?{" "}
                <Link href="/sign-up" className="text-primary font-bold">
                    Sign Up
                </Link>
            </p>
        </>
    );
};

export default SignInPage;
