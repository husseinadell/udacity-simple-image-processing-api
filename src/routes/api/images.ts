import { Router } from 'express';
import { getResizedImageApi } from '../../contollers/images';

const router = Router();

router.get('/', getResizedImageApi);

export default router;
