import { getRepository } from 'typeorm'
import Pub from './../models/Pub'
import AppError from '../errors/AppError';



interface Request {
  city: string;
  uf: string;
}

export default class ListPubInCity{



  public async execute({city, uf}: Request): Promise<Pub[]>{
    const pubsRepository = getRepository(Pub);


    if(city === "undefined" ||uf === "undefined"){
      throw new AppError("Please enter the all parameters (city, uf)")
    }


    const pubs = await pubsRepository.find( { where: { city: city  } } )

    const pubsFilteredByCity = pubs.filter(pub => pub.uf === uf);

    console.log("Pubs Filtered" + pubsFilteredByCity)
    return pubsFilteredByCity



  }

}
