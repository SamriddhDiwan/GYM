import express from 'express';
import { login, logout, register,authCheck } from '../controllers/authController.js';

const authRouter = express.Router();

authRouter.post('/register', register);
authRouter.post('/login', login);
authRouter.post('/logout', logout);
authRouter.post('/me',authCheck)

export default authRouter;
