var Post = require('../../models/post')
var router = require('express').Router()

router.get('/', function(req, res, next) {
    Post.find()
        .sort('-date')
        .exec(function(err, posts) {
            if (err) { return next(err) }
            res.json(posts)
        })
})

router.post('/', function(req, res, next) {
    var post = new Post({
            username: req.body.username,
            body: req.body.body
        })
        //console.log("this is the post:", post)
        //console.log("this is the req:", req.body)

    post.save(function(err, post) {
        if (err) { return next(err) }
        res.status(201).json(post)
    })
})
module.exports = router