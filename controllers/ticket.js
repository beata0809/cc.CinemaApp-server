const { create, getAll, getById, deleteById, updateModel, deleteModel } = require('../services/routing');

const Ticket = require('../models/Ticket');

const routes ={
  create: async (req, res) => {
    const data = req.body;
    create(res, Ticket, data);
  },
  getAll: async (req, res) => {
    getAll(res, Ticket);
  },
  getById: async (req, res) => {
    const { id } = req.params;
    getById(res, Ticket, id);
  },
  deleteById: async (req, res) => {
    const { id } = req.params;
    deleteById(res, Ticket, id);
  },
  deleteModel: async (req, res) => {
    const data = req.body;
    deleteModel(res, Ticket, data);
  },
  updateModel: async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    updateModel(res, Ticket, data, id);
  }
}

module.exports = {
  routes
};