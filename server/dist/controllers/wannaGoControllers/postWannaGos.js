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
const wannaGoModel_1 = __importDefault(require("../../models/wannaGoModel"));
const postAwannaGo = (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const wannaGo = ctx.request.body;
        const storedWannaGo = yield wannaGoModel_1.default.create({
            what: wannaGo.what,
            where: wannaGo.where,
            when: wannaGo.when,
            ownerName: wannaGo.ownerName,
        });
        // tslint:disable-next-line:no-console
        console.log(`This wannaGo was posted: ${storedWannaGo}`);
        ctx.status = 201;
        ctx.body = storedWannaGo;
    }
    catch (e) {
        ctx.status = 500;
        ctx.body = e;
        // tslint:disable-next-line:no-console
        console.log(`Error in postAwannaGo function from controllers: ${e}`);
    }
});
exports.default = postAwannaGo;
//# sourceMappingURL=postWannaGos.js.map