export interface LocaleComponentProps {
    key?: string;
    children: string;
    className?: string;
}

export interface LocaleButtonComponentProps extends LocaleComponentProps {
    beforeElement?: React.ReactNode;
    afterElement?: React.ReactNode;
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface LocaleSpanProps extends LocaleComponentProps {}

export interface LocaleButtonProps extends LocaleButtonComponentProps {
    onClick?: () => void;
}

export interface LocaleLinkProps extends LocaleButtonComponentProps {
    href: string;
}
