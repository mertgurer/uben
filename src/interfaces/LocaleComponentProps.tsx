import { CSSProperties } from "react";

export interface LocaleComponentProps {
    children: string;
    className?: string;
    style?: CSSProperties;
}

export interface LocaleButtonComponentProps extends LocaleComponentProps {
    beforeElement?: React.ReactNode;
    afterElement?: React.ReactNode;
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface LocaleSpanProps extends LocaleComponentProps {}

export interface LocaleButtonProps extends LocaleButtonComponentProps {
    type?: "button" | "submit" | "reset";
    onClick?: () => void;
}

export interface LocaleLinkProps extends LocaleButtonComponentProps {
    href: string;
    onClick?: () => void;
}
