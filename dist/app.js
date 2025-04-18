"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const http_status_1 = __importDefault(require("http-status"));
const globalErrorHandler_1 = require("./app/middleware/globalErrorHandler");
const customer_route_1 = require("./app/modules/customer/customer.route");
const bike_routes_1 = require("./app/modules/bike/bike.routes");
const services_route_1 = require("./app/modules/services/services.route");
// import appRouter from "./app/routes";
// middlewares 
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.use("/api/customers", customer_route_1.CustomersRoutes);
app.use("/api/bikes", bike_routes_1.BikeRoutes);
app.use("/api/services", services_route_1.ServicesRoutes);
app.get("/", (req, res) => {
    res.send("Bike service server is running");
});
// app.use("/api", appRouter);
app.use(globalErrorHandler_1.globalErrorHandler);
app.use((req, res, next) => {
    res.status(http_status_1.default.NOT_FOUND).json({
        success: false,
        message: "Api Not Found",
        error: {
            path: req.originalUrl,
            message: "Your request path is not found"
        }
    });
});
exports.default = app; // Export the app instance for use in server.ts
