import { dbContext } from "../db/DbContext"


class MoonsService {
  async getAll(query = {}) {
    return await dbContext.Moons.find(query)
  }


  async getById(id) {
    let galaxy = await dbContext.Moons.findById(id)
    return galaxy
  }


  async create(body) {
    let galaxy = dbContext.Moons.create(body)
    return galaxy
  }

}

export const moonsService = new MoonsService()