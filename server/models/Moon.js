import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

export const MoonSchema = new Schema({
  name: { type: String, required: true },
  size: { type: String, required: true },
  planetsId: { type: ObjectId, ref: 'Planet', required: true },
})