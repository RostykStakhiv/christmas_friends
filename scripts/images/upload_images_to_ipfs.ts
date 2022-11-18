import { PinataIpfsFileUploader } from "../helpers/ipfs/ipfs_file_uploaders/pinata_ipfs_file_uploader";
import { ImageAssetsUploader } from "./uploaders/image_assets_uploader";

const imageAssetsUploader = new ImageAssetsUploader(new PinataIpfsFileUploader());
imageAssetsUploader.uploadImageAssets().then(imageMetadata => {
    console.log(imageMetadata);
});