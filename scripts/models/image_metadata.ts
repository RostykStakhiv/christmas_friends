export class ImageMetadata {
    coreFolderUrl: string;
    rareFolderUrl: string;
    epicFolderUrl: string;

    constructor(coreFolderUrl: string, rareFolderUrl: string, epicFolderUrl: string) {
        this.coreFolderUrl = coreFolderUrl;
        this.rareFolderUrl = rareFolderUrl;
        this.epicFolderUrl = epicFolderUrl;
    }
}