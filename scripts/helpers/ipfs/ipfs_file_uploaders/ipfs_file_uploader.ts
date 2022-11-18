interface IpfsFileUploader {
    uploadFolder(path: string, folderNameOnIpfs: string) : Promise<string | undefined>;
}