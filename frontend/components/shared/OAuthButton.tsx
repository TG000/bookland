"use client";

import React from "react";
import Image from "next/image";
import { getOAuthIcon } from "@/lib/utils";
import { Button } from "../ui/button";

const OAuthButton = ({ provider }: { provider: OAuthProvider }) => {
	return (
		<Button
			className="btn-secondary button-small text-normal my-2 w-full py-3"
			onClick={() => supabase.auth}
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
