const express = require('express')
const mongoose = require('mongoose')
const articleRouter = require('./routes/articles')
const app = express()

mongoose.connect('mongodb://localhost/blog', { useUnifiedTopology: true, useNewUrlParser: true })

app.set('view engine', 'ejs')

app.use('/articles', articleRouter)
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    const articles = [{
        title: 'Test Article',
        createdAt: new Date(),
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, dolores pariatur. Laborum odio laboriosam, numquam, nesciunt soluta temporibus ratione amet aspernatur veniam quo beatae vitae facilis repudiandae voluptatem ex corrupti.'
    }]
    res.render('articles/index', {articles})
})

const port = 8000 || process.env
app.listen(port, () => console.log(`Example app listening on port http://127.0.0.1:${port}`))