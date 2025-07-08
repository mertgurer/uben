import { cookies } from "next/headers";

export async function getToken(): Promise<string | null> {
    const cookieStore = await cookies();
    const token = cookieStore.get("auth_token");
    return token?.value ?? null;
}
