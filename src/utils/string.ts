export const capitalize = (text: string) => text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();

export const constructUrl = (base: string, path: string) => {
    return `${base.replace(/\/+$/, "")}/${path.replace(/^\/+/, "")}`;
};
