// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract ChristmasFriends is ERC721 {
    string private _tokenMetadataBaseUri;

    constructor(
        string memory tokenMetadataBaseUri
    ) ERC721("Christmas Friends", "CFR") {
        _tokenMetadataBaseUri = tokenMetadataBaseUri;
    }

    function _baseURI() internal view override returns (string memory) {
        return _tokenMetadataBaseUri;
    }
}
