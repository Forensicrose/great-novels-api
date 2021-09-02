const express = require('express')
const app = express()

const { getAuthors, getAuthorswithNovels } = require('./controllers/authors')
const { getAllGenres, } = require('./controllers/genres')

app.use(express.json())

app.get('/authors', getAuthors)


app.get('/authors/:id', getAuthorswithNovels)

app.get('/genres', getAllGenres)


app.listen(1337, () => {
  // eslint-disable-next-line indent
    // eslint-disable-next-line no-console
  console.log('I can hear you from space!')
})
