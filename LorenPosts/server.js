var express = require('express')
var bodyParser = require('body-parser')
var Post = require('./models/post')

var app = express()
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/posts', function(req, res, next) {
    Post.find(function(err, posts) {
        if (err) { return next(err) }
        res.json(posts)
    })
})
app.get('/', function(req, res) {
    res.sendfile('layouts/posts.html')
})



app.post('/api/posts', function(req, res, next) {
    var post = new Post({
        //username: 'Johhny Greengo!',
        //body: 'Getting Express Off!'
        username: req.body.username,
        body: req.body.body

    })
    console.log(req.body.username)
    post.save(function(err, post) {
        if (err) { return next(err) }
        res.status(201).json(post)
    })
})


app.listen(3000, function() {
    console.log('Server listening on Port', 3000)
})