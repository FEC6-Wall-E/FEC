const api = require('./model.js');

module.exports = {
  products: {
    getAll: (req, res) => {
      return api.get(`products`)
        .then(products => {
          res.status(200).json(products.data);
        })
        .catch(err => {
          res.sendStatus(500);
          console.error(err);
        })
    },
    getOne: (req, res) => {
      return api.get(`products/${req.params.pid}`)
        .then(products => {
          res.status(200).json(products.data);
        })
        .catch(err => {
          res.sendStatus(500);
          console.error(err);
        })
    },
    getStyles: (req, res) => {
      return api.get(`products/${req.params.pid}/styles`)
        .then(products => {
          res.status(200).json(products.data);
        })
        .catch(err => {
          res.sendStatus(500);
          console.error(err);
        })
    },
    getRelated: (req, res) => {
      return api.get(`products/${req.params.pid}/related`)
      .then(products => {
        res.status(200).json(products.data);
      })
      .catch(err => {
        res.sendStatus(500);
        console.error(err);
      })
    }
  },

  reviews: {
    getReviews: (req, res) => {
      return api.get(`reviews/?product_id=${req.params.pid}&sort=${req.params.sort || 'relevant'}`)
      .then(reviews => {
        res.status(200).json(reviews.data);
      })
      .catch(err => {
        res.sendStatus(500);
        console.error('err');
      })
    },
    getMeta: (req, res) => {
      res.status(500).json('This function hasnt been created yet!')
    },
    post: (req, res) => {
      res.status(500).json('This function hasnt been created yet!')
    },
    helpful: (req, res) => {
      res.status(500).json('This function hasnt been created yet!')
    },
    report: (req, res) => {
      res.status(500).json('This function hasnt been created yet!')
    }
  },

  questions: {
    getQuestions: (req, res) => {
      res.status(500).json('This function hasnt been created yet!')
    },
    getAnswers: (req, res) => {
      res.status(500).json('This function hasnt been created yet!')
    },
    postQuestion: (req, res) => {
      res.status(500).json('This function hasnt been created yet!')
    },
    postAnswer: (req, res) => {
      res.status(500).json('This function hasnt been created yet!')
    },
    questionHelpful: (req, res) => {
      res.status(500).json('This function hasnt been created yet!')
    },
    questionReport: (req, res) => {
      res.status(500).json('This function hasnt been created yet!')
    },
    answerHelpful: (req, res) => {
      res.status(500).json('This function hasnt been created yet!')
    },
    answerReport: (req, res) => {
      res.status(500).json('This function hasnt been created yet!')
    }
  }
}