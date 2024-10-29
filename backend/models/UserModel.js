

const mongoose = require("mongoose");

const Schema = new mongoose.Schema();

const validator = require('validator')

const bcrypt = require('bcrypt')

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});



userSchema.statics.signUp = async (name, email, password, retypePassword)=>{
    if(!name || !email || !password || !retypePassword){
        throw Error('All fields is required to be filled')
    }

    if(!validator.isEmail(email)){
        throw Error ('Email not valid')
    }

    if(!validator.isStrongPassword(password)){
        throw Error('Password not strong enough')
    }

    if(password !==retypePassword){
        throw Error ('passwords do not match')
    }

    const exists = await this.findOne({email})

    if(exists)
        throw Error('email already exist')

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({name, email, password:hash})

    return user
}



userSchema.statics.signIn = async(email, password)=>{
    if(!email || !password){
        throw Error('All fields is required to be filled')
    }

    const user = await this.findOne({email})

    if(!user){
        throw Error ('This user does not exist')
    }

    const match = await bcrypt.compare(password, user.password)

    if(!match){
        throw Error ('Invalid password')
    }

    return user
}

module.exports = mongoose.model('User', userSchema)