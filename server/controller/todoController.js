import Todo from "../models/Todo.js";

export const createTodo = async (req, res) => {
  try {
    const { title } = req.body;
    if (!title) return res.status(400).json({ success: false, message: "Title is required" });

    const todo = new Todo({ title });
    const saveTodo = await todo.save();

    return res.status(201).json({ success: true, message: "Todo created successfully", data: saveTodo});
  } catch (error) {
    console.error("Error in createTodo:", error);
    return res.status(500).json({ success: false, message: "Something went wrong while creating todo" });
  }
};


export const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    const message = todos.length ? "Todos fetched successfully" : "No todos found";
    return res.status(200).json({ success: true, message, data: todos });
  } catch (error) {
    console.error("Error in getTodos:", error);
    return res.status(500).json({ success: false, message: "Something went wrong while getting all todos" });
  }
};

export const markCompleted = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findByIdAndUpdate(id, { status: "Completed" }, { new: true });
    if (!todo) return res.status(404).json({ success: false, message: "Todo not found" });

    return res.status(200).json({ success: true, message: "Todo marked as completed", data: todo });
  } catch (error) {
    console.error("Error in markCompleted:", error);
    return res.status(500).json({ success: false, message: "Something went wrong while markCompleted" });
  }
};
