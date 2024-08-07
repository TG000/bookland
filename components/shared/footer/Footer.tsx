import React from "react";
import Logo from "@/components/shared/Logo";
import { footerMenus } from "@/constants";
import FooterMenu from "@/components/shared/footer/FooterMenu";
import { MdAccessTimeFilled, MdMail, MdPhone } from "react-icons/md";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Image from "next/image";
import Link from "next/link";
import {
    facebookIcon,
    linkedinIcon,
    mastercardIcon,
    visaIcon,
} from "@/constants/asset_constants";

const Footer = () => {
    return (
        <footer className="flex flex-col surface">
            <div className="flex flex-col container py-10 gap-10">
                <div className="flex justify-between">
                    <Logo />
                    <div className="flex justify-between gap-16">
                        {footerMenus.map((footerMenu) => (
                            <FooterMenu
                                key={footerMenu.title}
                                footerMenu={footerMenu}
                            />
                        ))}
                        <div className="flex justify-start flex-col gap-5">
                            <p className="sub-header font-bold text-normal">
                                Contacts
                            </p>
                            <p className="text-normal body-small flex-start">
                                <MdPhone className="mr-2" />
                                +84 913 123 445
                            </p>
                            <p className="text-normal body-small flex-start">
                                <MdAccessTimeFilled className="mr-2" />
                                Monday - Friday, 9 AM to 5 PM
                            </p>
                            <p className="text-normal body-small flex-start">
                                <MdMail className="mr-2" />
                                official.bookland@gmail.com
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <AlertDialog>
                            <AlertDialogTrigger
                                className="mb-5 hover:cursor-pointer"
                                asChild
                            >
                                <Image
                                    src="/assets/vectors/google_play.svg"
                                    alt="google play"
                                    width={0}
                                    height={0}
                                    className="h-14 w-full"
                                />
                            </AlertDialogTrigger>
                            <AlertDialogTrigger
                                className="hover:cursor-pointer"
                                asChild
                            >
                                <Image
                                    src="/assets/vectors/app_store.svg"
                                    alt="google play"
                                    width={0}
                                    height={0}
                                    className="h-14 w-full"
                                />
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                                <AlertDialogHeader>
                                    <AlertDialogTitle>
                                        Working in progress!
                                    </AlertDialogTitle>
                                    <AlertDialogDescription>
                                        This feature is currently in progress.
                                        However, you can still use the website
                                        on your mobile device. For the latest
                                        updates, please follow our GitHub page.
                                    </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                    <AlertDialogCancel>
                                        Cancel
                                    </AlertDialogCancel>
                                    <AlertDialogAction>
                                        <Link
                                            href="https://github.com/gicatran/bookland"
                                            target="_blank"
                                        >
                                            Continue
                                        </Link>
                                    </AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="flex gap-5">
                        <Link
                            href="https://www.facebook.com/tranlangiac/"
                            target="_blank"
                        >
                            <Image
                                src={facebookIcon}
                                alt="facebook"
                                width={0}
                                height={0}
                                className="w-10 h-10"
                            />
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/gicatran/"
                            target="_blank"
                        >
                            <Image
                                src={linkedinIcon}
                                alt="linkedin"
                                width={0}
                                height={0}
                                className="w-10 h-10"
                            />
                        </Link>
                    </div>
                    <div className="flex gap-5">
                        <Image
                            src={visaIcon}
                            alt="visa"
                            width={0}
                            height={0}
                            className="h-10 w-auto"
                        />
                        <Image
                            src={mastercardIcon}
                            alt="mastercard"
                            width={0}
                            height={0}
                            className="h-10 w-auto"
                        />
                    </div>
                </div>
            </div>
            <div className="border-t border-light text-secondary body-small p-5 text-center">
                Copyright © Bookland 2024. All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;
