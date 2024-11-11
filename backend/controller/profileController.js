const Profile = require("../models/ProfileModel");

 const getProfile = async (req, res) => {
  try {
    const userId = req.user._id;
    const profile = await Profile.find({ user_id: userId });
    res.status(200).json(profile);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

 const createProfile = async (req, res) => {
  const { name, email, phone, profilePicture } = req.body;
  try {
    const userId = req.user._id
    const newProfile = await Profile.addProfile(
      name,
      email,
      phone,
      profilePicture,
      userId
    );

    res.status(201).json(newProfile);
  } catch (error) {
    res.status(400).json({
      error: error.message || "An error occurred while creating the profile.",
    });
  }
};

 const updateProfile = async (req, res) => {
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

module.exports = {
  createProfile,
  updateProfile,
  getProfile,
};
