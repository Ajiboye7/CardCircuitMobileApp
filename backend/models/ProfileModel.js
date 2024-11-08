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
    phoneNumber: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Profile", ProfileSchema);

ProfileSchema.static.addProfile = async function (
  name,
  email,
  phoneNumber,
  profilePicture
) {
  if (!name || !email || !phoneNumber) {
    throw Error("Input the necessary details");
  }

  if (!validator.isEmail(email)) {
    throw Error("Email not valid");
  }

  if (!isValidPhoneNumber(phoneNumber)) {
    throw Error("Invalid phone number format");
  }

  if (profilePicture && !isValidURL(profilePicture)) {
    throw new Error("Profile picture URL is not valid.");
  }

  const userProfile = await this.create({
    name,
    email,
    phoneNumber,
    profilePicture,
  });

  return userProfile;
};
