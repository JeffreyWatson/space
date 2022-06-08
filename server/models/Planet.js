import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

export const PlanetSchema = new Schema({
  name: { type: String, required: true },
  size: { type: String, required: true },
  starsId: { type: ObjectId, ref: 'Star', required: true },
})