const models = require('../models')

const getNovelsWithAuthorsAndGenres = async (request, response) => {
  const novels = await models.Novels.findAll({
    include: [{
      model: models.Authors
    }, { model: models.Genres }]
  })

  return response.send(novels)
}

module.exports = { getNovelsWithAuthorsAndGenres }

