"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const themeSchema = new mongoose_1.default.Schema({
    department: String,
    project: String,
    time: String,
    sharePerson: String,
    description: String,
    number: Number,
    learnWay: String,
    fileType: String,
    adviceDepartment: [String],
    monitor: String,
    helper: String,
    bp: String,
    type: [String],
}, {
    versionKey: false,
});
exports.default = mongoose_1.default.model('ThemeModel', themeSchema);
