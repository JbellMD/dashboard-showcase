import { Router } from 'express';

const router = Router();

// Example analytics route
router.get('/', (req, res) => {
  res.json({ message: 'Analytics route works!' });
});

export default router;
