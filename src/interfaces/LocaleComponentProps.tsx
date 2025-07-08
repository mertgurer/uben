export interface LocaleComponentProps {
    key?: string;
    children: string;
    className?: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface LocaleSpanProps extends LocaleComponentProps {}

export interface LocaleButtonProps extends LocaleComponentProps {
    onClick?: () => void;
}
