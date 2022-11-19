import * as apiKeys from '../../../../../pinata/.api_keys';
import '../../../models/image_metadata';
import './ipfs_file_uploader';

const pinataSDK = require('@pinata/sdk');
const pinata = pinataSDK(apiKeys.PinataApiKey, apiKeys.PinataSecretApiKey);

const pinataOptions = {
    pinataMetadata: {
        name: 'name',
    },
    pinataOptions: {
        cidVersion: 0
    }
};

export class PinataIpfsFileUploader implements IpfsFileUploader {
    async uploadFolder(path: string): Promise<string | undefined> {
        try {
            const result = await pinata.pinFromFS(path, pinataOptions);
            return result.IpfsHash;
        } catch (e) {
            console.log(e);
        }
    }
}