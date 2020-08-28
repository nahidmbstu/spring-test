const regex = /(((\+)|(00))88)?01(3|4|5|6|7|8|9)(\d){8}/;

const validate = (req, res, next) => {
  if (!req.body.name) {
    return res.status(400).send("Need a  Name");
  }
  if (!regex.test(req.body.phone)) {
    return res.status(400).send("Need a Valid Phone Number for BD");
  }

  next();
};

module.exports = validate;
