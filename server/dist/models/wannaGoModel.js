"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./index"));
const Schema = index_1.default.Schema;
const WannaGoSchema = new Schema({
    what: { type: String, required: true },
    where: { type: String, required: true },
    when: { type: String, required: true },
    owner: String,
    ownerName: String,
    guestLink: String,
    openedTimes: { type: Number, default: 0 },
    rejectCounter: { type: Number, default: 0 },
    goingCounter: { type: Number, default: 0 },
    suggestionBoxCounter: { type: Number, default: 0 },
    ppl_going: { type: Map, of: String },
    suggestion_box: Array,
});
exports.default = index_1.default.model('wannagos', WannaGoSchema);
//# sourceMappingURL=wannaGoModel.js.map