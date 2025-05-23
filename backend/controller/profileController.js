const Profile = require("../models/ProfileModel");


const getProfile = async (req, res) => {
  try {
    const userId = req.user._id; 
    
    
    const profile = await Profile.findOne({ user_id: userId }).sort({ updatedAt: -1 });

    if (!profile) {
      return res.status(404).json({ error: "Profile not found" });
    }

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
    
    const userId = req.user._id;
    const updatedProfile = await Profile.findOneAndUpdate(
      { user_id: userId },
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




const uploadImage = async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }

  const imageUrl = `/uploads/${req.file.filename}`;

  try {
    const userId = req.user._id;
    const profile = await Profile.findOneAndUpdate(
      { user_id: userId },
      { profilePicture: imageUrl },
      { new: true }
    );

    if (!profile) {
      return res.status(404).json({ error: "Profile not found" });
    }

    res.status(200).json({
      message: "Image uploaded successfully",
      profilePicture: profile.profilePicture,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

const deleteImage = async (req, res) => {
  try {
    const userId = req.user._id;

    
    const updatedProfile = await Profile.findOneAndUpdate(
      { user_id: userId },
      { profilePicture: null },
      { new: true }
    );

    if (!updatedProfile) {
      return res.status(404).json({ error: "Profile not found" });
    }

    res.status(200).json({ 
      message: "Profile picture deleted successfully",
      profile: updatedProfile 
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};





module.exports = {
  createProfile,
  updateProfile,
  getProfile,
  uploadImage,
  deleteImage,
};
