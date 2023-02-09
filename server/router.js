const router = require('express').Router();
const controller = require('./controller');

router.get('/', (req, res) => {
  res.render('index', { pid: req.query.pid || 40367 });
});
// PRODUCT ROUTES
router.get('/products', controller.products.getAll);
router.get('/products/:pid', controller.products.getOne);
router.get('/products/:pid/styles', controller.products.getStyles);
router.get('/products/:pid/related', controller.products.getRelated);

// REVIEW/META ROUTES
router.get('/reviews/:pid', controller.reviews.getReviews);
router.get('/meta/:pid', controller.reviews.getMeta);

router.post('/reviews', controller.reviews.post);

router.put('/reviews/:rid/helpful', controller.reviews.helpful);
router.put('/reviews/:rid/report', controller.reviews.report);

// Q&A ROUTES
router.get('/qa/questions', controller.qa.getQuestions);
router.get('/qa/:qid/answers', controller.qa.getAnswers);

router.post('/qa/questions', controller.qa.postQuestion);
router.post('/qa/questions/:qid/answers', controller.qa.postAnswer);

router.put('/qa/questions/:qid/helpful', controller.qa.questionHelpful);
router.put('/qa/questions/:qid/report', controller.qa.questionReport);
router.put('/qa/answers/:aid/helpful', controller.qa.answerHelpful);
router.put('/qa/answers/:aid/report', controller.qa.answerReport);

// INTERACTIONS ROUTES
router.post('/interactions', controller.interactions.post);

module.exports = router;
