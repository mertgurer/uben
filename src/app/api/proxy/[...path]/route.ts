import { API_BASE_URL } from "@/constants/envConstants";
import { getToken } from "@/lib/auth";
import { NextResponse } from "next/server";

/**
 * Handles the incoming request by forwarding it to the real backend.
 *
 * @param request The incoming Next.js Request object.
 * @param params The dynamic route parameters (e.g., { path: ['auth', 'login'] }).
 * @returns A NextResponse containing the backend's response or an error.
 */
async function handleProxyRequest(
    request: Request,
    params: {
        path: string[];
    }
): Promise<NextResponse> {
    try {
        // Join the dynamic route parameters into a single API path string
        const apiPath = params.path.join("/");

        // Construct the full target URL for the backend API call
        const targetUrl = new URL(`${API_BASE_URL}/${apiPath}`);

        // Parse the original request URL to extract query parameters and append all query parameters from the original request to the backend URL
        const originalUrl = new URL(request.url);
        originalUrl.searchParams.forEach((value, key) => {
            targetUrl.searchParams.append(key, value);
        });

        // Check if the client requested a token to be added via a query parameter "useToken"
        const useToken = originalUrl.searchParams.get("useToken") === "true";

        // Create a new Headers object from the incoming request headers and remove the 'host' header to prevent potential issues in the proxied request
        const requestHeaders = new Headers(request.headers);
        requestHeaders.delete("host");

        // If useToken is true, append Authorization header
        if (useToken) {
            const token = await getToken();
            if (token) {
                requestHeaders.set("Authorization", `Bearer ${token}`);
            }
        }

        const fetchOptions: RequestInit = {
            method: request.method,
            headers: requestHeaders,
            // Include the body only if the method is not GET or HEAD
            body:
                request.method !== "GET" && request.method !== "HEAD"
                    ? await request.text()
                    : undefined,
        };

        // Perform the fetch call to the backend API with the constructed URL and options
        const backendResponse = await fetch(targetUrl.toString(), fetchOptions);
        // Clone the backend response headers to manipulate them
        const responseHeaders = new Headers(backendResponse.headers);
        // Remove the 'content-encoding' header to avoid compression issues in the proxied response
        responseHeaders.delete("content-encoding");

        return new NextResponse(backendResponse.body, {
            status: backendResponse.status,
            statusText: backendResponse.statusText,
            headers: responseHeaders,
        });
    } catch (error: unknown) {
        console.error("Error proxying request:", error);
        return NextResponse.json(
            {
                message: "Internal Server Error: Failed to proxy request",
                error,
            },
            { status: 500 }
        );
    }
}

/**
 * Handles the incoming requests and sends them to the proxy
 */
export async function GET(
    request: Request,
    context: {
        params: {
            path: string[];
        };
    }
) {
    const params = await context.params;
    return handleProxyRequest(request, params);
}

export async function POST(
    request: Request,
    context: {
        params: {
            path: string[];
        };
    }
) {
    const params = await context.params;
    return handleProxyRequest(request, params);
}

export async function PUT(
    request: Request,
    context: {
        params: {
            path: string[];
        };
    }
) {
    const params = await context.params;
    return handleProxyRequest(request, params);
}

export async function DELETE(
    request: Request,
    context: {
        params: {
            path: string[];
        };
    }
) {
    const params = await context.params;
    return handleProxyRequest(request, params);
}

export async function PATCH(
    request: Request,
    context: {
        params: {
            path: string[];
        };
    }
) {
    const params = await context.params;
    return handleProxyRequest(request, params);
}

export async function OPTIONS(
    request: Request,
    context: {
        params: {
            path: string[];
        };
    }
) {
    const params = await context.params;
    return handleProxyRequest(request, params);
}

export async function HEAD(
    request: Request,
    context: {
        params: {
            path: string[];
        };
    }
) {
    const params = await context.params;
    return handleProxyRequest(request, params);
}
