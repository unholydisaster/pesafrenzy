import mongoose from "mongoose"

let UserNotes;
try{
  UserNotes=mongoose.model("usernotes")
}catch{
  // Personal Info schema
const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  note: {
    type: String,
    required: true,
  },
  imageUrl:{
    type:String,
    required:true,
  },
  userOwner:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"users"
  }
});

UserNotes=mongoose.model("usernotes", noteSchema);
}

export {UserNotes}

