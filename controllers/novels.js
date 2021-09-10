const { response } = require('express')
const models = require('../models')

const getAllNovelsWithAuthorsAndGenres = async (request, response) => {
  const novels = await models.Novels.findAll({
    include: [{
      model: models.Authors
    }, { model: models.Genres }]
  })

  return response.send(novels)
}
const getNovelBySearchTerm = async (req, res) => {
  try {
    const { searchTerm } = req.params

    const novel = await models.Novels.findOne({
      where: {
        [models.Op.or]: [
          { id: searchTerm },
          { title: { [models.Op.like]: `%${searchTerm}%` } },
        ],
      },
      include: [{ model: models.Authors },
        { model: models.Genres },
      ]
    })

    return novel
      ? res.send(novel)
      : res.sendStatus(404)
  } catch (error) {
    return response.status(500).send('Could not find entry. Please try again!')
  }
}

module.exports = { getAllNovelsWithAuthorsAndGenres, getNovelBySearchTerm }

