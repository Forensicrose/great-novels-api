const models = require('../models')

const getAllAuthors = async (request, response) => {
  const authors = await models.Authors.findAll()

  return response.send(authors)
}


const getAuthorBySearchTerm = async (req, res) => {
  const { searchTerm } = req.params

  const authorsName = await models.Authors.findOne({
    where: {
      [models.Op.or]: [
        { id: searchTerm },
        { lastName: { [models.Op.like]: `%${searchTerm}%` } },
      ],
    },
    include: [
      {
        model: models.Novels,
        include: [{ model: models.Genres }],
      },
    ],

  })

  return authorsName
    ? res.send(authorsName)
    : res.sendStatus(404)
}


module.exports = { getAllAuthors, getAuthorBySearchTerm }

