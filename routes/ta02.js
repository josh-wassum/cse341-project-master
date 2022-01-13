//TA02 PLACEHOLDER
// Remember, you can make more of these placeholders yourself!
const express = require('express');
const router = express.Router();

// const helpers = require('../util/functions');

const users = [{userName: 'Josh'}, {userName: 'Ben'}, {userName: 'Cameron'}];

router.get('/', (req, res, next) => {
  res.render('pages/ta02', {
    usrs: users,
    title: 'Team Activity 02',
    path: '/ta02', // For pug, EJS
    activeTA03: true, // For HBS
    contentCSS: true, // For HBS
  });
  console.log(users);
});

router.post("/addUser", (req, res, next) => {
  users.push({userName: req.body.userName});
  res.redirect('/ta02');
});

router.post("/removeUser", (req, res, next) => {
  let uIndex = users.map((e) => {return e.userName}).indexOf(req.body.userName);
  if (uIndex != -1){
    users.splice(uIndex, 1);
  }
  res.redirect('/ta02');
});

exports.routes = router;
exports.users = users;
