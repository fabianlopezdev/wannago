"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./index"));
const Schema = index_1.default.Schema;
const UserSchema = new Schema({
    name: String,
    email: { type: String, required: true },
    _id: String,
});
exports.default = index_1.default.model('users', UserSchema);
//# sourceMappingURL=userModel.js.map