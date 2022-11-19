interface IpfsFileUploader {
    uploadFolder(path: string) : Promise<string | undefined>;
}