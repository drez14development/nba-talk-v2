const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    heading:{
        type: String,
        required: true,
        maxlength: [100, 'Title must be shorter than 30 characters']
    },
    slug:{
        type: String
    },
    description:{
        type: String,
        required: true,
        maxlength: [250, 'Description must be shorter than 250 characters.']
    },
    imgUrl:{
        type: String,
        required: true
    },
    content:{
        type: String,
        required: true
    },
    created_at:{
        type: Date
    }
})

module.exports = mongoose.models.Post || mongoose.model('Post', PostSchema);