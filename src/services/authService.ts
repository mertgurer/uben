import { API_PATHS, API_URLS } from "@/constants/apiConstants";
import { BaseService, CreateObject, Object, UpdateObject } from "./baseService";

interface User extends Object {
    id: string;
    name: string;
    email: string;
}

interface CreateUser extends CreateObject {
    name: string;
    email: string;
    password: string;
}

interface UpdateUser extends UpdateObject {
    name?: string;
    email?: string;
    password?: string;
}

interface LoginRequest {
    email: string;
    password: string;
}

interface LoginResponse {
    user: User;
    token: string;
}

interface RegisterRequest {
    name: string;
    email: string;
    password: string;
}

interface RegisterResponse {
    user: User;
    token: string;
}

export class AuthService extends BaseService<User, CreateUser, UpdateUser> {
    constructor() {
        super(API_URLS.auth);
    }

    // Login method
    async login(credentials: LoginRequest): Promise<LoginResponse> {
        const response = await fetch(
            `${this.serviceUrl}/${API_PATHS.auth.login}`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(credentials),
            }
        );

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message || "Login failed");
        }

        return await response.json();
    }

    // Register method
    async register(userData: RegisterRequest): Promise<RegisterResponse> {
        const response = await fetch(
            `${this.serviceUrl}/${API_PATHS.auth.register}`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(userData),
            }
        );

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message || "Registration failed");
        }

        return await response.json();
    }
}

export const authService = new AuthService();

export type {
    User,
    CreateUser,
    UpdateUser,
    LoginRequest,
    LoginResponse,
    RegisterRequest,
    RegisterResponse,
};
