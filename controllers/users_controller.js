const users = require('express').Router()
const db = require("../models") 
const user = require('../models/user')

const { User } = db

//Create new User
users.post('/', async (req, res) => {
    try {
        const newUser = await User.create(req.body)
        res.status(200).json({
            message: "Successfully created new user",
            data: newUser
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

//Update User
users.put('/:id', async (req, res) => {
    try {
        const updatedUsers = await User.update(req.body, {
            where: {
                user_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedUsers} user(s)`
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

//Delete User
users.delete('/:id', async (req, res) => {
    try {
        const deletedUsers = await User.destroy({
            where: {
                user_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedUsers} user(s)`
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

//Get all Users
users.get('/', async (req, res) => {
    try {
        const foundUsers = await User.findAll()
        res.status(200).json(foundUsers)
    } catch (error) {
        res.status(500).json(error)
    }
})

//Get single User
users.get('/:id', async (req,res) => {
    try {
        const foundUser = await User.findOne({
            where: { user_id: req.params.id }
        })
        res.status(200).json(foundUser)
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = users