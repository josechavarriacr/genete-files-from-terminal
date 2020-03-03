const { JoseRafaelChavarria } = require('@migratory/db')

const HandleCRUD = require('../tools/genericCrud')

const crud = new HandleCRUD()

async function findOne(req, res, next) {
  await crud.findOne(req, res, next, JoseRafaelChavarria)
}

async function findAll(req, res, next) {
  await crud.findAll(req, res, next, JoseRafaelChavarria)
}

async function create(req, res, next) {
  await crud.create(req, res, next, JoseRafaelChavarria)
}

async function update(req, res, next) {
  await crud.update(req, res, next, JoseRafaelChavarria)
}

async function remove(req, res, next) {
  await crud.delete(req, res, next, JoseRafaelChavarria)
}

module.exports = {
  findOne,
  findAll,
  create,
  update,
  remove,
}