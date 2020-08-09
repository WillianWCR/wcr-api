const db = require('../../database');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const AuthValidation = require('../Validations/AuthValidation');
const User = require('../Models/UserModel');

module.exports = {

    async login(req, res){

        // Validate Date
        const { error } = AuthValidation.login(req.body);
        if(error) return res.status(400).json({
            error: error.details[0].message
        });

        // Check if the email exists
        let user = new User();
        user = await user.findOne({
            email: req.body.email
        });
        
        if(!user) return res.status(400).json({
            error: "User doesn't exists"
        });

        // Check if the password is correct
        const validPass = await bcrypt.compare(req.body.password, user.password);
        if(!validPass) return res.status(400).json({
            error: "User or password is invalid"
        });

        // Create and return a token
        const token = jwt.sign({_id: user.id}, process.env.TOKEN_SECRET);
        res.status(200)
        .header('__token', token)
        .json({
            status: 200,
            message: "Login successfully",
            data: {
                userId: user.id,
                token: token
            }
        });

    }

}