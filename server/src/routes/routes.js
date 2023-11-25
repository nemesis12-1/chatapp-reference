import express from 'express';
import { profile, register } from '../controllers/user.controller.js';

const router = express.Router();


router.get("/test", (req, res) => {
    res.send("test ok");
});

router.post("/register", register);
router.get("/profile", profile);



export default router;