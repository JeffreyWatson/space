import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

export const StarSchema = new Schema({
  name: { type: String, required: true },
  color: { type: String, required: true },
  galaxiesId: { type: ObjectId, ref: 'Galaxy', required: true }
})