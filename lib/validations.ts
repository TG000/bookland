import { BookStatus, BookType } from "@prisma/client";
import { z } from "zod";

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/webp",
];

export const SignInSchema = z.object({
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
    password: z.string().min(6, {
        message: "Password must be at least 6 characters long.",
    }),
});

export const SignUpSchema = z.object({
    username: z
        .string()
        .min(3, {
            message: "Username must be at least 3 characters long.",
        })
        .max(20, {
            message: "Username must not be longer than 20 characters.",
        }),
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
    phone: z.string().length(10, {
        message: "Please enter a valid phone number.",
    }),
    password: z
        .string()
        .min(6, {
            message: "Password must be at least 6 characters long.",
        })
        .max(255, {
            message: "Password must not be longer than 255 characters.",
        }),
});

export const AddBookSchema = z.object({
    title: z.string().min(10, {
        message: "Title must be at least 10 characters long.",
    }),
    alternativeTitle: z.string(),
    authors: z.array(z.string()).min(1, {
        message: "Please enter at least one author.",
    }),
    genres: z.array(z.string()).min(1, {
        message: "Please enter at least one genre.",
    }),
    type: z.nativeEnum(BookType),
    status: z.nativeEnum(BookStatus),
    publishedAt: z.date().nullable(),
    description: z.string().min(50, {
        message: "Description must be at least 50 characters long.",
    }),
    image: z
        .any()
        .refine((file) => file?.size <= MAX_FILE_SIZE, `Max image size is 5MB.`)
        .refine(
            (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
            "Only .jpg, .jpeg, .png and .webp formats are supported."
        ),
});
