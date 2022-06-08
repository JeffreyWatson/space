import { starsService } from "../services/StarsService"
import BaseController from "../utils/BaseController"


export class StarsController extends BaseController {
  constructor() {
    super('api/stars')
    this.router
      .get('', this.getAll)
      .get('/:id', this.getById)
      .post('', this.create)
  }

  async getAll(req, res, next) {
    try {
      let stars = await starsService.getAll(req.query)
      return res.send(stars)
    } catch (error) {
      next(error)
    }
  }

  async getById(req, res, next) {
    try {
      let stars = await starsService.getById(req.params.id)
      return res.send(stars)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      let stars = await starsService.create(req.body)
      return res.send(stars)
    } catch (error) {
      next(error)
    }
  }
}