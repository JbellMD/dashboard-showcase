"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
// Example auth route
router.get('/', (req, res) => {
    res.json({ message: 'Auth route works!' });
});
exports.default = router;
//# sourceMappingURL=auth.routes.js.map