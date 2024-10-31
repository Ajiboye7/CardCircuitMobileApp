const User  = require('../models/UserModel')

 const signInUser = async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await User.signIn(email, password);
      res.status(200).json(user); 
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
   
   const signUpUser = async (req, res) => {
    const { name, email, password, retypePassword } = req.body;
    try {
      const user = await User.signUp(name, email, password, retypePassword);
      res.status(201).json(user); 
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  module.exports = { signInUser, signUpUser };
