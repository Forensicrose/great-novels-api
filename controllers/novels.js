const models = require('../models')

const getAllNovelsWithAuthorsAndGenres = async (request, response) => {
  const novels = await models.Novels.findAll({
    include: [{
      model: models.Authors
    }, { model: models.Genres }]
  })

  return response.send(novels)
}

// const getNovelsBySearchTerm = async (request, response) => {
//   try {
//     const { searchTerm } = request.params

//     const novel = await models.Novels.findOne({
//       where: { id },
//       include: [{ model: models.Authors },
//         { model: models.Genres }
//       ]
//     })

//     return novel
//       ? response.send(novel)
//       : response.sendStatus(404)
//   } catch (error) {
//     return response.status(500).send('Could not find entry. Please try again!')
//   }
// }
const getNovelBySearchTerm = async (req, res) => {
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
}

module.exports = { getAllNovelsWithAuthorsAndGenres, getNovelBySearchTerm }

