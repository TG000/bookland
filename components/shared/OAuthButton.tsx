"use client";

import React from "react";
import Image from "next/image";
import { capitalizeFirstLetter, getOAuthIcon } from "@/lib/utils";
import { Button } from "../ui/button";
import { createClient } from "@/lib/supabase/client";
import { Provider } from "@supabase/supabase-js";

const OAuthButton = ({ provider }: { provider: Provider }) => {
    const supabase = createClient();

    return (
        <Button
            className="btn-secondary button-small text-normal my-2 w-full py-3"
            onClick={() => supabase.auth.signInWithOAuth({ provider })}
        >
            <Image
                src={getOAuthIcon(provider)}
                alt="icon"
                className="mr-3 size-5"
            />
            Sign In with {capitalizeFirstLetter(provider)}
        </Button>
    );
};

export default OAuthButton;
