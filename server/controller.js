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
      const sort = req.params.sort || 'relevant'
      return api.get(`reviews/?product_id=${req.params.pid}&sort=${sort}`)
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
      // const body = {
      //   product_id: 40383,
      //   rating: 5,
      //   summary: "It Okay",
      //   body: "Actually, I quite like it...",
      //   recommend: true,
      //   name: "Yandlier",
      //   email: "bozoIs@yourHouse.org",
      //   photos: [],
      //   characteristics: {}
      // }
      const body = req.body;
      return api.post('reviews', body)
      .then(() => {
        res.sendStatus(200);
      })
      .catch(err => {
        res.sendStatus(500);
        console.error(err.response.data);
      })
    },
    helpful: (req, res) => { // This seems to not actually update the API, but the doc for the API's put has no paramaters other than r_id...
      console.log('RID', req.params.rid)
      return api.put(`reviews/${req.params.rid}/helpful`)
      .then(reviews => {
        console.log(reviews)
        res.sendStatus(204);
      })
      .catch(err => {
        res.sendStatus(500);
        console.error(err);
      })
    },
    report: (req, res) => {// This seems to not actually update the API, but the doc for the API's put has no paramaters other than r_id...
      return api.put(`reviews/${req.params.rid}/report`)
      .then(reviews => {
        res.sendStatus(204);
      })
      .catch(err => {
        res.sendStatus(500);
        console.error(err);
      })
    }
  },

  questions: {
    getQuestions: (req, res) => {
      const pid = req.query.product_id;
      console.log(pid);
      const page = req.query.page || 1
      return api.get(`qa/questions?product_id=${pid}&page=${page}&count=50`)
      .then(questions => {
        res.status(200).json(questions.data);
      })
      .catch(err => {
        res.sendStatus(500);
        console.error(err);
      })
    },
    getAnswers: (req, res) => {
      const qid = req.params.qid;
      const page = req.query.page || 1
      return api.get(`qa/questions/${qid}/answers?page=${page}&count=2`)
      .then(answers => {
        res.status(200).json(answers.data);
      })
      .catch(err => {
        res.sendStatus(500);
        console.error(err);
      })
    },
    postQuestion: (req, res) => { // BROKEN
      const body = {
        product_id: 40383,
        body: "But where did it come from? WHERE DID IT GO?! WHERE DID IT COME FROM, COTTON EYE JOE??!!",
        name: "Yandlier",
        email: "bozoIs@yourHouse.org"
      };
      return api.post(`qa/questions?product_id=40383`, body)
      .then(() => {
        res.sendStatus(201);
      })
      .catch(err => {
        res.sendStatus(500);
        console.error(err.response.data);
      })
    },
    postAnswer: (req, res) => {
      const body = {
        body: "It came from the stars, a blessing from the greater beings of out vast vast universe. No mere mortal, such as yourself, could ever comprehend. Your mind would explode",
        name: "Yandlier",
        email: "bozoIs@yourHouse.org",
        photos: []
      };
      const qid = req.params.qid;
      return api.post(`qa/questions/${qid}/answers`, body)
      .then(() => {
        res.sendStatus(201);
      })
      .catch(err => {
        res.sendStatus(500);
        console.error(err.response.data);
      })
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