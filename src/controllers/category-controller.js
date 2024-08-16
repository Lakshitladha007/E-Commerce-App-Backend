const CategoryService = require("../services/category-service");


const categoryService = new CategoryService();

const create = async(req, res) =>{
    try {
        const category = await categoryService.create(req.body);
        return res.status(201).json({
            data: category,
            success: true,
            message: "Successfully created the category",
            err: {}
        })
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: "Cannot create a category",
            err: error
        })
    }
}

const destroy = async (req, res) => {
    try {
        const response = await categoryService.destroy(req.params.id);
        if (!response) {
            return res.status(404).json({
                data: {},
                success: false,
                message: "category doesn't exist",
                err: {}
            })
        }
        return res.status(201).json({
            data: {},
            success: true,
            message: "Successfully deleted a category",
            err: {}
        })
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: "Cannot delete a category",
            err: error
        })
    }
}

const update = async (req, res) => {
    try {
        const category = await categoryService.update(req.params.id, req.body);
        return res.status(201).json({
            data: category,
            success: true,
            message: "Successfully updated the category",
            err: {}
        })
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: "Cannot update a category",
            err: error
        })
    }
}

const get = async (req, res) => {
    try {
        const category = await categoryService.find(req.params.id);
        return res.status(201).json({
            data: category,
            success: true,
            message: "Successfully fetched a category",
            err: {}
        })
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: "Cannot fetch a category ",
            err: error
        })
    }
}

const getAll = async (req, res) => {
    try {
        const categories = await categoryService.getAll();
        return res.status(201).json({
            data: categories,
            success: true,
            message: "Successfully fetched the categories",
            err: {}
        })
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: "Can't fetch the categories",
            err: error
        })
    }
}

module.exports = {
    create,
    update,
    destroy,
    get,
    getAll
}