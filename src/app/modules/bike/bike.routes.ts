import express from "express"
import { bikeController } from "./bike.controller";
 


const router = express.Router();


router.post('/', bikeController.createBike);
router.get('/', bikeController.getAllBike);
router.get('/:bikeId', bikeController.getBike);
 

export const BikeRoutes = router;