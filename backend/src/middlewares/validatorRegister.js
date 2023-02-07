const Joi = require("joi");

const userInscriptionSchema = Joi.object({
  email: Joi.string().email().max(200).required(),
  firstname: Joi.string().max(100).required(),
  pseudo: Joi.string().max(100).required(),
  lastname: Joi.string().max(100).required(),
  password: Joi.string()
    .min(8)
    .max(100)
    .pattern(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    ),
});

const validateRegister = (req, res, next) => {
  const { pseudo, firstname, lastname, email, password } = req.body;

  const { error } = userInscriptionSchema.validate(
    { firstname, pseudo, lastname, email, password },
    { abortEarly: false }
  );

  if (error) {
    res.status(422).json({ validationErrors: error.details });
  } else {
    next();
  }
};

module.exports = {
  validateRegister,
};
