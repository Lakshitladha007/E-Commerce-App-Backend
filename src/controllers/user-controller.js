const UserService = require("../services/user-service");

const userService = new UserService();

const destroy = async (req, res) => {
    try {
        const response = await userService.destroy(req.params.id);
        if (!response) {
            return res.status(500).json({
                data: {},
                success: false,
                message: "User doesn't exist",
                err: {}
            })
        }
        return res.status(201).json({
            data: {},
            success: true,
            message: "Successfully deleted a user",
            err: {}
        })
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: "Cannot delete a user",
            err: error
        })
    }
}

const update = async (req, res) => {
    try {
        const user = await userService.update(req.params.id, req.body);
        return res.status(201).json({
            data: user,
            success: true,
            message: "Successfully updated the user",
            err: {}
        })
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: "Cannot update a user",
            err: error
        })
    }
}

const get = async (req, res) => {
    try {
        const user = await userService.find(req.params.id);
        return res.status(201).json({
            data: user,
            success: true,
            message: "Successfully fetched a user",
            err: {}
        })
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: "Cannot fetch a user",
            err: error
        })
    }
}

const getAll = async (req, res) => {
    try {
        const users = await userService.getAll();
        return res.status(201).json({
            data: users,
            success: true,
            message: "Successfully fetched the users",
            err: {}
        })
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: "Can't fetch the users",
            err: error
        })
    }
}

const signUp = async (req, res) => {
    try {
        const user = await userService.create(req.body);
        return res.status(201).json({
            data: user,
            success: true,
            message: "Successfully created a user",
            err: {}
        })
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: "Cannot create a user",
            err: error
        })
    }
}

const signIn = async (req, res) => {
    try {
        const user = await userService.findByEmail(req.body.email);
        if (!user) {
            return res.status(400).json({
                success: false,
                data: {},
                err: "User doesn't exist",
                message: "Can't SIGNIN"
            });
        }
        const token = await userService.signIn(req.body);
        return res.status(200).json({
            success: true,
            data: token,
            err: {},

        })
    } catch (error) {

    }
}

module.exports = {
    update,
    destroy,
    get,
    getAll,
    signUp,
    signIn
}