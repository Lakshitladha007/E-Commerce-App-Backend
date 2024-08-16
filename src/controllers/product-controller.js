const { ProductService } = require('../services/index');

const productService = new ProductService();

const create = async(req, res) =>{
    try {
        const product = await productService.create(req.body);
        return res.status(201).json({
            data: product,
            success: true,
            message: "Successfully created a product",
            err: {}
        })
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: "Cannot create a product",
            err: error
        })
    }
}

const destroy = async (req, res) => {
    try {
        const response = await productService.destroy(req.params.id);
        if (!response) {
            return res.status(404).json({
                data: {},
                success: false,
                message: "product doesn't exist",
                err: {}
            })
        }
        return res.status(201).json({
            data: {},
            success: true,
            message: "Successfully deleted a product",
            err: {}
        })
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: "Cannot delete a product",
            err: error
        })
    }
}

const update = async (req, res) => {
    try {
        const product = await productService.update(req.params.id, req.body);
        return res.status(201).json({
            data: product,
            success: true,
            message: "Successfully updated the product",
            err: {}
        })
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: "Cannot update a product",
            err: error
        })
    }
}

const get = async (req, res) => {
    try {
        const product = await productService.find(req.params.id);
        return res.status(201).json({
            data: product,
            success: true,
            message: "Successfully fetched a product",
            err: {}
        })
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: "Cannot fetch a product",
            err: error
        })
    }
}

const getAll = async (req, res) => {
    try {
        const products = await productService.getAll();
        return res.status(201).json({
            data: products,
            success: true,
            message: "Successfully fetched the products",
            err: {}
        })
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: "Can't fetch the products",
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