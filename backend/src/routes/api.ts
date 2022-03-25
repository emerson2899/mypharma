import { Router } from "express";
import * as apiControllers from '../controllers/apiControllers'

const router = Router();

router.get('/ping', apiControllers.ping );

router.get('/random', apiControllers.random);

router.get('/nome/:nome', apiControllers.nome);

router.get('/homeUSer', apiControllers.homeUSer);

router.get('/homeRemedios', apiControllers.homeRemedios);

router.get('/homeBrand', apiControllers.homeBrand);
router.get('/homeCategori', apiControllers.homeCategori);



export default router