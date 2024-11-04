const User = require("../models/UserModel");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "1h" });
};

const signUpUser = async (req, res) => {
  const { name, email, password, retypePassword } = req.body;
  try {
    const user = await User.signUp(name, email, password, retypePassword);
    const token = createToken(user._id);
    console.log(email);
    res.status(201).json({ name, email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const signInUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.signIn(email, password);
    const { name } = user;

    const token = createToken(user._id);
    //console.log(token)

    res.status(200).json({ name, email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { signInUser, signUpUser };
