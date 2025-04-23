import { Router } from 'express';

const router = Router();

// Example user route
router.get('/', (req, res) => {
  res.json({ message: 'User route works!' });
});

export default router;
