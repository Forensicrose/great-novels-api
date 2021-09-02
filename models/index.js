const Sequelize = require('sequelize')
const AuthorsModel = require('./authors')
const NovelsModel = require('/novels')
const GenresModel = require('./novels')
const NovelsGenresModel = require('novelsGenres')

const connection = new Sequelize('books', 'greatReader', 'BoOk$!', {
  host: 'localhost', dialect: 'mysql'
})

const Authors = AuthorsModel(connection, Sequelize)
const Novels = NovelsModel(connection, Sequelize, Authors)
const Genres = GenresModel(connection, Sequelize)
const NovelsGenres = NovelsGenresModel(connection, Sequelize, Novels, Genres)

Novels.belongsTo(Authors)

Novels.belongsToMany(Genres, { through: NovelsGenres })
Genres.belongsToMany(Novels, { through: NovelsGenres })

module.exports = {
  Authors,
  Novels,
  Genres,
  NovelsGenres,
}

