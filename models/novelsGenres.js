const NovelsGenres = (connection, Sequelize, Novels, Genres) => {
  return connection.define('novelsGenres', {
    novelsId: { type: Sequelize.INTEGER, references: { model: Novels, key: 'id' } },
    genresId: { type: Sequelize.INTEGER, references: { model: Genres, key: 'id' } },
  },
  { paranoid: true })
}

module.exports = NovelsGenres
