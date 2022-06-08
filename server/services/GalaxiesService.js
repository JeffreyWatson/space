import { dbContext } from "../db/DbContext";


class GalaxiesService {
  async getAll(query = {}) {
    return await dbContext.Galaxies.find(query)
  }


  async getById(id) {
    let galaxy = await dbContext.Galaxies.findById(id)
    return galaxy
  }


  async create(body) {
    let galaxy = dbContext.Galaxies.create(body)
    return galaxy
  }

}

export const galaxiesService = new GalaxiesService()