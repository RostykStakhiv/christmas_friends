export interface ImageLinkProvider {
    getCoreImageLink(): string;
    getRareImageLink(): string;
    getEpicImageLink(): string;
}