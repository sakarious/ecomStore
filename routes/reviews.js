const express = require('express')
const route = express.Router({ mergeParams: true })

//Get reviews index page
route.get('/', (req, res, next) => {
    res.send('You tried visting "'+req.url+'" GET /reviews/index: reviews Index Page')
})

//Create new reviews
route.post('/', (req, res, next) => {
    res.send('You tried visting "'+req.url+'" POST /reviews: Create New reviews')
})

//Edit single reviews
route.get('/:review_id/edit', (req, res, next) => {
    res.send('You tried visting "'+req.url+'" GET /posts/:id/reviewss: Edit Single reviews')
})

//Update single reviews
route.put('/:review_id', (req, res, next) => {
    res.send('You tried visting "'+req.url+'" PUT /posts/:id/reviewss: Update Single reviews')
})

//Delete reviews
route.delete('/:review_id', (req, res, next) => {
    res.send('You tried visting "'+req.url+'" DELETE /posts/:id/reviewss: Delete Single reviews')
})


module.exports = route