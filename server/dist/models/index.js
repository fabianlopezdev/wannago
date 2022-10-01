"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = __importDefault(require("../config"));
mongoose_1.default.connect(config_1.default.DB_URL);
mongoose_1.default.connection.on('error', 
// tslint:disable-next-line:no-console
console.error.bind(console, 'Not connected to MongoDB'));
mongoose_1.default.connection.once('open', () => 
// tslint:disable-next-line:no-console
console.log('Connected to MongoDB'));
exports.default = mongoose_1.default;
//# sourceMappingURL=index.js.map