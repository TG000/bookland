import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdStar } from "react-icons/md";

const TrendingBook = ({ book }: { book: any }) => {
    return (
        <Link
            href={`/book/${book.id}`}
            className="border border-t-0 border-medium w-full h-fit flex-between p-6 -mt-1"
        >
            <div className="flex-start mr-5">
                <span className="h3-bold text-normal">1</span>
                <Image
                    src={book.imageURL}
                    alt="img"
                    width={0}
                    height={0}
                    className="h-24 w-24 aspect-square mx-5 border border-heavy"
                />
                <div className="flex flex-col justify-center max-w-60">
                    <h4 className="text-normal font-bold body-medium truncate">
                        {book.title}
                    </h4>
                    <p className="text-secondary body-small truncate">
                        {book.author}
                    </p>
                </div>
            </div>
            <div className="w-fit flex-start flex-col">
                <div className="flex items-center">
                    <MdStar className="text-yellow-400" />
                    <span className="text-secondary body-small ml-2 text-nowrap">
                        {book.rating} / 10
                    </span>
                </div>
                <p className="flex items-center text-secondary">
                    <span className="text-primary body-small-bold mr-1">
                        {book.views}
                    </span>
                    views
                </p>
            </div>
        </Link>
    );
};

export default TrendingBook;
