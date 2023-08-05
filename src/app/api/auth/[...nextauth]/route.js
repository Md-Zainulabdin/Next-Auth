import { checkEmail, verifyPassword } from "@/app/utils/handler";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const Options = {
    session: {
        strategy: "jwt",
    },
    providers: [
        CredentialsProvider({
            async authorize({ email, password }) {
                const user = checkEmail(email);

                if (!user) {
                    throw new Error("User not Found");
                }

                const isValid = await verifyPassword(user.password, password);

                if (!isValid) {
                    throw new Error("Incorrect Password");
                }

                return {
                    name: user.username,
                    email: user.email,
                    id: user.id,
                };
            },
        }),
    ],
    callbacks: {
        jwt(params) {
            if (params.user?.id) {
                params.token.id = params.user.id;
                params.token.name = params.user.name;
            }

            return params.token;
        },
        session({ session, token }) {
            if (session.user) {
                session.user.id = token.id;
                session.user.name = token.name;
            }

            return session;
        }
    }
}

const handler = NextAuth(Options);
export { handler as GET, handler as POST };