const router = require('express').Router();
const controller = require('./controller.js');

// PRODUCT ROUTES
router.get('/products', controller.products.getAll)
router.get('/products/:pid', controller.products.getOne)
router.get('/products/:pid/styles', controller.products.getStyles)
router.get('/products/:pid/related', controller.products.getRelated)


// REVIEW/META ROUTES
router.get('/reviews/:pid', controller.reviews.getReviews)
router.get('/meta/:pid', controller.reviews.getMeta)

router.post('/reviews', controller.reviews.post)

router.put('/reviews/:rid/helpful', controller.reviews.helpful)
router.put('/reviews/:rid/report', controller.reviews.report)


// Q&A ROUTES
router.get('/qa/questions', controller.questions.getQuestions)
router.get('/qa/:qid/answers', controller.questions.getAnswers)

router.post('/qa/questions', controller.questions.postQuestion)
router.post('/qa/questions/:qid/answers', controller.questions.postAnswer)

router.put('/qa/:pid/questions/:qid/helpful', controller.questions.questionHelpful)
router.put('/qa/:pid/questions/:qid/report', controller.questions.questionReport)
router.put('/qa/:pid/questions/:qid/answers/:aid/helpful', controller.questions.answerHelpful)
router.put('/qa/:pid/questions/:qid/answers/:aid/report', controller.questions.answerReport)

module.exports = router;