const mongoose = require("mongoose");

// create a mongoose schema

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: false },
  phone: { type: String, required: true },
});

// create a model using schema

const Contact = mongoose.model("contact", contactSchema);

module.exports = Contact;
