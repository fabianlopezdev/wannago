"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const User = require('../../models/userModel');
const userModel_1 = __importDefault(require("../../models/userModel"));
const getUserById = (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        ctx.status = 201;
        // tslint:disable-next-line:no-console
        console.log(ctx.params.id);
        const user = yield userModel_1.default.findById(ctx.params.id);
        // tslint:disable-next-line:no-console
        console.log(`This user was retrieved ${user}`);
        ctx.body = user;
    }
    catch (e) {
        ctx.status = 500;
        // tslint:disable-next-line:no-console
        console.log(`Error in getUserById function from controllers: ${e}`);
    }
});
exports.default = getUserById;
//# sourceMappingURL=getUser.js.map