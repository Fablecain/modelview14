const bcrypt = require('bcrypt');
const { User } = require('../models');

exports.signup = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = await User.create({
      username: req.body.username,
      password: hashedPassword,
    });

    req.session.save(() => {
      req.session.userId = newUser.id;
      req.session.username = newUser.username;
      req.session.loggedIn = true;

      res.redirect('/dashboard');
    });
  } catch (err) {
    res.status(500).json(err);
  }
};
