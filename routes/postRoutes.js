const express = require('express');
const router = express.Router();

// Route to display the form for creating a new post
router.get('/posts/new', (req, res) => {
    res.render('newPost'); // Assuming you have a view file named 'newPost' for rendering the form
});

// Route to handle the submission of the form
router.post('/posts', async (req, res) => {
    try {
        // Extract data from the request body
        const { title, content } = req.body;
        
        // Logic to create a new post using the data
        // Example:
        // const newPost = await Post.create({ title, content, userId: req.session.user.id });

        // Redirect to the homepage or show a success message
        res.redirect('/');
    } catch (error) {
        console.error('Post Creation Error:', error);
        res.status(500).send('Error creating post');
    }
});

module.exports = router;
