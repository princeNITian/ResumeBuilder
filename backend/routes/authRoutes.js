// routes/auth.js
const express = require('express');
const passport = require('passport');
const authMiddleware = require('../middleware/authMiddleware')

const router = express.Router();

// router.use(authMiddleware)

// Route to start Google OAuth
router.get(
  '/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

// Google OAuth callback route
router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    // Successful authentication, redirect to the dashboard or home
    res.redirect('/auth/dashboard');
  }
);

// router.get('/dashboard', authMiddleware, (req, res,next) => {
//     console.log(req.user);
//     res.send('Welcome to your dashboard.');
//   });

router.get('/dashboard', authMiddleware, (req, res, next) => {
  console.log(req.user);
  const htmlTemplate = `
    <div class="dashboard">
      <h1>Welcome to your dashboard, ${req.user.displayName}!</h1>
      <p><a href="/auth/logout">Logout</a></p>
    </div>
  `;
  res.setHeader('Content-Type', 'text/html');
  res.send(htmlTemplate);
});

  

// Logout route
// router.get('/logout', (req, res) => {
//   req.logout();
//   req.session.destroy();
//   res.redirect('/');
// });


router.get('/logout', (req, res) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    req.session.destroy((err) => {
      if (err) {
        return next(err);
      }
      res.redirect('/home');
    });
  });
});

module.exports = router;
