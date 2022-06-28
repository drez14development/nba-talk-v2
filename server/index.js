import express from "express";
import dbConnect from "./utils/dbConnect.js";
import PostSchema from "./models/Post.js";
import mongoose from "mongoose";

const app = express();
const port = 5000;

// app.get('/', (req,res) => {
//     res.send('Hello World!')
// })

app.get('/posts', (req, res) => {

    dbConnect();
    const Post = mongoose.model("Post", PostSchema);

    Post.find().exec(function (err, all_posts) {
        if (err) { return next(err); }
        res.status(200).json(all_posts);
      });;
})

app.get('/posts/:slug', (req, res) => {

    dbConnect();
    const Post = mongoose.model("Post", PostSchema);
    const postSlug = req.params.slug;

    Post.findOne({ slug: postSlug }).exec(function (err, postData) {
        if (err) { return next(err); }
        console.log("Retrieving "+ postData.slug);
        res.status(200).json(postData);
      });;
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}` )
})
