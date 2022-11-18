enum ImageUploadFailureReason {
    CoreUploadFailed, RareUploadFailed, EpicUploadFailed,
}

class ImageUploadError extends Error {
    reason: ImageUploadFailureReason;

    constructor(reason: ImageUploadFailureReason, message?: string) {
        super(message);
        
        this.reason = reason;
    }
}