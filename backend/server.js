const express = require('express')
const mongoose = require('mongoose')
const passport = require('./passportConfig'); // Import the configured passport
const session = require('express-session');
const authRoutes = require('./routes/authRoutes');
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config();
const userRoutes = require('./routes/userRoutes')
const resumeRoutes = require('./routes/resumeRoutes')

const app = express();
app.use(cors());
app.use(express.json());

// Initialize session middleware
app.use(
    session({
      secret: 'cats',
      resave: false,
      saveUninitialized: false,
    })
  );
  
  // Initialize passport and session
  app.use(passport.initialize());
  app.use(passport.session());
  
  // Use the auth routes
  app.use('/auth', authRoutes);


// Connect to MognoDB
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err))

// Routes
// app.use('/api/users', userRoutes)
// app.use('/api/resumes', resumeRoutes)

app.get('/',(req,res) => {
  res.send('<a href="/auth/google">Authenticate with Google</a>')
})

app.get('/home',(req,res) => {
  res.send('<h4>Homepage <a href="/auth/google">Login</a></h4>')
})

app.get('/login',(req,res) => {
  res.redirect('/')
})


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server runnig on port ${PORT}`));