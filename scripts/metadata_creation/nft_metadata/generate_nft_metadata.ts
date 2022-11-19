var fs = require('fs');

import { ImageIpfsMetadataFilePath, NftMetadataOutputFolderPath } from '../constants/path_constants/assets_path_constants';

generateNftMetadata();

function generateNftMetadata() {
    if (fs.existsSync(ImageIpfsMetadataFilePath)) {
        const imageMetadata = JSON.parse(fs.readFileSync(ImageIpfsMetadataFilePath, 'utf-8'));
        
    }
}

function writeMetadataToDisk(metadata: any, tokenId: number) {
    const metadataJson = JSON.stringify(metadata, null, 4);
    fs.writeFile(`${NftMetadataOutputFolderPath}/${tokenId}`, metadataJson, function (err: any) {
        if (err) {
            console.log('Failed to write metadata for token id ' + tokenId + ' with error: ' + err);
        }
    });
}