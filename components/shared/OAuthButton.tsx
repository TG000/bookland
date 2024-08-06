"use client";

import Image from "next/image";
import { getOAuthIcon } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { OAuthProvider } from "@/types/auth";
import { signInWithOAuth } from "@/lib/actions/user.action";
import { useRouter } from "next/navigation";

const OAuthButton = ({ provider }: { provider: OAuthProvider }) => {
    const router = useRouter();

    const onOAuthSignIn = async () => {
        const response = await signInWithOAuth(provider.id);

        if (response.failed) {
            // TODO: Pop up a toast message
        } else {
            router.push(response.data.toString());
        }
    };

    return (
        <Button
            className="btn-secondary button-small text-normal my-2 w-full py-3 hover:btn-secondary-hover"
            onClick={() => onOAuthSignIn()}
        >
            <Image
                src={getOAuthIcon(provider.id)}
                alt="icon"
                className="mr-3 size-5"
            />
            Sign In with {provider.name}
        </Button>
    );
};

export default OAuthButton;
