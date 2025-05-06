export type Dimensions = [number, number];

export type BaseProfileProps = {
    dimensions: Dimensions;
};

export type ImageProfileProps = BaseProfileProps & {
    src?: string;
    alt?: string;
};

export type LetterProfileProps = BaseProfileProps & {
    letter: string;
};

export type ProfileImageProps = ImageProfileProps & {
    className: string;
    priority: boolean;
};

export type CommonProfileProps = Pick<BaseProfileProps, "dimensions">;

export type UserProfileProps = CommonProfileProps & Pick<ImageProfileProps, "src" | "alt">;

export type GuestProfileProps = CommonProfileProps & Pick<LetterProfileProps, "letter">;

export type ProfileProps = UserProfileProps | GuestProfileProps;
