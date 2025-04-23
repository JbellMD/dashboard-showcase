"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
// Example analytics route
router.get('/', (req, res) => {
    res.json({ message: 'Analytics route works!' });
});
exports.default = router;
//# sourceMappingURL=analytics.routes.js.map