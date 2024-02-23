const express = require('express');
const session = require('express-session');
const { engine } = require('express-handlebars');
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3000;

// Session configuration
const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

// Handlebars setup corrected
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Serve static files from the 'public' directory
app.use(express.static('public'));

// Setup routes
app.use('/users', userRoutes);
app.use('/posts', postRoutes);

// Home route
app.get('/', (req, res) => {
  res.render('homepage');
});

// Sync sequelize models to the database, then start the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
});
