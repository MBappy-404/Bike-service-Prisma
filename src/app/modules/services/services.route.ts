import express from "express"
import { servicesController } from "./services.controller";
 
 


const router = express.Router();

router.get('/status', servicesController.servicesStatus);
router.post('/', servicesController.createService);
router.get('/', servicesController.getAllService);
router.get('/:serviceId', servicesController.getService);
router.put('/:serviceId/complete', servicesController.markService);

 

export const ServicesRoutes = router;