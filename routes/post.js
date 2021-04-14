const express = require('express')
const route = express.Router()

//Get Post index page
route.get('/', (req, res) => {
    res.send('You tried visting "'+req.url+'" GET /post/index: Post Index Page')
})

//Get new post page
route.get('/new', (req, res) => {
    res.send('You tried visting "'+req.url+'" GET /post/new: See Lastest Posting Page')
})

//Create new post
route.post('/', (req, res) => {
    res.send('You tried visting "'+req.url+'" POST /post: Create New Post')
})

//See single post
route.get('/:id', (req, res) => {
    res.send('You tried visting "'+req.url+'" GET /posts: See Single Post')
})

//Edit single post
route.get('/:id/edit', (req, res) => {
    res.send('You tried visting "'+req.url+'" GET /posts: Edit Single Post')
})

//Update single post
route.put('/:id', (req, res) => {
    res.send('You tried visting "'+req.url+'" PUT /posts: Update Single Post')
})

//See single post
route.delete('/:id', (req, res) => {
    res.send('You tried visting "'+req.url+'" DELETE /posts: Delete Single Post')
})


module.exports = route