const NovelsGenres = (connection, Sequelize, Novels, Genres) => {
  return connection.define('novelsGenres', {
    novelId: { type: Sequelize.INTEGER, primaryKey: true, references: { model: Novels, key: 'id' } },
    genreId: { type: Sequelize.INTEGER, primaryKey: true, references: { model: Genres, key: 'id' } },
  },
  { paranoid: true })
}

module.exports = NovelsGenres
