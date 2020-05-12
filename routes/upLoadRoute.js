"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const responseHelper_1 = require("./responseHelper");
const router = express_1.default.Router();
const storage = multer_1.default.diskStorage({
    destination: path_1.default.resolve(__dirname, '../../public/upload/'),
    filename(req, file, cb) {
        const time = new Date().getTime();
        const extname = path_1.default.extname(file.originalname);
        cb(null, `${time}${extname}`);
    },
});
const allowedExtensions = ['.jpg', '.png', '.gif', 'bmp', '.jiff'];
const upload = multer_1.default({
    storage,
    limits: {
        fileSize: 1024 * 1024,
    },
    fileFilter(req, file, cb) {
        const extname = path_1.default.extname(file.originalname);
        if (allowedExtensions.includes(extname)) {
            cb(null, true);
        }
        else {
            cb(new Error('文件后缀不正确'));
        }
    },
}).single('imgfile');
router.post('/', (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            responseHelper_1.ResponseHelper.sendError(err.message, res);
        }
        else {
            const url = `/upload/${req.file.filename}`;
            responseHelper_1.ResponseHelper.sendData(url, res);
        }
    });
});
exports.default = router;
