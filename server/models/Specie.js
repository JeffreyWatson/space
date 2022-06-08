import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

export const SpecieSchema = new Schema({
  scientificName: { type: String, required: true },
  galaxiesId: { type: ObjectId, ref: 'Galaxy', required: true },
  starsId: { type: ObjectId, ref: 'Star', required: true },
  planetsId: { type: ObjectId, ref: 'Planet', required: true },
  moonsId: { type: ObjectId, ref: 'Moon', required: true },
})