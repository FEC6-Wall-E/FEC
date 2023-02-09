const api = require('./model');

const baseCount = 2;

module.exports = {
  products: {
    getAll: (req, res) => {
      const count = req.query.count || baseCount;
      api.get(`products?count=${count}`)
        .then((products) => {
          res.status(200).json(products.data);
        })
        .catch(() => {
          res.sendStatus(500);
        });
    },
    getOne: (req, res) => api.get(`products/${req.params.pid}`)
      .then((product) => {
        res.status(200).json(product.data);
      })
      .catch(() => {
        res.sendStatus(500);
      }),
    getStyles: (req, res) => api.get(`products/${req.params.pid}/styles`)
      .then((styles) => {
        res.status(200).json(styles.data);
      })
      .catch(() => {
        res.sendStatus(500);
      }),
    getRelated: (req, res) => api.get(`products/${req.params.pid}/related`)
      .then((products) => {
        res.status(200).json(products.data);
      })
      .catch(() => {
        res.sendStatus(500);
      }),
  },

  reviews: {
    getReviews: (req, res) => {
      const sort = req.query.sort || 'relevant';
      const count = req.query.count || baseCount;
      return api.get(`reviews/?product_id=${req.params.pid}&sort=${sort}&count=${count}`)
        .then((reviews) => {
          res.status(200).json(reviews.data);
        })
        .catch(() => {
          res.sendStatus(500);
        });
    },
    getMeta: (req, res) => api.get(`reviews/meta/?product_id=${req.params.pid}`)
      .then((reviews) => {
        res.status(200).json(reviews.data);
      })
      .catch(() => {
        res.sendStatus(500);
      }),
    post: (req, res) => {
      const { body } = req;
      return api.post('reviews', body)
        .then(() => {
          res.sendStatus(200);
        })
        .catch(() => {
          res.sendStatus(500);
        });
    },
    helpful: (req, res) => api.put(`reviews/${req.params.rid}/helpful`)
      .then(() => {
        res.sendStatus(204);
      })
      .catch(() => {
        res.sendStatus(500);
      }),
    report: (req, res) => api.put(`reviews/${req.params.rid}/report`)
      .then(() => {
        res.sendStatus(204);
      })
      .catch(() => {
        res.sendStatus(500);
      }),
  },

  qa: {
    getQuestions: (req, res) => {
      const pid = req.query.product_id;
      const count = req.query.count || baseCount;
      const page = req.query.page || 1;
      return api.get(`qa/questions?product_id=${pid}&page=${page}&count=${count}`)
        .then((questions) => {
          res.status(200).json(questions.data);
        })
        .catch(() => {
          res.sendStatus(500);
        });
    },
    getAnswers: (req, res) => {
      const { qid } = req.params;
      const count = req.query.count || baseCount;
      const page = req.query.page || 1;
      return api.get(`qa/questions/${qid}/answers?page=${page}&count=${count}`)
        .then((answers) => {
          res.status(200).json(answers.data);
        })
        .catch(() => {
          res.sendStatus(500);
        });
    },
    postQuestion: (req, res) => api.post('qa/questions', req.body)
      .then(() => {
        res.sendStatus(201);
      })
      .catch(() => {
        res.sendStatus(500);
      }),
    postAnswer: (req, res) => {
      const { qid } = req.params;
      return api.post(`qa/questions/${qid}/answers`, req.body)
        .then(() => {
          res.sendStatus(201);
        })
        .catch(() => {
          res.sendStatus(500);
        });
    },
    questionHelpful: (req, res) => {
      const { qid } = req.params;
      return api.put(`qa/questions/${qid}/helpful`)
        .then(() => {
          res.sendStatus(204);
        })
        .catch(() => {
          res.sendStatus(500);
        });
    },
    questionReport: (req, res) => {
      const { qid } = req.params;
      return api.put(`qa/questions/${qid}/report`)
        .then(() => {
          res.sendStatus(204);
        })
        .catch(() => {
          res.sendStatus(500);
        });
    },
    answerHelpful: (req, res) => {
      const { aid } = req.params;
      return api.put(`qa/answers/${aid}/helpful`)
        .then(() => {
          res.sendStatus(204);
        })
        .catch(() => {
          res.sendStatus(500);
        });
    },
    answerReport: (req, res) => {
      const { aid } = req.params;
      return api.put(`qa/answers/${aid}/report`)
        .then(() => {
          res.sendStatus(204);
        })
        .catch(() => {
          res.sendStatus(500);
        });
    },
  },

  interactions: {
    post: (req, res) => api.post('interactions', req.body)
      .then(() => {
        res.sendStatus(201);
      })
      .catch(() => {
        res.sendStatus(500);
      }),
  },
};
