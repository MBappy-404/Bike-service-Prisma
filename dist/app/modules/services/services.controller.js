"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.servicesController = void 0;
const catchAsync_1 = require("../../helper/catchAsync");
const sendResponse_1 = require("../../helper/sendResponse");
const http_status_1 = __importDefault(require("http-status"));
const services_service_1 = require("./services.service");
const createService = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield services_service_1.services.createService(req.body);
    (0, sendResponse_1.sendResponse)(res, {
        status: http_status_1.default.CREATED,
        success: true,
        message: "Service record created successfully",
        data: result,
    });
}));
const getAllService = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield services_service_1.services.getAllService();
    (0, sendResponse_1.sendResponse)(res, {
        status: http_status_1.default.OK,
        success: true,
        message: "Service records fetched successfully",
        data: result,
    });
}));
const getService = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { serviceId } = req.params;
    const result = yield services_service_1.services.getService(serviceId);
    (0, sendResponse_1.sendResponse)(res, {
        status: http_status_1.default.OK,
        success: true,
        message: "Service record fetched successfully",
        data: result,
    });
}));
const markService = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { serviceId } = req.params;
    const result = yield services_service_1.services.markService(serviceId, req.body);
    (0, sendResponse_1.sendResponse)(res, {
        status: http_status_1.default.OK,
        success: true,
        message: "Service marked as completed",
        data: result,
    });
}));
const servicesStatus = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield services_service_1.services.servicesStatus();
    (0, sendResponse_1.sendResponse)(res, {
        status: http_status_1.default.OK,
        success: true,
        message: "Overdue or pending services fetched successfully",
        data: result,
    });
}));
exports.servicesController = {
    createService,
    getAllService,
    getService,
    markService,
    servicesStatus
};
