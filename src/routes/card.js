import express from "express";
import {
    createCard,
    getCards,
} from "../controllers/card.js";
// import Card from "../models/card.js";
// import {verifyAdmin} from "../utils/verifyToken.js"
const router = express.Router();

//CREATE
router.post("/", createCard);

//GET ALL
router.get("/", getCards);

export default router;