import express from "express";
import { createTodo, getTodos, markCompleted} from "../controller/todoController.js";

const router = express.Router();

router.post("/", createTodo);
router.get("/", getTodos);
router.patch("/:id", markCompleted);

export default router;
