import Joi from "joi";

export const validateUser = (user) =>{

    const userSchema = Joi.object({
        name: Joi.string().min(6).max(50),
        mail: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
        password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
    })

    const {error} = userSchema.validate(user)
    const result = error ? true : false
    return result

}