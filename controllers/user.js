const User = require('../models/user/userModel');


// handle GET request
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

// handle GET request base on ID
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

// handle POST request
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

// handle DELETE request
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

// handle PUT request
const user_put = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    if (!user) {
      res.status(404).json({ mesage: 'Not found.' });
      return
    };
    const updateData = req.body;
    for (const [key, value] of Object.entries(updateData)) {
      user[key] = value;
    }
    const newData = await user.save();
    res.json({ data: newData });
    return;
  } catch {
    error => console.log(error)
    return;
  }
}

// handle PUT request
const user_patch = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    if (!user) {
      res.status(404).json({ mesage: 'Not found.' });
      return
    };
    const updateData = req.body;
    for (const [key, value] of Object.entries(updateData)) {
      user[key] = value;
    }
    const newData = await user.save();
    res.json({ data: newData });
    return;
  } catch {
    error => console.log(error)
    return;
  }
}

module.exports = { user_list, user_get, user_post, user_delete, user_put, user_patch }