export interface SlugProps {
    params: { slug: string };
}

export interface ResponseData {
    success?: boolean;
    failed?: boolean;
    error?: boolean;
    data?: any;
    message?: string;
}
