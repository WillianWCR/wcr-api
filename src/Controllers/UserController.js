const db = require('../../database');
const { createId } = require('../../functions');
const bcrypt = require('bcryptjs');
const UserValidation = require('../Validations/UserValidation');

module.exports = {

    async index(req, res){

    },

    /*
    *   Search for unique user by ID
    *   
    *   @param {string} id - ID of the user
    * 
    *   @returns
    *   {
    *       id: String
    *       name: String
    *       email: String
    *   }
    */
    async showById(req, res){

        // Validate Data
        const { error } = UserValidation.showById(req.params);
        if(error) return res.status(400).json({
            'error': error.details[0].message
        });
        
        // Search for user in DB
        const user = await db.collection('users')
        .doc(req.params.id)
        .get().then(querySnapshot => {
            let data = querySnapshot.data();
            //data.id = querySnapshot.id;
            return data;
        });

        // Check if the user is registered in DB
        if(!user) return res.status(404).json({
            'error': 'User not found in database'
        });

        // Return user data
        res.json({
            //id: user.id,
            name: user.name,
            email: user.email
        });

    },

    /*
    *   Search for unique user by E-mail
    *   
    *   @param {string} email - E-mail of the user
    * 
    *   @returns
    *   {
    *       id: String
    *       name: String
    *       email: String
    *   }
    */
    async showByEmail(req, res){

        // Validate Data
        const { error } = UserValidation.showByEmail(req.params);
        if(error) return res.status(400).json({
            'error': error.details[0].message
        });
        
        // Search for user in DB
        const user = await db.collection('users')
        .where('email', '==', req.params.email)
        .get().then(querySnapshot => {
            let data = querySnapshot.data();
            //data.id = querySnapshot.id;
            return data;
        });

        // Check if the user is registered in DB
        if(!user) return res.status(404).json({
            'error': 'User not found in database'
        });

        // Return user data
        res.json({
            //id: user.id,
            name: user.name,
            email: user.email
        });

    },

    /*
    *   Search for unique user by username
    *   
    *   @param {string} username - Username of the user
    * 
    *   @returns
    *   {
    *       id: String
    *       name: String
    *       email: String
    *   }
    */
    async showByUsername(req, res){

        // Validate Data
        const { error } = UserValidation.showByUsername(req.params);
        if(error) return res.status(400).json({
            'error': error.details[0].message
        });
        
        // Search for user in DB
        const user = await db.collection('users')
        .where('username', '==', req.params.username)
        .get().then(querySnapshot => {
            let data = querySnapshot.data();
            //data.id = querySnapshot.id;
            return data;
        });

        // Check if the user is registered in DB
        if(!user) return res.status(404).json({
            'error': 'User not found in database'
        });

        // Return user data
        res.json({
            //id: user.id,
            name: user.name,
            email: user.email
        });

    },
        

    /*
    *   Insert user into DB
    *   
    *   @body {string} name - Name of the user
    *   @body {string} email - Email of the user
    *   
    */
    async store(req, res){

        // Validate data
        const { error } = UserValidation.store(req.body);
        if(error) return res.status(400).json({
            error: error.details[0].message
        });

        // Check if the user is already registered in DB
        const emailExists = await db.collection('users')
        .where('email', '==', req.body.email)
        .get().then(querySnapshot => {
            if(querySnapshot.empty) return false;
            return true;
        });

        if(emailExists) return res.status(404).json({
            error: 'User already registered'
        });

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        // Register the user in DB
        let userId = await createId('users');
        let user = await db.collection('users').doc(userId)
        .set({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
        });

        // Return created user data
        res.status(200).json({
            status: 200,
            message: "User registered successfully",
            userId: userId
        })

    },

    async update(req, res){

    },

    async delete(req, res){

    },

}