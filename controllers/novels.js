const models = require('../models')

const getNovelsWithAuthorsAndGenres = async (request, response) => {
  const novels = await models.Novels.findAll({
    include: [{
      model: models.Authors
    }, { model: models.Genres }]
  })

  return response.send(novels)
}

const getNovelWithAuthorGenre = async (request, response) => {
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
}

module.exports = { getNovelsWithAuthorsAndGenres, getNovelWithAuthorGenre }

