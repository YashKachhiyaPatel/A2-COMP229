"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const contacting_1 = require("../Controllers/contacting");
const router = express_1.default.Router();
exports.default = router;
router.get('/', contacting_1.DisplayContactingListPage);
router.get('/edit/:id', contacting_1.DisplayContactingEditPage);
router.get('/add', contacting_1.DisplayContactAddPage);
router.post('/add', contacting_1.ProcessContactAddPage);
router.post('/edit/:id', contacting_1.ProcessContactEditPage);
router.get('/delete/:id', contacting_1.ProcessContactDeletePage);
//# sourceMappingURL=contacting.js.map