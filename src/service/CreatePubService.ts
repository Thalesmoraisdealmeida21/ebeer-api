import { getRepository } from 'typeorm'
import Pub from './../models/Pub'
import AppError from './../errors/AppError'



interface Request {
  name: string;
  city: string;
  uf: string;
  latitude: number;
  longitude: number;

}

export default class CreatePubService {

  public async execute({name, city, uf, latitude, longitude}: Request): Promise<Pub>{

    const pubsRepository = getRepository(Pub);
    const pubExists = await pubsRepository.findOne( {where: { name } } )


    if(pubExists){
       throw new AppError('this name already used');
    }



    const pubCreated = pubsRepository.create({
      name,
      city,
      uf,
      latitude,
      longitude
    });



    await pubsRepository.save(pubCreated);
    return pubCreated;
  }
}
