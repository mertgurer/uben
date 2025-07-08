import { PROXY_API } from "@/constants/apiConstants";

export interface Object {
    id: string;
    [key: string]: unknown;
}

export interface CreateObject {
    [key: string]: unknown;
}

export interface UpdateObject {
    [key: string]: unknown;
}

interface BaseError {
    message: string;
    [key: string]: unknown;
}

export class BaseService<
    O extends Object,
    cO extends CreateObject,
    uO extends UpdateObject
> {
    protected serviceUrl: string;

    constructor(path: string) {
        this.serviceUrl = `${PROXY_API}/${path}`;
    }

    private appendUseToken(url: string, useToken?: boolean): string {
        if (!useToken) return url;
        const separator = url.includes("?") ? "&" : "?";
        return `${url}${separator}useToken=true`;
    }

    // GET all
    async getAll(useToken?: boolean): Promise<O[]> {
        const url = this.appendUseToken(this.serviceUrl, useToken);
        const response = await fetch(url);
        if (!response.ok) {
            const error = (await response.json()) as BaseError;
            throw new Error(error.message);
        }
        return await response.json();
    }

    // GET by id
    async getById(id: string, useToken?: boolean): Promise<O> {
        const url = this.appendUseToken(`${this.serviceUrl}/${id}`, useToken);
        const response = await fetch(url);
        if (!response.ok) {
            const error = (await response.json()) as BaseError;
            throw new Error(error.message);
        }
        return await response.json();
    }

    // POST
    async create(params: cO, useToken?: boolean): Promise<O> {
        const url = this.appendUseToken(this.serviceUrl, useToken);
        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(params),
        });
        if (!response.ok) {
            const error = (await response.json()) as BaseError;
            throw new Error(error.message);
        }
        return await response.json();
    }

    // PUT
    async update(id: string, params: uO, useToken?: boolean): Promise<O> {
        const url = this.appendUseToken(`${this.serviceUrl}/${id}`, useToken);
        const response = await fetch(url, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(params),
        });
        if (!response.ok) {
            const error = (await response.json()) as BaseError;
            throw new Error(error.message);
        }
        return await response.json();
    }

    // DELETE
    async delete(id: string, useToken?: boolean): Promise<void> {
        const url = this.appendUseToken(`${this.serviceUrl}/${id}`, useToken);
        const response = await fetch(url, {
            method: "DELETE",
        });
        if (!response.ok) {
            const error = (await response.json()) as BaseError;
            throw new Error(error.message);
        }
    }
}
