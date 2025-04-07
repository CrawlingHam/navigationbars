import { User } from "@/types";

export const defaultUser: User = {
    createdAt: new Date().toISOString(),
    lastLogin: new Date().toISOString(),
    email: "Guest@example.com",
    id: "default-user-id",
    name: "Guest",
    role: "guest",
    picture: "",
};
