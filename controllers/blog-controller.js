import Blog from "../model/blog.js";

export const getAllBlogs = async(req, res, next) => {
    let blogs;
    try{
        blogs = await Blog.find();
    } catch(err){
        console.log(err);
    }
    if(!blogs){
        return res.status(404).json({message:"No Blogs found"})
    }
    return res.status(200).json({blogs})
}

export const addBlog = async(req, res, next) => {
    const {title, description, image, user} = req.body;
    const blog = new Blog({
        title,
        description, 
        image, 
        user 
    })
    try {
        await blog.save();
    } catch(err){
        console.log(err);
    }
    return res.status(200).json({blog})
}

export const updateBlog = async(req, res, next) => {
    const {title, description} = req.body;
    const blogId = req.params.id;
    let blog;
    try {
        blog = await Blog.findByIdAndUpdate(blogId, {
            title,
            description
        })
    } catch (err) {
        console.log(err);
    }
    if(!blog) {
        return res.status(404).json({message: "Unable to update the blog"})
    }
    return res.status(200).json({blog})
}

export const getbyId = async(req, res, next) => {
    const id = req.params.id;
    let blog;
    try{
        blog = await Blog.findById(id);
    } catch (err) {
        return console.error(err);
    }
    if(!blog){
        return res.status(404).json({message: "Unable to find the blog"})
    }
    return res.status(200).json({blog})
}

export const deletebyId = async(req, res, next) => {
    const id = req.params.id;
    let blog;
    try {
        blog = await Blog.findByIdAndDelete(id);
    } catch (err) {
        return console.error(err);
    }
    if(!blog){
        return res.status(404).json({message: "Unable to find the blog"})
    }
    return res.status(200).json({message: "Successfully delete"})
}

