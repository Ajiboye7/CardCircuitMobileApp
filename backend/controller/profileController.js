const Profile = require("../models/ProfileModel");

export const createProfile = async (req, res) => {
  const { name, email, phoneNumber, profilePicture } = req.body;
  try {
    const newProfile = await Profile.addProfile(
      name,
      email,
      phoneNumber,
      profilePicture
    );

    res.status(201).json(newProfile);
  } catch (error) {
    res
      .status(400)
      .json({
        error: error.message || "An error occurred while creating the profile.",
      });
  }
};




