export interface SignUpProps {
    username: string;
    email: string;
    phone: string;
    password: string;
}

export interface SignInProps {
    email: string;
    password: string;
}
export interface OAuthProvider {
    id: string;
    name: string;
}

export interface GoogleUser {
    id: string;
    email: string;
    name: string;
    picture: string;
}
