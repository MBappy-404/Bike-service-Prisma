"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServicesRoutes = void 0;
const express_1 = __importDefault(require("express"));
const services_controller_1 = require("./services.controller");
const router = express_1.default.Router();
router.get('/status', services_controller_1.servicesController.servicesStatus);
router.post('/', services_controller_1.servicesController.createService);
router.get('/', services_controller_1.servicesController.getAllService);
router.get('/:serviceId', services_controller_1.servicesController.getService);
router.put('/:serviceId/complete', services_controller_1.servicesController.markService);
exports.ServicesRoutes = router;
