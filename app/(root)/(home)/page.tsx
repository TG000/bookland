import Navbar from "@/components/shared/Navbar";
import Link from "next/link";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Book from "@/components/shared/Book";

const HomePage = () => {
    const books = [
        {
            id: 1,
            title: "The Lean Startup",
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
    ];

    return (
        <main className="background">
            <div className="flex flex-col bg-hero h-screen bg-no-repeat bg-cover">
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
            </div>
            <div className="container py-20">
                <div className="flex-between mb-5">
                    <h3 className="sub-header font-bold text-normal">
                        Recommend by others
                    </h3>
                    <Link
                        className="text-secondary body-medium"
                        href="/see-all"
                    >
                        See all
                    </Link>
                </div>
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
            </div>
        </main>
    );
};

export default HomePage;
