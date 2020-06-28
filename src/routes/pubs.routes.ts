import Router, { request, response } from 'express'
import CreatePubService from '../service/CreatePubService';
import ListPubsInCity from './../service/ListPubsInCity'

const pubsRouter = Router();



pubsRouter.get('/', async (request, response)=>{
    const {city, uf} = request.query;

    const searchParameter = {
      city: String(city),
      uf: String(uf)
    }
    const listPubService  = new ListPubsInCity();



    const pubs = await listPubService.execute({ city: searchParameter.city, uf: searchParameter.uf });


    response.json(pubs)
})

pubsRouter.post('/', async (request, response)=>{
  const {name, city, uf, latitude, longitude} = request.body;
  const createPubService = new CreatePubService();
  const pub = await createPubService.execute({name, city, uf, latitude, longitude});
  return response.status(201).json(pub);
})


export default pubsRouter;
