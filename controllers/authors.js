const models = require('../models')

const getAllAuthors = async (request, response) => {
  const authors = await models.Authors.findAll()

  return response.send(authors)
}


const getAuthorsByIdWithNovelsAndGenres = async (request, response) => {
  try {
    const { id } = request.params

    const author = await models.Authors.findOne({
      where: { id },
      include: [{
        model: models.Novels,
        include: { model: models.Genres }
      }]
    })

    return author
      ? response.send(author)
      : response.sendStatus(404)
  } catch (error) {
    return response.status(500).send('Could not find entry. Please try again!')
  }
}


module.exports = { getAllAuthors, getAuthorsByIdWithNovelsAndGenres }
