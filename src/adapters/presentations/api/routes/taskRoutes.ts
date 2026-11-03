import { Router } from "express";
import { expressRouterAdapter } from "../../../expressRouterAdapter";
import { deleteTaskControllerFactory } from "../../../factories/deleteTaskControllerFactory";
import { taskControllerFactory } from "../../../factories/taskControllerFactory";

export default (router: Router): void => {
  router.post("/tasks", expressRouterAdapter(taskControllerFactory()));
  router.delete("/tasks", expressRouterAdapter(deleteTaskControllerFactory()));
};
