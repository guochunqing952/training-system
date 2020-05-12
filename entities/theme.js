"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
require("reflect-metadata");
const baseEntity_1 = require("./baseEntity");
class Theme extends baseEntity_1.BaseEntity {
    static transform(plainObj) {
        if (plainObj instanceof Theme) {
            return plainObj;
        }
        const themeObj = class_transformer_1.plainToClass(Theme, plainObj);
        return themeObj;
    }
}
__decorate([
    class_validator_1.IsNotEmpty({ message: '部门不可以为空' }),
    class_transformer_1.Type(() => String),
    __metadata("design:type", String)
], Theme.prototype, "department", void 0);
__decorate([
    class_validator_1.IsNotEmpty({ message: '学习主题不可以为空' }),
    class_transformer_1.Type(() => String),
    __metadata("design:type", String)
], Theme.prototype, "project", void 0);
__decorate([
    class_validator_1.IsNotEmpty({ message: '学习时间不可以为空' }),
    class_transformer_1.Type(() => String),
    __metadata("design:type", String)
], Theme.prototype, "time", void 0);
__decorate([
    class_validator_1.IsNotEmpty({ message: '分享人不可以为空' }),
    class_transformer_1.Type(() => String),
    __metadata("design:type", String)
], Theme.prototype, "sharePerson", void 0);
__decorate([
    class_validator_1.IsNotEmpty({ message: '分享人描述不可以为空' }),
    class_transformer_1.Type(() => String),
    __metadata("design:type", String)
], Theme.prototype, "description", void 0);
__decorate([
    class_validator_1.IsNotEmpty({ message: '预计参加人数不可以为空' }),
    class_transformer_1.Type(() => String),
    __metadata("design:type", Number)
], Theme.prototype, "number", void 0);
__decorate([
    class_validator_1.IsNotEmpty({ message: '学习方式不可以为空' }),
    class_transformer_1.Type(() => String),
    __metadata("design:type", String)
], Theme.prototype, "learnWay", void 0);
__decorate([
    class_validator_1.IsNotEmpty({ message: '文件类型不可以为空' }),
    class_transformer_1.Type(() => String),
    __metadata("design:type", String)
], Theme.prototype, "fileType", void 0);
__decorate([
    class_validator_1.IsNotEmpty({ message: '建议其他学习的部门不可以为空' }),
    class_validator_1.ArrayMinSize(1, { message: '建议学习的部门>=1' }),
    class_validator_1.IsArray({ message: '建议其他学习的部门必须是数组' }),
    class_transformer_1.Type(() => String),
    __metadata("design:type", Array)
], Theme.prototype, "adviceDepartment", void 0);
__decorate([
    class_validator_1.IsNotEmpty({ message: '班长不可以为空' }),
    class_transformer_1.Type(() => String),
    __metadata("design:type", String)
], Theme.prototype, "monitor", void 0);
__decorate([
    class_validator_1.IsNotEmpty({ message: '学习委员不可以为空' }),
    class_transformer_1.Type(() => String),
    __metadata("design:type", String)
], Theme.prototype, "helper", void 0);
__decorate([
    class_validator_1.IsNotEmpty({ message: 'BP不可以为空' }),
    class_transformer_1.Type(() => String),
    __metadata("design:type", String)
], Theme.prototype, "bp", void 0);
__decorate([
    class_validator_1.IsNotEmpty({ message: '类型不可以为空' }),
    class_validator_1.ArrayMinSize(1, { message: '类型>=1' }),
    class_validator_1.IsArray({ message: '类型必须是数组' }),
    class_transformer_1.Type(() => String),
    __metadata("design:type", Array)
], Theme.prototype, "type", void 0);
exports.Theme = Theme;
