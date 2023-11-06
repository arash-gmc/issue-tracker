import NextAuth from "next-auth";
import nextConfigObject from "../nextConfigObject";

const handler = NextAuth(nextConfigObject);

export { handler as GET, handler as POST };
