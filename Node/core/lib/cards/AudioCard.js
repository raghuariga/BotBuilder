"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var MediaCard_1 = require('./MediaCard');
var AudioCard = (function (_super) {
    __extends(AudioCard, _super);
    function AudioCard(session) {
        _super.call(this, session);
        this.data.contentType = 'application/vnd.microsoft.card.audio';
    }
    return AudioCard;
}(MediaCard_1.MediaCard));
exports.AudioCard = AudioCard;
