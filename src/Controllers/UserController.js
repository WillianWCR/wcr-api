const db = require('../../database');
const User = require('../Models/UserModel');
const { QuerySnapshot } = require('@google-cloud/firestore');
const { urlencoded } = require('body-parser');

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
    async show(req, res){

        // Validate Data
        
        // Search for user in DB
        const user = await db.collection('users')
        .doc(req.params.id)
        .get().then(querySnapshot => {
            let data = querySnapshot.data();
            //data.id = querySnapshot.id;
            return data;
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
    *   @param {string} name - Name of the user
    *   @param {string} email - Email of the user
    *   
    */
    async store(req, res){

        // Validate data

        // Check if the user is already registered in DB

        // Register the user in DB

        // Return created user data

    },

    async update(req, res){

    },

    async delete(req, res){

    },

}