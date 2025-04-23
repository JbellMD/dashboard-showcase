"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
// Example dashboard route
router.get('/', (req, res) => {
    res.json({ message: 'Dashboard route works!' });
});
exports.default = router;
//# sourceMappingURL=dashboard.routes.js.map