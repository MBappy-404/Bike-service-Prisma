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
exports.bikeController = void 0;
const catchAsync_1 = require("../../helper/catchAsync");
const sendResponse_1 = require("../../helper/sendResponse");
const http_status_1 = __importDefault(require("http-status"));
const bike_service_1 = require("./bike.service");
const createBike = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield bike_service_1.bikeService.createBike(req.body);
    (0, sendResponse_1.sendResponse)(res, {
        status: http_status_1.default.CREATED,
        success: true,
        message: "Bike added successfully",
        data: result,
    });
}));
const getAllBike = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield bike_service_1.bikeService.getAllBike();
    (0, sendResponse_1.sendResponse)(res, {
        status: http_status_1.default.OK,
        success: true,
        message: "Bikes fetched successfully",
        data: result,
    });
}));
const getBike = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { bikeId } = req.params;
    const result = yield bike_service_1.bikeService.getBike(bikeId);
    (0, sendResponse_1.sendResponse)(res, {
        status: http_status_1.default.OK,
        success: true,
        message: "Bike fetched successfully",
        data: result,
    });
}));
exports.bikeController = {
    createBike,
    getAllBike,
    getBike
};
