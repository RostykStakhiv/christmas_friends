import * as path_constants from '../../path_constants/assets_path_constants';
import '../exceptions/image_upload_exceptions';
import { ImageMetadata } from '../../models/image_metadata';
import '../../helpers/ipfs/ipfs_file_uploaders/ipfs_file_uploader';

export class ImageAssetsUploader {

    ipfsFileUploader: IpfsFileUploader;

    constructor(ipfsFileUploader: IpfsFileUploader) {
        this.ipfsFileUploader = ipfsFileUploader;
    }

    async uploadCoreImageAssets(): Promise<string | undefined> {
        return this.ipfsFileUploader.uploadFolder(path_constants.CoreFolderPath, 'Core');
    }

    async uploadRareImageAssets(): Promise<string | undefined> {
        return this.ipfsFileUploader.uploadFolder(path_constants.RareFolderPath, 'Rare');
    }

    async uploadEpicImageAssets(): Promise<string | undefined> {
        return this.ipfsFileUploader.uploadFolder(path_constants.EpicFolderPath, 'Epic');
    }

    async uploadImageAssets(): Promise<ImageMetadata> {
        const coreCID = await this.uploadCoreImageAssets();
        const rareCID = await this.uploadRareImageAssets();
        const epicCID = await this.uploadEpicImageAssets();

        if (coreCID != null && rareCID != null && epicCID != null) {
            return new ImageMetadata(coreCID, rareCID, epicCID);
        }

        let reason: ImageUploadFailureReason;
        if (coreCID == null) {
            reason = ImageUploadFailureReason.CoreUploadFailed;
        } else if (rareCID == null) {
            reason = ImageUploadFailureReason.RareUploadFailed;
        } else {
            reason = ImageUploadFailureReason.EpicUploadFailed;
        }

        throw new ImageUploadError(reason);
    }
}