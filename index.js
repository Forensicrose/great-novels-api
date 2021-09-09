const express = require('express')
const app = express()

const { getAllAuthors, getAuthorsByIdWithNovelsAndGenres, getAuthorByLastname } = require('./controllers/authors')
const { getAllGenres, getGenresByIdWithAllNovelsAndAuthors } = require('./controllers/genres')
const { getAllNovelsWithAuthorsAndGenres, getNovelsByIdWithAuthorsAndGenres, } = require('./controllers/novels')



app.use(express.json())

app.get('/authors', getAllAuthors)

app.get('/authors/:id', getAuthorsByIdWithNovelsAndGenres)

app.get('/authorsName/:lastName', getAuthorByLastname)

app.get('/genres', getAllGenres)

app.get('/genres/:id', getGenresByIdWithAllNovelsAndAuthors)

app.get('/novels', getAllNovelsWithAuthorsAndGenres)

app.get('/novels/:id', getNovelsByIdWithAuthorsAndGenres)

app.listen(1337, () => {
  // eslint-disable-next-line no-console
  console.log('I can hear you from space!')
})
