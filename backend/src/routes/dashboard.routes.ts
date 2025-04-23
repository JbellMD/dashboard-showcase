import { Router } from 'express';

const router = Router();

// Example dashboard route
router.get('/', (req, res) => {
  res.json({ message: 'Dashboard route works!' });
});

export default router;
