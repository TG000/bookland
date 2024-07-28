import SignInForm from "@/components/forms/SignInForm";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { facebookIcon, googleIcon } from "@/constants/assets_constant";
import Link from "next/link";

const SignInPage = () => {
	return (
		<>
			<div className="flex-center w-1/2 flex-col">
				<h1 className="h1-bold text-normal mb-5">SIGN IN</h1>
				<SignInForm />
				<Separator className="bg-border-heavy my-6" />
				<Button
					type="submit"
					className="btn-secondary button-small text-normal my-2 w-full py-3"
				>
					<Image
						src={googleIcon}
						alt="icon"
						className="mr-3 size-5"
					/>
					Sign In with Google
				</Button>
				<Button
					type="submit"
					className="btn-secondary button-small text-normal my-2 w-full py-3"
				>
					<Image
						src={facebookIcon}
						alt="icon"
						className="mr-3 size-5"
					/>
					Sign In with Facebook
				</Button>
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
