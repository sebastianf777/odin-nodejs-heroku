var express = require('express');
var router = express.Router();
const moment = require('moment');

let date = moment().startOf('day').fromNow();
let date2 = moment().startOf('hour').fromNow();

const messages = [
  {
    title: 'On the topic of pizzas',
    description:
      'I personally think Pizza Hut beats Blaze Pizza, but each to their own... I also dig Hungry Howie’s and their wings. Dominoes is alright. Papa John’s if I’m really desperate.',
    username: 'Armando',
    date: date2,
  },
  {
    title: 'Blaze Pizza',
    description:
      'I just tried Blaze Pizza for the first time and I love it! What is everybody’s go-to order at Blaze?',
    username: 'Laurie',
    date: date,
  },
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Message Board', messages: messages });
});

router.post('/new', (req, res, next) => {
  const newMessage = {
    title: req.body.title,
    description: req.body.description,
    username: req.body.username,
    date: moment()
      .startOf('hour' - 1)
      .fromNow(),
  };
  messages.unshift(newMessage);
  res.redirect('/');
});

module.exports = router;
