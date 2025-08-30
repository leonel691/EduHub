import { Router } from 'express';
import { register, login, logout, getProfile, verifyOTP, resendOTP } from '../controllers/authController';
import { authenticateToken } from '../middlewares/auth';

const router = Router();

router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);
router.post('/verify-otp', verifyOTP);
router.post('/resend-otp', resendOTP);
router.get('/profile', authenticateToken, getProfile);

export default router;