import * as apiKeys from '../../../../../web3_storage/.api_keys';

import { Web3Storage } from 'web3.storage'
import { getFilesFromPath } from 'web3.storage';

import './ipfs_file_uploader';

export class Web3StorageIpfsFileUploader implements IpfsFileUploader {

    client: Web3Storage;

    constructor() {
        this.client = new Web3Storage({ token: apiKeys.Web3StorageApiKey });
    }

    async uploadFolder(path: string): Promise<string | undefined> {
        const files = await getFilesFromPath(path);
        const cid = await this.client.put(files, { wrapWithDirectory: false });
        return cid;
    }
}