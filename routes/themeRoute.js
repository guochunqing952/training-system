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
const express_1 = __importDefault(require("express"));
const themeServices_1 = require("../services/themeServices");
const responseHelper_1 = require("./responseHelper");
const router = express_1.default.Router();
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const themeId = req.params.id;
        const theme = yield themeServices_1.ThemeService.findById(themeId);
        responseHelper_1.ResponseHelper.sendData(theme, res);
    }
    catch (_a) {
        responseHelper_1.ResponseHelper.sendData(null, res);
    }
}));
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const conditon = req.query;
    const result = yield themeServices_1.ThemeService.find(conditon);
    responseHelper_1.ResponseHelper.sendPageData(result, res);
}));
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield themeServices_1.ThemeService.add(req.body);
    if (Array.isArray(result)) {
        responseHelper_1.ResponseHelper.sendError(result, res);
    }
    else {
        responseHelper_1.ResponseHelper.sendData(result, res);
    }
}));
router.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield themeServices_1.ThemeService.edit(req.params.id, req.body);
        if (result.length > 0) {
            responseHelper_1.ResponseHelper.sendError(result, res);
        }
        else {
            responseHelper_1.ResponseHelper.sendData(true, res);
        }
    }
    catch (_b) {
        responseHelper_1.ResponseHelper.sendError('id错误', res);
    }
}));
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield themeServices_1.ThemeService.delete(req.params.id);
        responseHelper_1.ResponseHelper.sendData(true, res);
    }
    catch (_c) {
        responseHelper_1.ResponseHelper.sendError('id错误', res);
    }
}));
exports.default = router;
