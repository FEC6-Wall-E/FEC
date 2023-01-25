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
        console.error(err);
      })
    },
    getMeta: (req, res) => {
      return api.get(`reviews/meta/?product_id=${req.params.pid}`)
      .then(reviews => {
        res.status(200).json(reviews.data);
      })
      .catch(err => {
        res.sendStatus(500);
        console.error(err);
      })
    },
    post: (req, res) => { // NEED TO WAIT FOR A CLIENT TO TEST FROM
      res.status(500).json('This function hasnt been created yet!')
    },
    helpful: (req, res) => { // This seems to not actually update the API, but the doc for the API's put has no paramaters other than r_id...
      return api.put(`reviews/${req.params.rid}/helpful`)
      .then(reviews => {
        res.sendStatus(204)
      })
      .catch(err => {
        res.sendStatus(500);
        console.error(err.data);
      })
    },
    report: (req, res) => {// This seems to not actually update the API, but the doc for the API's put has no paramaters other than r_id...
      return api.put(`reviews/${req.params.rid}/report`)
      .then(reviews => {
        res.sendStatus(204)
      })
      .catch(err => {
        res.sendStatus(500);
        console.error(err.data);
      })
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