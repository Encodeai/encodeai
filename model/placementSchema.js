import mongoose from "mongoose";
const placementSchema = mongoose.Schema({
    placementId:{
        type:String,
        required:true
    },
    studentName:{
        type:String,
        required:true
    },
    companyName:{
        type:String,
        required:true,
    },
    contact:{
        type:String,
        required:true
    },
    designation:{
        type:String,
        required:true
    },
    package:{
        type:String,
        required:true
    },
    profilePic:{
        type:String,
        required:true
    },
    status:{
        type:Boolean,
        default:true
    }
});
export default mongoose.model('placementSchema',placementSchema,'placement');