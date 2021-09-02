const Novels = (connection, Sequelize, Authors) => {
  return connection.define('novels', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    title: { type: Sequelize.STRING },
    authorsId: { type: Sequelize.INTEGER, references: { model: Authors, key: 'id' } }
  },
  { paranoid: true })
}

module.exports = Novels


