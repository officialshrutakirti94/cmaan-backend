import express from "express";
import { create, fetch } from "../controller/userController.js";


const route=express.Router()

route.get("/fetch",fetch)

route.post("/add-user",create)

export default route;