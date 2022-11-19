import { ImageIpfsMetadataFilePath } from '../constants/path_constants/assets_path_constants';
import { Web3StorageIpfsFileUploader } from "../helpers/ipfs/ipfs_file_uploaders/web3_storage_ipfs_file_uploader";
import { ImageAssetsUploader } from "./uploaders/image_assets_uploader";

var fs = require('fs');

const imageAssetsUploader = new ImageAssetsUploader(new Web3StorageIpfsFileUploader());
imageAssetsUploader.uploadImageAssets().then(imageMetadata => {
    const imageMetadataJson = JSON.stringify(imageMetadata, null, 4);
    fs.writeFile(ImageIpfsMetadataFilePath, imageMetadataJson, function (err: any) {
        if (err) {
            console.log('Failed to write image metadata to file: ' + err);
        }
    });
}).catch(error => {
    console.log('Failed to upload images to IPFS with error: ' + error);
    if (fs.existsSync(ImageIpfsMetadataFilePath)) {
        fs.unlinkSync(ImageIpfsMetadataFilePath);
    }
});