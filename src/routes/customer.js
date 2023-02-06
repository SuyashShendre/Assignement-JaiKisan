import express from "express";
import {
    createCustomer,
    deleteCustomer,
    getCustomers,
} from "../controllers/customer.js";
// import Customer from "../models/customers.js";
// import {verifyAdmin} from "../utils/verifyToken.js"
const router = express.Router();

//CREATE
router.post("/", createCustomer);

//DELETE
router.delete("/:id", deleteCustomer);

//GET ALL
router.get("/", getCustomers);

export default router;