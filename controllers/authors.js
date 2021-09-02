const models = require('../models')

// eslint-disable-next-line no-console
// console.log(models)

const getAuthors = async (request, response) => {
  const authors = await models.Authors.findAll()

  return response.send(authors)
}

module.exports = { getAuthors }
