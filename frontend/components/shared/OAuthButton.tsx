"use client";

import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { getOAuthIcon } from "@/lib/utils";

const OAuthButton = ({ provider }: any) => {
	return (
		<Button
			className="btn-secondary button-small text-normal my-2 w-full py-3"
			onClick={() => signIn(provider.id)}
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
