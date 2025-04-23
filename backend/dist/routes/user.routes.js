"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
// Example user route
router.get('/', (req, res) => {
    res.json({ message: 'User route works!' });
});
exports.default = router;
//# sourceMappingURL=user.routes.js.map