import { dbContext } from "../db/DbContext"


class StarsService {
  async getAll(query = {}) {
    return await dbContext.Stars.find(query)
  }


  async getById(id) {
    let galaxy = await dbContext.Stars.findById(id)
    return galaxy
  }


  async create(body) {
    let galaxy = dbContext.Stars.create(body)
    return galaxy
  }

}

export const starsService = new StarsService()