const User = require('../models/user/userModel');


const user_list = async (req, res) => {
  try {
    const result = await User.find();
    if (!result) {
      res.status(404).json({ message: "Not found" });
      return;
    }
    res.json({ data: result });
    return;
  } catch {
    error => console.log(error)
    res.json({ message: error })
    return;
  }
}

const user_get = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    if (!user) {
      res.status(404).json({ message: "Not found" });
      return;
    }
    res.json({ data: user });
    return;
  } catch {
    error => console.log(error)
    res.json({ message: error })
    return;
  }
}

const user_post = async (req, res) => {
  try {
    const user = new User(req.body);
    const userData = await user.save();
    res.json({ data: userData });
    return;
  } catch {
    error => console.log(error)
    return;
  }
}

const user_delete = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByIdAndDelete(id);
    res.json({ message: 'success' })
    return;
  } catch {
    error => console.log(error)
    return;
  }
}


module.exports = { user_list, user_get, user_post, user_delete }