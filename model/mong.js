import 'dotenv/config'
import mongoose from "mongoose"


// console.log(process.env.apiKey)

const CheckSchema = new mongoose.Schema({
  userName : String,
  name : String,
  email : String,
  password : String
});



export const datas = mongoose.model("mong", CheckSchema)