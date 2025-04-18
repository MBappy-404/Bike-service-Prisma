import { catchAsync } from "../../helper/catchAsync";
import { sendResponse } from "../../helper/sendResponse";
import { customerService } from "./customer.service";
import HttpStatus from "http-status";

const createCustomer = catchAsync(async (req, res) => {
  const result = await customerService.createCustomer(req.body);
  sendResponse(res, {
    status: HttpStatus.CREATED,
    success: true,
    message: "Customer created successfully ",
    data: result,
  });
});

const getAllCustomers = catchAsync(async (req, res) => {
  const result = await customerService.getAllCustomers();
  sendResponse(res, {
    status: HttpStatus.OK,
    success: true,
    message: "Customers fetched successfully ",
    data: result,
  });
});

const getCustomer = catchAsync(async (req, res) => {
  const { customerId } = req.params;
  const result = await customerService.getCustomer(customerId);
  sendResponse(res, {
    status: HttpStatus.OK,
    success: true,
    message: "Customer fetched successfully ",
    data: result,
  });
});

const updateCustomer = catchAsync(async (req, res) => {
  const { customerId } = req.params;
  const result = await customerService.updateCustomer(customerId, req.body);
  sendResponse(res, {
    status: HttpStatus.OK,
    success: true,
    message: "Customer updated successfully",
    data: result,
  });
});

const deleteCustomer = catchAsync(async (req, res) => {
  const { customerId } = req.params;
  await customerService.deleteCustomer(customerId);
  sendResponse(res, {
    status: HttpStatus.OK,
    success: true,
    message: "Customer deleted successfully",
  });
});

export const customerController = {
  createCustomer,
  getAllCustomers,
  getCustomer,
  updateCustomer,
  deleteCustomer,
};
