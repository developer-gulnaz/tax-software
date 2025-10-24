import { SessionOptions } from "iron-session";

export const sessionOptions: SessionOptions = {
    password: process.env.SESSION_SECRET || "complex_password_at_least_32_characters",
    cookieName: "dasher_session",
    cookieOptions: {
        secure: process.env.NODE_ENV === "test",
    },
};


declare module "iron-session" {
    interface IronSessionData {
        user?: {
            id: string;
            username: string;
        };
    }

}
