var fs = require('fs');
import { CoreAssetsCount, RareAssetsCount, EpicAssetsCount } from '../../constants/asset_constants';
import { NftMetadataOutputFolderPath } from '../../constants/path_constants/assets_path_constants';
import { Trait } from './models/trait';
import { ImageLinkProvider } from './helpers/image_link_providers/image_link_provider';
import * as rarities from '../../constants/asset_rarities';

export abstract class NftMetadataGenerator {

    imageLinkProvider: ImageLinkProvider;

    constructor(imageLinkProvider: ImageLinkProvider) {
        this.imageLinkProvider = imageLinkProvider;
    }

    abstract fillCommonMetadataFields(metadataTemplate: any): void;

    generateMetadata(): any[] {
        let generatedMetadataObjects = [];
        for (let i = 0; i < CoreAssetsCount; ++i) {
            let curEdition = i + 1;
            const metadata = this.generateCoreMetadata(curEdition, CoreAssetsCount);
            generatedMetadataObjects.push(metadata);
        }

        for (let i = 0; i < RareAssetsCount; ++i) {
            let curEdition = i + 1;
            const metadata = this.generateRareMetadata(curEdition, RareAssetsCount);
            generatedMetadataObjects.push(metadata);
        }

        for (let i = 0; i < EpicAssetsCount; ++i) {
            let curEdition = i + 1;
            const metadata = this.generateEpicMetadata(curEdition, EpicAssetsCount);
            generatedMetadataObjects.push(metadata);
        }

        return generatedMetadataObjects;
    }

    generateCoreMetadata(edition: number, totalCount: number): any {
        let metadata = this.getMetadataTemplate();
        metadata.image = this.imageLinkProvider.getCoreImageLink();
        this._addEditionTrait(metadata, edition, totalCount);
        this._addRarityTrait(metadata, rarities.CoreRarity);
    }

    generateRareMetadata(edition: number, totalCount: number): any {
        let metadata = this.getMetadataTemplate();
        metadata.image = this.imageLinkProvider.getRareImageLink();
        this._addEditionTrait(metadata, edition, totalCount);
        this._addRarityTrait(metadata, rarities.RareRarity);
    }

    generateEpicMetadata(edition: number, totalCount: number): any {
        let metadata = this.getMetadataTemplate();
        metadata.image = this.imageLinkProvider.getEpicImageLink();
        this._addEditionTrait(metadata, edition, totalCount);
        this._addRarityTrait(metadata, rarities.EpicRarity);
    }

    addTrait(metadata: any, trait: Trait) {
        metadata.attributes.push(trait);
    }

    _addEditionTrait(metadata: any, edition: number, totalCount: number) {
        this.addTrait(metadata, new Trait('Edition #', `${edition} of ${totalCount}`));
    }

    _addRarityTrait(metadata: any, rarity: string) {
        this.addTrait(metadata, new Trait('Rarity', rarity));
    }

    protected addCharacterTrait(metadata: any, character: string) {
        this.addTrait(metadata, new Trait('Character', character));
    }

    protected getMetadataTemplate(): any {
        const metadataTemplate = JSON.parse(fs.readFileSync('../nft_metadata_template.json', 'utf-8'));
        this.fillCommonMetadataFields(metadataTemplate);
        return metadataTemplate;
    }
}