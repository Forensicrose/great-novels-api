const models = require('../models')

const getAllNovelsWithAuthorsAndGenres = async (request, response) => {
  const novels = await models.Novels.findAll({
    include: [{
      model: models.Authors
    }, { model: models.Genres }]
  })

  return response.send(novels)
}

const getNovelsByIdWithAuthorsAndGenres = async (request, response) => {
  try {
    const { id } = request.params

    const novel = await models.Novels.findOne({
      where: { id },
      include: [{ model: models.Authors },
        { model: models.Genres }
      ]
    })

    return novel
      ? response.send(novel)
      : response.sendStatus(404)
  } catch (error) {
    return response.status(500).send('Could not find entry. Please try again!')
  }
}

module.exports = { getAllNovelsWithAuthorsAndGenres, getNovelsByIdWithAuthorsAndGenres }

