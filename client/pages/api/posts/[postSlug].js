import dbConnect from '../../../utils/dbConnect'
import Post from '../../../models/Post'

dbConnect();

export default async(req,res) => {

    const { query:{postSlug}, method} = req; //destructuring:  id = req.query.id / method = req.method

    switch(method){
        case 'GET':
            try{
                const post = await Post.findOne({ slug: postSlug }).exec();
                
                if(!post){
                    return res.status(400).json({success:false})
                }

                return res.status(200).json({success:true, data: post})
            }catch(error){
                res.status(400).json({success:false})
            }
            break;
        case 'PUT':
            try{
                const post = await Post.findByIdAndUpdate(id, req.body, {
                    new: true,
                    runValidators: true
                });

                if(!post){
                    return res.status(400).json({success:false})
                }

                return res.status(200).json({success:true, data: post})
            }catch(error){
                return res.status(400).json({success:false})
            }
            break;
        case 'DELETE':
            try{
                const deletedPost = await Post.deleteOne({_id: id})
                if(!deletedPost){
                    return res.status(400).json({success:false})
                }
                return res.status(200).json({success:true, data: {}})

            }catch(error){
                return res.status(400).json({success:false})   
            }
            break;
        default:
            return res.status(400).json({success:false});
            break;
    }
}