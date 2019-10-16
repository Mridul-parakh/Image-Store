const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const ImageSchema=new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
      },
    path:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
});

const Image=mongoose.model('image',ImageSchema);
module.exports=Image;