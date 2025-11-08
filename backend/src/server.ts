import { Request, Response } from "express";
import cors from "cors";
import express from "express";

// API ROUTES IMPORTS
import taller_1_routes from "./taller_1/taller1.routes";
import taller_2_routes from "./taller_2/taller2.routes";
import taller_3_routes from "./taller_3/taller3.routes";

// MIDDLEWARES
const app = express();

app.use(cors());
app.use(express.json());

// API ROUTES
app.use("/taller1", taller_1_routes);

app.use("/taller2", taller_2_routes);

app.use("/taller3", taller_3_routes);

// FALLBACKS

function routeNotFound(request: Request, response: Response) {
  response.status(404).json({
    message: "Route not found.",
  });
}

app.use(routeNotFound);

app._router.stack.forEach((r: any) => {
  if (r.route && r.route.path) {
    console.log(`${Object.keys(r.route.methods)[0].toUpperCase()} ${r.route.path}`);
  } else if (r.name === 'router') {
    r.handle.stack.forEach((handler: any) => {
      const route = handler.route;
      if (route) {
        const method = Object.keys(route.methods)[0].toUpperCase();
        console.log(`${method} ${r.regexp}${route.path}`);
      }
    });
  }
});


// START SERVER
app.listen(8080, () => {
  console.log("Server listening to port 8080.");
});
