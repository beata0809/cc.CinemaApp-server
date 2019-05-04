const { create, getAll, getById } = require('../services/routing');

const Example = require('../models/Example');

const routes ={
  create: async (req, res) => {
    const data = req.body;
    create(res, Example, data);
  },
  getAll: async (req, res) => {
    getAll(res, Example);
  },
  getById: async (req, res) => {
    const { id } = req.params;
    getById(res, Example, id);
  }
}

module.exports = {
  routes
};