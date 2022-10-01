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
const putPplGoing = (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, id } = ctx.request.body;
        const pplGoing = yield wannaGoModel_1.default.findByIdAndUpdate(id, {
            $set: {
                [`ppl_going.${name}`]: `${email}`,
            },
        });
        // tslint:disable-next-line:no-console
        console.log(`This name: ${name} and email ${email} was put in the wannaGo: ${pplGoing}`);
        ctx.status = 201;
        ctx.body = pplGoing;
    }
    catch (e) {
        ctx.status = 500;
        ctx.body = e;
        // tslint:disable-next-line:no-console
        console.log(`Error in putPplGoing function from controllers: ${e}`);
    }
});
const putGuestLink = (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, link } = ctx.request.body;
        const wannaGoLinked = yield wannaGoModel_1.default.findByIdAndUpdate(id, {
            guestLink: link,
        });
        // tslint:disable-next-line:no-console
        console.log(`Guest link: ${link} of wannaGo: ${wannaGoLinked}`);
        ctx.status = 201;
        ctx.body = wannaGoLinked;
    }
    catch (e) {
        ctx.status = 500;
        ctx.body = e;
        // tslint:disable-next-line:no-console
        console.log(`Error in putGuestLink function from controllers: ${e}`);
    }
});
const putSuggestionMsg = (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { msg, id } = ctx.request.body;
        const postedMsg = yield wannaGoModel_1.default.findByIdAndUpdate(id, {
            $push: { suggestion_box: msg },
        });
        // tslint:disable-next-line:no-console
        console.log(`This message: ${msg} was put in the wannaGo: ${postedMsg}`);
        ctx.status = 201;
        ctx.body = postedMsg;
    }
    catch (e) {
        ctx.status = 500;
        ctx.body = e;
        // tslint:disable-next-line:no-console
        console.log(`Error in putSuggestionMsg function from controllers: ${e}`);
    }
});
const putOpenedTimes = (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, openedTimes } = ctx.request.body;
        const wannaGoUpdated = yield wannaGoModel_1.default.findByIdAndUpdate(id, {
            openedTimes,
        });
        // tslint:disable-next-line:no-console
        console.log(`This ${wannaGoUpdated} was opened ${wannaGoUpdated.openedTimes} times`);
        ctx.status = 201;
        ctx.body = wannaGoUpdated;
    }
    catch (e) {
        ctx.status = 500;
        ctx.body = e;
        // tslint:disable-next-line:no-console
        console.log(`Error in putOpenedTimes function from controllers: ${e}`);
    }
});
const putRejectCounter = (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, rejectCounter } = ctx.request.body;
        const wannaGoUpdated = yield wannaGoModel_1.default.findByIdAndUpdate(id, {
            rejectCounter,
        });
        // tslint:disable-next-line:no-console
        console.log(`This ${wannaGoUpdated} was rejected ${wannaGoUpdated.rejectCounter} times`);
        ctx.status = 201;
        ctx.body = wannaGoUpdated;
    }
    catch (e) {
        ctx.status = 500;
        ctx.body = e;
        // tslint:disable-next-line:no-console
        console.log(`Error in putRejectCounter function from controllers: ${e}`);
    }
});
const putGoingCounter = (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, goingCounter } = ctx.request.body;
        const wannaGoUpdated = yield wannaGoModel_1.default.findByIdAndUpdate(id, {
            goingCounter,
        });
        // tslint:disable-next-line:no-console
        console.log(`${wannaGoUpdated.goingCounter} people going to ${wannaGoUpdated}`);
        ctx.status = 201;
        ctx.body = wannaGoUpdated;
    }
    catch (e) {
        ctx.status = 500;
        ctx.body = e;
        // tslint:disable-next-line:no-console
        console.log(`Error in putRejectCounter function from controllers: ${e}`);
    }
});
const putSuggestionBoxCounter = (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, suggestionBoxCounter } = ctx.request.body;
        const wannaGoUpdated = yield wannaGoModel_1.default.findByIdAndUpdate(id, {
            suggestionBoxCounter,
        });
        // tslint:disable-next-line:no-console
        console.log(`${wannaGoUpdated} people made a suggestion to this ${wannaGoUpdated.suggestionBoxCounter}`);
        ctx.status = 201;
        ctx.body = wannaGoUpdated;
    }
    catch (e) {
        ctx.status = 500;
        ctx.body = e;
        // tslint:disable-next-line:no-console
        console.log(`Error in putSuggestionBoxCounter function from controllers: ${e}`);
    }
});
const putOwnerToWannaGo = (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { wannaGoId, userId } = ctx.request.body;
        const wannaGoOwned = yield wannaGoModel_1.default.findByIdAndUpdate(wannaGoId, {
            owner: userId,
        });
        // tslint:disable-next-line:no-console
        console.log(`The user with id: ${userId} was put in the wannaGo with id: ${wannaGoId}`);
        ctx.status = 201;
        ctx.body = wannaGoOwned;
    }
    catch (e) {
        ctx.status = 500;
        ctx.body = e;
        // tslint:disable-next-line:no-console
        console.log(`Error in putOwnertoWananGo function from controllers: ${e}`);
    }
});
exports.default = {
    putPplGoing,
    putSuggestionMsg,
    putOwnerToWannaGo,
    putOpenedTimes,
    putRejectCounter,
    putGoingCounter,
    putSuggestionBoxCounter,
    putGuestLink
};
//# sourceMappingURL=putWannaGos.js.map