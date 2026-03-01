import User from "../models/auth.schema.js";

async function completeProfileHandler(req, res) {
  console.log(req.body);

  let user = new User({
    username: req.body.username,
    phoneNumber: req.body.phoneNumber,
    email: req.body.email,
  });
  const data = await user.save();
  console.log(data);
}

export default completeProfileHandler;
