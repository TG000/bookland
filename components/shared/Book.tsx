import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdExplore } from "react-icons/md";

const Book = ({ book }: { book: any }) => {
    return (
        <div className="flex flex-col justify-start">
            <Image
                src={book.imageURL}
                alt="book"
                width={0}
                height={0}
                className="w-full aspect-2/3 border-heavy border border-l-8 border-b-8 rounded-tr-3xl"
            />
            <div className="flex flex-col my-5">
                <h4 className="text-normal font-bold body-medium">
                    {book.title}
                </h4>
                <p className="text-secondary body-small">{book.author}</p>
            </div>
            <Link
                href={`/book/${book.id}`}
                className="border-2 border-primary bg-transparent text-primary button-small hover:text-white hover:bg-primary px-4 py-3 rounded-lg w-fit flex items-center"
            >
                <MdExplore className="hover:!text-white mr-2" />
                Read
            </Link>
        </div>
    );
};

export default Book;
