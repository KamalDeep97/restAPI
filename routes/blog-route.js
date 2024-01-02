import express from "express";
import { addBlog, deletebyId, getAllBlogs, getbyId, updateBlog } from "../controllers/blog-controller.js";

const blogRouter = express.Router();

blogRouter.get('/', getAllBlogs);

blogRouter.post('/add', addBlog)

blogRouter.put('/update/:id', updateBlog);

blogRouter.get('/:id', getbyId);

blogRouter.delete('/:id', deletebyId);
export default blogRouter;

