import { Router } from 'express';
import { getHomePage } from '../contollers';

const router = Router();

router.get('/', getHomePage);

export default router;
