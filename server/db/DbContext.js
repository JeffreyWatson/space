import mongoose from 'mongoose'
import { ValueSchema } from '../models/Value'
import { GalaxySchema } from '../models/Galaxy'
import { PlanetSchema } from '../models/Planet';
import { MoonSchema } from '../models/Moon';
import { StarSchema } from '../models/Star';
import { SpecieSchema } from '../models/Specie';

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Galaxies = mongoose.model('Galaxy', GalaxySchema);
  Planets = mongoose.model('Planet', PlanetSchema);
  Moons = mongoose.model('Moon', MoonSchema);
  Stars = mongoose.model('Star', StarSchema);
  Species = mongoose.model('Specie', SpecieSchema)
}

export const dbContext = new DbContext()
