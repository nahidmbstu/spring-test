const Contact = require("../models/Phone");
const validate = require("../middleware");

module.exports = function (app) {
  //  get all contacts

  app.get("/contacts", (req, res) => {
    async function getContacts() {
      const result = await Contact.find({});
      console.log("Total Contact ....", result.length);
      return result;
    }

    getContacts()
      .then((result) => {
        console.log(result);
        res.status(200).send(result);
      })
      .catch((err) => console.log(err));
  });

  // get Contact by ID

  app.get("/contact/:phone", (req, res) => {
    // res.send(req.params);

    async function getConByIdAndCategory() {
      const result = await Contact.find({ phone: req.params.phone });
      return result;
    }

    getConByIdAndCategory()
      .then((result) => {
        console.log(result);
        res.status(200).send(result);
      })
      .catch((err) => console.log(err));
  });

  app.post("/contacts", validate, (req, res) => {
    async function createContact() {
      console.log(req.body);
      const singleContact = new Contact({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
      });
      const result = await singleContact.save();
      console.log(result);
      return result;
    }
    createContact()
      .then((result) => {
        console.log(result);
        res.status(201).send(result);
      })
      .catch((err) => console.log(err));
  });

  app.put("/contact/:phone", validate, (req, res) => {
    async function editContact() {
      const filter = {
        phone: req.params.phone,
      };

      const update = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
      };

      const result = await Contact.findOneAndUpdate(filter, update, {
        new: true,
      });

      console.log(result);
      return result;
    }
    editContact()
      .then((result) => {
        console.log(result);
        res.status(204).send(result);
      })
      .catch((err) => console.log(err));
  });

  app.delete("/contact/:phone", (req, res) => {
    async function delContact() {
      const result = await Contact.findOneAndDelete({ phone: req.params.phone });
      console.log(result);
      return result;
    }
    delContact()
      .then((result) => {
        console.log(result);
        res.status(204).send(result);
      })
      .catch((err) => console.log(err));
  });
};
