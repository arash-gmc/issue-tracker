import { getServerSession } from "next-auth";
import authOptions from "./auth/nextConfigObject";

export async function authCheck() {
  const session = await getServerSession(authOptions);
  if (session) return true;
  return false;
}
