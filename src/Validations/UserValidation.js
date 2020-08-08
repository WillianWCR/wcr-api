const Joi = require('@hapi/joi');

// Show User by Id Validation
module.exports.showById = data => {

    const schema = Joi.object({
        id: Joi.string()
            .required()
    });

    return schema.validate(data);

}

// Show User by E-mail Validation
module.exports.showByEmail = data => {

    const schema = Joi.object({
        email: Joi.string()
            .required()
            .email()
    });

    return schema.validate(data);

}

// Show User by Username Validation
module.exports.showByUsername = data => {

    const schema = Joi.object({
        username: Joi.string()
            .required()
    });

    return schema.validate(data);

}

// Store User Validation
module.exports.store = data => {

    const schema = Joi.object({
        name: Joi.string()
            .min(6)
            .required(),
        email: Joi.string()
            .email()
            .min(6)
            .required(),
        password: Joi.string()
            .min(6)
            .required()
    });

    return schema.validate(data);

}