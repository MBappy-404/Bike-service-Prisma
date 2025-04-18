import { catchAsync } from "../../helper/catchAsync";
import { sendResponse } from "../../helper/sendResponse";
 
import HttpStatus from "http-status";
import { services } from "./services.service";
 

const createService = catchAsync(async (req, res) => {
  const result = await services.createService(req.body);
  sendResponse(res, {
    status: HttpStatus.CREATED,
    success: true,
    message: "Service record created successfully",
    data: result,
  });
});

const getAllService = catchAsync(async (req, res) => {
  const result = await services.getAllService();
  sendResponse(res, {
    status: HttpStatus.OK,
    success: true,
    message: "Service records fetched successfully",
    data: result,
  });
});

const getService = catchAsync(async (req, res) => {
  const { serviceId } = req.params;
  const result = await services.getService(serviceId);
  sendResponse(res, {
    status: HttpStatus.OK,
    success: true,
    message: "Service record fetched successfully",
    data: result,
  });
});


const markService = catchAsync(async (req, res) => {
  const { serviceId } = req.params;
  const result = await services.markService(serviceId, req.body);
  sendResponse(res, {
    status: HttpStatus.OK,
    success: true,
    message: "Service marked as completed",
    data: result,
  });
});

const servicesStatus = catchAsync(async (req, res) => {
  const result = await services.servicesStatus();
  sendResponse(res, {
    status: HttpStatus.OK,
    success: true,
    message: "Overdue or pending services fetched successfully",
    data: result,
  });
}); 

export const servicesController = {
    createService,
    getAllService,
    getService,
    markService,
    servicesStatus
  
};
