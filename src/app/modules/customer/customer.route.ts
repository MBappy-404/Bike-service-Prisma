import express from "express"
import { customerController } from "./customer.controller";


const router = express.Router();


router.post('/', customerController.createCustomer);
router.get('/', customerController.getAllCustomers);
router.get('/:customerId', customerController.getCustomer);
router.put('/:customerId', customerController.updateCustomer);
router.delete('/:customerId', customerController.deleteCustomer);

export const CustomersRoutes = router;