'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('authors', [
      { firstName: 'Stoker', lastName: 'Bram' },
      { firstName: 'Oscar', lastName: 'Wilde' },
      { firstName: 'Alice', lastName: 'Walker' },
      { firstName: 'Leo', lastName: 'Tolstoy' },
      { firstName: 'Charles', lastName: 'Dickens' },
      { firstName: 'Arthur', lastName: 'Miller' },
      { firstName: 'Alexandre', lastName: 'Dumas' },
      { firstName: 'Arthur, Conan', lastName: 'Doyle' },
      { firstName: 'Robert, Louis', lastName: 'Stevenson' },
      { firstName: 'Fyodor', lastName: 'Dostoyevsky' },
      { firstName: 'Agatha', lastName: 'Christie' },
      { firstName: 'Ray', lastName: 'Bradbury' },
      { firstName: 'George', lastName: 'Orwell' },
      { firstName: 'H.G.', lastName: 'Wells' },
      { firstName: 'Chinua', lastName: 'Achebe' },
    ])
    await queryInterface.bulkInsert('novels', [
      { title: 'Dracula', authorId: 1 },
      { title: 'The Picture of Dorian Gray', authorId: 2 },
      { title: 'The Color Purple', authorId: 3 },
      { title: 'War and Peace', authorId: 4 },
      { title: 'A Tale of Two Cities', authorId: 5 },
      { title: 'The Crucible', authorId: 6 },
      { title: 'The Three Musketeers', authorId: 7 },
      { title: 'The Hound of the Baskervilles', authorId: 8 },
      { title: 'The Strange Case of Dr. Jekyll and Mr. Hyde', authorId: 9 },
      { title: 'Crime and Punishment', authorId: 10 },
      { title: 'Murder on the Orient Express', authorId: 11 },
      { title: 'Fahrenheit 451', authorId: 12 },
      { title: 'Animal Farm', authorId: 13 },
      { title: 'The Time Machine', authorId: 14 },
      { title: 'Things Fall Apart', authorId: 15 },
    ])
    await queryInterface.bulkInsert('genres', [
      { name: 'Fiction' },
      { name: 'Horror' },
      { name: 'Adventure' },
      { name: 'Science Fiction' },
      { name: 'Gothic' },
      { name: 'Fantasy' },
      { name: 'Historical Fiction' },
      { name: 'War' },
      { name: 'Russian Literature' },
      { name: 'Plays' },
      { name: 'French Literature' },
      { name: 'Crime' },
      { name: 'Thriller' },
      { name: 'Mystery' },
      { name: 'Dystopia' },
      { name: 'Time Travel' },
      { name: 'African Literature' },
      { name: 'drama' },
    ])

    return queryInterface.bulkInsert('novelsGenres', [
      { novelId: 1, genreId: 1 },
      { novelId: 1, genreId: 2 },
      { novelId: 1, genreId: 6 },
      { novelId: 2, genreId: 1 },
      { novelId: 2, genreId: 2 },
      { novelId: 2, genreId: 5 },
      { novelId: 2, genreId: 6 },
      { novelId: 3, genreId: 1 },
      { novelId: 3, genreId: 7 },
      { novelId: 4, genreId: 1 },
      { novelId: 4, genreId: 7 },
      { novelId: 4, genreId: 8 },
      { novelId: 4, genreId: 9 },
      { novelId: 5, genreId: 1 },
      { novelId: 5, genreId: 7 },
      { novelId: 6, genreId: 1 },
      { novelId: 6, genreId: 7 },
      { novelId: 6, genreId: 10 },
      { novelId: 6, genreId: 18 },
      { novelId: 7, genreId: 1 },
      { novelId: 7, genreId: 3 },
      { novelId: 7, genreId: 7 },
      { novelId: 7, genreId: 11 },
      { novelId: 8, genreId: 1 },
      { novelId: 8, genreId: 12 },
      { novelId: 8, genreId: 13 },
      { novelId: 8, genreId: 14 },
      { novelId: 9, genreId: 1 },
      { novelId: 9, genreId: 2 },
      { novelId: 9, genreId: 4 },
      { novelId: 9, genreId: 14 },
      { novelId: 10, genreId: 1 },
      { novelId: 10, genreId: 9 },
      { novelId: 10, genreId: 14 },
      { novelId: 11, genreId: 1 },
      { novelId: 11, genreId: 14 },
      { novelId: 12, genreId: 1 },
      { novelId: 12, genreId: 4 },
      { novelId: 12, genreId: 15 },
      { novelId: 13, genreId: 1 },
      { novelId: 13, genreId: 4 },
      { novelId: 13, genreId: 15 },
      { novelId: 14, genreId: 1 },
      { novelId: 14, genreId: 4 },
      { novelId: 14, genreId: 16 },
      { novelId: 15, genreId: 1 },
      { novelId: 15, genreId: 7 },
      { novelId: 15, genreId: 17 },
    ])
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('authors')
    await queryInterface.bulkDelete('novels')
    await queryInterface.bulkDelete('genres')

    return queryInterface.bulkDelete('novelsGenres')
  }
}











