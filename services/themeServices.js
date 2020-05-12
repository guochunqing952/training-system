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
Object.defineProperty(exports, "__esModule", { value: true });
const theme_1 = require("../entities/theme");
const db_1 = require("../db");
const searchCondition_1 = require("../entities/searchCondition");
class ThemeService {
    static add(theme) {
        return __awaiter(this, void 0, void 0, function* () {
            theme = theme_1.Theme.transform(theme);
            const errors = yield theme.validateThis();
            if (errors.length > 0) {
                return errors;
            }
            const result = yield db_1.ThemeModel.create(theme);
            return result;
        });
    }
    static edit(id, theme) {
        return __awaiter(this, void 0, void 0, function* () {
            theme = theme_1.Theme.transform(theme);
            const errors = yield theme.validateThis(true);
            if (errors.length > 0) {
                return errors;
            }
            yield db_1.ThemeModel.updateOne({ _id: id }, theme);
            return [];
        });
    }
    static delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield db_1.ThemeModel.deleteOne({ _id: id });
        });
    }
    static findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield db_1.ThemeModel.findById(id);
        });
    }
    static find(condition) {
        return __awaiter(this, void 0, void 0, function* () {
            const newCondition = searchCondition_1.SearchCondition.transform(condition);
            console.log(newCondition);
            const errors = yield newCondition.validateThis(true);
            if (errors.length > 0) {
                return {
                    count: 0,
                    data: [],
                    errors,
                };
            }
            const theme = yield db_1.ThemeModel.find({
                project: { $regex: new RegExp(newCondition.key) },
                department: { $regex: new RegExp(newCondition.department) },
                type: { $regex: new RegExp(newCondition.type) },
                sharePerson: { $regex: new RegExp(newCondition.sharePerson) },
            })
                .skip((newCondition.page - 1) * newCondition.limit)
                .limit(newCondition.limit);
            const count = yield db_1.ThemeModel.find({
                project: { $regex: new RegExp(newCondition.key) },
                department: { $regex: new RegExp(newCondition.department) },
                type: { $regex: new RegExp(newCondition.type) },
                sharePerson: { $regex: new RegExp(newCondition.sharePerson) },
            }).countDocuments();
            return {
                count,
                data: theme,
                errors: [],
            };
        });
    }
}
exports.ThemeService = ThemeService;
