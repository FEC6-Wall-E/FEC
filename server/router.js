const router = require('express').Router();
const controller = require('./controller.js');

// PRODUCT ROUTES
router.get('/products', controller.products.getAll)
router.get('/products/:pid', controller.products.getOne)
router.get('/products/:pid/styles', controller.products.getStyles)
router.get('/products/:pid/related', controller.products.getRelated)


// REVIEW ROUTES
router.get('/products/:pid/reviews', controller.reviews.getReviews)
router.get('/products/:pid/meta', controller.reviews.getMeta)

router.post('/products/:pid/reviews', controller.reviews.post)

router.put('/products/:pid/helpful', controller.reviews.helpful)
router.put('/products/:pid/report', controller.reviews.report)


// Q&A ROUTES
router.get('/products/:pid/questions', controller.questions.getQuestions)
router.get('/products/:pid/answers', controller.questions.getAnswers)

router.post('/products/:pid/questions', controller.questions.postQuestion)
router.post('/products/:pid/questions/:qid/answers', controller.questions.postAnswer)

router.put('/products/:pid/questions/:qid/helpful', controller.questions.questionHelpful)
router.put('/products/:pid/questions/:qid/report', controller.questions.questionReport)
router.put('/products/:pid/questions/:qid/answers/:aid/helpful', controller.questions.answerHelpful)
router.put('/products/:pid/questions/:qid/answers/:aid/report', controller.questions.answerReport)

module.exports = router;