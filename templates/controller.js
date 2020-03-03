const { model } = require('@migratory/db')

const HandleCRUD = require('../tools/genericCrud')

const crud = new HandleCRUD()

async function findOne(req, res, next) {
  await crud.findOne(req, res, next, model)
}

async function findAll(req, res, next) {
  await crud.findAll(req, res, next, model)
}

async function create(req, res, next) {
  await crud.create(req, res, next, model)
}

async function update(req, res, next) {
  await crud.update(req, res, next, model)
}

async function remove(req, res, next) {
  await crud.delete(req, res, next, model)
}

module.exports = {
  findOne,
  findAll,
  create,
  update,
  remove
}