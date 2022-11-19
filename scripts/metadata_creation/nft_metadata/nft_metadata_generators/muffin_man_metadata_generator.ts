import { NftMetadataGenerator } from "./nft_metadata_generator";
import { ImageLinkProvider } from './helpers/image_link_providers/image_link_provider';

const CharacterName = 'Muffin Man';

export class MuffinManMetadataGenerator extends NftMetadataGenerator {
    constructor(imageLinkProvider: ImageLinkProvider) {
        super(imageLinkProvider);
    }
    
    fillCommonMetadataFields(metadataTemplate: any): void {
        metadataTemplate.name = CharacterName;
        this.addCharacterTrait(metadataTemplate, CharacterName);
    }
}