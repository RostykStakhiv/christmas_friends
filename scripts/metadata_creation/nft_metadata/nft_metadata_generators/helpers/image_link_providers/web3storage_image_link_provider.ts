import { ImageLinkProvider } from './image_link_provider';

const Core = 'core';
const Rare = 'rare';
const Epic = 'epic';

export class Web3StorageImageLinkProvider implements ImageLinkProvider {
    imageFolderCID: string;

    constructor(imageFolderCID: string) {
        this.imageFolderCID = imageFolderCID;
    }

    getCoreImageLink(): string {
        return this.getUrlBasedOnRarityType(Core);
    }
    getRareImageLink(): string {
        return this.getUrlBasedOnRarityType(Rare);
    }
    getEpicImageLink(): string {
        return this.getUrlBasedOnRarityType(Epic);
    }

    getBaseUrl(): string {
        return `${this.imageFolderCID}.ipfs.w3s.link`;
    }

    getUrlBasedOnRarityType(rarity: string) {
        return `${this.getBaseUrl()}/${rarity}.png`;
    }
}