import Image from "next/image";
import Link from "next/link";
import React from "react";

const Genre = ({ genre }: { genre: any }) => {
    return (
        <Link
            href={`/genre/${genre.slug}`}
            className="basis-1/6 aspect-square relative border border-heavy"
        >
            <Image
                src={genre.imageURL}
                alt="img"
                width={0}
                height={0}
                className="w-full h-full"
            />
            <div className="absolute w-full h-full left-0 top-0 bg-black/60"></div>
            <span className="text-white absolute sub-header flex-center top-0 left-0 w-full h-full">
                {genre.name}
            </span>
        </Link>
    );
};

export default Genre;
