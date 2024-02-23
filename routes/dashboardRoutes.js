const express = require('express');
const { Post, User } = require('../models');
const router = express.Router();

// Middleware to check if user is logged in
function checkAuth(req, res, next) {
  if (!req.session.loggedIn) {
    res.redirect('/login');
  } else {
    next();
  }
}

router.get('/', checkAuth, async (req, res) => {
  try {
    const userPosts = await Post.findAll({
      where: { userId: req.session.userId },
      include: [{ model: User, attributes: ['username'] }]
    });
    const posts = userPosts.map((post) => post.get({ plain: true }));
    res.render('dashboard', { posts, loggedIn: true });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
