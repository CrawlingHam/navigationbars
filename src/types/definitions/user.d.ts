export declare type Role = "admin" | "client" | "guest";

export declare type User = {
    createdAt: string;
    lastLogin: string;
    picture: string;
    email: string;
    name: string;
    id: string;
    role: Role;
};

export declare type SavedAccount = Pick<User, "email" | "name" | "picture" | "id">;
