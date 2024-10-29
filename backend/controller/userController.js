/*const User  = require('../models/UserModel')

export const signInUser = async(req, res)=>{

    const {email , password} = req.body
    try{

        const user = await User.SignIn(email, password)
    }catch(error){
        throw new Error(error)
    }
}

export const signUpUser = async()=>{
    const {name, email, password} = req.body

    try{

        const user = await User.signUp(name, email, password)
    }catch(error){
        throw new Error(error)
    }
}*/

const User  = require('../models/UserModel')

export const signInUser = async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await User.signIn(email, password);
      res.status(200).json(user);  // Send user data back on successful login
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  export const signUpUser = async (req, res) => {
    const { name, email, password, retypePassword } = req.body;
    try {
      const user = await User.signUp(name, email, password, retypePassword);
      res.status(201).json(user);  // Send user data back on successful registration
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  


