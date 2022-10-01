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
// Internal dependencies
const userModel_1 = __importDefault(require("../../models/userModel"));
const postAuser = (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = ctx.request.body;
        const storedUser = yield userModel_1.default.create({
            name: user.name,
            email: user.email,
            _id: user._id,
        });
        // tslint:disable-next-line:no-console
        console.log(`This user was posted: ${storedUser}`);
        ctx.status = 201;
        ctx.body = storedUser;
    }
    catch (e) {
        ctx.status = 500;
        ctx.body = e;
        // tslint:disable-next-line:no-console
        console.log(`Error in postAuser function from controllers postUser: ${e}`);
    }
});
exports.default = postAuser;
//# sourceMappingURL=postUser.js.map