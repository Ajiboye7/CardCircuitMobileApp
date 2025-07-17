const mongoose = require("mongoose");
const { Schema } = mongoose;
const validator = require("validator");
const { isValidPhoneNumber } = require("libphonenumber-js");

const ProfileSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    phone: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
      required: false,
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,  
      ref: 'User', 
      required: true,
    }
  },
  { timestamps: true }
);


ProfileSchema.statics.addProfile = async function (
  name,
  email,
  phone,
  profilePicture,
  user_id
) {
  //console.log("User ID in createProfile:", user_id);
  
  if (!name || !email || !phone) {
    throw Error("Input the necessary details");
  }

  if (!validator.isEmail(email)) {
    throw Error("Email not valid");
  }

  const formattedPhone = phone.startsWith("0") 
  ? "+234" + phone.slice(1)
  : phone;

if (!isValidPhoneNumber(formattedPhone)) {
  throw Error("Invalid phone number format");
}

if (profilePicture && !profilePicture.startsWith('file://') && !validator.isURL(profilePicture)) {
  throw new Error("Profile picture URL is not valid.");
}


  const userProfile = await this.create({
    name,
    email,
    phone,
    profilePicture,
    user_id
  });

  return userProfile;
};

module.exports = mongoose.model("Profile", ProfileSchema);
