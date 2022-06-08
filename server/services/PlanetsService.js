import { dbContext } from "../db/DbContext"


class PlanetsService {
  async getAll(query = {}) {
    return await dbContext.Planets.find(query)
  }


  async getById(id) {
    let galaxy = await dbContext.Planets.findById(id)
    return galaxy
  }


  async create(body) {
    let galaxy = dbContext.Planets.create(body)
    return galaxy
  }
}

export const planetsService = new PlanetsService()