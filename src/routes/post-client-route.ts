import {Request, Response, Application} from "express";
import {handleExpressError} from "@jmondi/oauth2-server/dist/adapters/express";
import {Client} from "../entities/client";
import {ClientRepository} from "../repositories/client-repository";

export default (
  app: Application,
  clientRepository: ClientRepository,
) => app.post("/client", async (req: Request, res: Response) => {

  try {

    const {name, redirectUris} = req.body;

    console.log(req.body);

    if (!name || typeof name !== 'string') {
      return res.status(400).json({error: 'name is required'});
    }

    if (!redirectUris || !Array.isArray(redirectUris)) {
      return res.status(400).json({error: 'redirectUris is required'});
    }

    const client = await clientRepository.persist(new Client(name, redirectUris));

    res.status(201).json(client);

  } catch (e) {
    handleExpressError(e, res);
  }
});