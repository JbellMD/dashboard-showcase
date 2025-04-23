import { Router } from 'express';

const router = Router();

// Example auth route
router.get('/', (req, res) => {
  res.json({ message: 'Auth route works!' });
});

export default router;
