const Profile = require("../models/ProfileModel");

export const getprofile = async (req, res) => {
  try {
    const userId = req.user._id;
    const profile = await Profile.find({ userId });
    res.status(200).json(profile);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

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
    res.status(400).json({
      error: error.message || "An error occurred while creating the profile.",
    });
  }
};

export const updateProfile = async (req, res) => {
  try {
    const { name, email, phoneNumber, profilePicture } = req.body;
    const updatedProfile = await Profile.findByIdAndUpdate(
      req.params.id,
      { name, email, phoneNumber, profilePicture },
      { new: true }
    );

    if (!updatedProfile) {
      return res.status(404).json({ error: "profile not found" });
    }
    res.status(200).json(updatedProfile);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
