import { catchAsync } from "../../helper/catchAsync";
import { sendResponse } from "../../helper/sendResponse";
 
import HttpStatus from "http-status";
import { bikeService } from "./bike.service";

const createBike = catchAsync(async (req, res) => {
  const result = await bikeService.createBike(req.body);
  sendResponse(res, {
    status: HttpStatus.CREATED,
    success: true,
    message: "Bike added successfully",
    data: result,
  });
});

const getAllBike = catchAsync(async (req, res) => {
  const result = await bikeService.getAllBike();
  sendResponse(res, {
    status: HttpStatus.OK,
    success: true,
    message: "Bikes fetched successfully",
    data: result,
  });
});

const getBike = catchAsync(async (req, res) => {
  const { bikeId } = req.params;
  const result = await bikeService.getBike(bikeId);
  sendResponse(res, {
    status: HttpStatus.OK,
    success: true,
    message: "Bike fetched successfully",
    data: result,
  });
});

 
export const bikeController = {
   createBike,
   getAllBike,
   getBike
  
};
