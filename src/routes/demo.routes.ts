import { Router } from 'express';
import { getDemos, updateFrame } from '../controllers/demo.controller';

const router = Router();

router.get('/demos', getDemos);
router.put('/frames/:id', updateFrame);

export default router;
