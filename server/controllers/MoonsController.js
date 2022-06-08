import { moonsService } from "../services/MoonsService"
import BaseController from "../utils/BaseController"


export class MoonsController extends BaseController {
  constructor() {
    super('api/moons')
    this.router
      .get('', this.getAll)
      .get('/:id', this.getById)
      .post('', this.create)
  }

  async getAll(req, res, next) {
    try {
      let moons = await moonsService.getAll(req.query)
      return res.send(moons)
    } catch (error) {
      next(error)
    }
  }

  async getById(req, res, next) {
    try {
      let moons = await moonsService.getById(req.params.id)
      return res.send(moons)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      let moons = await moonsService.create(req.body)
      return res.send(moons)
    } catch (error) {
      next(error)
    }
  }
}
