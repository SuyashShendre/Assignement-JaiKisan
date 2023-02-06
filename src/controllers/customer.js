import Customer from "../models/customer.js";
import { nanoid } from "nanoid";
let checkDOB = /(((0|1)[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/((19|20)\d\d))$/; //Or we can use moment library
let checkEmail = /^[a-z]{1}[a-z0-9._]{1,100}[@]{1}[a-z]{2,15}[.]{1}[a-z]{2,10}$/;
let checkMobile = /^([+]\d{2})?\d{10}$/; 

export const createCustomer = async (req, res, next) => {
  let data = req.body;
  let { firstName, lastName, mobileNumber, DOB, emailID, status } = data;

  try {
    //Validation Start
    if (Object.keys(data).length === 0) {
      return res
        .status(400)
        .json({ status: false, message: "Please provide all the details" });
    }

    if (!firstName || firstName == "") {
      return res
        .status(400)
        .send({ Status: false, message: "Please provide first name" });
    }

    if (!lastName || lastName == "") {
      return res
        .status(400)
        .send({ Status: false, message: "Please provide last name" });
    }

    if (!mobileNumber || mobileNumber == "") {
      return res
        .status(400)
        .send({ Status: false, message: "Please provide mobile number" });
    }

    if (!checkMobile.test(mobileNumber)) {
      return res
        .status(400)
        .send({ Status: false, message: "Please provide valid mobile number" });
    }

    if (!checkDOB.test(DOB)) {
      return res.status(400).send({
        Status: false,
        message: "Please provide Date of Birth in valid format i.e. dd/mm/yyyy",
      });
    }

    if (!emailID || emailID == "") {
      return res
        .status(400)
        .send({ Status: false, message: "Please provide email id" });
    }

    if (!checkEmail.test(emailID)) {
      return res
        .status(400)
        .send({ Status: false, message: "Please provide valid email id" });
    }

    if (!status || status == "") {
      return res
        .status(400)
        .send({ Status: false, message: "Please provide status" });
    }
    status = data.status = status.trim();
    if (status) {
      if (!["ACTIVE", "INACTIVE"].includes(status)) {
        return res
          .status(400)
          .send({ Status: false, message: "Please provide valid status" });
      }
    }
    //Validation End

    const newCustomer = new Customer({
      ...data,
      customerID: nanoid(),
    });

    const savedCustomer = await newCustomer.save();
    res.status(200).json(savedCustomer);
  } catch (err) {
    next(err);
  }
};

export const deleteCustomer = async (req, res, next) => {
  try {
    await Customer.findByIdAndDelete(req.params.id);
    res.status(200).json("Customer has been deleted.");
  } catch (err) {
    next(err);
  }
};

export const getCustomers = async (req, res, next) => {
  try {
    const customers = await Customer.find({ status: "ACTIVE" });
    res.status(200).json(customers);
  } catch (err) {
    next(err);
  }
};
