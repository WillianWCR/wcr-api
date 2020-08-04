const Joi = require('@hapi/joi');

// Show User Validation
module.exports.show = data => {

    const schema = Joi.object({
        id: Joi.string()
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
            .required()
    });

    return schema.validate(data);

}