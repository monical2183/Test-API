const express = require("express");
const router = express.Router();
const Order = require("../models/order");
const Customer = require("../models/customer");
const Pizza = require("../models/pizza");

// Create a new order with customer, pizza, delivery and notes documents
router.post("/", (request, response) => {
  const body = request.body;
  // Create the subdocuments
  const customer = new Customer.model(body.customer);
  customer.save();
  const pizzaIds = body.pizzas.map(pizza => {
    const newPizza = new Pizza.model({ ...pizza, order: newOrder._id });
    newPizza.save();
    return newPizza._id;
  });

  // Create the order document
  const newOrder = new Order.model({
    pizzas: pizzaIds,
    customer: customer._id,
    notes: body.notes
  });

  newOrder.save((error, data) => {
    return error ? response.sendStatus(500).json(error) : response.json(data);
  });
});

// Retrieve a single order with the option to not populate the subdocuments
router.get("/:id", (request, response) => {});

// Retrieve all orders with the option to not populate the subdocuments
router.get("/", (request, response) => {});

// Update a single orders pizza, delivery and notes subdocuments
router.put("/:id", (request, response) => {});

// Remove a single order and it's subdocuments
router.delete("/:id", (request, response) => {});

module.exports = router;
