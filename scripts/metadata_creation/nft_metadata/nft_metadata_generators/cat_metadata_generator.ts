import { NftMetadataGenerator } from "./nft_metadata_generator";
import { Trait } from './models/trait';
import { ImageLinkProvider } from './helpers/image_link_providers/image_link_provider';

const CharacterName = 'Cat';

export class CatMetadataGenerator extends NftMetadataGenerator {
    constructor(imageLinkProvider: ImageLinkProvider) {
        super(imageLinkProvider);
    }
    
    fillCommonMetadataFields(metadataTemplate: any): void {
        metadataTemplate.name = CharacterName;
        this.addCharacterTrait(metadataTemplate, CharacterName);
    }
}