import express from 'express';
import auth from './auth';
import user from './users';
import products from './products';
import unauthrized from './unauthrized';
import { authenticateAuthToken } from '../middlewares/auth';

const router = express.Router();
router.use('/auth', auth);
router.use('/users', authenticateAuthToken, user);
router.use('/products', authenticateAuthToken, products);
router.use('/unauthrized', unauthrized);
export default router;
