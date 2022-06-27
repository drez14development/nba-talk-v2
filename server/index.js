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
        res.status(200).send({posts: all_posts});
      });;
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}` )
})

//INSTALL NODEMON SO THAT I DON'T HAVE TO RESTART THE SERVER ALL THE TIME
