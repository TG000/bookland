import Navbar from "@/components/shared/navbar/Navbar";
import Link from "next/link";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
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

import Book from "@/components/shared/Book";
import { Button } from "@/components/ui/button";
import {
    MdAccessTimeFilled,
    MdLightbulb,
    MdMail,
    MdPhone,
} from "react-icons/md";
import Genre from "@/components/shared/Genre";
import LeaderBoard from "@/components/shared/LeaderBoard";
import Logo from "@/components/shared/Logo";
import Image from "next/image";
import {
    facebookIcon,
    linkedinIcon,
    mastercardIcon,
    visaIcon,
} from "@/constants/asset_constants";
import { footerMenus } from "@/constants";
import Section from "@/components/shared/Section";
import FooterMenu from "@/components/shared/FooterMenu";

const HomePage = () => {
    const books = [
        {
            id: 1,
            title: "The Lean Startuppppppppppppppppppppp",
            author: "Eric Ries",
            imageURL: "/assets/images/auth-image.png",
        },
        {
            id: 2,
            title: "The Lean Startup",
            author: "Eric Ries",
            imageURL: "/assets/images/auth-image.png",
        },
        {
            id: 3,
            title: "The Lean Startup",
            author: "Eric Ries",
            imageURL: "/assets/images/auth-image.png",
        },
        {
            id: 4,
            title: "The Lean Startup",
            author: "Eric Ries",
            imageURL: "/assets/images/auth-image.png",
        },
        {
            id: 5,
            title: "The Lean Startup",
            author: "Eric Ries",
            imageURL: "/assets/images/auth-image.png",
        },
        {
            id: 6,
            title: "The Lean Startup",
            author: "Eric Ries",
            imageURL: "/assets/images/auth-image.png",
        },
        {
            id: 7,
            title: "The Lean Startup",
            author: "Eric Ries",
            imageURL: "/assets/images/auth-image.png",
        },
        {
            id: 8,
            title: "The Lean Startup",
            author: "Eric Ries",
            imageURL: "/assets/images/auth-image.png",
        },
        {
            id: 9,
            title: "The Lean Startup",
            author: "Eric Ries",
            imageURL: "/assets/images/auth-image.png",
        },
        {
            id: 10,
            title: "The Lean Startup",
            author: "Eric Ries",
            imageURL: "/assets/images/auth-image.png",
        },
        {
            id: 11,
            title: "The Lean Startup",
            author: "Eric Ries",
            imageURL: "/assets/images/auth-image.png",
        },
        {
            id: 12,
            title: "The Lean Startup",
            author: "Eric Ries",
            imageURL: "/assets/images/auth-image.png",
        },
    ];

    const genres = [
        {
            id: 1,
            name: "Business",
            imageURL: "/assets/images/auth-image.png",
            slug: "business",
        },
        {
            id: 2,
            name: "Business",
            imageURL: "/assets/images/auth-image.png",
            slug: "business",
        },
        {
            id: 3,
            name: "Business",
            imageURL: "/assets/images/auth-image.png",
            slug: "business",
        },
        {
            id: 4,
            name: "Business",
            imageURL: "/assets/images/auth-image.png",
            slug: "business",
        },
        {
            id: 5,
            name: "Business",
            imageURL: "/assets/images/auth-image.png",
            slug: "business",
        },
        {
            id: 6,
            name: "Business",
            imageURL: "/assets/images/auth-image.png",
            slug: "business",
        },
        {
            id: 7,
            name: "Business",
            imageURL: "/assets/images/auth-image.png",
            slug: "business",
        },
        {
            id: 8,
            name: "Business",
            imageURL: "/assets/images/auth-image.png",
            slug: "business",
        },
        {
            id: 9,
            name: "Business",
            imageURL: "/assets/images/auth-image.png",
            slug: "business",
        },
        {
            id: 10,
            name: "Business",
            imageURL: "/assets/images/auth-image.png",
            slug: "business",
        },
    ];

    return (
        <main className="background">
            <header className="flex flex-col bg-hero h-screen bg-no-repeat bg-cover">
                <Navbar />
                <div className="container h-full flex flex-col justify-center">
                    <h1 className="text-white h1-bold my-2">
                        Unleash Your{" "}
                        <span className="text-primary">Imagination</span>
                    </h1>
                    <p className="text-light-text-secondary body-large">
                        Ideal for those seeking knowledge and learning from the
                        best, <br />
                        or to be dreamer. Join us now!
                    </p>
                    <Link
                        href="/explore"
                        className="border-primary border-2 btn bg-transparent text-white button-small py-3 px-4 my-6 rounded-lg w-fit hover:bg-transparent hover:text-primary"
                    >
                        Explore Now
                    </Link>
                </div>
            </header>
            <section className="container py-14">
                <Section title="Recommend by others" href="/recommend">
                    <Carousel
                        opts={{
                            containScroll: "trimSnaps",
                            align: "start",
                            slidesToScroll: "auto",
                        }}
                    >
                        <CarouselContent className="-ml-10">
                            {books.map((book) => (
                                <CarouselItem
                                    key={book.id}
                                    className="pl-10 basis-1/6"
                                >
                                    <Book book={book} />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </Section>
            </section>
            <section className="surface">
                <div className="py-5 container flex-between">
                    <span className="flex-start text-normal body-medium">
                        <MdLightbulb className="h-8 w-8 mr-2 text-yellow-400" />
                        Summaries, bookmarks and reviews are now supported by
                        Bookland Premium!
                    </span>
                    <Button className="btn hover:btn-hover text-white button-small p-4">
                        14-days free trial
                    </Button>
                </div>
            </section>
            <section className="container py-14">
                <Section title="Top Genres" href="/top-genres">
                    <div className="flex-between flex-wrap gap-10">
                        {genres.map((genre) => (
                            <Genre key={genre.id} genre={genre} />
                        ))}
                    </div>
                </Section>
            </section>
            <section className="flex container py-14 gap-20">
                <div className="flex flex-col w-3/5">
                    <Section title="Finished Books" href="/finished-books">
                        <div className="flex-between flex-wrap gap-10">
                            {books.map((book) => (
                                <Book
                                    key={book.id}
                                    book={book}
                                    className="basis-1/5"
                                />
                            ))}
                        </div>
                    </Section>
                </div>
                <LeaderBoard />
            </section>
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
                                            This feature is currently in
                                            progress. However, you can still use
                                            the website on your mobile device.
                                            For the latest updates, please
                                            follow our GitHub page.
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
        </main>
    );
};

export default HomePage;
