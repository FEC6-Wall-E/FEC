const api = require('./model.js');

module.exports = {
  products: {
    getAll: (req, res) => {
      res.status(500).json('This function hasnt been created yet!')
    },
    getOne: (req, res) => {
      res.status(500).json('This function hasnt been created yet!')
    },
    getStyles: (req, res) => {
      res.status(500).json('This function hasnt been created yet!')
    },
    getRelated: (req, res) => {
      res.status(500).json('This function hasnt been created yet!')
    }
  },

  reviews: {
    getReviews: (req, res) => {
      res.status(500).json('This function hasnt been created yet!')
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