import {
    FileUploader,
    FileUploaderContent,
    FileUploaderItem,
    FileInput,
} from "@/components/extension/file-uploader";
import { DropzoneOptions } from "react-dropzone";
import Image from "next/image";
import { Paperclip } from "lucide-react";

const ImageUploader = ({
    dropZoneConfig,
    field,
    className,
}: {
    dropZoneConfig: DropzoneOptions;
    field: any;
    className: string;
}) => {
    return (
        <FileUploader
            value={field.value}
            onValueChange={field.onChange}
            dropzoneOptions={dropZoneConfig}
            reSelect={true}
            className={`p-2 h-full gap-2 ${className}`}
        >
            <FileInput className="grow outline-dashed outline-1 outline-white h-full">
                <div className="flex items-center justify-center flex-col p-4 w-full h-full">
                    <svg
                        className="w-8 h-8 mb-3 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 16"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                        />
                    </svg>
                    <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold">Click to upload</span>
                        &nbsp; or drag and drop
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                        SVG, PNG, JPG or GIF
                    </p>
                </div>
            </FileInput>
            <div className="flex-between gap-5 py-2 px-4 border border-heavy rounded-lg flex-col aspect-square h-96">
                <span className="text-normal font-semibold">Preview</span>
                {field.value &&
                    field.value.length > 0 &&
                    field.value.map((file: any) => (
                        <Image
                            key={file}
                            src={URL.createObjectURL(file)}
                            alt={file.name}
                            width={0}
                            height={0}
                            className="object-cover rounded-md h-64 w-auto aspect-5/8"
                        />
                    ))}
                <FileUploaderContent>
                    {field.value &&
                        field.value.length > 0 &&
                        field.value.map((file: any, i: any) => (
                            <FileUploaderItem key={i} index={i}>
                                <Paperclip className="text-normal h-4 w-4 stroke-current" />
                                <span className="text-normal truncate w-2/3">
                                    {file.name}
                                </span>
                            </FileUploaderItem>
                        ))}
                </FileUploaderContent>
            </div>
        </FileUploader>
    );
};

export default ImageUploader;
