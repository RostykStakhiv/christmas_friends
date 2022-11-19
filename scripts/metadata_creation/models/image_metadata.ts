export class ImageMetadata {
    cat: string | undefined;
    christmasTree: string | undefined;
    cookie: string | undefined;
    elf: string | undefined;
    fox: string | undefined;
    hotChocolate: string | undefined;
    letItSnow: string | undefined;
    muffinElf: string | undefined;
    muffinMan: string | undefined;
    reindeer: string | undefined;
    santa: string | undefined;
    snowman: string | undefined;
    xmasSanta: string | undefined;

    constructor(cat: string | undefined, christmasTree: string | undefined, cookie: string | undefined, elf: string | undefined, fox: string | undefined, hotChocolate: string | undefined, letItSnow: string | undefined,
        muffinElf: string | undefined, muffinMan: string | undefined, reindeer: string | undefined, santa: string | undefined,
        snowman: string | undefined, xmasSanta: string | undefined) {
        this.cat = cat;
        this.christmasTree = christmasTree;
        this.cookie = cookie;
        this.elf = elf;
        this.fox = fox;
        this.hotChocolate = hotChocolate;
        this.letItSnow = letItSnow;
        this.muffinElf = muffinElf;
        this.muffinMan = muffinMan;
        this.reindeer = reindeer;
        this.santa = santa;
        this.snowman = snowman;
        this.xmasSanta = xmasSanta;
    }

    allAssetsUploaded(): boolean {
        return (this.cat && this.christmasTree && this.cookie && this.elf && this.fox && this.hotChocolate && this.letItSnow && this.muffinElf &&
            this.muffinMan && this.reindeer && this.santa && this.snowman && this.xmasSanta) != null;
    }
}