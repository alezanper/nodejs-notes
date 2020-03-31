// Call json schema
const Post = require("../models/post");

// Implementing get method
exports.getPosts = (req, res) =>{
    const posts = Post.find().then((posts)=>{
        res.status(200).json({
            posts: posts
        })
    })
    .catch(err => console.log(err))
};

// Implementing post method
exports.createPost = (req, res) =>{
    const post = new Post(req.body);
    //console.log("CREATING POST: ", req.body);
    post.save((err, result) => {
        if(err){
            return res.status(400).json({
                error: err
            })
        }
        res.status(200).json({
            post: result
        })
    })
};
