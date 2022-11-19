import * as path_constants from '../../constants/path_constants/assets_path_constants';
import '../exceptions/image_upload_exceptions';
import { ImageMetadata } from '../../models/image_metadata';
import '../../helpers/ipfs/ipfs_file_uploaders/ipfs_file_uploader';

export class ImageAssetsUploader {

    ipfsFileUploader: IpfsFileUploader;

    constructor(ipfsFileUploader: IpfsFileUploader) {
        this.ipfsFileUploader = ipfsFileUploader;
    }

    async uploadCatImageAssets(): Promise<string | undefined> {
        return this.ipfsFileUploader.uploadFolder(path_constants.CatFolderPath);
    }

    async uploadChristmasTreeImageAssets(): Promise<string | undefined> {
        return this.ipfsFileUploader.uploadFolder(path_constants.ChristmasTreeFolderPath);
    }

    async uploadCookieImageAssets(): Promise<string | undefined> {
        return this.ipfsFileUploader.uploadFolder(path_constants.CookieFolderPath);
    }

    async uploadElfImageAssets(): Promise<string | undefined> {
        return this.ipfsFileUploader.uploadFolder(path_constants.ElfFolderPath);
    }

    async uploadFoxImageAssets(): Promise<string | undefined> {
        return this.ipfsFileUploader.uploadFolder(path_constants.FoxFolderPath);
    }

    async uploadHotChocolateImageAssets(): Promise<string | undefined> {
        return this.ipfsFileUploader.uploadFolder(path_constants.HotChocolateFolderPath);
    }

    async uploadLetItSnowImageAssets(): Promise<string | undefined> {
        return this.ipfsFileUploader.uploadFolder(path_constants.LetItSnowFolderPath);
    }

    async uploadMuffinElfImageAssets(): Promise<string | undefined> {
        return this.ipfsFileUploader.uploadFolder(path_constants.MuffinElfFolderPath);
    }

    async uploadMuffinManImageAssets(): Promise<string | undefined> {
        return this.ipfsFileUploader.uploadFolder(path_constants.MuffinManFolderPath);
    }

    async uploadReindeerImageAssets(): Promise<string | undefined> {
        return this.ipfsFileUploader.uploadFolder(path_constants.ReindeerFolderPath);
    }

    async uploadSantaImageAssets(): Promise<string | undefined> {
        return this.ipfsFileUploader.uploadFolder(path_constants.SantaFolderPath);
    }

    async uploadSnowmanImageAssets(): Promise<string | undefined> {
        return this.ipfsFileUploader.uploadFolder(path_constants.SnowmanFolderPath);
    }

    async uploadXmasSantaImageAssets(): Promise<string | undefined> {
        return this.ipfsFileUploader.uploadFolder(path_constants.XmasSantaFolderPath);
    }

    async uploadImageAssets(): Promise<ImageMetadata> {
        const catFolderCID = await this.uploadCatImageAssets();
        const treeFolderCID = await this.uploadChristmasTreeImageAssets();
        const cookieFolderCID = await this.uploadCookieImageAssets();
        const elfFolderCID = await this.uploadElfImageAssets();
        const foxFolderCID = await this.uploadFoxImageAssets();
        const hotChocolateFolderCID = await this.uploadHotChocolateImageAssets();
        const letItSnowFolderCID = await this.uploadLetItSnowImageAssets();
        const muffinElfFolderCID = await this.uploadMuffinElfImageAssets();
        const muffinManFolderCID = await this.uploadMuffinManImageAssets();
        const reindeerFolderCID = await this.uploadReindeerImageAssets();
        const santsFolderCID = await this.uploadSantaImageAssets();
        const snowmanFolderCID = await this.uploadSnowmanImageAssets();
        const xmasSantaFolderCID = await this.uploadXmasSantaImageAssets();


        const metadata = new ImageMetadata(catFolderCID, treeFolderCID, cookieFolderCID, elfFolderCID, foxFolderCID, hotChocolateFolderCID, letItSnowFolderCID, muffinElfFolderCID, muffinManFolderCID, reindeerFolderCID, santsFolderCID, snowmanFolderCID, xmasSantaFolderCID,);
        if (metadata.allAssetsUploaded()) {
            return metadata;
        }

        throw new ImageUploadError();
    }
}