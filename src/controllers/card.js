import mongoose from "mongoose";
import Card from "../models/card.js";
import Customer from "../models/customer.js";

export const createCard = async (req, res, next) => {
  let data = req.body;
  let { cardType, vision, customerID } = data;
  try {
    //Validation Start
    if (Object.keys(data).length === 0) {
      return res
        .status(400)
        .json({ status: false, message: "Please provide all the details" });
    }

    if (!cardType || cardType == "") {
      return res
        .status(400)
        .send({ status: false, message: "Please provide card type" });
    }
    cardType = data.cardType = cardType.trim();
    if (cardType) {
      if (!["REGULAR", "SPECIAL"].includes(cardType)) {
        return res.status(400).send({
          status: false,
          message: "Please provide REGULAR/SPECIAL card type",
        });
      }
    }

    if (!vision || vision == "") {
      return res
        .status(400)
        .send({ status: false, message: "Please provide card type" });
    }

    if (!customerID || customerID == "") {
      return res
        .status(400)
        .send({ status: false, message: "Please provide customerID" });
    }

    if (!mongoose.isValidObjectId(customerID)) {
      return res.status(400).send({
        status: false,
        message: "You entered a invalid customer id ......",
      });
    }

    let customer = await Customer.findById(customerID);
    if (!customer) {
      return res
        .status(404)
        .send({ status: false, message: "No such customer exists" });
    }
    //Validation End

    const card = await Card.findOne({}).sort({_id:-1})
    const customerName = customer.firstName + " " + customer.lastName;
    
    const newCard = new Card({
      ...req.body,
      customerName: customerName,
      cardNumber: card == null ? 0 : parseInt(card.cardNumber)+1,
    });
    console.log(newCard)
    const savedCard = await newCard.save();
    res.status(200).json(savedCard);
  } catch (err) {
    next(err);
  }
};

export const getCards = async (req, res, next) => {
  try {
    const cards = await Card.find();
    res.status(200).json(cards);
  } catch (err) {
    next(err);
  }
};
