import express, { NextFunction, Request, Response }  from "express";
import cors from "cors";
import  HttpStatus  from "http-status";
import { globalErrorHandler } from "./app/middleware/globalErrorHandler";
import { CustomersRoutes } from "./app/modules/customer/customer.route";
import { BikeRoutes } from "./app/modules/bike/bike.routes";
import { ServicesRoutes } from "./app/modules/services/services.route";
 
 
 
// import appRouter from "./app/routes";
 
 


// middlewares 
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


app.use("/api/customers", CustomersRoutes)
app.use("/api/bikes", BikeRoutes)
app.use("/api/services", ServicesRoutes)



app.get("/", (req, res) => {
  res.send("Bike service server is running");
});

// app.use("/api", appRouter);

app.use(globalErrorHandler);
app.use((req: Request, res: Response, next: NextFunction)=>{

  res.status(HttpStatus.NOT_FOUND).json({
    success: false,
    message: "Api Not Found",
    error:{
      path: req.originalUrl,
      message: "Your request path is not found"
    }
  })
})

export default app; // Export the app instance for use in server.ts
