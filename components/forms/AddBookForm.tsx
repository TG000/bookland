"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { AddBookSchema } from "@/lib/validations";
import { useState } from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { BookStatus, BookType } from "@prisma/client";
import { Textarea } from "@/components/ui/textarea";
import ImageUploader from "@/components/shared/ImageUploader";
import { DropzoneOptions } from "react-dropzone";

const AddBookForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const dropZone = {
        multiple: false,
        maxFiles: 1,
        maxSize: 5 * 1024 * 1024,
    } as DropzoneOptions;

    const form = useForm<z.infer<typeof AddBookSchema>>({
        resolver: zodResolver(AddBookSchema),
        defaultValues: {
            title: "",
            alternativeTitle: "",
            authors: [],
            genres: [],
            type: BookType.TEXT,
            status: BookStatus.DRAFT,
            publishedAt: null,
            description: "",
            image: null,
        },
    });

    async function onSubmit(values: z.infer<typeof AddBookSchema>) {
        setIsSubmitting(true);

        try {
            console.log(values);
            // const response = await signUp(values);
            // if (response.error) {
            //     return form.setError(
            //         response.data as any,
            //         {
            //             message: response.message,
            //         },
            //         {
            //             shouldFocus: true,
            //         }
            //     );
            // }
            // if (response.failed) {
            //     // TODO: Pop up a toast message
            //     return;
            // }
            // router.push(response.data!);
        } catch (error) {
            console.error(error);
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
                <div className="flex-between gap-8">
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem className="basis-1/3 flex flex-col mb-4">
                                <span className="body-large text-normal mb-1">
                                    Book Title{" "}
                                    <span className="text-yellow-500">*</span>
                                </span>
                                <div className="surface flex-start border-heavy rounded-xl border p-1">
                                    <FormControl>
                                        <Input
                                            placeholder="Book name"
                                            className="w-full no-focus text-normal body-small placeholder border-0 bg-transparent"
                                            autoComplete="off"
                                            {...field}
                                        />
                                    </FormControl>
                                </div>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="alternativeTitle"
                        render={({ field }) => (
                            <FormItem className="basis-2/3 flex flex-col mb-4">
                                <span className="body-large text-normal mb-1">
                                    Alternative Title{" "}
                                    <span className="text-yellow-500">*</span>
                                </span>
                                <div className="surface flex-start border-heavy rounded-xl border p-1">
                                    <FormControl>
                                        <Input
                                            placeholder="Alternative book name"
                                            className="w-full no-focus text-normal body-small placeholder border-0 bg-transparent"
                                            autoComplete="off"
                                            {...field}
                                        />
                                    </FormControl>
                                </div>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <FormField
                    control={form.control}
                    name="authors"
                    render={({ field }) => (
                        <FormItem className="flex flex-col mb-4">
                            <span className="body-large text-normal mb-1">
                                Author(s){" "}
                                <span className="text-yellow-500">*</span>
                            </span>
                            <div className="surface flex-start border-heavy rounded-xl border p-1">
                                <FormControl>
                                    <Input
                                        placeholder="Author(s) / Team name"
                                        className="w-full no-focus text-normal body-small placeholder border-0 bg-transparent"
                                        autoComplete="off"
                                        {...field}
                                    />
                                </FormControl>
                            </div>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="flex-between gap-8">
                    <FormField
                        control={form.control}
                        name="genres"
                        render={({ field }) => (
                            <FormItem className="basis-1/3 flex flex-col mb-4">
                                <span className="body-large text-normal mb-1">
                                    Genre(s){" "}
                                    <span className="text-yellow-500">*</span>
                                </span>
                                <div className="surface flex-start border-heavy rounded-xl border p-1">
                                    <FormControl>
                                        <Input
                                            placeholder="Genre(s) / Tag(s)"
                                            className="w-full no-focus text-normal body-small placeholder border-0 bg-transparent"
                                            autoComplete="off"
                                            {...field}
                                        />
                                    </FormControl>
                                </div>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="type"
                        render={({ field }) => (
                            <FormItem className="basis-1/3 flex flex-col mb-4">
                                <span className="body-large text-normal mb-1">
                                    Type{" "}
                                    <span className="text-yellow-500">*</span>
                                </span>
                                <div className="surface flex-start border-heavy rounded-xl border p-1">
                                    <FormControl>
                                        <Select
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                        >
                                            <SelectTrigger className="placeholder:text-secondary text-normal no-focus border-0">
                                                <SelectValue placeholder="Book Type" />
                                            </SelectTrigger>
                                            <SelectContent className="border-heavy surface">
                                                {Object.values(BookType).map(
                                                    (type) => (
                                                        <SelectItem
                                                            key={type.toString()}
                                                            value={type}
                                                        >
                                                            {type === "TEXT"
                                                                ? "Text-based (Eg. Novel, Book)"
                                                                : "Image-based (Eg. Comic)"}
                                                        </SelectItem>
                                                    )
                                                )}
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                </div>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="status"
                        render={({ field }) => (
                            <FormItem className="basis-1/3 flex flex-col mb-4">
                                <span className="body-large text-normal mb-1">
                                    Status{" "}
                                    <span className="text-yellow-500">*</span>
                                </span>
                                <div className="surface flex-start border-heavy rounded-xl border p-1">
                                    <FormControl>
                                        <Select
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                        >
                                            <SelectTrigger className="placeholder:text-secondary text-normal no-focus border-0">
                                                <SelectValue placeholder="Book Status" />
                                            </SelectTrigger>
                                            <SelectContent className="border-heavy surface">
                                                {Object.values(BookStatus).map(
                                                    (status) => (
                                                        <SelectItem
                                                            key={status.toString()}
                                                            value={status}
                                                        >
                                                            {status === "DRAFT"
                                                                ? "Drafted (Not Published)"
                                                                : status ===
                                                                    "IN_PROGRESS"
                                                                  ? "In Progress"
                                                                  : "Finished"}
                                                        </SelectItem>
                                                    )
                                                )}
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                </div>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem className="flex flex-col mb-4">
                            <span className="body-large text-normal mb-1">
                                Description{" "}
                                <span className="text-yellow-500">*</span>
                            </span>
                            <div className="surface flex-start border-heavy rounded-xl border p-1">
                                <FormControl>
                                    <Textarea
                                        placeholder="Write more about your book..."
                                        className="w-full no-focus text-normal body-small placeholder border-0 bg-transparent"
                                        autoComplete="off"
                                        {...field}
                                    />
                                </FormControl>
                            </div>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="image"
                    render={({ field }) => (
                        <FormItem className="flex flex-col mb-4">
                            <span className="body-large text-normal mb-1">
                                Upload Cover Image{" "}
                                <span className="text-yellow-500">*</span>
                            </span>
                            <div className="surface flex-start border-heavy rounded-xl border p-1">
                                <FormControl>
                                    <ImageUploader
                                        dropZoneConfig={dropZone}
                                        field={field}
                                        className="surface flex"
                                    />
                                </FormControl>
                            </div>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="flex-end">
                    <Button
                        type="submit"
                        className="btn button-small mt-3 py-3 text-white hover:btn-hover"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? "Loading..." : "Continue"}
                    </Button>
                </div>
            </form>
        </Form>
    );
};

export default AddBookForm;
